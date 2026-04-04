/**
 * L-Corparation — News Section Plugin v3
 * - Không link ngoài, nội dung đọc trong trang
 * - Click bài → mở modal đọc full content
 * - Featured bự, layout tạp chí
 */

(function () {
    'use strict';

    // ============================================================
    // 1. DỮ LIỆU TIN TỨC — nội dung đầy đủ
    // ============================================================
    const newsData = [
        {
            id: 1,
            featured: true,
            title: { vi: 'VinFast VF3 chính thức bàn giao hàng loạt — Xe điện phổ thông dưới 300 triệu đã có mặt', en: 'VinFast VF3 Mass Delivered — Affordable EV Under 300M VND Now Available' },
            desc: { vi: 'Hàng nghìn chiếc VF3 được bàn giao trong lễ ra mắt hoành tráng tại TP.HCM. Với mức giá chỉ từ 245 triệu đồng, VF3 được kỳ vọng thay đổi cuộc chơi xe điện phổ thông tại Việt Nam.', en: 'Thousands of VF3 units were delivered in a grand ceremony in HCMC. Priced from 245 million VND, the VF3 is expected to change the game for affordable EVs.' },
            content: {
                vi: `<p>Ngày 15 tháng 3 năm 2025, tại sân vận động Phú Thọ, TP. Hồ Chí Minh, <strong>VinFast</strong> tổ chức lễ bàn giao xe điện VF3 quy mô lớn nhất trong lịch sử hãng với hơn 3.000 chiếc được trao tay khách hàng chỉ trong một ngày.</p>
                <p>VF3 là mẫu xe điện mini thuộc phân khúc A, được định vị là sản phẩm xe điện phổ thông đầu tiên của VinFast hướng đến đại đa số người dùng đô thị Việt Nam. Xe có giá bán từ <strong>245 triệu đồng</strong> (chưa bao gồm pin thuê), hoặc 322 triệu đồng nếu mua kèm pin.</p>
                <h4>Thông số kỹ thuật nổi bật</h4>
                <p>VF3 trang bị động cơ điện công suất 42 mã lực, mô-men xoắn 110 Nm. Pin dung lượng 18,6 kWh cho phép xe di chuyển khoảng 210 km (theo chu trình NEDC) hoặc xấp xỉ 150–170 km trong điều kiện thực tế đô thị.</p>
                <p>Xe có kích thước nhỏ gọn, phù hợp cho việc di chuyển trong nội đô với các con phố chật hẹp tại Hà Nội và TP.HCM. Thời gian sạc từ 20–80% chỉ mất khoảng 45 phút với trụ sạc nhanh DC.</p>
                <h4>Phản hồi từ thị trường</h4>
                <p>Ngay trong ngày mở bán, VinFast ghi nhận hơn <strong>27.000 đơn đặt hàng</strong> VF3 trên toàn quốc — một con số kỷ lục đối với phân khúc xe điện phổ thông tại Việt Nam. Điều này cho thấy nhu cầu về xe điện giá rẻ trong nước đang rất lớn.</p>
                <p>Nhiều chuyên gia nhận định VF3 sẽ là "đòn bẩy" giúp VinFast chiếm lĩnh phân khúc thị trường mà trước nay vẫn thuộc về xe máy điện và xe xăng cỡ nhỏ.</p>`,
                en: `<p>On March 15, 2025, at Phu Tho Stadium in Ho Chi Minh City, <strong>VinFast</strong> held the largest vehicle handover ceremony in its history, delivering over 3,000 VF3 units to customers in a single day.</p>
                <p>The VF3 is a mini electric vehicle in the A-segment, positioned as VinFast's first mass-market EV targeting the majority of Vietnamese urban drivers. The vehicle is priced from <strong>245 million VND</strong> (battery rental not included), or 322 million VND with the battery included.</p>
                <h4>Key Specifications</h4>
                <p>The VF3 is equipped with a 42 hp electric motor with 110 Nm of torque. Its 18.6 kWh battery allows approximately 210 km of range (NEDC cycle) or around 150–170 km in real-world urban conditions.</p>
                <p>The compact size makes it ideal for navigating the narrow streets of Hanoi and Ho Chi Minh City. Charging from 20–80% takes approximately 45 minutes with a DC fast charger.</p>
                <h4>Market Response</h4>
                <p>On launch day, VinFast recorded over <strong>27,000 VF3 orders</strong> nationwide — a record for the affordable EV segment in Vietnam. This demonstrates the enormous demand for affordable electric vehicles in the country.</p>`
            },
            source: 'VnExpress', date: '2025-03-15',
            readTime: { vi: '4 phút đọc', en: '4 min read' },
            tag: { vi: 'Nổi bật', en: 'Featured' }, tagColor: '#E53935',
            img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80'
        },
        {
            id: 2,
            title: { vi: 'Chính phủ gia hạn miễn thuế trước bạ xe điện đến hết năm 2027', en: 'Government Extends EV Registration Tax Exemption to End of 2027' },
            desc: { vi: 'Nghị định mới tiếp tục miễn 100% thuế trước bạ và giảm 50% phí đường bộ cho tất cả xe điện đăng ký mới, kích thích tiêu dùng xanh.', en: 'New decree continues 100% registration tax exemption and 50% road fee reduction for all newly registered EVs.' },
            content: {
                vi: `<p>Chính phủ vừa ban hành <strong>Nghị định 47/2025/NĐ-CP</strong> về việc tiếp tục gia hạn các chính sách ưu đãi thuế dành cho xe điện đến hết ngày 31 tháng 12 năm 2027.</p>
                <p>Theo đó, tất cả xe ô tô điện chạy hoàn toàn bằng pin (BEV) đăng ký mới trong giai đoạn từ nay đến cuối năm 2027 sẽ được <strong>miễn 100% thuế trước bạ</strong>. Bên cạnh đó, phí đường bộ hàng năm cũng được giảm 50% so với mức áp dụng cho xe xăng cùng phân khúc.</p>
                <h4>Tác động lên thị trường</h4>
                <p>Với mức thuế trước bạ hiện tại dao động từ 2–10% tùy tỉnh thành, chính sách miễn thuế giúp người mua xe điện tiết kiệm từ <strong>5 đến 30 triệu đồng</strong> tùy theo giá trị xe và địa phương đăng ký.</p>
                <p>Hiệp hội Các nhà sản xuất ô tô Việt Nam (VAMA) đánh giá đây là tín hiệu tích cực, dự kiến sẽ giúp doanh số xe điện tăng thêm 25–30% trong năm 2025 so với năm ngoái.</p>
                <h4>Lộ trình dài hạn</h4>
                <p>Chính phủ cũng công bố lộ trình: từ năm 2028 trở đi, xe điện sẽ được áp dụng mức thuế trước bạ ưu đãi thay vì miễn hoàn toàn, với mức dự kiến chỉ bằng 50% so với xe xăng tương đương.</p>`,
                en: `<p>The government has just issued <strong>Decree 47/2025/ND-CP</strong> extending preferential tax policies for electric vehicles through December 31, 2027.</p>
                <p>Accordingly, all battery electric vehicles (BEVs) newly registered from now through end of 2027 will receive a <strong>100% registration tax exemption</strong>. Additionally, annual road fees will be reduced by 50% compared to equivalent gasoline vehicles.</p>
                <h4>Market Impact</h4>
                <p>With current registration tax rates ranging from 2–10% depending on province, the exemption saves EV buyers between <strong>5 to 30 million VND</strong> depending on vehicle value and registration location.</p>`
            },
            source: 'Tuổi Trẻ', date: '2025-03-10',
            readTime: { vi: '3 phút đọc', en: '3 min read' },
            tag: { vi: 'Chính sách', en: 'Policy' }, tagColor: '#1565C0',
            img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80'
        },
        {
            id: 3,
            title: { vi: 'Dat Bike Weaver++ ra mắt: 200km một lần sạc, giá chỉ 65 triệu đồng', en: 'Dat Bike Weaver++ Launched: 200km Range, Priced at Just 65M VND' },
            desc: { vi: 'Startup xe máy điện Dat Bike tiếp tục gây bất ngờ với Weaver++ — pin LFP 4.2kWh, sạc đầy chỉ 3.5 giờ và màn hình TFT 5 inch kết nối smartphone.', en: 'Dat Bike surprises again with Weaver++ — 4.2kWh LFP battery, full charge in 3.5 hours and 5-inch TFT display.' },
            content: {
                vi: `<p><strong>Dat Bike</strong>, startup xe máy điện Việt Nam, vừa chính thức ra mắt mẫu xe Weaver++ với hàng loạt cải tiến đáng kể so với thế hệ trước, đưa hãng bước vào cuộc cạnh tranh trực tiếp với VinFast ở phân khúc xe máy điện tầm trung.</p>
                <h4>Thông số kỹ thuật</h4>
                <p>Weaver++ sử dụng pin <strong>LFP (Lithium Iron Phosphate) 4.2 kWh</strong> — loại pin an toàn hơn, tuổi thọ cao hơn (2.000+ chu kỳ sạc) và ít bị ảnh hưởng bởi nhiệt độ cao so với pin NMC thông thường. Tầm hoạt động đạt <strong>200km</strong> theo chu trình thử nghiệm.</p>
                <p>Động cơ công suất <strong>5kW liên tục, 9kW đỉnh</strong> giúp xe đạt tốc độ tối đa 90km/h. Thời gian sạc từ 0–100% là 3,5 giờ với bộ sạc đi kèm, hoặc có thể sạc nhanh DC rút ngắn xuống còn 1,5 giờ.</p>
                <h4>Tính năng nổi bật</h4>
                <p>Màn hình TFT màu 5 inch hiển thị tốc độ, mức pin, bản đồ điều hướng và kết nối với ứng dụng Dat Bike trên điện thoại. Ứng dụng cho phép theo dõi lịch sử hành trình, khóa/mở xe từ xa và cập nhật phần mềm OTA.</p>
                <p>Giá bán <strong>65 triệu đồng</strong> đặt Weaver++ vào vị trí cạnh tranh trực tiếp với VinFast Feliz S và Klara S2 — mức giá hấp dẫn cho một xe máy điện có tầm hoạt động 200km.</p>`,
                en: `<p><strong>Dat Bike</strong>, Vietnam's electric motorcycle startup, has officially launched the Weaver++ with significant improvements over its predecessor, entering direct competition with VinFast in the mid-range electric motorcycle segment.</p>
                <h4>Technical Specifications</h4>
                <p>The Weaver++ uses a <strong>4.2 kWh LFP (Lithium Iron Phosphate) battery</strong> — safer, longer-lasting (2,000+ charge cycles) and less affected by high temperatures than conventional NMC batteries. Range reaches <strong>200km</strong> on the test cycle.</p>
                <p>The <strong>5kW continuous, 9kW peak</strong> motor delivers a top speed of 90km/h. Charging from 0–100% takes 3.5 hours with the included charger, or as little as 1.5 hours with DC fast charging.</p>`
            },
            source: 'Zing News', date: '2025-03-05',
            readTime: { vi: '5 phút đọc', en: '5 min read' },
            tag: { vi: 'Công nghệ', en: 'Tech' }, tagColor: '#6A1B9A',
            img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80'
        },
        {
            id: 4,
            title: { vi: 'Việt Nam top 5 thị trường xe điện tăng trưởng nhanh nhất Đông Nam Á', en: 'Vietnam Top 5 Fastest-Growing EV Markets in Southeast Asia' },
            desc: { vi: 'Báo cáo BloombergNEF ghi nhận Việt Nam tăng trưởng 340% doanh số xe điện năm 2024, chỉ sau Thái Lan và Indonesia về tổng lượng xe.', en: 'BloombergNEF records Vietnam with 340% EV sales growth in 2024, trailing only Thailand and Indonesia.' },
            content: {
                vi: `<p>Theo báo cáo mới nhất của <strong>BloombergNEF</strong> về thị trường xe điện Đông Nam Á năm 2024, Việt Nam ghi nhận mức tăng trưởng doanh số ấn tượng <strong>340%</strong> so với năm 2023 — mức tăng cao nhất trong khu vực.</p>
                <h4>Con số thống kê</h4>
                <p>Tổng doanh số xe điện tại Việt Nam năm 2024 đạt khoảng <strong>85.000 xe</strong>, trong đó VinFast chiếm khoảng 78% thị phần. Số còn lại thuộc về các thương hiệu như BYD, Wuling và một số xe nhập khẩu khác.</p>
                <p>Đặc biệt, phân khúc xe máy điện tại Việt Nam tiếp tục dẫn đầu khu vực với hơn <strong>600.000 xe máy điện</strong> được bán ra trong năm 2024, trong đó VinFast, Dat Bike và Yadea là ba thương hiệu hàng đầu.</p>
                <h4>Dự báo 2025–2027</h4>
                <p>BloombergNEF dự báo tỷ lệ xe điện trong tổng doanh số xe ô tô mới tại Việt Nam sẽ đạt <strong>15% vào năm 2025</strong> và có thể lên tới 35% vào năm 2027 nếu các chính sách ưu đãi được duy trì và hạ tầng sạc tiếp tục mở rộng.</p>`,
                en: `<p>According to the latest <strong>BloombergNEF</strong> report on Southeast Asia's EV market in 2024, Vietnam recorded an impressive <strong>340% growth</strong> in EV sales compared to 2023 — the highest growth rate in the region.</p>
                <h4>Statistics</h4>
                <p>Total EV sales in Vietnam in 2024 reached approximately <strong>85,000 vehicles</strong>, with VinFast accounting for about 78% market share. The remainder belonged to brands such as BYD, Wuling, and other imported vehicles.</p>`
            },
            source: 'Bloomberg', date: '2025-02-28',
            readTime: { vi: '5 phút đọc', en: '5 min read' },
            tag: { vi: 'Thị trường', en: 'Market' }, tagColor: '#00695C',
            img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80'
        },
        {
            id: 5,
            title: { vi: 'VinFast khai trương 200 trạm sạc siêu nhanh DC 120kW trên toàn quốc', en: 'VinFast Opens 200 Ultra-Fast DC 120kW Charging Stations Nationwide' },
            desc: { vi: 'Hệ thống sạc siêu nhanh mới cho phép sạc thêm 200km chỉ trong 18 phút, đặt tại các trung tâm thương mại và cao tốc trọng điểm.', en: 'New ultra-fast charging system allows adding 200km in just 18 minutes, located at key shopping centers and expressways.' },
            content: {
                vi: `<p><strong>VinFast</strong> vừa công bố khai trương đồng loạt <strong>200 trạm sạc siêu nhanh DC 120kW</strong> tại 63 tỉnh thành trên toàn quốc, đánh dấu bước đột phá lớn trong hạ tầng sạc điện tại Việt Nam.</p>
                <h4>Công nghệ sạc siêu nhanh</h4>
                <p>Mỗi trạm sạc DC 120kW có khả năng cung cấp thêm <strong>200km hành trình chỉ trong 18 phút</strong> cho các mẫu xe VinFast VF8 và VF9 — tương đương với thời gian nghỉ ngơi và uống cà phê trên hành trình đường dài.</p>
                <p>Các trạm sạc này được trang bị màn hình cảm ứng 10 inch, hỗ trợ thanh toán qua ứng dụng VinFast, thẻ ngân hàng, ví điện tử MoMo và ZaloPay. Người dùng cũng có thể đặt lịch sạc trước qua ứng dụng để tránh chờ đợi.</p>
                <h4>Vị trí chiến lược</h4>
                <p>200 trạm sạc mới được đặt tại các vị trí chiến lược: trung tâm thương mại Vincom, các nút giao cao tốc Bắc–Nam, sân bay và bến xe lớn. Khoảng cách trung bình giữa các trạm sạc trên cao tốc Bắc–Nam hiện đạt <strong>dưới 70km</strong> — đủ để người dùng VF8, VF9 di chuyển xuyên quốc gia mà không lo "hết pin giữa đường".</p>`,
                en: `<p><strong>VinFast</strong> has announced the simultaneous opening of <strong>200 DC 120kW ultra-fast charging stations</strong> across 63 provinces nationwide, marking a major breakthrough in Vietnam's EV charging infrastructure.</p>
                <h4>Ultra-Fast Charging Technology</h4>
                <p>Each DC 120kW charging station can add <strong>200km of range in just 18 minutes</strong> for VinFast VF8 and VF9 models — equivalent to a coffee break on a long journey.</p>`
            },
            source: 'VinFast Official', date: '2025-02-20',
            readTime: { vi: '4 phút đọc', en: '4 min read' },
            tag: { vi: 'Hạ tầng', en: 'Infrastructure' }, tagColor: '#E65100',
            img: 'https://images.unsplash.com/photo-1649433391420-542fcd3d9adb?w=600&q=80'
        },
        {
            id: 6,
            title: { vi: 'Pin thể rắn "Made in Vietnam": L-Corparation hợp tác Bách Khoa nghiên cứu', en: 'Solid-State Battery "Made in Vietnam": L-Corparation Partners with HUST' },
            desc: { vi: 'Dự án pin thể rắn nội địa nhắm tới mật độ năng lượng 400 Wh/kg — gấp đôi pin lithium-ion hiện tại — dự kiến thương mại hóa năm 2028.', en: 'Domestic solid-state battery project targeting 400 Wh/kg energy density — double current lithium-ion — commercialization in 2028.' },
            content: {
                vi: `<p><strong>L-Corparation</strong> và <strong>Đại học Bách Khoa Hà Nội</strong> vừa ký kết hợp tác nghiên cứu và phát triển pin thể rắn (Solid-State Battery) thế hệ mới, với mục tiêu tạo ra sản phẩm pin điện "Made in Vietnam" đầu tiên cho xe điện.</p>
                <h4>Tại sao pin thể rắn?</h4>
                <p>Pin thể rắn sử dụng chất điện phân dạng rắn thay vì dạng lỏng như pin lithium-ion truyền thống, mang lại nhiều ưu điểm vượt trội: <strong>mật độ năng lượng cao hơn 2 lần</strong> (400 Wh/kg so với 200 Wh/kg), an toàn hơn (không có nguy cơ cháy nổ), tuổi thọ dài hơn (5.000+ chu kỳ sạc) và hoạt động tốt hơn trong điều kiện nhiệt độ cao của khí hậu Việt Nam.</p>
                <h4>Lộ trình dự án</h4>
                <p>Giai đoạn 1 (2025–2026): Nghiên cứu vật liệu điện phân rắn và tối ưu hóa công thức pin trong điều kiện khí hậu nhiệt đới.<br>
                Giai đoạn 2 (2027): Sản xuất thử nghiệm batch nhỏ, tích hợp vào nguyên mẫu xe điện L-Corparation.<br>
                Giai đoạn 3 (2028): Thương mại hóa và bắt đầu sản xuất hàng loạt tại nhà máy Hải Phòng.</p>
                <p>Nếu thành công, đây sẽ là lần đầu tiên Việt Nam có chuỗi sản xuất pin xe điện nội địa hoàn chỉnh, giảm phụ thuộc vào nhập khẩu từ Trung Quốc và Hàn Quốc.</p>`,
                en: `<p><strong>L-Corparation</strong> and <strong>Hanoi University of Science and Technology</strong> have signed a research and development agreement for next-generation solid-state batteries, aiming to create Vietnam's first domestically produced EV battery.</p>
                <h4>Why Solid-State?</h4>
                <p>Solid-state batteries use a solid electrolyte instead of liquid like conventional lithium-ion batteries, offering significant advantages: <strong>2x higher energy density</strong> (400 Wh/kg vs 200 Wh/kg), safer (no fire risk), longer lifespan (5,000+ charge cycles) and better performance in Vietnam's hot climate.</p>`
            },
            source: 'Khoa học & Đời sống', date: '2025-02-10',
            readTime: { vi: '6 phút đọc', en: '6 min read' },
            tag: { vi: 'Nghiên cứu', en: 'Research' }, tagColor: '#B71C1C',
            img: 'https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=600&q=80'
        },
        {
            id: 7,
            title: { vi: 'TP.HCM thí điểm 50 xe buýt điện BYD K9 trên 5 tuyến trung tâm', en: 'HCMC Pilots 50 BYD K9 Electric Buses on 5 Central Routes' },
            desc: { vi: 'Dự án thí điểm mở đầu kế hoạch điện hóa toàn bộ đội xe buýt công cộng TP.HCM trước năm 2030, giảm 60% lượng khí thải CO2.', en: 'The pilot project kicks off HCMC\'s plan to electrify its entire public bus fleet before 2030, reducing CO2 emissions by 60%.' },
            content: {
                vi: `<p><strong>Sở Giao thông Vận tải TP. Hồ Chí Minh</strong> vừa chính thức đưa vào vận hành <strong>50 xe buýt điện BYD K9</strong> trên 5 tuyến buýt trọng điểm qua trung tâm thành phố, đánh dấu bước khởi đầu của quá trình điện hóa giao thông công cộng.</p>
                <h4>5 tuyến thí điểm</h4>
                <p>Tuyến 01: Bến Thành – Bến xe Chợ Lớn<br>
                Tuyến 13: Bến Thành – Bến xe Miền Tây<br>
                Tuyến 36: Đại học Quốc gia – Bến Thành<br>
                Tuyến 53: Bến Thành – Khu chế xuất Linh Trung<br>
                Tuyến 72: Sân bay Tân Sơn Nhất – Bến xe Miền Đông</p>
                <h4>Ưu điểm của xe buýt điện BYD K9</h4>
                <p>Xe buýt BYD K9 có tầm hoạt động <strong>250km/lần sạc</strong>, đủ để vận hành một ngày làm việc đầy đủ mà không cần sạc giữa chừng. Xe trang bị hệ thống điều hòa không khí cao cấp, USB sạc điện thoại và màn hình thông tin tuyến đường.</p>
                <p>Theo tính toán của Sở GTVT, 50 xe buýt điện này sẽ giúp giảm khoảng <strong>1.200 tấn CO2</strong> mỗi năm so với xe buýt diesel cùng chặng — tương đương trồng 60.000 cây xanh.</p>
                <h4>Lộ trình đến 2030</h4>
                <p>TP.HCM đặt mục tiêu điện hóa <strong>100% đội xe buýt công cộng</strong> trước năm 2030, với tổng số khoảng 3.000 xe. Ngân sách dành cho chương trình này ước tính khoảng 15.000 tỷ đồng, trong đó 40% từ ngân sách nhà nước và 60% từ hợp tác công tư.</p>`,
                en: `<p>The <strong>Ho Chi Minh City Department of Transport</strong> has officially launched <strong>50 BYD K9 electric buses</strong> on 5 key bus routes through the city center, marking the beginning of public transport electrification.</p>
                <h4>Advantages of BYD K9</h4>
                <p>The BYD K9 bus has a range of <strong>250km per charge</strong>, sufficient for a full working day without intermediate charging. The bus features premium air conditioning, phone charging USB ports, and route information displays.</p>`
            },
            source: 'Người Lao Động', date: '2025-01-30',
            readTime: { vi: '4 phút đọc', en: '4 min read' },
            tag: { vi: 'Giao thông', en: 'Transport' }, tagColor: '#37474F',
            img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80'
        }
    ];

    // ============================================================
    // 2. TRANSLATIONS
    // ============================================================
    const T = {
        vi: { title: 'Tin Tức', accent: 'Xe Điện', subtitle: 'Góc nhìn mới nhất về thị trường xe điện Việt Nam', view_all: 'Tất cả bài viết', read: 'Đọc bài', latest: 'Mới nhất', close: 'Đóng', by: 'Nguồn' },
        en: { title: 'Electric', accent: 'News', subtitle: 'Latest perspective on Vietnam electric vehicle market', view_all: 'All articles', read: 'Read', latest: 'Latest', close: 'Close', by: 'Source' }
    };

    function lang() { return typeof window.currentLang !== 'undefined' ? window.currentLang : 'vi'; }
    function t(k) { return (T[lang()] || T.vi)[k] || T.vi[k]; }
    function tx(obj) { if (!obj) return ''; return obj[lang()] || obj.vi || ''; }
    function fmtDate(str) {
        const d = new Date(str);
        if (isNaN(d)) return str;
        return d.toLocaleDateString(lang() === 'vi' ? 'vi-VN' : 'en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    }

    // ============================================================
    // 3. CSS
    // ============================================================
    function injectStyles() {
        if (document.getElementById('nws3-styles')) return;
        const s = document.createElement('style');
        s.id = 'nws3-styles';
        s.textContent = `
        #news-section-root { background:#fff; padding:90px 0 80px; position:relative; }
        .nws3-wrap { max-width:1160px; margin:0 auto; padding:0 24px; }

        /* HEADER */
        .nws3-head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:40px; gap:16px; flex-wrap:wrap; padding-bottom:20px; border-bottom:2.5px solid #111; }
        .nws3-eyebrow { font-size:.68rem; font-weight:800; letter-spacing:.15em; text-transform:uppercase; color:#2E7D32; margin-bottom:8px; display:flex; align-items:center; gap:8px; }
        .nws3-eyebrow::before { content:''; display:inline-block; width:28px; height:2px; background:#2E7D32; }
        .nws3-h1 { font-size:clamp(2rem,4vw,3rem); font-weight:900; color:#111; line-height:1; margin:0; letter-spacing:-.03em; }
        .nws3-h1 span { color:#2E7D32; }
        .nws3-sub { font-size:.95rem; color:#888; margin-top:8px; }
        .nws3-all { display:inline-flex; align-items:center; gap:6px; font-size:.85rem; font-weight:700; color:#111; text-decoration:none; border-bottom:2px solid #111; padding-bottom:2px; transition:color .2s,border-color .2s; white-space:nowrap; cursor:pointer; }
        .nws3-all:hover { color:#2E7D32; border-color:#2E7D32; }

        /* FEATURED — HERO BIG */
        .nws3-hero {
            display:grid; grid-template-columns:1.15fr 1fr;
            border:2px solid #111; margin-bottom:2px;
            cursor:pointer; text-decoration:none; color:inherit;
            background:#fff;
        }
        .nws3-hero-img-wrap { overflow:hidden; aspect-ratio:4/3; }
        .nws3-hero-img { width:100%; height:100%; object-fit:cover; transition:transform .6s ease; display:block; }
        .nws3-hero:hover .nws3-hero-img { transform:scale(1.04); }
        .nws3-hero-body { padding:40px 40px 36px; display:flex; flex-direction:column; justify-content:space-between; border-left:2px solid #111; }
        .nws3-tag { display:inline-block; font-size:.62rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; color:#fff; padding:5px 14px; border-radius:2px; margin-bottom:20px; }
        .nws3-hero-title { font-size:1.75rem; font-weight:900; color:#111; line-height:1.2; letter-spacing:-.02em; margin-bottom:18px; }
        .nws3-hero-desc { font-size:.95rem; color:#555; line-height:1.75; flex:1; display:-webkit-box; -webkit-line-clamp:5; -webkit-box-orient:vertical; overflow:hidden; }
        .nws3-hero-foot { display:flex; align-items:center; justify-content:space-between; margin-top:28px; padding-top:20px; border-top:1px solid #e0e0e0; flex-wrap:wrap; gap:12px; }
        .nws3-hero-meta { font-size:.78rem; color:#aaa; display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
        .nws3-src { font-weight:700; color:#333; }
        .nws3-read-btn { display:inline-flex; align-items:center; gap:6px; background:#111; color:#fff; font-size:.8rem; font-weight:700; padding:10px 22px; border-radius:2px; border:none; cursor:pointer; text-decoration:none; transition:background .2s; }
        .nws3-read-btn:hover { background:#2E7D32; color:#fff; }

        /* GRID — 4 bài nhỏ */
        .nws3-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; background:#e8e8e8; border:2px solid #111; border-top:none; margin-bottom:2px; }
        .nws3-card { background:#fff; padding:20px; cursor:pointer; text-decoration:none; color:inherit; display:block; transition:background .2s; position:relative; }
        .nws3-card:hover { background:#f5f5f5; }
        .nws3-card-num { font-size:2.5rem; font-weight:900; color:#f0f0f0; line-height:1; margin-bottom:8px; font-style:italic; }
        .nws3-card-tag { font-size:.6rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:8px; }
        .nws3-card-title { font-size:.88rem; font-weight:700; color:#111; line-height:1.45; margin-bottom:10px; display:-webkit-box; -webkit-line-clamp:4; -webkit-box-orient:vertical; overflow:hidden; }
        .nws3-card-img { width:100%; aspect-ratio:16/9; object-fit:cover; display:block; margin-bottom:12px; border-radius:2px; }
        .nws3-card-meta { font-size:.72rem; color:#bbb; display:flex; gap:6px; flex-wrap:wrap; }
        .nws3-card-src { font-weight:600; color:#888; }

        /* BOTTOM — 2 bài ngang */
        .nws3-bottom { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:#e8e8e8; border:2px solid #111; border-top:none; }
        .nws3-bcard { background:#fff; display:flex; gap:20px; padding:24px; cursor:pointer; text-decoration:none; color:inherit; transition:background .2s; align-items:flex-start; }
        .nws3-bcard:hover { background:#f8f8f8; }
        .nws3-bcard-img { width:120px; height:90px; object-fit:cover; flex-shrink:0; border-radius:2px; }
        .nws3-bcard-body {}
        .nws3-bcard-tag { font-size:.6rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin-bottom:6px; }
        .nws3-bcard-title { font-size:.9rem; font-weight:700; color:#111; line-height:1.4; margin-bottom:8px; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
        .nws3-bcard-meta { font-size:.72rem; color:#bbb; display:flex; gap:6px; }
        .nws3-bcard-src { font-weight:600; color:#888; }

        /* ANIMATION */
        .nws3-anim { opacity:0; transform:translateY(20px); transition:opacity .5s ease, transform .5s ease; }
        .nws3-anim.nws3-vis { opacity:1; transform:translateY(0); }

        /* ===== MODAL ===== */
        .nws3-modal-overlay {
            position:fixed; inset:0; background:rgba(0,0,0,.7);
            z-index:9999; display:flex; align-items:flex-start; justify-content:center;
            padding:40px 16px; overflow-y:auto;
            opacity:0; pointer-events:none;
            transition:opacity .3s ease;
        }
        .nws3-modal-overlay.open { opacity:1; pointer-events:all; }
        .nws3-modal {
            background:#fff; max-width:760px; width:100%; border-radius:0;
            border:2px solid #111; position:relative;
            transform:translateY(30px); transition:transform .3s ease;
        }
        .nws3-modal-overlay.open .nws3-modal { transform:translateY(0); }
        .nws3-modal-img { width:100%; max-height:380px; object-fit:cover; display:block; }
        .nws3-modal-body { padding:36px 40px 44px; }
        .nws3-modal-tag { display:inline-block; font-size:.62rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; color:#fff; padding:5px 14px; border-radius:2px; margin-bottom:16px; }
        .nws3-modal-title { font-size:1.7rem; font-weight:900; color:#111; line-height:1.2; letter-spacing:-.02em; margin-bottom:14px; }
        .nws3-modal-meta { font-size:.8rem; color:#aaa; display:flex; gap:12px; margin-bottom:28px; padding-bottom:20px; border-bottom:1px solid #e8e8e8; flex-wrap:wrap; }
        .nws3-modal-src { font-weight:700; color:#333; }
        .nws3-modal-content { font-size:.97rem; color:#333; line-height:1.85; }
        .nws3-modal-content h4 { font-size:1.05rem; font-weight:800; color:#111; margin:24px 0 10px; }
        .nws3-modal-content p { margin:0 0 16px; }
        .nws3-modal-content strong { color:#111; }
        .nws3-modal-close {
            position:absolute; top:16px; right:16px;
            width:36px; height:36px; background:#111; color:#fff; border:none;
            border-radius:50%; cursor:pointer; font-size:1rem;
            display:flex; align-items:center; justify-content:center;
            transition:background .2s; z-index:10;
        }
        .nws3-modal-close:hover { background:#E53935; }

        /* RESPONSIVE */
        @media(max-width:900px){
            .nws3-hero { grid-template-columns:1fr; }
            .nws3-hero-img-wrap { aspect-ratio:16/9; }
            .nws3-hero-body { border-left:none; border-top:2px solid #111; padding:24px; }
            .nws3-grid { grid-template-columns:1fr 1fr; }
            .nws3-hero-title { font-size:1.4rem; }
        }
        @media(max-width:600px){
            #news-section-root { padding:60px 0 40px; }
            .nws3-grid { grid-template-columns:1fr; }
            .nws3-bottom { grid-template-columns:1fr; }
            .nws3-modal-body { padding:24px 20px 32px; }
            .nws3-modal-title { font-size:1.3rem; }
        }
        `;
        document.head.appendChild(s);
    }

    // ============================================================
    // 4. MODAL
    // ============================================================
    function buildModal() {
        if (document.getElementById('nws3-modal-overlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'nws3-modal-overlay';
        overlay.className = 'nws3-modal-overlay';
        overlay.innerHTML = `
        <div class="nws3-modal" id="nws3-modal">
            <button class="nws3-modal-close" id="nws3-modal-close">✕</button>
            <img id="nws3-modal-img" class="nws3-modal-img" src="" alt="">
            <div class="nws3-modal-body">
                <span class="nws3-modal-tag" id="nws3-modal-tag"></span>
                <div class="nws3-modal-title" id="nws3-modal-title"></div>
                <div class="nws3-modal-meta" id="nws3-modal-meta"></div>
                <div class="nws3-modal-content" id="nws3-modal-content"></div>
            </div>
        </div>`;
        document.body.appendChild(overlay);

        const closeBtn = document.getElementById('nws3-modal-close');
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    }

    function openModal(article) {
        const overlay = document.getElementById('nws3-modal-overlay');
        const img     = document.getElementById('nws3-modal-img');
        const tagEl   = document.getElementById('nws3-modal-tag');
        const titleEl = document.getElementById('nws3-modal-title');
        const metaEl  = document.getElementById('nws3-modal-meta');
        const contEl  = document.getElementById('nws3-modal-content');

        img.src = article.img;
        img.alt = tx(article.title);
        tagEl.textContent = tx(article.tag);
        tagEl.style.background = article.tagColor;
        titleEl.textContent = tx(article.title);
        metaEl.innerHTML = `<span class="nws3-modal-src">${article.source}</span><span>·</span><span>${fmtDate(article.date)}</span><span>·</span><span>${tx(article.readTime)}</span>`;
        contEl.innerHTML = tx(article.content);

        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Scroll modal về đầu
        document.getElementById('nws3-modal').scrollTop = 0;
        overlay.scrollTop = 0;
    }

    function closeModal() {
        const overlay = document.getElementById('nws3-modal-overlay');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    // 5. BUILD HTML
    // ============================================================
    function buildHTML() {
        const featured   = newsData.find(n => n.featured) || newsData[0];
        const gridItems  = newsData.filter(n => !n.featured).slice(0, 4);
        const bottomItems= newsData.filter(n => !n.featured).slice(4);

        // Featured hero
        const heroHTML = `
        <div class="nws3-hero nws3-anim" data-id="${featured.id}">
            <div class="nws3-hero-img-wrap">
                <img class="nws3-hero-img" src="${featured.img}" alt="${tx(featured.title)}" loading="lazy">
            </div>
            <div class="nws3-hero-body">
                <div>
                    <span class="nws3-tag" style="background:${featured.tagColor}">${tx(featured.tag)}</span>
                    <div class="nws3-hero-title">${tx(featured.title)}</div>
                    <p class="nws3-hero-desc">${tx(featured.desc)}</p>
                </div>
                <div class="nws3-hero-foot">
                    <div class="nws3-hero-meta">
                        <span class="nws3-src">${featured.source}</span>
                        <span>·</span><span>${fmtDate(featured.date)}</span>
                        <span>·</span><span>${tx(featured.readTime)}</span>
                    </div>
                    <button class="nws3-read-btn" data-id="${featured.id}">
                        ${t('read')} →
                    </button>
                </div>
            </div>
        </div>`;

        // Grid 4 bài nhỏ
        const gridHTML = `
        <div class="nws3-grid">
            ${gridItems.map((item, i) => `
            <div class="nws3-card nws3-anim" data-id="${item.id}" style="transition-delay:${i*0.08}s">
                <img class="nws3-card-img" src="${item.img}" alt="${tx(item.title)}" loading="lazy" onerror="this.style.display='none'">
                <div class="nws3-card-num">${String(i+1).padStart(2,'0')}</div>
                <div class="nws3-card-tag" style="color:${item.tagColor}">${tx(item.tag)}</div>
                <div class="nws3-card-title">${tx(item.title)}</div>
                <div class="nws3-card-meta">
                    <span class="nws3-card-src">${item.source}</span>
                    <span>·</span><span>${fmtDate(item.date)}</span>
                </div>
            </div>`).join('')}
        </div>`;

        // Bottom 2 bài ngang
        const bottomHTML = bottomItems.length ? `
        <div class="nws3-bottom">
            ${bottomItems.slice(0,2).map((item, i) => `
            <div class="nws3-bcard nws3-anim" data-id="${item.id}" style="transition-delay:${i*0.1}s">
                <img class="nws3-bcard-img" src="${item.img}" alt="${tx(item.title)}" loading="lazy" onerror="this.style.display='none'">
                <div class="nws3-bcard-body">
                    <div class="nws3-bcard-tag" style="color:${item.tagColor}">${tx(item.tag)}</div>
                    <div class="nws3-bcard-title">${tx(item.title)}</div>
                    <div class="nws3-bcard-meta">
                        <span class="nws3-bcard-src">${item.source}</span>
                        <span>·</span><span>${fmtDate(item.date)}</span>
                    </div>
                </div>
            </div>`).join('')}
        </div>` : '';

        return `
        <div class="nws3-wrap">
            <div class="nws3-head">
                <div>
                    <div class="nws3-eyebrow">L-Corparation Journal</div>
                    <h2 class="nws3-h1">${t('title')} <span>${t('accent')}</span></h2>
                    <p class="nws3-sub">${t('subtitle')}</p>
                </div>
                <span class="nws3-all">${t('view_all')} →</span>
            </div>
            ${heroHTML}
            ${gridHTML}
            ${bottomHTML}
        </div>`;
    }

    // ============================================================
    // 6. RENDER & EVENTS
    // ============================================================
    function render() {
        const root = document.getElementById('news-section-root');
        if (!root) return;
        root.innerHTML = buildHTML();

        // Gắn click mở modal cho tất cả card
        root.querySelectorAll('[data-id]').forEach(el => {
            el.addEventListener('click', (e) => {
                // Nếu click vào button bên trong hero thì không double-trigger
                if (e.target.closest('.nws3-read-btn') && !el.classList.contains('nws3-read-btn')) return;
                const id = parseInt(el.dataset.id || el.closest('[data-id]')?.dataset.id);
                const article = newsData.find(a => a.id === id);
                if (article) openModal(article);
            });
        });

        requestAnimationFrame(initAnim);
    }

    // ============================================================
    // 7. ANIMATION
    // ============================================================
    function initAnim() {
        const els = document.querySelectorAll('#news-section-root .nws3-anim');
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('nws3-vis'); obs.unobserve(e.target); } });
            }, { threshold: 0.08 });
            els.forEach(el => obs.observe(el));
        } else {
            els.forEach(el => el.classList.add('nws3-vis'));
        }
    }

    // ============================================================
    // 8. PATCH setLanguage
    // ============================================================
    function patchLang() {
        if (typeof window.setLanguage === 'function') { applyPatch(); return; }
        let _s;
        Object.defineProperty(window, 'setLanguage', {
            configurable:true, enumerable:true,
            get(){ return _s; },
            set(fn){ _s=fn; applyPatch(); }
        });
    }

    function applyPatch() {
        if (window.__nws3Patched) return;
        window.__nws3Patched = true;
        const _orig = window.setLanguage;
        Object.defineProperty(window, 'setLanguage', {
            configurable:true, writable:true,
            value: function(l) { _orig(l); render(); }
        });
    }

    // ============================================================
    // 9. INIT
    // ============================================================
    function init() {
        injectStyles();
        buildModal();
        render();
        patchLang();
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();

})();