const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static('public'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Session configuration
app.use(session({
    secret: 'vinfast-secret-key-2025',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // Set to true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Database initialization
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to SQLite database');
        initDatabase();
    }
});

// Initialize database tables
function initDatabase() {
    // Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        full_name TEXT,
        phone TEXT,
        role TEXT DEFAULT 'user',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Car inquiries table
    db.run(`CREATE TABLE IF NOT EXISTS car_inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT NOT NULL,
        customer_email TEXT NOT NULL,
        customer_phone TEXT NOT NULL,
        car_model TEXT NOT NULL,
        payment_type TEXT NOT NULL,
        message TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Test drive bookings table
    db.run(`CREATE TABLE IF NOT EXISTS test_drives (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT NOT NULL,
        customer_email TEXT NOT NULL,
        customer_phone TEXT NOT NULL,
        preferred_date TEXT NOT NULL,
        preferred_time TEXT NOT NULL,
        car_model TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // News table
    db.run(`CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        image_url TEXT,
        author TEXT,
        published_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Insert sample data
    insertSampleData();
}

// Insert sample data
function insertSampleData() {
    // Sample news
    const sampleNews = [
        {
            title: 'VinFast VF 9 - SUV điện cao cấp mới nhất',
            content: 'VinFast VF 9 là mẫu SUV điện cao cấp mới nhất với công nghệ tiên tiến và thiết kế sang trọng.',
            author: 'VinFast Vĩnh Yên'
        },
        {
            title: 'Khuyến mãi đặc biệt tháng 12/2025',
            content: 'Giảm giá lên đến 50 triệu đồng cho các mẫu xe VinFast trong tháng 12/2025.',
            author: 'VinFast Vĩnh Yên'
        }
    ];

    sampleNews.forEach(news => {
        db.run(`INSERT OR IGNORE INTO news (title, content, author) VALUES (?, ?, ?)`,
            [news.title, news.content, news.author]);
    });
}

// File upload configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'public/uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Routes

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes

// Get all car models
app.get('/api/cars', (req, res) => {
    const cars = [
        {
            id: 1,
            name: 'VinFast VF 3',
            price: 299000000,
            category: 'SUV nhỏ',
            description: 'SUV điện nhỏ gọn, phù hợp cho gia đình',
            features: ['Pin 42.2 kWh', 'Quãng đường 300km', 'Công suất 95 kW']
        },
        {
            id: 2,
            name: 'VinFast VF 5 Plus',
            price: 529000000,
            category: 'SUV cỡ trung',
            description: 'SUV điện cỡ trung với không gian rộng rãi',
            features: ['Pin 57.8 kWh', 'Quãng đường 400km', 'Công suất 150 kW']
        },
        {
            id: 3,
            name: 'VinFast VF 6',
            price: 694000000,
            category: 'SUV cỡ trung',
            description: 'SUV điện cao cấp với công nghệ tiên tiến',
            features: ['Pin 74.0 kWh', 'Quãng đường 500km', 'Công suất 180 kW']
        },
        {
            id: 4,
            name: 'VinFast VF 7',
            price: 799000000,
            category: 'SUV cỡ lớn',
            description: 'SUV điện 7 chỗ với thiết kế sang trọng',
            features: ['Pin 87.7 kWh', 'Quãng đường 550km', 'Công suất 200 kW']
        },
        {
            id: 5,
            name: 'VinFast VF 8 Lux',
            price: 1069000000,
            category: 'SUV cao cấp',
            description: 'SUV điện cao cấp với công nghệ hàng đầu',
            features: ['Pin 92.0 kWh', 'Quãng đường 600km', 'Công suất 300 kW']
        },
        {
            id: 6,
            name: 'VinFast VF 9',
            price: 1499000000,
            category: 'SUV cao cấp',
            description: 'SUV điện cao cấp nhất với không gian xa xỉ',
            features: ['Pin 106.0 kWh', 'Quãng đường 700km', 'Công suất 400 kW']
        }
    ];
    
    res.json({ success: true, data: cars });
});

// Get news
app.get('/api/news', (req, res) => {
    db.all('SELECT * FROM news ORDER BY published_at DESC LIMIT 10', (err, rows) => {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, data: rows });
        }
    });
});

// Submit car inquiry
app.post('/api/inquiry', [
    body('customer_name').trim().isLength({ min: 2 }).escape(),
    body('customer_email').isEmail().normalizeEmail(),
    body('customer_phone').trim().isLength({ min: 10 }),
    body('car_model').trim().notEmpty(),
    body('payment_type').trim().notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { customer_name, customer_email, customer_phone, car_model, payment_type, message } = req.body;

    db.run(`INSERT INTO car_inquiries (customer_name, customer_email, customer_phone, car_model, payment_type, message) 
            VALUES (?, ?, ?, ?, ?, ?)`,
        [customer_name, customer_email, customer_phone, car_model, payment_type, message],
        function(err) {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            } else {
                // Send email notification
                sendInquiryEmail(customer_name, customer_email, car_model, payment_type);
                res.json({ success: true, message: 'Yêu cầu báo giá đã được gửi thành công!' });
            }
        }
    );
});

// Book test drive
app.post('/api/test-drive', [
    body('customer_name').trim().isLength({ min: 2 }).escape(),
    body('customer_email').isEmail().normalizeEmail(),
    body('customer_phone').trim().isLength({ min: 10 }),
    body('preferred_date').notEmpty(),
    body('preferred_time').notEmpty(),
    body('car_model').optional().trim()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { customer_name, customer_email, customer_phone, preferred_date, preferred_time, car_model } = req.body;

    db.run(`INSERT INTO test_drives (customer_name, customer_email, customer_phone, preferred_date, preferred_time, car_model) 
            VALUES (?, ?, ?, ?, ?, ?)`,
        [customer_name, customer_email, customer_phone, preferred_date, preferred_time, car_model],
        function(err) {
            if (err) {
                res.status(500).json({ success: false, error: err.message });
            } else {
                // Send confirmation email
                sendTestDriveEmail(customer_name, customer_email, preferred_date, preferred_time, car_model);
                res.json({ success: true, message: 'Đăng ký lái thử đã được gửi thành công!' });
            }
        }
    );
});

// Calculate car price
app.post('/api/calculate-price', [
    body('car_model').trim().notEmpty(),
    body('payment_type').trim().notEmpty(),
    body('down_payment').optional().isNumeric(),
    body('loan_term').optional().isNumeric()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { car_model, payment_type, down_payment = 0, loan_term = 60 } = req.body;

    // Get car price from database or use default
    const carPrices = {
        'VF 3': 299000000,
        'VF 5 Plus': 529000000,
        'VF 6': 694000000,
        'VF 7': 799000000,
        'VF 8 Lux': 1069000000,
        'VF 9': 1499000000
    };

    const carPrice = carPrices[car_model] || 500000000;
    const downPayment = parseInt(down_payment) || 0;
    const loanAmount = carPrice - downPayment;
    const monthlyRate = 0.008; // 0.8% monthly interest rate
    const numberOfPayments = parseInt(loan_term);

    let monthlyPayment = 0;
    if (payment_type === 'installment' && loanAmount > 0) {
        monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    res.json({
        success: true,
        data: {
            carPrice: carPrice,
            downPayment: downPayment,
            loanAmount: loanAmount,
            monthlyPayment: Math.round(monthlyPayment),
            totalPayment: Math.round(totalPayment),
            totalInterest: Math.round(totalInterest),
            numberOfPayments: numberOfPayments
        }
    });
});

// Upload image
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    res.json({
        success: true,
        data: {
            filename: req.file.filename,
            path: `/uploads/${req.file.filename}`
        }
    });
});

// Admin routes (protected)
app.get('/api/admin/dashboard', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'admin') {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    // Get dashboard statistics
    db.get('SELECT COUNT(*) as total_inquiries FROM car_inquiries', (err, inquiryCount) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }

        db.get('SELECT COUNT(*) as total_test_drives FROM test_drives', (err, testDriveCount) => {
            if (err) {
                return res.status(500).json({ success: false, error: err.message });
            }

            res.json({
                success: true,
                data: {
                    totalInquiries: inquiryCount.total_inquiries,
                    totalTestDrives: testDriveCount.total_test_drives
                }
            });
        });
    });
});

// Get all inquiries (admin)
app.get('/api/admin/inquiries', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'admin') {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    db.all('SELECT * FROM car_inquiries ORDER BY created_at DESC', (err, rows) => {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, data: rows });
        }
    });
});

// Get all test drives (admin)
app.get('/api/admin/test-drives', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'admin') {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    db.all('SELECT * FROM test_drives ORDER BY created_at DESC', (err, rows) => {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, data: rows });
        }
    });
});

// Update inquiry status (admin)
app.put('/api/admin/inquiries/:id', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'admin') {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const { id } = req.params;
    const { status } = req.body;

    db.run('UPDATE car_inquiries SET status = ? WHERE id = ?', [status, id], function(err) {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, message: 'Trạng thái đã được cập nhật' });
        }
    });
});

// Update test drive status (admin)
app.put('/api/admin/test-drives/:id', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'admin') {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const { id } = req.params;
    const { status } = req.body;

    db.run('UPDATE test_drives SET status = ? WHERE id = ?', [status, id], function(err) {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, message: 'Trạng thái đã được cập nhật' });
        }
    });
});

// Email functions
function sendInquiryEmail(customerName, customerEmail, carModel, paymentType) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@vinfastvinhyen.vn',
        to: customerEmail,
        subject: 'Xác nhận yêu cầu báo giá VinFast',
        html: `
            <h2>Xin chào ${customerName}!</h2>
            <p>Cảm ơn bạn đã quan tâm đến xe VinFast ${carModel}.</p>
            <p>Chúng tôi đã nhận được yêu cầu báo giá của bạn và sẽ liên hệ trong thời gian sớm nhất.</p>
            <p><strong>Thông tin yêu cầu:</strong></p>
            <ul>
                <li>Mẫu xe: ${carModel}</li>
                <li>Hình thức thanh toán: ${paymentType}</li>
            </ul>
            <p>Mọi thắc mắc vui lòng liên hệ: 0968643256</p>
            <p>Trân trọng,<br>Đội ngũ VinFast Vĩnh Yên</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email error:', error);
        } else {
            console.log('Inquiry email sent:', info.messageId);
        }
    });
}

function sendTestDriveEmail(customerName, customerEmail, preferredDate, preferredTime, carModel) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@vinfastvinhyen.vn',
        to: customerEmail,
        subject: 'Xác nhận đăng ký lái thử VinFast',
        html: `
            <h2>Xin chào ${customerName}!</h2>
            <p>Cảm ơn bạn đã đăng ký lái thử xe VinFast.</p>
            <p><strong>Thông tin lịch hẹn:</strong></p>
            <ul>
                <li>Ngày: ${preferredDate}</li>
                <li>Giờ: ${preferredTime}</li>
                ${carModel ? `<li>Mẫu xe: ${carModel}</li>` : ''}
            </ul>
            <p>Chúng tôi sẽ liên hệ để xác nhận lịch hẹn cụ thể.</p>
            <p>Mọi thắc mắc vui lòng liên hệ: 0968643256</p>
            <p>Trân trọng,<br>Đội ngũ VinFast Vĩnh Yên</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email error:', error);
        } else {
            console.log('Test drive email sent:', info.messageId);
        }
    });
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚗 VinFast Full Stack Server running on port ${PORT}`);
    console.log(`📱 Frontend: http://localhost:${PORT}`);
    console.log(`🔧 API: http://localhost:${PORT}/api`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    db.close((err) => {
        if (err) {
            console.error('Database close error:', err);
        } else {
            console.log('Database connection closed.');
        }
        process.exit(0);
    });
}); 