# 🚗 L-CORPARATION - Website Giới Thiệu Xe Điện

> Website giới thiệu sản phẩm xe điện hiện đại với đầy đủ tính năng tương tác, được xây dựng bằng HTML, CSS, và JavaScript thuần kết hợp Bootstrap 5.

---

## 📋 MỤC LỤC

1. [Giới thiệu tổng quan](#giới-thiệu-tổng-quan)
2. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
3. [Tính năng chính](#tính-năng-chính)
4. [Cấu trúc dự án](#cấu-trúc-dự-án)
5. [Hướng dẫn cài đặt & Chạy dự án](#hướng-dẫn-cài-đặt--chạy-dự-án)
6. [Chi tiết các Module](#chi-tiết-các-module)
7. [Dữ liệu sản phẩm](#dữ-liệu-sản-phẩm)
8. [Hệ thống đa ngôn ngữ (i18n)](#hệ-thống-đa-ngôn-ngữ-i18n)
9. [Thiết kế Responsive](#thiết-kế-responsive)
10. [Hiệu ứng & Animation](#hiệu-ứng--animation)
11. [Hướng dẫn Git](#hướng-dẫn-git)
12. [Đóng góp](#đóng-góp)
13. [Giấy phép](#giấy-phép)

---

## 🌟 Giới thiệu tổng quan

**L-Corparation** là trang web giới thiệu sản phẩm xe điện (ô tô và xe máy điện) của công ty L-Corparation. Website được thiết kế với giao diện hiện đại, thân thiện với người dùng và tối ưu cho cả thiết bị di động và máy tính để bàn.

Dự án tập trung vào việc cung cấp thông tin chi tiết về các dòng xe điện, cho phép người dùng dễ dàng so sánh các thông số kỹ thuật, xem hình ảnh và đặt cọc trực tiếp qua website.

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mô tả |
|-----------|-------|
| **HTML5** | Cấu trúc trang web chuẩn semantic |
| **CSS3** | Styling tùy chỉnh với CSS Variables, Flexbox, Grid |
| **JavaScript (ES6+)** | Logic xử lý tương tác, quản lý dữ liệu |
| **Bootstrap 5.3** | Framework CSS cho responsive design và components |
| **Font Awesome 6** | Biểu tượng vector cho giao diện |
| **Google Fonts** | Typography đa dạng (Roboto, Playfair Display...) |

---

## ✨ Tính năng chính

### 🚙 1. Giới thiệu xe điện (Carousel Nổi bật)
- **Carousel tương tác** hiển thị thông tin chi tiết các dòng xe
- Hiển thị: Tên xe, giá, quãng đường, số chỗ, công suất, tăng tốc
- Nút điều hướng **Previous/Next** với hiệu ứng chuyển động mượt mà
- **Bullet navigation** cho phép nhảy trực tiếp đến xe mong muốn
- **Nhãn "NEW"** cho các xe mới ra mắt
- **Hiệu ứng giá cũ & giảm giá** khi có khuyến mãi
- Nút "Chi tiết" mở modal thông số kỹ thuật

### 🏍️ 2. Xe máy điện (E-Scooter Carousel)
- Tương tự carousel xe ô tô nhưng tối ưu cho thông số xe máy
- Hiển thị: Tốc độ tối đa, thời gian sạc, tiêu chuẩn chống nước, cốp xe
- Hỗ trợ nhiều mẫu xe: Evo, Feliz, Verox, Viper, VF DrgnFly...

### 🍔 3. Mega Menu
- Menu đa cấp với **carousel tích hợp** bên trong
- Hiển thị tất cả các dòng xe (ô tô và xe máy điện)
- Click vào xe trong menu sẽ:
  - Tự động cuộn đến section xe tương ứng
  - Chuyển carousel đến xe được chọn
- Hiệu ứng hover mượt mà

### 🌍 4. Hệ thống đa ngôn ngữ (i18n)
- Hỗ trợ **Tiếng Việt (VI)** và **Tiếng Anh (EN)**
- Chuyển đổi ngôn ngữ **tức thì** mà không cần tải lại trang
- Cập nhật tất cả:
  - Text tĩnh trên trang
  - Nội dung động (tên xe, thông số...)
  - Placeholder của form
  - Modal thông số kỹ thuật
- Lưu trữ ngôn ngữ đã chọn

### 📱 5. Responsive Design
- Giao diện **Mobile-First**
- Tương thích hoàn hảo trên:
  - 📱 Điện thoại di động (< 576px)
  - 📲 Máy tính bảng (576px - 991px)
  - 💻 Máy tính để bàn (≥ 992px)
- **Navbar tự động thu gọn** khi cuộn trang
- **Bottom Navigation** cho mobile
- Điều chỉnh layout carousel tự động theo kích thước màn hình

### 📊 6. Modal thông số kỹ thuật (Brochure Style)
- Layout **2 cột** hiện đại:
  - Cột trái: Bảng thông số kỹ thuật chi tiết
  - Cột phải: Hình ảnh xe lớn
- Thanh cuộn dọc khi nội dung dài
- Nhãn thông số được dịch tự động theo ngôn ngữ
- Nút "Đặt cọc ngay" trong modal

### 🔄 7. Lazy Loading & Section Animation
- **Lazy load các section** khi cuộn đến
- Hiệu ứng animation khi section hiện ra:
  - `slide-up`: Trượt lên
  - `slide-left`: Trượt từ trái
  - `slide-right`: Trượt từ phải
  - `fade-in`: Hiện dần
- Tối ưu hiệu suất trang

### 📝 8. Form Đặt cọc (Deposit Form)
- Form đặt cọc xe trực tiếp trên website
- Các trường:
  - Họ và tên
  - Số điện thoại
  - Email
  - Mẫu xe quan tâm
  - Số tiền đặt cọc dự kiến
  - Ghi chú thêm
- Validate form cơ bản

### ⚡ 9. Hiệu ứng Animation
| Animation | Mô tả |
|-----------|-------|
| `slide-in-img` | Ảnh xe trượt vào |
| `slide-in-name` | Tên xe trượt vào |
| `fade-in-price` | Giá tiền hiện dần |
| `fade-in` | Hiện dần (labels, badges) |
| Stagger animation | Độ trễ cho các phần tử liên tiếp |

### 🔍 10. Tìm kiếm & Lọc (Accessories)
- Tìm kiếm phụ kiện theo từ khóa
- Lọc theo danh mục:
  - Tất cả sản phẩm
  - Sản phẩm mới
  - Phong cách sống (Lifestyle)
  - Phụ kiện Ô tô
  - Phụ kiện Xe máy điện
- Phân trang "Load more"

### 🔌 11. Mạng lưới trạm sạc
- Tìm kiếm trạm sạc theo địa chỉ
- Lọc theo loại:
  - Tất cả
  - Sạc siêu nhanh
  - Sạc thường
- Hiển thị trạng thái trạm (Đang hoạt động/Đang bận)
- Nút chỉ đường

### 👥 12. Về chúng tôi (About Us)
- Section giới thiệu công ty
- Collapse/Expand nội dung thêm
- Hình ảnh minh họa
- Nút liên hệ

### 🦶 13. Footer đa năng
- Menu sản phẩm
- Menu hỗ trợ
- Thông tin liên hệ
- Link chính sách (Privacy, Terms, Cookies)
- Copyright

### 🧭 14. Navigation
- **Navbar cố định** với hiệu ứng thu gọn khi cuộn
- Smooth scroll đến các section
- Mobile menu với collapse
- Bottom navigation cho mobile

---

## 📁 Cấu trúc dự án

```
Webiste Đồ Án/
│
├── 📄 Pages/
│   └── index.html              # File HTML chính
│
├── 🎨 Css/
│   └── style.css               # Tất cả styles tùy chỉnh
│
├── 📜 JavaScript/
│   ├── main.js                 # Entry point, điều phối các module
│   ├── navbar.js               # Logic thanh điều hướng & cuộn trang
│   ├── mega-menu.js            # Mega Menu & carousel trong menu
│   ├── featured-carousel.js    # Carousel xe nổi bật (chính)
│   ├── car-data.js             # Dữ liệu xe ô tô điện
│   ├── scooter-data.js         # Dữ liệu xe máy điện
│   ├── accessories-data.js     # Dữ liệu phụ kiện
│   ├── language-data.js        # Dữ liệu ngôn ngữ & logic i18n
│   ├── section-loader.js       # Lazy loading & animation sections
│   ├── charging.js             # Logic tìm kiếm trạm sạc
│   ├── lazy-load.js            # Lazy loading images
│   ├── hero-banner.js          # Logic banner chính
│   └── accessories-render.js   # Render accessories
│
├── 🖼️ Data/
│   ├── Aboutus.webp             # Hình ảnh giới thiệu
│   ├── Images/
│   │   ├── background_about.webp
│   │   ├── Cars/                # Hình ảnh xe ô tô
│   │   │   ├── HerioGreen.webp
│   │   │   ├── Homepage_MPV7.webp
│   │   │   ├── MinioGreen.webp
│   │   │   ├── NerioGreen.webp
│   │   │   ├── LimoGreen.webp
│   │   │   ├── VF3.webp
│   │   │   ├── VF5.webp
│   │   │   ├── VF6.webp
│   │   │   ├── VF7.webp
│   │   │   ├── VF8.webp
│   │   │   └── VF9.webp
│   │   └── Scooter/             # Hình ảnh xe máy điện
│   │       ├── evo.webp
│   │       ├── EvoLiteNeo.webp
│   │       ├── evogrand.webp
│   │       ├── evogrand_lite.webp
│   │       ├── falzzz.webp
│   │       ├── Feliz-II.webp
│   │       ├── feliz2025_d.webp
│   │       ├── verox_d.webp
│   │       ├── VfDrgnFly.webp
│   │       ├── Viper.webp
│   │       └── Viper/           # Biến thể màu Viper
│   └── specs/
│       └── vinfast-specs.md     # File thông số kỹ thuật
│
├── 📖 DOCUMENTATION.md          # Tài liệu kỹ thuật chi tiết
├── 📝 TODO.md                   # Danh sách công việc
└── 🏷️ README.md                 # File này
```

---

## 🚀 Hướng dẫn cài đặt & Chạy dự án

### Cách 1: Chạy trực tiếp (Khuyến nghị)

1. **Tải mã nguồn**
   - Tải file ZIP từ repository
   - Giải nén vào thư mục mong muốn

2. **Mở trong trình duyệt**
   - Di chuyển vào thư mục `Pages/`
   - Mở file `index.html` bằng trình duyệt bất kỳ:
     - Google Chrome
     - Firefox
     - Microsoft Edge
     - Safari

### Cách 2: Sử dụng Live Server (VS Code) - Khuyến nghị cho Development

1. **Cài đặt VS Code** (nếu chưa có)
   - Tải tại: https://code.visualstudio.com/

2. **Cài đặt extension Live Server**
   - Mở VS Code
   - Vào Extensions (`Ctrl+Shift+X`)
   - Tìm "Live Server" và cài đặt

3. **Chạy dự án**
   - Mở folder dự án trong VS Code
   - Chuột phải vào `Pages/index.html`
   - Chọn **"Open with Live Server"**
   - Website sẽ mở tại: `http://127.0.0.1:5500/Pages/index.html`

### Cách 3: Sử dụng Python Simple HTTP Server

```bash
# Di chuyển vào thư mục dự án
cd "Webiste Đồ Án"

# Chạy server
python -m http.server 8000

# Mở trình duyệt
# Truy cập: http://localhost:8000/Pages/index.html
```

---

## 🔧 Chi tiết các Module

### 1. `main.js` - Điểm khởi đầu
```javascript
// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    // 1. Render nội dung
    renderMegaMenuContent();
    initVehicleSpecCarousel();
    
    // 2. Khởi tạo chức năng
    initNavbarScroll();
    initSmoothScroll();
    initCarousels();
    initAccessories();
});
```

### 2. `navbar.js` - Thanh điều hướng
- `initNavbarScroll()`: Thêm class 'scrolled' khi cuộn > 50px
- `initSmoothScroll()`: Cuộn mượt đến anchor links
- Xử lý đóng mobile menu khi click

### 3. `mega-menu.js` - Mega Menu
- `renderMegaMenuContent()`: Render danh sách xe vào menu
- `initCarousels()`: Khởi tạo carousel trong mega menu
- `navigateToVehicle(type, id)`: Điều hướng đến xe cụ thể

### 4. `featured-carousel.js` - Carousel chính
- `initVehicleSpecCarousel()`: Khởi tạo carousel ô tô và xe máy
- `setupCarousel(data, imgId, infoId, ...)`: Cấu hình carousel
- `updateDisplay(index)`: Cập nhật hiển thị khi chuyển xe

### 5. `language-data.js` - Đa ngôn ngữ
- `translations`: Object chứa tất cả bản dịch
- `t(key)`: Hàm lấy bản dịch theo key
- `setLanguage(lang)`: Đặt ngôn ngữ và cập nhật giao diện

### 6. `section-loader.js` - Lazy Loading
- `setupSectionLoading()`: Thiết lập Intersection Observer
- Animation khi section hiện ra

---

## 🚗 Dữ liệu sản phẩm

### Xe Ô tô điện (`car-data.js`)
| Mẫu xe | Giá (VND) | Quãng đường | Số chỗ |
|--------|-----------|-------------|--------|
| Herio Green | 499.000.000 | 320 km | 7 |
| MPV7 | 900.000.000 | 400 km | 7 |
| Minio Green | 350.000.000 | 200 km | 4 |
| Nerio Green | 620.000.000 | 350 km | 5 |
| Limo Green | 1.200.000.000 | 450 km | 4 |
| VF3 | 240.000.000 | 210 km | 4 |
| VF 5 | 468.000.000 | 326 km | 5 |
| VF 6 | 675.000.000 | 399 km | 5 |
| VF 7 | 999.000.000 | 431 km | 5 |
| VF 8 | 1.090.000.000 | 471 km | 5 |
| VF 9 | 1.499.000.000 | 626 km | 7 |

### Xe máy điện (`scooter-data.js`)
| Mẫu xe | Giá (VND) | Quãng đường | Tốc độ |
|--------|-----------|-------------|--------|
| Evo 200 | 22.000.000 | 203 km | 70 km/h |
| Evo Lite Neo | 20.000.000 | 205 km | 50 km/h |
| Evo Grand | 30.000.000 | 180 km | 80 km/h |
| Evo Grand Lite | 28.000.000 | 190 km | 60 km/h |
| Falzzz | 25.000.000 | 150 km | 70 km/h |
| Feliz 2025 | 35.000.000 | 120 km | 78 km/h |
| Verox | 40.000.000 | 110 km | 90 km/h |
| VF DrgnFly | 18.000.000 | 80 km | 45 km/h |
| Felizs II | 18.000.000 | 205 km | 49 km/h |
| Viper | 27.000.000 | 82 km | 70 km/h |

### Phụ kiện (`accessories-data.js`)
- Phụ kiện xe máy điện (Top Box, bọc yên, khóa chống trộm...)
- Mô hình xe cao cấp (tỷ lệ 1:18)
- Tấm bảo vệ pin xe cao áp
- Bộ sạc (di động, treo tường, trạm sạc nhanh)
- Sản phẩm Lifestyle (mũ, áo, dù, bình nước...)

---

## 🌍 Hệ thống đa ngôn ngữ (i18n)

### Cấu trúc dữ liệu
```javascript
const translations = {
    en: {
        "nav_home": "Home",
        "nav_vehicles": "Vehicles",
        "hero_title": "Welcome L-Corparation",
        // ... hàng trăm key khác
    },
    vi: {
        "nav_home": "Trang chủ",
        "nav_vehicles": "Sản phẩm",
        "hero_title": "Chào mừng đến với L-Corparation",
        // ... hàng trăm key khác
    }
};
```

### Sử dụng
```javascript
// Lấy bản dịch
const text = t('nav_home'); // Returns: "Trang chủ" hoặc "Home"

// Đặt ngôn ngữ
setLanguage('vi'); // Chuyển sang Tiếng Việt
setLanguage('en'); // Chuyển sang Tiếng Anh
```

### Các element được hỗ trợ
- `data-i18n`: Text thường
- `data-i18n-html`: HTML content (cho text có định dạng)
- `data-i18n-placeholder`: Placeholder của input

---

## 📱 Thiết kế Responsive

### Breakpoints
```css
/* Mobile: < 576px */
@media (max-width: 575px) { }

/* Tablet: 576px - 991px */
@media (max-width: 991px) { }

/* Desktop: ≥ 992px */
@media (min-width: 992px) { }
```

### Điều chỉnh layout
- **Navbar**: Tự động collapse thành hamburger menu
- **Carousel**: Nút prev/next di chuyển lên trên ảnh
- **Mega Menu**: Chuyển thành dropdown đơn giản
- **Footer**: Stack chiều dọc trên mobile

---

## ⚡ Hiệu ứng & Animation

### CSS Animations
```css
/* Slide trượt vào */
@keyframes slide-in-img {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

/* Fade in dần */
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide up */
@keyframes animation-slide-up {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
```

### Hiệu ứng đặc biệt
- **Stagger animation**: Độ trễ cho các phần tử liên tiếp
- **Reflow technique**: Buộc browser re-render để chạy lại animation
- **Smooth transitions**: Chuyển đổi mượt mà giữa các trạng thái

---

## 📦 Hướng dẫn Git

### Kết nối với Repository

Nếu bạn đang ở thư mục dự án trên máy cục bộ:

```bash
# 1. Khởi tạo Git repository
git init

# 2. Thêm tất cả files
git add .

# 3. Tạo commit đầu tiên
git commit -m "Initial commit - L-Corparation Website"

# 4. Đổi tên branch thành main
git branch -M main

# 5. Thêm remote repository
git remote add origin https://github.com/nguyenmt0126/project-page

# 6. Push lên GitHub
git push -u origin main
```

### Các lệnh Git thường dùng

```bash
# Kiểm tra trạng thái
git status

# Xem các thay đổi
git diff

# Thêm thay đổi
git add .
git add filename.js

# Tạo commit
git commit -m "Mô tả thay đổi"

# Pull code mới nhất
git pull origin main

# Push code lên
git push origin main

# Xem lịch sử commit
git log

# Tạo branch mới
git checkout -b feature/ten-feature

# Chuyển branch
git checkout main
```

### Quy trình làm việc

1. **Tạo branch mới cho feature**
   ```bash
   git checkout -b feature/ten-tinh-nang
   ```

2. **Làm việc và commit**
   ```bash
   git add .
   git commit -m "Thêm tính năng mới"
   ```

3. **Merge vào main**
   ```bash
   git checkout main
   git merge feature/ten-tinh-nang
   ```

---

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

---

## 📄 Giấy phép

🄯 2026 L-Corparation. Không bảo lưu quyền.

Dự án được phát triển với mục đích học tập và demo.

---

## 📞 Liên hệ

- **Email**: support@lcorp.com
- **Địa chỉ**: 390 Hoang Van Thu, Cao Đẳng Lý Tự Trọng, TC 12345
- **Điện thoại**: +1 (800) 123-4567

---

## 🔮 Hướng phát triển

- [ ] Thêm form liên hệ đầy đủ
- [ ] Tích hợp API đặt cọc thực tế
- [ ] Thêm tính năng so sánh xe
- [ ] Tích hợp bản đồ Google Maps cho trạm sạc
- [ ] Thêm tính năng đăng nhập/đăng ký
- [ ] Tối ưu hóa SEO
- [ ] Thêm PWA (Progressive Web App)
- [ ] Tích hợp chat bot hỗ trợ

---

**⭐ Nếu bạn thấy dự án này hữu ích, đừng quên star cho repository!**

