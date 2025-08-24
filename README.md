# 🚗 VinFast Vĩnh Yên #

Website hoàn chỉnh của [VinFast Vĩnh Yên] 

## ✨ Tính năng chính

### 🎨 Frontend
- **Giao diện hiện đại**: Thiết kế responsive với CSS Grid và Flexbox
- **Menu điều hướng**: Dropdown menu với các dòng xe VinFast
- **Hiển thị xe**: Cards hiển thị thông tin các mẫu xe với giá cả
- **Form báo giá**: Form đăng ký báo giá và lái thử xe
- **Máy tính giá xe**: Tính toán chi phí lăn bánh và trả góp
- **Hệ thống tin tức**: Trang tin tức với danh sách và chi tiết bài viết
- **Responsive**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Animations**: Hiệu ứng hover, scroll và loading
- **PWA**: Progressive Web App với Service Worker


### 📊 Database Schema
- **Users**: Quản lý người dùng và phân quyền
- **Car Inquiries**: Lưu trữ yêu cầu báo giá
- **Test Drives**: Đăng ký lái thử xe
- **News**: Tin tức và sự kiện

### 🎯 Hệ thống tin tức
- **Trang tin tức chính**: Hiển thị danh sách tin tức với phân trang
- **Trang chi tiết tin tức**: Hiển thị nội dung đầy đủ với hình ảnh
- **Tin tức nổi bật**: Hiển thị tin tức quan trọng ở đầu trang
- **Tin tức liên quan**: Gợi ý tin tức cùng chủ đề
- **Chia sẻ mạng xã hội**: Facebook, Twitter, Zala
- **Thống kê lượt xem**: Theo dõi số lượt đọc bài viết

### 🔐 Admin Panel
- **Quản lý tin tức**: Thêm, sửa, xóa, xuất bản tin tức
- **Quản lý xe**: Cập nhật thông tin và giá cả xe
- **Quản lý nội dung**: Upload và quản lý hình ảnh
- **Dashboard**: Thống kê tổng quan hệ thống
- **Quản lý yêu cầu**: Xử lý báo giá và lái thử xe

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
│   ├── tin-tuc.html        # Trang tin tức
│   ├── tin-tuc-chi-tiet.html # Trang chi tiết tin tức
│   ├── css/
│   │   ├── style.css       # Stylesheet chính
│   │   ├── news.css        # Styles cho trang tin tức
│   │   ├── car-detail.css  # Styles cho trang chi tiết xe
│   │   ├── lien-he.css     # Styles cho trang liên hệ
│   │   ├── pin-tram-sac.css # Styles cho trang pin trạm sạc
│   │   └── price-list.css  # Styles cho trang bảng giá
│   ├── js/
│   │   ├── app.js          # JavaScript chính
│   │   ├── news.js         # Quản lý tin tức
│   │   ├── news-detail.js  # Chi tiết tin tức
│   │   ├── car-detail.js   # Chi tiết xe
│   │   └── [other-js-files] # Các file JS khác
│   └── images/             # Hình ảnh
│       ├── vf3/            # Hình ảnh VF 3
│       ├── vf5-plus/       # Hình ảnh VF 5 Plus
│       ├── vf6/            # Hình ảnh VF 6
│       ├── vf7/            # Hình ảnh VF 7
│       ├── vf8-lux/        # Hình ảnh VF 8 Lux
│       ├── vf9/            # Hình ảnh VF 9
│       ├── ec-van/         # Hình ảnh EC Van
│       ├── herio-green/     # Hình ảnh Herio Green
│       ├── limo-green/     # Hình ảnh Limo Green
│       ├── minio-green/    # Hình ảnh Minio Green
│       └── nerio-green/    # Hình ảnh Nerio Green
├── admin/                   # Admin Panel
│   ├── index.html          # Trang admin chính
│   ├── css/
│   │   └── admin.css       # Styles cho admin panel
│   ├── js/
│   │   ├── admin.js        # JavaScript chính cho admin
│   │   ├── content-manager.js # Quản lý nội dung và tin tức
│   │   ├── car-manager.js  # Quản lý xe
│   │   └── image-manager.js # Quản lý hình ảnh
│   └── README.md           # Hướng dẫn admin panel
└── README.md               # Hướng dẫn này
```

## 🔌 API Endpoints

### Public APIs
- `GET /api/cars` - Lấy danh sách xe
- `GET /api/news` - Lấy tin tức
- `GET /api/news/:id` - Lấy chi tiết tin tức
- `POST /api/inquiry` - Gửi yêu cầu báo giá
- `POST /api/test-drive` - Đăng ký lái thử
- `POST /api/calculate-price` - Tính toán giá xe
- `POST /api/upload` - Upload hình ảnh

### Admin APIs (Protected)
- `GET /api/admin/dashboard` - Thống kê tổng quan
- `GET /api/admin/news` - Danh sách tin tức
- `POST /api/admin/news` - Tạo tin tức mới
- `PUT /api/admin/news/:id` - Cập nhật tin tức
- `DELETE /api/admin/news/:id` - Xóa tin tức
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
- **JavaScript ES6+**: Classes, Async/Await, Fetch API, LocalStorage
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

### Data Storage
- **LocalStorage**: Lưu trữ tin tức và cài đặt (client-side)
- **SQLite**: Database chính cho backend
- **File System**: Lưu trữ hình ảnh và tài liệu

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
- Responsive images và typography

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
- **Image Optimization**: WebP support, responsive images
- **Lazy Loading**: Intersection Observer
- **LocalStorage**: Client-side caching cho tin tức

### Monitoring
- **Morgan**: HTTP request logging
- **Performance API**: Page load metrics
- **Error Tracking**: Global error handler
- **View Counter**: Thống kê lượt xem tin tức

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

### Thêm tin tức mới
Sử dụng Admin Panel hoặc cập nhật trực tiếp trong `localStorage`:
```javascript
const news = {
    id: "new-article-id",
    title: "Tiêu đề tin tức mới",
    summary: "Tóm tắt tin tức",
    content: "Nội dung chi tiết...",
    image: "images/news/new-article.jpg",
    category: "Sự kiện",
    status: "published",
    views: 0,
    createdAt: new Date().toISOString()
};
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

#### 5. Tin tức không hiển thị
- Kiểm tra dữ liệu trong localStorage
- Đảm bảo file `news.js` và `news-detail.js` được load đúng
- Kiểm tra console để xem lỗi JavaScript

#### 6. Admin panel không hoạt động
- Kiểm tra file `content-manager.js` và `admin.js`
- Đảm bảo tất cả dependencies được load
- Kiểm tra quyền truy cập admin

## 📄 License

Dự án này được tạo ra chỉ để học tập và tham khảo. Vui lòng tôn trọng bản quyền của VinFast và website gốc.

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📝 Changelog

### Version 1.1.0 (2025-01-XX)
- ✅ Hệ thống tin tức hoàn chỉnh
- ✅ Trang chi tiết tin tức với responsive design
- ✅ Admin panel quản lý tin tức (CRUD)
- ✅ Chia sẻ mạng xã hội
- ✅ Thống kê lượt xem tin tức
- ✅ Tin tức liên quan và nổi bật
- ✅ Quản lý trạng thái tin tức (draft/published)

### Version 1.0.0 (2025-01-XX)
- ✅ Website hoàn chỉnh với frontend và backend
- ✅ Tất cả các chức năng chính
- ✅ Responsive design
- ✅ API endpoints đầy đủ
- ✅ Database SQLite
- ✅ Email service
- ✅ Security features

---

**Tác giả**: AI Assistant  
**Ngày tạo**: 2025  
**Phiên bản**: 1.1.0  
**Trạng thái**: Hoàn thành ✅ 

---
#
Nếu có câu hỏi hoặc góp ý, vui lòng liên hệ qua:
- Email: nguyenduymilano@gmail.com
- GitHub Issues: https://github.com/Dymilano
- Liên hệ : 0349729139
