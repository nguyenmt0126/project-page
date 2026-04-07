/**
 * L-Corparation — Chatbot tự động v2.0
 * Trả lời theo từ khóa — không cần API, hoàn toàn miễn phí
 */
(function () {
    'use strict';

    // ============================================================
    // 1. KỊCH BẢN TRẢ LỜI — thêm/sửa câu hỏi/trả lời ở đây
    // ============================================================
    const RESPONSES = [
        // ── Chào hỏi ──
        {
            keys: ['xin chào', 'chào', 'hello', 'hi', 'alo', 'hey'],
            answer: {
                vi: '👋 Xin chào! Tôi là L-Bot, trợ lý tư vấn xe điện của L-Corparation.\n\nTôi có thể giúp bạn về:\n• 🚗 Ô tô điện VinFast\n• 🛵 Xe máy điện\n• ⚡ Trạm sạc\n• 💰 Giá & ưu đãi\n• 🔧 Bảo hành\n\nBạn cần tư vấn gì?',
                en: '👋 Hello! I\'m L-Bot, L-Corparation\'s EV advisor.\n\nI can help with:\n• 🚗 VinFast electric cars\n• 🛵 Electric scooters\n• ⚡ Charging stations\n• 💰 Prices & deals\n• 🔧 Warranty\n\nHow can I help?'
            },
            quick: {
                vi: ['🚗 Ô tô điện', '🛵 Xe máy điện', '💰 Giá xe', '⚡ Trạm sạc'],
                en: ['🚗 Electric cars', '🛵 E-Scooters', '💰 Prices', '⚡ Charging']
            }
        },

        // ── Ô tô điện chung ──
        {
            keys: ['ô tô', 'xe ô tô', 'electric car', 'oto', 'xe hơi', 'xe con'],
            answer: {
                vi: '🚗 L-Corparation hiện phân phối các dòng ô tô điện VinFast:\n\n• **VF3** — Từ 245 triệu (mini, 4 chỗ, 210km)\n• **VF5** — Từ 458 triệu (A-SUV, 5 chỗ, 326km)\n• **VF6** — Từ 657 triệu (B-SUV, 5 chỗ, 399km)\n• **VF7** — Từ 806 triệu (C-SUV, 5 chỗ, 438km)\n• **VF8** — Từ 1,057 tỷ (D-SUV, 5 chỗ, 400km)\n• **VF9** — Từ 1,488 tỷ (E-SUV, 7 chỗ, 423km)\n\nBạn quan tâm mẫu nào?',
                en: '🚗 L-Corparation distributes VinFast electric cars:\n\n• **VF3** — From 245M VND (mini, 4-seat, 210km)\n• **VF5** — From 458M VND (A-SUV, 5-seat, 326km)\n• **VF6** — From 657M VND (B-SUV, 5-seat, 399km)\n• **VF7** — From 806M VND (C-SUV, 5-seat, 438km)\n• **VF8** — From 1.057B VND (D-SUV, 5-seat, 400km)\n• **VF9** — From 1.488B VND (E-SUV, 7-seat, 423km)\n\nWhich model interests you?'
            },
            quick: {
                vi: ['VF3 giá bao nhiêu?', 'VF6 thông số?', 'VF8 tầm hoạt động?', 'So sánh các xe'],
                en: ['VF3 price?', 'VF6 specs?', 'VF8 range?', 'Compare models']
            }
        },

        // ── VF3 ──
        {
            keys: ['vf3', 'vf 3'],
            answer: {
                vi: '🚗 **VinFast VF3**\n\n• Phân khúc: Mini SUV đô thị\n• Chỗ ngồi: 4 chỗ\n• Pin: 18.6 kWh\n• Tầm hoạt động: ~210 km\n• Công suất: 42 mã lực\n• Tốc độ tối đa: ~100 km/h\n• Giá: Từ **245 triệu** (không pin) / 322 triệu (kèm pin)\n\n✅ Phù hợp đi lại đô thị, tiết kiệm chi phí, dễ đỗ xe!\n\nBạn muốn đặt cọc hoặc lái thử không?',
                en: '🚗 **VinFast VF3**\n\n• Segment: Mini urban SUV\n• Seats: 4\n• Battery: 18.6 kWh\n• Range: ~210 km\n• Power: 42 hp\n• Top speed: ~100 km/h\n• Price: From **245M VND** (no battery) / 322M (with battery)\n\n✅ Perfect for urban commuting, cost-effective, easy to park!\n\nInterested in a test drive or deposit?'
            },
            quick: {
                vi: ['Đặt cọc VF3', 'Lái thử VF3', 'So sánh VF3 vs VF5', 'Trạm sạc gần đây'],
                en: ['Deposit VF3', 'Test drive VF3', 'Compare VF3 vs VF5', 'Nearby chargers']
            }
        },

        // ── VF5 ──
        {
            keys: ['vf5', 'vf 5'],
            answer: {
                vi: '🚗 **VinFast VF5**\n\n• Phân khúc: A-SUV\n• Chỗ ngồi: 5 chỗ\n• Pin: 37 kWh\n• Tầm hoạt động: ~326 km\n• Công suất: ~100 kW\n• Tốc độ tối đa: ~130 km/h\n• Giá: Từ **458 triệu**\n\n✅ Lựa chọn tốt cho gia đình nhỏ, cân bằng giữa giá và tính năng!',
                en: '🚗 **VinFast VF5**\n\n• Segment: A-SUV\n• Seats: 5\n• Battery: 37 kWh\n• Range: ~326 km\n• Power: ~100 kW\n• Top speed: ~130 km/h\n• Price: From **458M VND**\n\n✅ Great choice for small families, balanced price and features!'
            },
            quick: {
                vi: ['Đặt cọc VF5', 'So sánh VF5 vs VF6', 'Chính sách trả góp', 'Màu sắc VF5'],
                en: ['Deposit VF5', 'Compare VF5 vs VF6', 'Installment plan', 'VF5 colors']
            }
        },

        // ── VF6 ──
        {
            keys: ['vf6', 'vf 6'],
            answer: {
                vi: '🚗 **VinFast VF6**\n\n• Phân khúc: B-SUV\n• Chỗ ngồi: 5 chỗ\n• Pin: 59.6 kWh\n• Tầm hoạt động: ~399–468 km\n• Công suất: 130–150 kW\n• Màn hình: 12.9 inch\n• ADAS: Level 2\n• Giá: Từ **657 triệu**\n\n✅ Dòng xe bán chạy nhất, công nghệ hiện đại, phù hợp gia đình!',
                en: '🚗 **VinFast VF6**\n\n• Segment: B-SUV\n• Seats: 5\n• Battery: 59.6 kWh\n• Range: ~399–468 km\n• Power: 130–150 kW\n• Screen: 12.9 inch\n• ADAS: Level 2\n• Price: From **657M VND**\n\n✅ Best-selling model, modern tech, great for families!'
            },
            quick: {
                vi: ['Đặt cọc VF6', 'So sánh VF6 vs VF7', 'Trả góp VF6', 'Màu sắc có sẵn'],
                en: ['Deposit VF6', 'Compare VF6 vs VF7', 'VF6 financing', 'Available colors']
            }
        },

        // ── VF8, VF9 ──
        {
            keys: ['vf8', 'vf 8'],
            answer: {
                vi: '🚗 **VinFast VF8**\n\n• Phân khúc: D-SUV cao cấp\n• Chỗ ngồi: 5 chỗ\n• Pin: ~82 kWh\n• Tầm hoạt động: ~400 km\n• Công suất: ~300 kW (402 mã lực)\n• 0–100 km/h: ~5.5 giây\n• Dẫn động: AWD\n• Giá: Từ **1,057 tỷ**\n\n✅ Xe điện hiệu suất cao, trải nghiệm lái đẳng cấp!',
                en: '🚗 **VinFast VF8**\n\n• Segment: Premium D-SUV\n• Seats: 5\n• Battery: ~82 kWh\n• Range: ~400 km\n• Power: ~300 kW (402 hp)\n• 0–100 km/h: ~5.5 seconds\n• Drivetrain: AWD\n• Price: From **1.057B VND**\n\n✅ High-performance EV, premium driving experience!'
            },
            quick: {
                vi: ['Đặt cọc VF8', 'So sánh VF8 vs VF9', 'Lái thử VF8', 'Chính sách bảo hành'],
                en: ['Deposit VF8', 'Compare VF8 vs VF9', 'Test drive VF8', 'Warranty policy']
            }
        },
        {
            keys: ['vf9', 'vf 9'],
            answer: {
                vi: '🚗 **VinFast VF9**\n\n• Phân khúc: E-SUV 7 chỗ\n• Chỗ ngồi: 6–7 chỗ\n• Pin: ~123 kWh\n• Tầm hoạt động: ~423 km\n• Công suất: ~300 kW (402 mã lực)\n• 0–100 km/h: ~6.5 giây\n• Dẫn động: AWD\n• Giá: Từ **1,488 tỷ**\n\n✅ SUV điện 7 chỗ lớn nhất, phù hợp gia đình đông người!',
                en: '🚗 **VinFast VF9**\n\n• Segment: E-SUV 7-seat\n• Seats: 6–7\n• Battery: ~123 kWh\n• Range: ~423 km\n• Power: ~300 kW (402 hp)\n• 0–100 km/h: ~6.5 seconds\n• Drivetrain: AWD\n• Price: From **1.488B VND**\n\n✅ Largest 7-seat electric SUV, perfect for big families!'
            },
            quick: {
                vi: ['Đặt cọc VF9', 'So sánh VF8 vs VF9', 'Trả góp VF9', 'Liên hệ tư vấn'],
                en: ['Deposit VF9', 'Compare VF8 vs VF9', 'VF9 financing', 'Contact advisor']
            }
        },

        // ── Xe máy điện ──
        {
            keys: ['xe máy', 'xe may', 'scooter', 'xe máy điện', 'máy điện', 'evo', 'feliz', 'klara', 'viper', 'theon', 'vento'],
            answer: {
                vi: '🛵 Dòng xe máy điện VinFast tại L-Corparation:\n\n**Phổ thông (dưới 25 triệu):**\n• Evo Grand: 24 triệu — 165km, đổi pin V-Green\n• Feliz Lite: 25,9 triệu — phổ thông, bền\n\n**Trung cấp (25–40 triệu):**\n• Klara Neo: 28,8 triệu — thiết kế đẹp\n• VeroX: 34,9 triệu — thể thao\n\n**Cao cấp (40 triệu+):**\n• Vento S: 49,2 triệu — 160km, phanh ABS\n• Theon S: 56,9 triệu — 150km, kết nối eSIM\n\nBạn có ngân sách khoảng bao nhiêu?',
                en: '🛵 VinFast e-scooters at L-Corparation:\n\n**Budget (under 25M):**\n• Evo Grand: 24M — 165km, V-Green swap\n• Feliz Lite: 25.9M — reliable, popular\n\n**Mid-range (25–40M):**\n• Klara Neo: 28.8M — stylish design\n• VeroX: 34.9M — sporty\n\n**Premium (40M+):**\n• Vento S: 49.2M — 160km, ABS brakes\n• Theon S: 56.9M — 150km, eSIM\n\nWhat\'s your budget range?'
            },
            quick: {
                vi: ['Dưới 25 triệu', '25–40 triệu', 'Trên 40 triệu', 'So sánh các xe'],
                en: ['Under 25M', '25–40M', 'Over 40M', 'Compare models']
            }
        },

        // ── Giá xe ──
        {
            keys: ['giá', 'bao nhiêu tiền', 'giá bao nhiêu', 'price', 'cost', 'tiền', 'bao nhiêu'],
            answer: {
                vi: '💰 Bảng giá xe điện L-Corparation:\n\n**Ô tô điện:**\n• VF3: 245 triệu – 322 triệu\n• VF5: từ 458 triệu\n• VF6: từ 657 triệu\n• VF7: từ 806 triệu\n• VF8: từ 1,057 tỷ\n• VF9: từ 1,488 tỷ\n\n**Xe máy điện:**\n• Evo Grand: 24 triệu\n• Feliz Lite: 25,9 triệu\n• Klara Neo: 28,8 triệu\n• Vento S: 49,2 triệu\n• Theon S: 56,9 triệu\n\n🎁 Ưu đãi "Thu xăng – Đổi điện": giảm thêm 5% đến 30/4/2026!',
                en: '💰 L-Corparation EV price list:\n\n**Electric cars:**\n• VF3: 245M – 322M VND\n• VF5: from 458M VND\n• VF6: from 657M VND\n• VF7: from 806M VND\n• VF8: from 1.057B VND\n• VF9: from 1.488B VND\n\n**E-scooters:**\n• Evo Grand: 24M VND\n• Feliz Lite: 25.9M VND\n• Klara Neo: 28.8M VND\n• Vento S: 49.2M VND\n• Theon S: 56.9M VND\n\n🎁 "Trade Gas for Electric" deal: extra 5% off until April 30, 2026!'
            },
            quick: {
                vi: ['Trả góp như thế nào?', 'Ưu đãi hiện tại', 'Tư vấn chọn xe', 'Liên hệ đặt cọc'],
                en: ['Installment options?', 'Current deals', 'Get car advice', 'Contact for deposit']
            }
        },

        // ── Trả góp ──
        {
            keys: ['trả góp', 'tra gop', 'vay', 'installment', 'financing', 'góp', '0%', 'lãi suất'],
            answer: {
                vi: '💳 Chính sách trả góp L-Corparation:\n\n• Lãi suất: **0% trong 12 tháng** (chương trình hiện tại)\n• Vốn đối ứng: **0 đồng** (không cần đặt trước)\n• Hỗ trợ **100% lệ phí trước bạ**\n• Thời hạn: 12 / 24 / 36 / 48 tháng\n\n**Ví dụ VF6 (657 triệu):**\n• 12 tháng: ~54,7 triệu/tháng\n• 24 tháng: ~27,4 triệu/tháng\n• 36 tháng: ~18,2 triệu/tháng\n\n📞 Liên hệ hotline **1800-1234** để được tư vấn chi tiết!',
                en: '💳 L-Corparation financing:\n\n• Interest rate: **0% for 12 months**\n• Down payment: **0 VND required**\n• **100% registration fee** support\n• Terms: 12 / 24 / 36 / 48 months\n\n**Example VF6 (657M VND):**\n• 12 months: ~54.7M/month\n• 24 months: ~27.4M/month\n• 36 months: ~18.2M/month\n\n📞 Call hotline **1800-1234** for details!'
            },
            quick: {
                vi: ['Điều kiện vay vốn?', 'Hồ sơ cần gì?', 'Đặt cọc ngay', 'Liên hệ tư vấn'],
                en: ['Loan requirements?', 'Documents needed?', 'Deposit now', 'Contact advisor']
            }
        },

        // ── Trạm sạc ──
        {
            keys: ['sạc', 'trạm sạc', 'sac', 'charging', 'v-green', 'vgreen', 'sạc miễn phí', 'đổi pin'],
            answer: {
                vi: '⚡ Hệ thống sạc V-Green của VinFast:\n\n• **150.000+ cổng sạc** trên toàn quốc\n• Phủ **63 tỉnh thành**\n• Tại Vincom, Vinhomes, cao tốc Bắc–Nam\n• **Sạc miễn phí** đến 31/5/2027 cho chủ xe VinFast\n\n**Tốc độ sạc:**\n• AC 7kW: sạc qua đêm (6–8 giờ)\n• DC 50kW: 20–80% trong 30–40 phút\n• DC 120kW: thêm 200km chỉ trong 18 phút!\n\n**Xe máy:** Đổi pin tại trạm V-Green < 60 giây!',
                en: '⚡ VinFast V-Green charging network:\n\n• **150,000+ charging ports** nationwide\n• Covers **63 provinces**\n• At Vincom, Vinhomes, North-South Expressway\n• **Free charging** until May 31, 2027\n\n**Charging speeds:**\n• AC 7kW: overnight charge (6–8 hours)\n• DC 50kW: 20–80% in 30–40 minutes\n• DC 120kW: adds 200km in just 18 minutes!\n\n**E-scooters:** Battery swap at V-Green stations in < 60 seconds!'
            },
            quick: {
                vi: ['Tìm trạm sạc gần nhất', 'Sạc mất bao lâu?', 'Chi phí sạc?', 'Đổi pin xe máy'],
                en: ['Find nearest charger', 'How long to charge?', 'Charging cost?', 'Scooter battery swap']
            }
        },

        // ── Bảo hành ──
        {
            keys: ['bảo hành', 'bao hanh', 'warranty', 'sửa chữa', 'bảo dưỡng', 'service'],
            answer: {
                vi: '🔧 Chính sách bảo hành L-Corparation:\n\n**Ô tô điện:**\n• Xe: **10 năm / 200.000 km**\n• Pin: **10 năm / 200.000 km**\n• Động cơ điện: **10 năm**\n\n**Xe máy điện:**\n• Khung xe: **5 năm / 50.000 km**\n• Pin: **5 năm / 50.000 km**\n• Động cơ: **5 năm**\n\n✅ Bảo hành tốt nhất phân khúc!\n✅ Hơn 400 trung tâm dịch vụ toàn quốc\n✅ Hỗ trợ 24/7',
                en: '🔧 L-Corparation warranty:\n\n**Electric cars:**\n• Vehicle: **10 years / 200,000 km**\n• Battery: **10 years / 200,000 km**\n• Electric motor: **10 years**\n\n**E-scooters:**\n• Frame: **5 years / 50,000 km**\n• Battery: **5 years / 50,000 km**\n• Motor: **5 years**\n\n✅ Best warranty in segment!\n✅ 400+ service centers nationwide\n✅ 24/7 support'
            },
            quick: {
                vi: ['Trung tâm bảo hành gần nhất', 'Chi phí bảo dưỡng?', 'Bảo hành pin?', 'Liên hệ hỗ trợ'],
                en: ['Nearest service center', 'Maintenance cost?', 'Battery warranty?', 'Contact support']
            }
        },

        // ── Ưu đãi ──
        {
            keys: ['ưu đãi', 'khuyến mãi', 'deal', 'promotion', 'giảm giá', 'discount', 'offer', 'thu xăng'],
            answer: {
                vi: '🎁 Ưu đãi hiện tại tại L-Corparation:\n\n1. **"Thu xăng – Đổi điện"** (đến 30/4/2026)\n   → Giảm thêm **5%** khi đổi xe xăng sang xe điện\n\n2. **Trả góp 0%** trong 12 tháng đầu\n   → Không cần vốn đối ứng\n\n3. **Miễn 100%** lệ phí trước bạ\n\n4. **Sạc miễn phí** tại V-Green đến 31/5/2027\n\n5. **Miễn phí đổi pin** 20 lần/tháng đến 30/6/2028\n\n⏰ Ưu đãi có thể thay đổi, liên hệ **1800-1234** để xác nhận!',
                en: '🎁 Current deals at L-Corparation:\n\n1. **"Trade Gas for Electric"** (until April 30, 2026)\n   → Extra **5% off** when trading in gasoline vehicle\n\n2. **0% financing** for first 12 months\n   → No down payment required\n\n3. **100% registration fee** waiver\n\n4. **Free charging** at V-Green until May 31, 2027\n\n5. **Free battery swaps** 20x/month until June 30, 2028\n\n⏰ Deals may change, call **1800-1234** to confirm!'
            },
            quick: {
                vi: ['Đặt cọc ngay', 'Tính toán trả góp', 'Điều kiện áp dụng?', 'Liên hệ tư vấn'],
                en: ['Deposit now', 'Calculate payments', 'Eligibility?', 'Contact advisor']
            }
        },

        // ── Đặt cọc / Mua xe ──
        {
            keys: ['đặt cọc', 'dat coc', 'mua xe', 'order', 'deposit', 'book', 'đặt hàng', 'đặt xe'],
            answer: {
                vi: '📝 Đặt cọc xe điện VinFast tại L-Corparation:\n\n**Quy trình:**\n1. Chọn mẫu xe & màu sắc\n2. Đặt cọc từ **5 triệu đồng**\n3. Ký hợp đồng & chọn phương thức thanh toán\n4. Nhận xe trong **2–4 tuần**\n\n**Kênh đặt cọc:**\n• 🌐 Trực tiếp tại showroom\n• 📞 Hotline: **1800-1234**\n• 📧 Email: support@lcorp.com\n\nBạn muốn đặt cọc mẫu xe nào?',
                en: '📝 How to deposit for a VinFast EV:\n\n**Process:**\n1. Choose model & color\n2. Deposit from **5 million VND**\n3. Sign contract & choose payment\n4. Receive vehicle in **2–4 weeks**\n\n**How to deposit:**\n• 🌐 Visit showroom directly\n• 📞 Hotline: **1800-1234**\n• 📧 Email: support@lcorp.com\n\nWhich model would you like to deposit for?'
            },
            quick: {
                vi: ['Đặt cọc VF6', 'Đặt cọc VF3', 'Đặt cọc xe máy', 'Gọi tư vấn ngay'],
                en: ['Deposit VF6', 'Deposit VF3', 'Deposit e-scooter', 'Call advisor now']
            }
        },

        // ── Lái thử ──
        {
            keys: ['lái thử', 'lai thu', 'test drive', 'thử xe', 'dùng thử'],
            answer: {
                vi: '🚗 Đăng ký lái thử xe điện VinFast:\n\n• **Miễn phí** hoàn toàn\n• Thời gian: 30–60 phút\n• Có hướng dẫn viên đi cùng\n• Áp dụng cho tất cả dòng xe\n\n**Địa điểm:**\n• Showroom L-Corparation toàn quốc\n• Một số sự kiện lưu động\n\n📞 Đặt lịch: **1800-1234**\n📧 Email: support@lcorp.com\n\nBạn muốn thử dòng xe nào?',
                en: '🚗 Book a VinFast EV test drive:\n\n• **Completely free**\n• Duration: 30–60 minutes\n• With professional guide\n• Available for all models\n\n**Locations:**\n• L-Corparation showrooms nationwide\n• Mobile event locations\n\n📞 Book: **1800-1234**\n📧 Email: support@lcorp.com\n\nWhich model would you like to try?'
            },
            quick: {
                vi: ['Đặt lịch lái thử VF6', 'Đặt lịch lái thử VF3', 'Showroom gần tôi', 'Gọi ngay'],
                en: ['Book VF6 test drive', 'Book VF3 test drive', 'Nearby showroom', 'Call now']
            }
        },

        // ── Liên hệ ──
        {
            keys: ['liên hệ', 'lien he', 'contact', 'hotline', 'số điện thoại', 'địa chỉ', 'showroom', 'email'],
            answer: {
                vi: '📞 Liên hệ L-Corparation:\n\n• **Hotline:** 1800-1234 (miễn phí, 8h–22h)\n• **Email:** support@lcorp.com\n• **Website:** lcorparation.vn\n\n**Showroom toàn quốc:**\n• TP.HCM: 45A Lý Tự Trọng, Quận 1\n• Hà Nội: 123 Phạm Văn Đồng, Cầu Giấy\n• Đà Nẵng: 89 Nguyễn Văn Linh\n\n⏰ Giờ làm việc: 8:00 – 22:00 (tất cả các ngày)',
                en: '📞 Contact L-Corparation:\n\n• **Hotline:** 1800-1234 (free, 8am–10pm)\n• **Email:** support@lcorp.com\n• **Website:** lcorparation.vn\n\n**Showrooms:**\n• HCMC: 45A Ly Tu Trong, District 1\n• Hanoi: 123 Pham Van Dong, Cau Giay\n• Da Nang: 89 Nguyen Van Linh\n\n⏰ Hours: 8:00 AM – 10:00 PM (daily)'
            },
            quick: {
                vi: ['Gọi ngay 1800-1234', 'Chỉ đường showroom', 'Gửi email', 'Đặt lịch hẹn'],
                en: ['Call 1800-1234', 'Get directions', 'Send email', 'Book appointment']
            }
        },

        // ── Tầm hoạt động / Pin ──
        {
            keys: ['tầm hoạt động', 'phạm vi', 'range', 'bao xa', 'km', 'pin', 'battery', 'sạc bao lâu', 'hết pin'],
            answer: {
                vi: '🔋 Tầm hoạt động xe điện VinFast:\n\n**Ô tô điện:**\n• VF3: ~210 km\n• VF5: ~326 km\n• VF6: ~399–468 km\n• VF7: ~438–532 km\n• VF8: ~400 km\n• VF9: ~423 km\n\n**Xe máy điện:**\n• Evo Grand: ~165 km\n• Feliz Lite: ~198 km\n• Klara Neo: ~194 km\n• Vento S: ~160 km\n• Theon S: ~150 km\n\n💡 Tầm thực tế có thể thay đổi tùy điều kiện lái xe!',
                en: '🔋 VinFast EV range:\n\n**Electric cars:**\n• VF3: ~210 km\n• VF5: ~326 km\n• VF6: ~399–468 km\n• VF7: ~438–532 km\n• VF8: ~400 km\n• VF9: ~423 km\n\n**E-scooters:**\n• Evo Grand: ~165 km\n• Feliz Lite: ~198 km\n• Klara Neo: ~194 km\n• Vento S: ~160 km\n• Theon S: ~150 km\n\n💡 Actual range may vary with driving conditions!'
            },
            quick: {
                vi: ['Tầm hoạt động VF6?', 'Sạc nhanh DC?', 'Chi phí điện/100km?', 'Trạm sạc gần đây'],
                en: ['VF6 range?', 'DC fast charging?', 'Electricity cost/100km?', 'Nearby chargers']
            }
        },

        // ── Cảm ơn ──
        {
            keys: ['cảm ơn', 'cam on', 'thanks', 'thank you', 'cảm ơn bạn', 'ok', 'được rồi', 'hiểu rồi'],
            answer: {
                vi: '😊 Không có gì! Rất vui được tư vấn cho bạn.\n\nNếu cần thêm thông tin hoặc muốn đặt cọc, đừng ngần ngại hỏi nhé!\n\n📞 Hotline: **1800-1234**\n\nChúc bạn tìm được chiếc xe ưng ý! 🚗⚡',
                en: '😊 You\'re welcome! Happy to help.\n\nIf you need more info or want to place a deposit, feel free to ask!\n\n📞 Hotline: **1800-1234**\n\nHope you find your perfect EV! 🚗⚡'
            },
            quick: {
                vi: ['Đặt cọc xe', 'Xem thêm ưu đãi', 'Liên hệ tư vấn'],
                en: ['Place deposit', 'More deals', 'Contact advisor']
            }
        },

        // ── Tạm biệt ──
        {
            keys: ['tạm biệt', 'bye', 'goodbye', 'gặp lại', 'thôi', 'ngừng'],
            answer: {
                vi: '👋 Tạm biệt! Cảm ơn bạn đã quan tâm đến xe điện L-Corparation.\n\nHẹn gặp lại và chúc bạn một ngày tốt lành! 🌿',
                en: '👋 Goodbye! Thank you for your interest in L-Corparation EVs.\n\nSee you again and have a great day! 🌿'
            },
            quick: { vi: [], en: [] }
        }
    ];

    // Câu trả lời mặc định khi không nhận ra từ khóa
    const DEFAULT_RESPONSE = {
        vi: '🤔 Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn.\n\nBạn có thể hỏi về:\n• Giá xe, thông số kỹ thuật\n• Trạm sạc, bảo hành\n• Ưu đãi, trả góp\n• Đặt cọc, lái thử\n\nHoặc gọi trực tiếp **1800-1234** để được tư vấn!',
        en: '🤔 Sorry, I didn\'t quite understand your question.\n\nYou can ask about:\n• Prices, specifications\n• Charging, warranty\n• Deals, financing\n• Deposits, test drives\n\nOr call **1800-1234** for direct support!'
    };
    const DEFAULT_QUICK = {
        vi: ['🚗 Xem ô tô điện', '🛵 Xem xe máy điện', '💰 Bảng giá', '📞 Liên hệ'],
        en: ['🚗 Electric cars', '🛵 E-scooters', '💰 Price list', '📞 Contact']
    };

    // ============================================================
    // 2. ENGINE TÌM KIẾM TỪ KHÓA
    // ============================================================
    function findResponse(text) {
        const normalized = text.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // bỏ dấu
            .replace(/[^\w\s]/g, ' '); // bỏ ký tự đặc biệt

        for (const item of RESPONSES) {
            for (const key of item.keys) {
                const normKey = key.toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                if (normalized.includes(normKey)) {
                    return item;
                }
            }
        }
        return null;
    }

    // ============================================================
    // 3. LANG HELPERS
    // ============================================================
    const g = () => typeof window.currentLang !== 'undefined' ? window.currentLang : 'vi';
    const tx = obj => obj[g()] || obj.vi || '';

    // ============================================================
    // 4. CSS
    // ============================================================
    function injectCSS() {
        if (document.getElementById('lcb-css')) return;
        const st = document.createElement('style');
        st.id = 'lcb-css';
        st.textContent = `
#lcb-toggle{position:fixed;bottom:28px;right:28px;z-index:99990;width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#16a34a,#15803d);border:none;cursor:pointer;box-shadow:0 4px 20px rgba(22,163,74,.45);display:flex;align-items:center;justify-content:center;font-size:1.4rem;color:#fff;transition:transform .2s,box-shadow .2s;}
#lcb-toggle:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(22,163,74,.55);}
#lcb-toggle .lcb-badge{position:absolute;top:-3px;right:-3px;background:#ef4444;color:#fff;border-radius:50%;width:20px;height:20px;font-size:.65rem;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid #fff;opacity:0;transition:opacity .2s;}
#lcb-toggle .lcb-badge.show{opacity:1;}
#lcb-window{position:fixed;bottom:98px;right:28px;z-index:99991;width:360px;max-width:calc(100vw - 40px);height:520px;max-height:calc(100vh - 140px);background:#fff;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,.18);display:flex;flex-direction:column;overflow:hidden;transform:scale(.92) translateY(16px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .2s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;}
#lcb-window.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
.lcb-header{background:linear-gradient(135deg,#16a34a,#15803d);padding:14px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;}
.lcb-avatar{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;color:#fff;}
.lcb-header-info{flex:1;}
.lcb-header-name{color:#fff;font-weight:700;font-size:.9rem;}
.lcb-header-status{color:rgba(255,255,255,.8);font-size:.72rem;display:flex;align-items:center;gap:4px;}
.lcb-status-dot{width:7px;height:7px;background:#86efac;border-radius:50%;animation:lcb-pulse 2s infinite;}
@keyframes lcb-pulse{0%,100%{opacity:1}50%{opacity:.4}}
.lcb-close-btn{background:none;border:none;color:rgba(255,255,255,.8);font-size:1.1rem;cursor:pointer;padding:4px;border-radius:50%;transition:background .15s;display:flex;align-items:center;justify-content:center;width:30px;height:30px;}
.lcb-close-btn:hover{background:rgba(255,255,255,.15);color:#fff;}
.lcb-messages{flex:1;overflow-y:auto;padding:14px 14px 8px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth;}
.lcb-messages::-webkit-scrollbar{width:4px;}
.lcb-messages::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:4px;}
.lcb-msg{display:flex;gap:8px;align-items:flex-end;max-width:100%;}
.lcb-msg.bot{justify-content:flex-start;}
.lcb-msg.user{justify-content:flex-end;}
.lcb-msg-avatar{width:28px;height:28px;border-radius:50%;background:#f0fdf4;display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;border:1.5px solid #bbf7d0;color:#16a34a;}
.lcb-bubble{max-width:78%;padding:9px 13px;border-radius:14px;font-size:.84rem;line-height:1.6;word-break:break-word;}
.lcb-msg.bot .lcb-bubble{background:#f8fafc;color:#1e293b;border-bottom-left-radius:4px;border:1px solid #e2e8f0;}
.lcb-msg.user .lcb-bubble{background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;border-bottom-right-radius:4px;}
.lcb-time{font-size:.62rem;color:#94a3b8;margin-top:3px;display:block;}
.lcb-msg.user .lcb-time{text-align:right;color:rgba(255,255,255,.65);}
.lcb-typing .lcb-bubble{padding:10px 14px;display:flex;gap:4px;align-items:center;}
.lcb-dot{width:7px;height:7px;background:#94a3b8;border-radius:50%;animation:lcb-bounce .9s infinite;}
.lcb-dot:nth-child(2){animation-delay:.15s;}
.lcb-dot:nth-child(3){animation-delay:.3s;}
@keyframes lcb-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}
.lcb-quick-replies{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 8px;flex-shrink:0;}
.lcb-quick-btn{padding:6px 12px;border-radius:20px;border:1.5px solid #16a34a;background:#fff;color:#16a34a;font-size:.76rem;font-weight:600;cursor:pointer;transition:all .15s;white-space:nowrap;font-family:inherit;}
.lcb-quick-btn:hover{background:#16a34a;color:#fff;}
.lcb-input-area{padding:10px 12px;border-top:1px solid #f1f5f9;display:flex;gap:8px;align-items:flex-end;flex-shrink:0;background:#fff;}
.lcb-input{flex:1;border:1.5px solid #e2e8f0;border-radius:22px;padding:9px 14px;font-size:.84rem;outline:none;font-family:inherit;color:#1e293b;resize:none;max-height:80px;line-height:1.4;transition:border-color .2s;background:#f8fafc;}
.lcb-input:focus{border-color:#16a34a;background:#fff;}
.lcb-send-btn{width:38px;height:38px;border-radius:50%;border:none;background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0;transition:transform .15s,opacity .15s;opacity:.5;}
.lcb-send-btn.active{opacity:1;}
.lcb-send-btn:hover.active{transform:scale(1.08);}
.lcb-powered{text-align:center;font-size:.62rem;color:#cbd5e1;padding:4px 0 8px;flex-shrink:0;}
@media(max-width:480px){#lcb-window{bottom:84px;right:12px;left:12px;width:auto;}#lcb-toggle{bottom:20px;right:16px;}}
        `;
        document.head.appendChild(st);
    }

    // ============================================================
    // 5. BUILD WIDGET
    // ============================================================
    function buildWidget() {
        if (document.getElementById('lcb-toggle')) return;

        const toggle = document.createElement('button');
        toggle.id = 'lcb-toggle';
        toggle.setAttribute('aria-label', 'Mở chat tư vấn');
        toggle.innerHTML = `<span id="lcb-icon"><i class="fas fa-leaf"></i></span><span class="lcb-badge" id="lcb-badge">1</span>`;
        document.body.appendChild(toggle);

        const win = document.createElement('div');
        win.id = 'lcb-window';
        win.setAttribute('role', 'dialog');
        win.innerHTML = `
        <div class="lcb-header">
            <div class="lcb-avatar"><i class="fas fa-leaf"></i></div>
            <div class="lcb-header-info">
                <div class="lcb-header-name">L-CORPARATION</div>
                <div class="lcb-header-status"><span class="lcb-status-dot"></span> Đang hoạt động</div>
            </div>
            <button class="lcb-close-btn" id="lcb-close" aria-label="Đóng">✕</button>
        </div>
        <div class="lcb-messages" id="lcb-messages"></div>
        <div class="lcb-quick-replies" id="lcb-quick"></div>
        <div class="lcb-input-area">
            <textarea class="lcb-input" id="lcb-input" placeholder="Nhập câu hỏi..." rows="1"></textarea>
            <button class="lcb-send-btn" id="lcb-send" aria-label="Gửi">➤</button>
        </div>
        <div class="lcb-powered">L-Corparation AI Assistant 🌿</div>`;
        document.body.appendChild(win);
    }

    // ============================================================
    // 6. RENDER MESSAGES
    // ============================================================
    function getTime() {
        return new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    }

    function appendMessage(role, text, animate = true) {
        const container = document.getElementById('lcb-messages');
        if (!container) return;
        const wrap = document.createElement('div');
        wrap.className = `lcb-msg ${role}`;
        const html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
        const time = getTime();
        if (role === 'bot') {
            wrap.innerHTML = `<div class="lcb-msg-avatar"><i class="fas fa-leaf"></i></div><div><div class="lcb-bubble">${html}</div><span class="lcb-time">${time}</span></div>`;
        } else {
            wrap.innerHTML = `<div><div class="lcb-bubble">${html}</div><span class="lcb-time">${time}</span></div>`;
        }
        if (animate) {
            wrap.style.cssText = 'opacity:0;transform:translateY(8px);transition:opacity .25s,transform .25s';
        }
        container.appendChild(wrap);
        scrollToBottom();
        if (animate) requestAnimationFrame(() => { wrap.style.opacity = '1'; wrap.style.transform = 'translateY(0)'; });
    }

    function showTyping() {
        const container = document.getElementById('lcb-messages');
        if (!container || document.getElementById('lcb-typing')) return;
        const wrap = document.createElement('div');
        wrap.className = 'lcb-msg bot lcb-typing'; wrap.id = 'lcb-typing';
        wrap.innerHTML = `<div class="lcb-msg-avatar"><i class="fas fa-leaf"></i></div><div class="lcb-bubble"><span class="lcb-dot"></span><span class="lcb-dot"></span><span class="lcb-dot"></span></div>`;
        container.appendChild(wrap);
        scrollToBottom();
    }

    function hideTyping() { const el = document.getElementById('lcb-typing'); if (el) el.remove(); }
    function scrollToBottom() { const c = document.getElementById('lcb-messages'); if (c) c.scrollTop = c.scrollHeight; }

    function showQuickReplies(replies) {
        const container = document.getElementById('lcb-quick');
        if (!container) return;
        container.innerHTML = '';
        (replies || []).forEach(r => {
            if (!r) return;
            const btn = document.createElement('button');
            btn.className = 'lcb-quick-btn';
            btn.textContent = r;
            btn.addEventListener('click', () => { container.innerHTML = ''; sendMessage(r); });
            container.appendChild(btn);
        });
    }

    // ============================================================
    // 7. WELCOME
    // ============================================================
    function showWelcome() {
        const welcome = RESPONSES[0]; // câu chào đầu tiên
        appendMessage('bot', tx(welcome.answer));
        showQuickReplies(tx(welcome.quick));
    }

    // ============================================================
    // 8. SEND MESSAGE — xử lý keyword matching
    // ============================================================
    let isTypingActive = false;

    function sendMessage(text) {
        if (!text || !text.trim() || isTypingActive) return;
        const msg = text.trim();
        const input = document.getElementById('lcb-input');
        if (input) { input.value = ''; autoResize(input); }
        updateSendBtn();
        const quick = document.getElementById('lcb-quick');
        if (quick) quick.innerHTML = '';

        appendMessage('user', msg);
        isTypingActive = true;
        showTyping();

        // Giả lập bot "đang gõ" 600–1000ms cho tự nhiên
        const delay = 600 + Math.random() * 400;
        setTimeout(() => {
            hideTyping();
            const found = findResponse(msg);
            if (found) {
                appendMessage('bot', tx(found.answer));
                showQuickReplies(tx(found.quick));
            } else {
                appendMessage('bot', tx(DEFAULT_RESPONSE));
                showQuickReplies(tx(DEFAULT_QUICK));
            }
            isTypingActive = false;
        }, delay);
    }

    // ============================================================
    // 9. HELPERS
    // ============================================================
    function autoResize(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 80) + 'px'; }
    function updateSendBtn() {
        const input = document.getElementById('lcb-input');
        const btn = document.getElementById('lcb-send');
        if (input && btn) btn.classList.toggle('active', input.value.trim().length > 0);
    }

    // ============================================================
    // 10. OPEN / CLOSE
    // ============================================================
    let isOpen = false;

    function openChat() {
        const win = document.getElementById('lcb-window');
        const icon = document.getElementById('lcb-icon');
        const badge = document.getElementById('lcb-badge');
        if (win) win.classList.add('open');
        if (icon) icon.innerHTML = '✕';
        if (badge) badge.classList.remove('show');
        isOpen = true;
        const msgs = document.getElementById('lcb-messages');
        if (msgs && msgs.children.length === 0) setTimeout(showWelcome, 300);
        setTimeout(() => { const input = document.getElementById('lcb-input'); if (input) input.focus(); }, 350);
    }

    function closeChat() {
        const win = document.getElementById('lcb-window');
        const icon = document.getElementById('lcb-icon');
        if (win) win.classList.remove('open');
        if (icon) icon.innerHTML = '<i class="fas fa-leaf"></i>';
        isOpen = false;
    }

    // ============================================================
    // 11. BIND EVENTS
    // ============================================================
    function bindEvents() {
        document.getElementById('lcb-toggle')?.addEventListener('click', () => isOpen ? closeChat() : openChat());
        document.getElementById('lcb-close')?.addEventListener('click', closeChat);
        const input = document.getElementById('lcb-input');
        if (input) {
            input.addEventListener('input', () => { autoResize(input); updateSendBtn(); });
            input.addEventListener('keydown', e => {
                if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input.value); }
            });
        }
        document.getElementById('lcb-send')?.addEventListener('click', () => {
            const input = document.getElementById('lcb-input');
            if (input) sendMessage(input.value);
        });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) closeChat(); });
    }

    // ============================================================
    // 12. INIT
    // ============================================================
    function init() {
        injectCSS();
        buildWidget();
        bindEvents();
        // Hiện badge sau 3 giây
        setTimeout(() => {
            const badge = document.getElementById('lcb-badge');
            if (badge && !isOpen) badge.classList.add('show');
        }, 3000);
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();

    window.LChatbot = { open: openChat, close: closeChat };
})();