/**
 * L-Corparation - Accessories Data
 * VinFast vehicle accessories data
 */

const accessoriesData = [
    // Phụ kiện ngoại thất (Exterior Accessories)
    {
        id: 'ext-001',
        name: 'Bọc gương chiếu hậu',
        category: 'exterior',
        categoryName: 'Phụ kiện ngoại thất',
        img: '../Data/Images/Accessories/1.png',
        price: 890000,
        price_old: 1200000,
        discount: 26,
        vehicle: 'vf5',
        vehicleType: 'car',
        vehicleName: 'VF 5'
    },
    {
        id: 'ext-002',
        name: 'Nắp bình acquy chống nước',
        category: 'exterior',
        categoryName: 'Phụ kiện ngoại thất',
        img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=300&h=300&fit=crop',
        price: 450000,
        price_old: 550000,
        discount: 18,
        vehicle: 'vf6',
        vehicleType: 'car',
        vehicleName: 'VF 6'
    },
    {
        id: 'ext-003',
        name: 'Ốp cản trước/sau',
        category: 'exterior',
        categoryName: 'Phụ kiện ngoại thất',
        img: 'https://images.unsplash.com/photo-1503376763036-066120622c74?w=300&h=300&fit=crop',
        price: 2100000,
        price_old: 2800000,
        discount: 25,
        vehicle: 'vf8',
        vehicleType: 'car',
        vehicleName: 'VF 8'
    },
    {
        id: 'ext-004',
        name: 'Bộ ray gắn nóc xe',
        category: 'exterior',
        categoryName: 'Phụ kiện ngoại thất',
        img: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=300&h=300&fit=crop',
        price: 4500000,
        price_old: 5200000,
        discount: 13,
        vehicle: 'vf9',
        vehicleType: 'car',
        vehicleName: 'VF 9'
    },
    {
        id: 'ext-005',
        name: 'Logo VinFast LED',
        category: 'exterior',
        categoryName: 'Phụ kiện ngoại thất',
        img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=300&fit=crop',
        price: 680000,
        price_old: 850000,
        discount: 20,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },

    // Phụ kiện nội thất (Interior Accessories)
    {
        id: 'int-001',
        name: 'Thảm lót sàn 5D cao cấp',
        category: 'interior',
        categoryName: 'Phụ kiện nội thất',
        img: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=300&h=300&fit=crop',
        price: 1500000,
        price_old: 2000000,
        discount: 25,
        vehicle: 'vf5',
        vehicleType: 'car',
        vehicleName: 'VF 5'
    },
    {
        id: 'int-002',
        name: 'Bọc da ghế cao cấp',
        category: 'interior',
        categoryName: 'Phụ kiện nội thất',
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
        price: 8500000,
        price_old: 12000000,
        discount: 29,
        vehicle: 'vf6',
        vehicleType: 'car',
        vehicleName: 'VF 6'
    },
    {
        id: 'int-003',
        name: 'Tấm lót taplo chống trượt',
        category: 'interior',
        categoryName: 'Phụ kiện nội thất',
        img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=300&h=300&fit=crop',
        price: 520000,
        price_old: 700000,
        discount: 26,
        vehicle: 'vf7',
        vehicleType: 'car',
        vehicleName: 'VF 7'
    },
    {
        id: 'int-004',
        name: 'Giá đỡ điện thoại treo',
        category: 'interior',
        categoryName: 'Phụ kiện nội thất',
        img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop',
        price: 290000,
        price_old: 390000,
        discount: 26,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'int-005',
        name: 'Hộp đựng đồ tiện lợi',
        category: 'interior',
        categoryName: 'Phụ kiện nội thất',
        img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
        price: 380000,
        price_old: 480000,
        discount: 21,
        vehicle: 'vf8',
        vehicleType: 'car',
        vehicleName: 'VF 8'
    },

    // Phụ kiện bảo hộ (Safety Accessories)
    {
        id: 'saf-001',
        name: 'Móc khóa búa phá kính',
        category: 'safety',
        categoryName: 'Phụ kiện bảo hộ',
        img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&h=300&fit=crop',
        price: 180000,
        price_old: 250000,
        discount: 28,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'saf-002',
        name: 'Bình cứu hỏa mini',
        category: 'safety',
        categoryName: 'Phụ kiện bảo hộ',
        img: 'https://images.unsplash.com/photo-1584663639450-03432c7f99a7?w=300&h=300&fit=crop',
        price: 450000,
        price_old: 600000,
        discount: 25,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'saf-003',
        name: 'Dây an toàn tăng đô',
        category: 'safety',
        categoryName: 'Phụ kiện bảo hộ',
        img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=300&fit=crop',
        price: 320000,
        price_old: 450000,
        discount: 29,
        vehicle: 'vf9',
        vehicleType: 'car',
        vehicleName: 'VF 9'
    },
    {
        id: 'saf-004',
        name: 'Camera hành trình',
        category: 'safety',
        categoryName: 'Phụ kiện bảo hộ',
        img: 'https://images.unsplash.com/photo-1558040032-e8808414b333?w=300&h=300&fit=crop',
        price: 2500000,
        price_old: 3500000,
        discount: 29,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },

    // Phụ kiện sạc & pin (Charging Accessories)
    {
        id: 'chg-001',
        name: 'Bộ sạc di động 3.5kW',
        category: 'charging',
        categoryName: 'Phụ kiện sạc & pin',
        img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=300&fit=crop',
        price: 8500000,
        price_old: 10500000,
        discount: 19,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'chg-002',
        name: 'Đế sạc treo tường',
        category: 'charging',
        categoryName: 'Phụ kiện sạc & pin',
        img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=300&h=300&fit=crop',
        price: 12000000,
        price_old: 15000000,
        discount: 20,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'chg-003',
        name: 'Cáp sạc Type 2',
        category: 'charging',
        categoryName: 'Phụ kiện sạc & pin',
        img: 'https://images.unsplash.com/photo-1619641805634-98e5c7156d68?w=300&h=300&fit=crop',
        price: 2800000,
        price_old: 3500000,
        discount: 20,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'chg-004',
        name: 'Túi đựng cáp sạc',
        category: 'charging',
        categoryName: 'Phụ kiện sạc & pin',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
        price: 450000,
        price_old: 600000,
        discount: 25,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    },

    // Phụ kiện bảo dưỡng (Maintenance Accessories)
    {
        id: 'mnt-001',
        name: 'Bộ vệ sinh xe cao cấp',
        category: 'maintenance',
        categoryName: 'Phụ kiện bảo dưỡng',
        img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=300&h=300&fit=crop',
        price: 650000,
        price_old: 850000,
        discount: 24,
        vehicle: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'mnt-002',
        name: 'Xịt nano chống thấm kính',
        category: 'maintenance',
        categoryName: 'Phụ kiện bảo dưỡng',
        img: 'https://images.unsplash.com/photo-1507133750069-bef72f3707a9?w=300&h=300&fit=crop',
        price: 280000,
        price_old: 380000,
        discount: 26,
        vehicle: 'all',
        vehicleName: 'Tất cả xe'
    },
    {
        id: 'mnt-003',
        name: 'Miếng dán chống xước cốp',
        category: 'maintenance',
        categoryName: 'Phụ kiện bảo dưỡng',
        img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop',
        price: 520000,
        price_old: 700000,
        discount: 26,
        vehicle: 'vf8',
        vehicleType: 'car',
        vehicleName: 'VF 8'
    },
    {
        id: 'mnt-004',
        name: 'Bộ lau chùi microfiber',
        category: 'maintenance',
        categoryName: 'Phụ kiện bảo dưỡng',
        img: 'https://images.unsplash.com/photo-1580821814521-9e8d0160c324?w=300&h=300&fit=crop',
        price: 180000,
        price_old: 250000,
        discount: 28,
        vehicle: 'all',
        vehicleType: 'all',
        vehicleName: 'Tất cả xe'
    }
];

// Category mapping for filtering
const accessoriesCategories = [
    { id: 'all',        name: 'Tất cả',       icon: 'fa-box',        labelKey: 'accessories_cat_all' },
    { id: 'exterior',   name: 'Ngoại thất',   icon: 'fa-car-side',   labelKey: 'accessories_cat_exterior' },
    { id: 'interior',   name: 'Nội thất',     icon: 'fa-couch',      labelKey: 'accessories_cat_interior' },
    { id: 'safety',     name: 'Bảo hộ',       icon: 'fa-shield-alt', labelKey: 'accessories_cat_safety' },
    { id: 'charging',   name: 'Sạc & Pin',    icon: 'fa-bolt',       labelKey: 'accessories_cat_charging' },
    { id: 'maintenance',name: 'Bảo dưỡng',    icon: 'fa-tools',      labelKey: 'accessories_cat_maintenance' }
];

// Format price to VND
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

