/**
 * GreenTech - Scooter Data
 */

const scooterData = [
    { 
        id: 'evo200', name: 'Evo 200', type: 'scooter', img: '../Data/Images/Scooter/evo.webp', price: '22.000.000 VND', price_old: '24.000.000 VND', range: '203 km', speed: '70 km/h', charge: '4h', waterproof: 'IP67', link: '#evo-200-details',
        specs: [
            { label: "Range", value: "203 km" },
            { label: "Max Speed", value: "70 km/h" },
            { label: "Battery Type", value: "LFP" },
            { label: "Charging Time", value: "4h" },
            { label: "Waterproof Standard", value: "IP67" }
        ]
    },
    { 
        id: 'evoliteneo', name: 'Evo Lite Neo', type: 'scooter', img: '../Data/Images/Scooter/EvoLiteNeo.webp', price: '20.000.000 VND', price_old: '22.000.000 VND', range: '205 km', speed: '50 km/h', charge: '4h', waterproof: 'IP67', link: '#evo-lite-neo-details',
        specs: [
            { label: "Range", value: "205 km" },
            { label: "Max Speed", value: "50 km/h" },
            { label: "Battery Type", value: "LFP" },
            { label: "Charging Time", value: "4h" }
        ]
    },
    { 
        id: 'evogrand', name: 'Evo Grand', type: 'scooter', img: '../Data/Images/Scooter/evogrand.webp', price: '30.000.000 VND', price_old: '33.000.000 VND', range: '180 km', speed: '80 km/h', charge: '5h', waterproof: 'IP67', link: '#evogrand-details',
        specs: [
            { label: "Range", value: "180 km" },
            { label: "Max Speed", value: "80 km/h" },
            { label: "Trunk Capacity", value: "25 Liters" }
        ]
    },
    { 
        id: 'evograndlite', name: 'Evo Grand Lite', type: 'scooter', img: '../Data/Images/Scooter/evogrand_lite.webp', price: '28.000.000 VND', price_old: '30.500.000 VND', range: '190 km', speed: '60 km/h', charge: '4h', waterproof: 'IP67', link: '#evogrand-lite-details',
        specs: [
            { label: "Range", value: "190 km" },
            { label: "Max Speed", value: "60 km/h" }
        ]
    },
    { 
        id: 'falzzz', name: 'Falzzz', type: 'scooter', img: '../Data/Images/Scooter/falzzz.webp', price: '25.000.000 VND', price_old: '27.500.000 VND', range: '150 km', speed: '70 km/h', charge: '4h', waterproof: 'IP67', link: '#',
        specs: [
            { label: "Range", value: "150 km" },
            { label: "Max Speed", value: "70 km/h" }
        ]
    },
    { 
        id: 'feliz', name: 'Feliz 2025', type: 'scooter', img: '../Data/Images/Scooter/feliz2025_d.webp', price: '35.000.000 VND', price_old: '38.000.000 VND', range: '120 km', speed: '78 km/h', charge: '5h', waterproof: 'IP67', link: '#',
        specs: [
            { label: "Range", value: "120 km" },
            { label: "Max Speed", value: "78 km/h" }
        ]
    },
    { 
        id: 'verox', name: 'Verox', type: 'scooter', img: '../Data/Images/Scooter/verox_d.webp', price: '40.000.000 VND', price_old: '43.500.000 VND', range: '110 km', speed: '90 km/h', charge: '6h', waterproof: 'IP67', link: '#',
        specs: [
            { label: "Range", value: "110 km" },
            { label: "Max Speed", value: "90 km/h" }
        ]
    },
    { 
        id: 'drgnfly', name: 'VF DrgnFly', type: 'scooter', img: '../Data/Images/Scooter/VfDrgnFly.webp', price: '18.000.000 VND', price_old: '19.600.000 VND', range: '80 km', speed: '45 km/h', charge: '3h', waterproof: 'IP65', link: '#',
        specs: [
            { label: "Range", value: "80 km" },
            { label: "Max Speed", value: "45 km/h" },
            { label: "Vehicle Type", value: "Electric Power-Assisted Bicycle" }
        ]
    },
    { 
        id: 'felizsII', name: 'Felizs II', type: 'scooter', img: '../Data/Images/Scooter/Feliz-II.webp', price: '18.000.000 VND', price_old: '22.000.000 VND', range: '205 km', speed: '49 km/h', charge: '4h', waterproof: 'IP67', link: '#evo-lite-details', isNew: true,
        specs: [
            { label: "Range", value: "205 km" },
            { label: "Max Speed", value: "49 km/h" }
        ]
    },
    { 
        id: 'viper', name: 'Viper', type: 'scooter', img: '../Data/Images/Scooter/Viper.webp', price: '27.000.000 VND', price_old: '29.900.000 VND', range: '82 km', speed: '70 km/h', charge: '4.5h', waterproof: 'IP67', link: '#feliz-s-details', isNew: true,
        specs: [
            { label: "Colors", value: "Đỏ Đen, Trắng, Đen, Xám Xi Măng, Vàng Cát" },
            { label: "Length x Width x Height", value: "1907 x 692 x 1135 mm" },
            { label: "Wheel base", value: "1320 mm" },
            { label: "Saddle Height", value: "780 mm" },
            { label: "Ground Clearance", value: "138 mm" },
            { label: "Trunk Capacity", value: "10L (khi lắp 2 PIN)" },
            { label: "Tire Size (Front - Rear)", value: "90/90-14 | 110/80-14" },
            { label: "Suspension", value: "Ống lồng-giảm chấn thủy lực; Giảm xóc đôi, giảm chấn thủy lực có bình dầu phụ" },
            { label: "Lock Type", value: "Khóa thông minh" },
            { label: "Battery Type", value: "LFP" },
            { label: "Battery Capacity", value: "1.5 kWh (Tùy chọn thêm 1 pin 1.5 kWh)" },
            { label: "Battery Weight", value: "12.5 ± 0.5 kg" },
            { label: "Charging Time", value: "Khoảng 4h30 phút (0-100%)" },
            { label: "Range", value: "Khoảng 82 km (+74 km khi lắp thêm pin phụ)" },
            { label: "Nominal Power", value: "1800 W" },
            { label: "Max Power", value: "3000 W" },
            { label: "Engine Type", value: "BLDC Inhub" },
            { label: "Max Speed", value: "70 km/h" },
            { label: "Acceleration (0-50km/h)", value: "15 giây (1 người 65 Kg)" }
        ]
    },
];