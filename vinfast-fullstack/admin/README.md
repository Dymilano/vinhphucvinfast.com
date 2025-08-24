# 🚗 VinFast Admin Panel

Trang quản trị website VinFast Phú Thọ với đầy đủ tính năng quản lý nội dung.

## ✨ Tính năng chính

### 🏠 Dashboard
- Thống kê tổng quan: số xe, số ảnh, bài viết, lượt xem
- Thao tác nhanh: thêm xe, upload ảnh, thêm tin tức

### 🚙 Quản lý xe
- **Xem danh sách xe**: Hiển thị tất cả xe với thông tin chi tiết
- **Thêm xe mới**: Form nhập thông tin xe (tên, giá, mô tả, thông số kỹ thuật)
- **Sửa xe**: Cập nhật thông tin xe (sẽ được phát triển)
- **Xóa xe**: Xóa xe khỏi hệ thống

### 🖼️ Quản lý ảnh
- **Xem ảnh**: Hiển thị ảnh theo grid với thông tin chi tiết
- **Upload ảnh**: Thêm ảnh mới với phân loại theo thư mục xe
- **Xem ảnh**: Modal xem ảnh full size
- **Xóa ảnh**: Xóa ảnh khỏi hệ thống

### 📰 Quản lý tin tức
- **Xem tin tức**: Danh sách bài viết với trạng thái xuất bản
- **Thêm tin tức**: Form tạo bài viết mới (tiêu đề, nội dung, danh mục)
- **Sửa tin tức**: Cập nhật bài viết (sẽ được phát triển)
- **Xuất bản**: Chuyển trạng thái từ nháp sang xuất bản
- **Xóa tin tức**: Xóa bài viết khỏi hệ thống

### 📝 Nội dung website
- **Thông tin liên hệ**: Cập nhật hotline, email, giờ làm việc
- **Địa chỉ**: Cập nhật địa chỉ các cơ sở

### ⚙️ Cài đặt hệ thống
- **Tên website**: Cập nhật tên website
- **Mô tả website**: Cập nhật meta description cho SEO

## 🚀 Cách sử dụng

### 1. Truy cập trang admin
```
http://localhost:3000/admin/
```

### 2. Điều hướng
- Sử dụng sidebar bên trái để chuyển đổi giữa các chức năng
- Mỗi section có giao diện riêng biệt và dễ sử dụng

### 3. Thêm xe mới
1. Vào **Quản lý xe**
2. Click **Thêm xe mới**
3. Điền thông tin xe
4. Click **Lưu xe**

### 4. Upload ảnh
1. Vào **Quản lý ảnh**
2. Click **Upload ảnh**
3. Chọn file ảnh và thư mục
4. Click **Upload ảnh**

### 5. Thêm tin tức
1. Vào **Quản lý tin tức**
2. Click **Thêm tin tức**
3. Điền nội dung bài viết
4. Click **Lưu tin tức**

## 📁 Cấu trúc thư mục

```
admin/
├── index.html          # Trang admin chính
├── css/
│   └── admin.css      # CSS cho giao diện admin
├── js/
│   ├── admin.js       # JavaScript chính
│   ├── car-manager.js # Quản lý xe
│   ├── image-manager.js # Quản lý ảnh
│   └── content-manager.js # Quản lý nội dung
└── README.md          # Hướng dẫn sử dụng
```

## 🔧 Công nghệ sử dụng

- **HTML5**: Cấu trúc trang
- **CSS3**: Giao diện responsive, modern
- **JavaScript ES6+**: Logic xử lý
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **LocalStorage**: Lưu trữ dữ liệu tạm thời

## 📱 Responsive Design

- **Desktop**: Giao diện đầy đủ với sidebar cố định
- **Tablet**: Sidebar có thể ẩn/hiện
- **Mobile**: Giao diện tối ưu cho màn hình nhỏ

## 🔮 Phát triển tương lai

- [ ] Lưu dữ liệu vào JSON files thay vì localStorage
- [ ] Upload ảnh thực tế lên server
- [ ] Hệ thống đăng nhập/đăng xuất
- [ ] Quản lý người dùng
- [ ] Backup và restore dữ liệu
- [ ] Export dữ liệu ra Excel/CSV
- [ ] Thống kê chi tiết và báo cáo

## 🐛 Xử lý lỗi

- **Ảnh không hiển thị**: Kiểm tra đường dẫn ảnh trong thư mục `images/`
- **Form không submit**: Kiểm tra console để xem lỗi JavaScript
- **Dữ liệu mất**: Dữ liệu được lưu trong localStorage, xóa cache có thể làm mất dữ liệu

## 📞 Hỗ trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra console browser (F12)
2. Kiểm tra đường dẫn file
3. Đảm bảo server đang chạy
4. Liên hệ admin để được hỗ trợ

---

**VinFast Phú Thọ Admin Panel** - Quản lý website chuyên nghiệp! 🚗✨ 