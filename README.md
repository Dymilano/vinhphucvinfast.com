# 🚗 VinFast Vĩnh Yên - Full Stack Website

Website  hoàn chỉnh của [VinFast Vĩnh Yên] với 100% chức năng frontend và backend.

## ✨ Tính năng chính

### 🎨 Frontend
- **Giao diện hiện đại**: Thiết kế responsive với CSS Grid và Flexbox
- **Menu điều hướng**: Dropdown menu với các dòng xe VinFast
- **Hiển thị xe**: Cards hiển thị thông tin các mẫu xe với giá cả
- **Form báo giá**: Form đăng ký báo giá và lái thử xe
- **Máy tính giá xe**: Tính toán chi phí lăn bánh và trả góp
- **Responsive**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Animations**: Hiệu ứng hover, scroll và loading
- **PWA**: Progressive Web App với Service Worker

### 🔧 Backend
- **Node.js Server**: Express.js với middleware bảo mật
- **Database**: SQLite với các bảng quản lý dữ liệu
- **API RESTful**: Đầy đủ các endpoint cho tất cả chức năng
- **Email Service**: Gửi email xác nhận tự động
- **File Upload**: Hỗ trợ upload hình ảnh
- **Validation**: Xác thực dữ liệu đầu vào
- **Rate Limiting**: Bảo vệ API khỏi spam
- **Session Management**: Quản lý phiên đăng nhập

### 📊 Database Schema
- **Users**: Quản lý người dùng và phân quyền
- **Car Inquiries**: Lưu trữ yêu cầu báo giá
- **Test Drives**: Đăng ký lái thử xe
- **News**: Tin tức và sự kiện

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm >= 8.0.0
- Windows/macOS/Linux

### Bước 1: Clone dự án
```bash
git clone <repository-url>
cd vinfast-fullstack
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu hình môi trường
Tạo file `.env` trong thư mục gốc:
```env
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

### Bước 4: Chạy ứng dụng
```bash
# Chế độ development
npm run dev

# Chế độ production
npm start

# Build CSS và JS
npm run build
```

### Bước 5: Truy cập website
- **Frontend**: http://localhost:3000
- **API**: http://localhost:3000/api
- **Database**: SQLite file `database.sqlite`

## 📁 Cấu trúc dự án

```
vinfast-fullstack/
├── server.js                 # Server Node.js chính
├── package.json             # Dependencies và scripts
├── .env                     # Biến môi trường
├── database.sqlite          # Database SQLite
├── public/                  # Frontend files
│   ├── index.html          # Trang chính
│   ├── css/
│   │   └── style.css       # Stylesheet chính
│   ├── js/
│   │   └── app.js          # JavaScript chính
│   └── images/             # Hình ảnh
├── uploads/                 # Thư mục upload files
└── README.md               # Hướng dẫn này
```

## 🔌 API Endpoints

### Public APIs
- `GET /api/cars` - Lấy danh sách xe
- `GET /api/news` - Lấy tin tức
- `POST /api/inquiry` - Gửi yêu cầu báo giá
- `POST /api/test-drive` - Đăng ký lái thử
- `POST /api/calculate-price` - Tính toán giá xe
- `POST /api/upload` - Upload hình ảnh

### Admin APIs (Protected)
- `GET /api/admin/dashboard` - Thống kê tổng quan
- `GET /api/admin/inquiries` - Danh sách yêu cầu báo giá
- `GET /api/admin/test-drives` - Danh sách đăng ký lái thử
- `PUT /api/admin/inquiries/:id` - Cập nhật trạng thái yêu cầu
- `PUT /api/admin/test-drives/:id` - Cập nhật trạng thái lái thử

## 🎨 Các dòng xe được hiển thị

| Mẫu xe | Giá (VNĐ) | Loại | Đặc điểm |
|--------|------------|------|----------|
| **VF 3** | 299.000.000 | SUV nhỏ | Pin 42.2 kWh, 300km |
| **VF 5 Plus** | 529.000.000 | SUV cỡ trung | Pin 57.8 kWh, 400km |
| **VF 6** | 694.000.000 | SUV cỡ trung | Pin 74.0 kWh, 500km |
| **VF 7** | 799.000.000 | SUV cỡ lớn | Pin 87.7 kWh, 550km |
| **VF 8 Lux** | 1.069.000.000 | SUV cao cấp | Pin 92.0 kWh, 600km |
| **VF 9** | 1.499.000.000 | SUV cao cấp | Pin 106.0 kWh, 700km |

## 🛠️ Công nghệ sử dụng

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations, Media Queries
- **JavaScript ES6+**: Classes, Async/Await, Fetch API
- **Font Awesome**: Icons
- **PWA**: Service Worker, Manifest

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **SQLite3**: Database
- **Multer**: File upload
- **Nodemailer**: Email service
- **Bcryptjs**: Password hashing
- **Express-session**: Session management
- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing

### Development Tools
- **Nodemon**: Auto-restart server
- **Sass**: CSS preprocessor
- **Webpack**: JavaScript bundler

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

### Features
- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes
- Progressive enhancement

## 🔒 Bảo mật

- **Helmet**: Security headers
- **Rate Limiting**: API protection
- **Input Validation**: Data sanitization
- **SQL Injection Protection**: Parameterized queries
- **XSS Protection**: Content Security Policy
- **CSRF Protection**: Session-based tokens

## 📧 Email Service

### Cấu hình Gmail
1. Bật 2FA cho tài khoản Gmail
2. Tạo App Password
3. Cập nhật `.env` file

### Templates
- Xác nhận yêu cầu báo giá
- Xác nhận đăng ký lái thử
- Thông báo khuyến mãi

## 🚀 Deployment

### Production
```bash
# Build assets
npm run build

# Set environment
NODE_ENV=production

# Start server
npm start
```

### Docker (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

### Optimization
- **Compression**: Gzip compression
- **Caching**: Static file caching
- **Minification**: CSS/JS minification
- **Image Optimization**: WebP support
- **Lazy Loading**: Intersection Observer

### Monitoring
- **Morgan**: HTTP request logging
- **Performance API**: Page load metrics
- **Error Tracking**: Global error handler

## 🧪 Testing

### Manual Testing
- Form validation
- API endpoints
- Responsive design
- Cross-browser compatibility

### Automated Testing (Future)
- Unit tests với Jest
- Integration tests
- E2E tests với Playwright

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa file `public/css/style.css`:
```css
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #3b82f6;
    --accent-color: #fbbf24;
}
```

### Thêm xe mới
Cập nhật `server.js` trong `getDefaultCarModels()`:
```javascript
{
    id: 7,
    name: 'VinFast VF 10',
    price: 2000000000,
    category: 'SUV cao cấp',
    description: 'Mô tả xe mới',
    features: ['Pin 120 kWh', 'Quãng đường 800km', 'Công suất 500 kW']
}
```

### Thay đổi API endpoints
Chỉnh sửa `server.js` và `public/js/app.js`

## 📞 Thông tin liên hệ

- **Hotline**: 0968643256
- **Email**: cskh@vinfastvinhyen.vn
- **Địa chỉ**: Ngã 4 Lý Thái Tổ - Nguyễn Tất thành, Định Trung, Vĩnh Yên, Vĩnh Phúc

## 🐛 Troubleshooting

### Lỗi thường gặp

#### 1. Port đã được sử dụng
```bash
# Thay đổi port trong .env
PORT=3001
```

#### 2. Database connection error
```bash
# Xóa file database.sqlite và restart server
rm database.sqlite
npm run dev
```

#### 3. Email không gửi được
- Kiểm tra cấu hình Gmail trong `.env`
- Bật "Less secure app access" hoặc sử dụng App Password

#### 4. CORS error
- Kiểm tra cấu hình CORS trong `server.js`
- Đảm bảo frontend và backend cùng domain

## 📄 License

Dự án này được tạo ra chỉ để học tập và tham khảo. Vui lòng tôn trọng bản quyền của VinFast và website gốc.

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📝 Changelog

### Version 1.0.0 (2025-01-XX)
- ✅ Website hoàn chỉnh với frontend và backend
- ✅ Tất cả các chức năng chính
- ✅ Responsive design
- ✅ API endpoints đầy đủ
- ✅ Database SQLite
- ✅ Email service
- ✅ Security features

---
#
Nếu có câu hỏi hoặc góp ý, vui lòng liên hệ qua:
- Email: nguyenduymilano@gmail.com
- GitHub Issues: https://github.com/Dymilano
- Liên hệ : 0349729139
