/**
 * GreenTech - Language Data & Logic
 */

const translations = {
    en: {
        // Navbar
        "nav_home": "Home",
        "nav_vehicles": "Vehicles",
        "nav_charging": "Charging",
        "nav_news": "News",
        "nav_about": "About",
        "nav_contact": "Contact",
        
        // Mega Menu
        "cars_title": "Cars",
        "scooters_title": "Scooters",
        "btn_detail": "Detail",

        // Hero
        "hero_title": "Welcome to GreenTech",
        "hero_subtitle": "Experience the future of sustainable transportation",

        // Carousel / Specs
        "spec_range": "Range",
        "spec_seats": "Seats",
        "spec_power": "Power",
        "spec_acceleration": "0-100km/h",
        "spec_warranty": "Warranty",
        "spec_warranty_val": "10 Years",
        "spec_airbags": "Airbags",
        "spec_airbags_val": "6-11 Bags",
        "spec_max_speed": "Max Speed",
        "spec_charge": "Charging Time",
        "spec_waterproof": "Waterproof",
        "spec_engine": "Engine",
        "spec_engine_val": "In-hub Motor",
        "spec_trunk": "Trunk",
        "spec_trunk_val": "Spacious",
        "spec_price_from": "Price :",
        "spec_discount_10": "10% Discount",
        "spec_discount_8": "8% Discount",
        "btn_order": "Order Now",
        "badge_new": "New",
        "badge_car": "Electric Car",
        "badge_scooter": "E-Scooter",
        
        // Modal
        "modal_title": "Technical Specifications",
        "modal_close": "Close",
        "modal_deposit": "Deposit Now",
        "modal_updating": "Detailed specifications for this vehicle are being updated.",

        // Data Labels (Mapping from data.js)
        "Range": "Range",
        "Max Speed": "Max Speed",
        "Battery Type": "Battery Type",
        "Charging Time": "Charging Time",
        "Waterproof Standard": "Waterproof Standard",
        "Trunk Capacity": "Trunk Capacity",
        "Vehicle Type": "Vehicle Type",
        "Length x Width x Height": "Length x Width x Height",
        "Wheel base": "Wheel base",
        "Ground Clearance": "Ground Clearance",
        "Curb Weight": "Curb Weight",
        "Seating Capacity": "Seating Capacity",
        "Max Power": "Max Power",
        "Max Torque": "Max Torque",
        "Acceleration (0-100km/h)": "Acceleration (0-100km/h)",
        "Drive Type": "Drive Type",
        "Battery Capacity": "Battery Capacity",
        "Range (WLTP)": "Range (WLTP)",
        "AC Charging (11kW)": "AC Charging (11kW)",
        "DC Fast Charging (10-70%)": "DC Fast Charging (10-70%)"
    },
    vi: {
        // Navbar
        "nav_home": "Trang chủ",
        "nav_vehicles": "Sản phẩm",
        "nav_charging": "Trạm sạc",
        "nav_news": "Tin tức",
        "nav_about": "Về chúng tôi",
        "nav_contact": "Liên hệ",

        // Mega Menu
        "cars_title": "Ô tô",
        "scooters_title": "Xe máy điện",
        "btn_detail": "Chi tiết",

        // Hero
        "hero_title": "Chào mừng đến với GreenTech",
        "hero_subtitle": "Trải nghiệm tương lai của giao thông xanh",

        // Carousel / Specs
        "spec_range": "Quãng đường",
        "spec_seats": "Số chỗ",
        "spec_power": "Công suất",
        "spec_acceleration": "0-100km/h",
        "spec_warranty": "Bảo hành",
        "spec_warranty_val": "10 Năm",
        "spec_airbags": "Túi khí",
        "spec_airbags_val": "6-11 Túi",
        "spec_max_speed": "Tốc độ tối đa",
        "spec_charge": "Thời gian sạc",
        "spec_waterproof": "Chống nước",
        "spec_engine": "Động cơ",
        "spec_engine_val": "Động cơ In-hub",
        "spec_trunk": "Cốp xe",
        "spec_trunk_val": "Rộng rãi",
        "spec_price_from": "Giá từ :",
        "spec_discount_10": "Giảm 10%",
        "spec_discount_8": "Giảm 8%",
        "btn_order": "Đặt cọc",
        "badge_new": "Mới",
        "badge_car": "Ô tô điện",
        "badge_scooter": "Xe máy điện",

        // Modal
        "modal_title": "Thông số kỹ thuật",
        "modal_close": "Đóng",
        "modal_deposit": "Đặt cọc ngay",
        "modal_updating": "Thông số chi tiết đang được cập nhật.",

        // Data Labels
        "Range": "Quãng đường",
        "Max Speed": "Tốc độ tối đa",
        "Battery Type": "Loại pin",
        "Charging Time": "Thời gian sạc",
        "Waterproof Standard": "Tiêu chuẩn chống nước",
        "Trunk Capacity": "Dung tích cốp",
        "Vehicle Type": "Loại xe",
        "Length x Width x Height": "Dài x Rộng x Cao",
        "Wheel base": "Chiều dài cơ sở",
        "Ground Clearance": "Khoảng sáng gầm",
        "Curb Weight": "Trọng lượng không tải",
        "Seating Capacity": "Số chỗ ngồi",
        "Max Power": "Công suất tối đa",
        "Max Torque": "Mô-men xoắn cực đại",
        "Acceleration (0-100km/h)": "Tăng tốc (0-100km/h)",
        "Drive Type": "Hệ dẫn động",
        "Battery Capacity": "Dung lượng pin",
        "Range (WLTP)": "Quãng đường (WLTP)",
        "AC Charging (11kW)": "Sạc AC (11kW)",
        "DC Fast Charging (10-70%)": "Sạc nhanh DC (10-70%)"
    }
};

let currentLang = 'en';

function t(key) {
    return translations[currentLang][key] || key;
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    // Update static elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update button text
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) langBtn.textContent = lang === 'en' ? 'VI' : 'EN';

    // Re-render dynamic components
    if (typeof initVehicleSpecCarousel === 'function') initVehicleSpecCarousel();
    if (typeof renderMegaMenuContent === 'function') renderMegaMenuContent();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'en' ? 'vi' : 'en';
            setLanguage(newLang);
        });
    }
});