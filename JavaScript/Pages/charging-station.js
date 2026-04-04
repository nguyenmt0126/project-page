/**
 * L-Corparation — Charging Station Section Plugin v3
 * ---------------------------------------------------
 * 1. Thêm vào HTML: <section id="cs-root"></section>
 * 2. Thêm script trước </body>:
 *    <script src="../JavaScript/Pages/charging-station.js"></script>
 */

// Bọc toàn bộ trong IIFE để tránh biến bị leak ra global scope
(function () {
    'use strict';

    // ============================================================
    // DỮ LIỆU — sửa nội dung trụ sạc tại đây
    // ============================================================
    const csData = {
        car: {
            tab: 'Ô Tô Điện',
            sectionTitle: 'Các loại trụ sạc công cộng cho Ô tô điện',
            sectionSub: 'L-Corporation cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của Khách hàng một cách thuận tiện nhất.',
            types: [
                {
                    img: '../Data/Images/charging/image copy 6.png',       // đường dẫn ảnh tính từ index.html
                    name: 'Trụ sạc ô tô – Sạc siêu nhanh DC 250kW',
                    desc: 'Thiết bị sạc Ô tô điện DC 250kW cung cấp nguồn điện một chiều sạc trực tiếp cho pin, thiết kế dạng tủ đứng, 1 cổng sạc, công suất 250kW.',
                    specs: [
                        { label: 'Kiểu dáng',          value: 'Tủ đứng' },
                        { label: 'Điện áp hoạt động',  value: '400VAC ± 10%, 3 pha' },
                        { label: 'Điện áp đầu ra',     value: '200–1000 VDC' },
                        { label: 'Công suất',          value: '250 kW/cổng sạc' },
                        { label: 'Số lượng đầu ra',    value: '1 cổng/trụ sạc' },
                        { label: 'Nhiệt độ hoạt động', value: '-30°C đến 55°C' },
                        { label: 'Bảo vệ',             value: 'Quá tải/quá nhiệt/ngắn mạch/IP54' }
                    ]
                },
                {
                    img: '../Data/Images/Charging/image copy 7.png',
                    name: 'Trụ sạc ô tô – Sạc siêu nhanh DC 150kW',
                    desc: 'Thiết kế dạng tủ đứng, mỗi thiết bị được trang bị 2 cổng sạc, công suất sạc có thể lên tới 150kW.',
                    specs: [
                        { label: 'Kiểu dáng',         value: 'Tủ đứng' },
                        { label: 'Điện áp hoạt động', value: '3 pha, 304–456 VAC' },
                        { label: 'Điện áp đầu ra',    value: '200–1000 VDC' },
                        { label: 'Tần số hoạt động',  value: '50 ± 5% Hz' },
                        { label: 'Công suất',         value: '150kW/cổng sạc' },
                        { label: 'Số lượng đầu ra',   value: '2 cổng/trụ sạc' },
                        { label: 'Bảo vệ',            value: 'Quá tải/quá nhiệt/ngắn mạch/IP54' }
                    ]
                },
                {
                    img: '../Data/Images/Charging/image copy 8.png',
                    name: 'Trụ sạc ô tô – Sạc nhanh DC 60kW',
                    desc: 'Thiết kế dạng tủ đứng, mỗi thiết bị được trang bị 2 cổng sạc, công suất 60 kW/1 cổng sạc.',
                    specs: [
                        { label: 'Kiểu dáng',         value: 'Tủ đứng' },
                        { label: 'Điện áp hoạt động', value: '3 pha, 304–456 VAC' },
                        { label: 'Tần số hoạt động',  value: '50 ± 5% Hz' },
                        { label: 'Điện áp đầu ra',    value: '200–1000 VDC' },
                        { label: 'Công suất',         value: '60 kW/cổng sạc' },
                        { label: 'Số lượng đầu ra',   value: '2 cổng/trụ sạc' },
                        { label: 'Bảo vệ',            value: 'Quá tải/quá nhiệt/ngắn mạch/IP54' }
                    ]
                },
                {
                    img: '../Data/Images/Charging/image copy 10.png',
                    name: 'Trụ sạc ô tô – Sạc nhanh DC 30kW',
                    desc: 'Trụ sạc DC Ô tô điện dùng tại điểm dừng nghỉ, bãi đỗ xe công cộng. Kiểu treo tường hoặc tủ đứng linh hoạt.',
                    specs: [
                        { label: 'Kiểu dáng',         value: 'Treo tường & Tủ đứng' },
                        { label: 'Điện áp hoạt động', value: '3 pha, 304–456 VAC' },
                        { label: 'Tần số hoạt động',  value: '50 ± 5% Hz' },
                        { label: 'Công suất',         value: '30 kW/cổng sạc' },
                        { label: 'Giao thức',         value: 'CAN Protocol' },
                        { label: 'Số lượng đầu ra',   value: '1 cổng/trụ sạc' },
                        { label: 'Bảo vệ',            value: 'Quá tải/quá nhiệt/ngắn mạch/IP54' }
                    ]
                }
            ]
        },
        bike: {
            tab: 'Xe Máy Điện',
            sectionTitle: 'Các loại trụ sạc công cộng cho Xe máy điện',
            sectionSub: 'L-Corporation cung cấp giải pháp sạc thông minh, tiện lợi cho xe máy điện — phủ khắp khu dân cư, trường học, văn phòng trên toàn quốc.',
            types: [
                {
                    img: '../Data/Images/Charging/image.png',
                    name: 'Trạm đổi pin – Swap Station',
                    desc: 'Công nghệ đổi pin thông minh — thay pin đầy trong vòng 60 giây, không cần chờ sạc. Phù hợp cho người dùng cần di chuyển liên tục.',
                    specs: [
                        { label: 'Kiểu dáng',         value: 'Tủ đứng ngoài trời' },
                        { label: 'Số ngăn pin',       value: '10–20 ngăn/trạm' },
                        { label: 'Thời gian đổi pin', value: '< 60 giây' },
                        { label: 'Kết nối',           value: '4G / Wi-Fi' },
                        { label: 'Thanh toán',        value: 'App / QR Code' },
                        { label: 'Hoạt động',         value: '24/7' },
                        { label: 'Bảo vệ',            value: 'Chống nước IP55' }
                    ]
                },
                {
                    img: '../Data/Images/Charging/image copy.png',
                    name: 'Trụ sạc xe máy – Sạc nhanh 3,3kW',
                    desc: 'Trụ sạc AC tiêu chuẩn cho xe máy điện, sạc đầy trong khoảng 2 giờ. Thiết kế gọn, lắp đặt linh hoạt tại nhiều địa điểm.',
                    specs: [
                        { label: 'Kiểu dáng',         value: 'Treo tường / Cột đứng' },
                        { label: 'Điện áp hoạt động', value: '220VAC, 1 pha' },
                        { label: 'Công suất',         value: '3,3 kW/cổng' },
                        { label: 'Số cổng sạc',       value: '2–4 cổng/trụ' },
                        { label: 'Thời gian sạc',     value: '~2 giờ đầy pin' },
                        { label: 'Kết nối',           value: '4G / Wi-Fi' },
                        { label: 'Bảo vệ',            value: 'Quá tải/IP54' }
                    ]
                },
                {
                    img: '../Data/Images/Charging/image copy 2.png',
                    name: 'Trụ sạc tại nhà – Home Charger',
                    desc: 'Giải pháp sạc tại nhà tiện lợi, lắp đặt đơn giản. Sạc qua đêm là đủ năng lượng cho cả ngày di chuyển.',
                    specs: [
                        { label: 'Kiểu dáng',         value: 'Treo tường' },
                        { label: 'Điện áp hoạt động', value: '220VAC, 1 pha' },
                        { label: 'Công suất',         value: '1,5 kW/cổng' },
                        { label: 'Số cổng sạc',       value: '1 cổng/thiết bị' },
                        { label: 'Thời gian sạc',     value: '~4–6 giờ đầy pin' },
                        { label: 'Cáp sạc',           value: 'Tích hợp sẵn 1,5m' },
                        { label: 'Bảo vệ',            value: 'Quá nhiệt/ngắn mạch' }
                    ]
                },
                {
                    img: '../Data/Images/Charging/image copy 3.png',
                    name: 'Trụ sạc cộng đồng – Multi Port 6,6kW',
                    desc: 'Trụ sạc nhiều cổng dành cho khu chung cư, bãi đỗ xe, văn phòng. Quản lý thông minh qua app, chia sẻ dễ dàng.',
                    specs: [
                        { label: 'Kiểu dáng',         value: 'Cột đứng ngoài trời' },
                        { label: 'Điện áp hoạt động', value: '220VAC, 1 pha' },
                        { label: 'Công suất',         value: '6,6 kW tổng' },
                        { label: 'Số cổng sạc',       value: '4–6 cổng/trụ' },
                        { label: 'Quản lý',           value: 'App + màn hình LCD' },
                        { label: 'Thanh toán',        value: 'App / QR / Thẻ' },
                        { label: 'Bảo vệ',            value: 'Quá tải/IP55' }
                    ]
                }
            ]
        }
    };

    // ============================================================
    // CSS — inject thẳng vào <head>, không cần file .css riêng
    // ============================================================
    function injectStyles() {
        // Kiểm tra nếu đã inject rồi thì thôi, tránh bị trùng
        if (document.getElementById('cs-plugin-styles')) return;

        const style = document.createElement('style');
        style.id = 'cs-plugin-styles';
        style.textContent = `
            #cs-root { background: #fff; font-family: inherit; }

            /* ── Tab bar ── */
            .cs-tabbar {
                background: #f5f7fa;
                border-bottom: 2px solid #e5e8ef;
                display: flex;
                justify-content: center;
                padding: 0 24px;
            }
            .cs-tabbar-btn {
                padding: 18px 44px;
                font-size: 1rem;
                font-weight: 600;
                color: #666;
                background: none;
                border: none;
                border-bottom: 3px solid transparent;
                margin-bottom: -2px;   /* che border-bottom của tabbar */
                cursor: pointer;
                transition: all 0.25s;
                display: flex;
                align-items: center;
                gap: 8px;
                outline: none;
            }
            .cs-tabbar-btn svg { width: 20px; height: 20px; flex-shrink: 0; }
            .cs-tabbar-btn:hover { color: #1565C0; }
            .cs-tabbar-btn.active { color: #1565C0; border-bottom-color: #1565C0; }

            /* ── Hiện/ẩn tab content ── */
            .cs-tab-pane { display: none; }
            .cs-tab-pane.active { display: block; animation: csFadeUp 0.35s ease; }
            @keyframes csFadeUp {
                from { opacity: 0; transform: translateY(12px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            /* ── Tiêu đề section ── */
            .cs-section-header {
                text-align: center;
                padding: 64px 24px 40px;
                max-width: 860px;
                margin: 0 auto;
            }
            .cs-section-header h2 {
                font-size: clamp(1.5rem, 3.5vw, 2.2rem);
                font-weight: 700;
                color: #111;
                margin-bottom: 12px;
                line-height: 1.25;
            }
            .cs-section-header p { color: #666; font-size: 0.95rem; line-height: 1.6; }

            /* ── Grid 4 cột ── */
            .cs-cards-wrap {
                max-width: 1280px;
                margin: 0 auto;
                padding: 0 24px 72px;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 24px;
            }

            /* ── Card ── */
            .cs-card {
                border: 1px solid #e2e6f0;
                border-radius: 12px;
                overflow: hidden;
                background: #fff;
                /* Ban đầu ẩn, chờ scroll tới mới hiện (xem initAnim) */
                opacity: 0;
                transform: translateY(20px);
            }
            .cs-card.visible {
                opacity: 1;
                transform: translateY(0);
                transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease;
            }
            .cs-card:hover { box-shadow: 0 8px 28px rgba(21,101,192,0.13); transform: translateY(-4px); }

            /* ── Phần ảnh — cursor zoom-in để người dùng biết có thể click ── */
            .cs-card-img-wrap {
                background: #eef2f8;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                cursor: zoom-in;
                position: relative;
            }
            .cs-card-img {
                max-height: 180px;
                max-width: 90%;
                object-fit: contain;
                transition: transform 0.4s ease;
                pointer-events: none; /* tránh ảnh chặn click của wrap */
            }
            .cs-card-img-wrap:hover .cs-card-img { transform: scale(1.08); }

            /* ── Badge "Phóng to" hiện khi hover ── */
            .cs-zoom-hint {
                position: absolute;
                bottom: 8px; right: 8px;
                background: rgba(0,0,0,0.5);
                color: #fff;
                border-radius: 6px;
                padding: 4px 8px;
                font-size: 0.7rem;
                display: flex;
                align-items: center;
                gap: 4px;
                opacity: 0;
                transition: opacity 0.2s;
                pointer-events: none;
            }
            .cs-zoom-hint svg { width: 12px; height: 12px; stroke: #fff; fill: none; }
            .cs-card-img-wrap:hover .cs-zoom-hint { opacity: 1; }

            /* ── Placeholder khi ảnh bị lỗi ── */
            .cs-img-placeholder {
                width: 100%; height: 100%;
                display: flex; align-items: center; justify-content: center;
                background: #eef2f8;
            }
            .cs-img-placeholder svg { width: 48px; height: 48px; stroke: #bbb; fill: none; }

            /* ── Nội dung card ── */
            .cs-card-body { padding: 18px 20px 22px; }
            .cs-card-name { font-size: 0.92rem; font-weight: 700; color: #111; margin-bottom: 8px; line-height: 1.4; }
            .cs-card-desc { font-size: 0.8rem; color: #666; line-height: 1.6; margin-bottom: 14px; }

            /* ── Bảng thông số kỹ thuật ── */
            .cs-specs { width: 100%; border-collapse: collapse; font-size: 0.76rem; }
            .cs-specs tr { border-top: 1px solid #f0f2f8; }
            .cs-specs td { padding: 5px 4px; vertical-align: top; }
            .cs-specs td:first-child { color: #999; width: 50%; }  /* cột label */
            .cs-specs td:last-child  { color: #222; font-weight: 500; }  /* cột giá trị */

            /* ── Lightbox ── */
            .cs-lightbox {
                position: fixed;
                inset: 0;           /* full màn hình */
                z-index: 99999;     /* luôn nằm trên cùng */
                display: none;
                align-items: center;
                justify-content: center;
                background: rgba(0,0,0,0);
                transition: background 0.3s ease;
                cursor: zoom-out;
            }
            .cs-lightbox.open {
                display: flex;
                background: rgba(0,0,0,0.85);
            }
            .cs-lightbox-inner {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 14px;
                /* Animation scale khi mở */
                transform: scale(0.88);
                opacity: 0;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }
            .cs-lightbox.open .cs-lightbox-inner {
                transform: scale(1);
                opacity: 1;
            }
            .cs-lightbox-img {
                max-width: 88vw;
                max-height: 80vh;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 24px 80px rgba(0,0,0,0.6);
                display: block;
                cursor: default;
                background: #fff;
            }
            .cs-lightbox-caption {
                color: #ccc;
                font-size: 0.88rem;
                text-align: center;
                max-width: 600px;
                line-height: 1.5;
            }
            .cs-lightbox-close {
                position: absolute;
                top: -46px; right: 0;
                background: rgba(255,255,255,0.15);
                border: none;
                color: #fff;
                width: 36px; height: 36px;
                border-radius: 50%;
                font-size: 1.1rem;
                cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                transition: background 0.2s;
                line-height: 1;
            }
            .cs-lightbox-close:hover { background: rgba(255,255,255,0.3); }

            /* ── Responsive ── */
            @media (max-width: 1100px) { .cs-cards-wrap { grid-template-columns: repeat(2,1fr); } }
            @media (max-width: 600px)  { .cs-cards-wrap { grid-template-columns: 1fr; } }
            @media (max-width: 768px)  { .cs-tabbar-btn { padding: 14px 22px; font-size: 0.9rem; } }
        `;
        document.head.appendChild(style);
    }

    // ============================================================
    // LIGHTBOX — tạo DOM 1 lần duy nhất, tái sử dụng cho mọi ảnh
    // ============================================================
    function createLightbox() {
        // Nếu đã tạo rồi thì bỏ qua
        if (document.getElementById('cs-lightbox')) return;

        const lb = document.createElement('div');
        lb.id = 'cs-lightbox';
        lb.className = 'cs-lightbox';

        const inner = document.createElement('div');
        inner.className = 'cs-lightbox-inner';

        // Nút X để đóng
        const closeBtn = document.createElement('button');
        closeBtn.className = 'cs-lightbox-close';
        closeBtn.textContent = '✕';
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // không cho click lan ra nền (tránh đóng 2 lần)
            closeLightbox();
        });

        const img = document.createElement('img');
        img.id = 'cs-lb-img';
        img.className = 'cs-lightbox-img';
        img.addEventListener('click', function (e) {
            e.stopPropagation(); // click vào ảnh không đóng lightbox
        });

        // Tên trụ sạc hiện bên dưới ảnh
        const cap = document.createElement('div');
        cap.id = 'cs-lb-cap';
        cap.className = 'cs-lightbox-caption';

        inner.appendChild(closeBtn);
        inner.appendChild(img);
        inner.appendChild(cap);
        lb.appendChild(inner);

        // Click ra ngoài ảnh (vùng tối) → đóng
        lb.addEventListener('click', closeLightbox);

        // Nhấn ESC → đóng
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });

        document.body.appendChild(lb);
    }

    function openLightbox(src, name) {
        const lb  = document.getElementById('cs-lightbox');
        const img = document.getElementById('cs-lb-img');
        const cap = document.getElementById('cs-lb-cap');
        if (!lb || !img) return;

        img.src = src;
        img.alt = name;
        cap.textContent = name;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden'; // khoá scroll trang khi lightbox mở
    }

    function closeLightbox() {
        const lb = document.getElementById('cs-lightbox');
        if (!lb) return;
        lb.classList.remove('open');
        document.body.style.overflow = ''; // trả lại scroll cho trang
    }

    // ============================================================
    // PLACEHOLDER — hiện khi ảnh bị lỗi (404 hoặc chưa có file)
    // ============================================================
    function createPlaceholder() {
        const wrap = document.createElement('div');
        wrap.className = 'cs-img-placeholder';
        // Dùng innerHTML cho SVG tĩnh này vì không có dữ liệu động, an toàn
        wrap.innerHTML = '<svg viewBox="0 0 24 24" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
        return wrap;
    }

    // ============================================================
    // TẠO CARD — dùng createElement thay vì innerHTML
    // (tránh lỗi dấu > trong SVG bị browser parse nhầm)
    // ============================================================
    function createCard(t) {
        const card = document.createElement('div');
        card.className = 'cs-card';

        // -- Phần ảnh --
        const imgWrap = document.createElement('div');
        imgWrap.className = 'cs-card-img-wrap';
        imgWrap.title = 'Nhấn để phóng to';

        const img = document.createElement('img');
        img.className = 'cs-card-img';
        img.src = t.img;
        img.alt = t.name;
        img.loading = 'lazy'; // lazy load: chỉ tải khi sắp vào viewport
        img.addEventListener('error', function () {
            // Ảnh lỗi → thay bằng placeholder, bỏ cursor zoom
            imgWrap.replaceChild(createPlaceholder(), img);
            imgWrap.style.cursor = 'default';
        });
        imgWrap.appendChild(img);

        // Badge "Phóng to" góc dưới phải
        const hint = document.createElement('div');
        hint.className = 'cs-zoom-hint';
        hint.innerHTML = '<svg viewBox="0 0 24 24" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>Phóng to';
        imgWrap.appendChild(hint);

        // Click vào ảnh → mở lightbox
        imgWrap.addEventListener('click', function () {
            // Chỉ mở nếu ảnh vẫn còn trong DOM (chưa bị thay bằng placeholder)
            if (document.contains(img)) {
                openLightbox(t.img, t.name);
            }
        });

        // -- Phần nội dung --
        const body = document.createElement('div');
        body.className = 'cs-card-body';

        const name = document.createElement('div');
        name.className = 'cs-card-name';
        name.textContent = t.name;

        const desc = document.createElement('div');
        desc.className = 'cs-card-desc';
        desc.textContent = t.desc;

        // Bảng thông số kỹ thuật
        const table = document.createElement('table');
        table.className = 'cs-specs';
        t.specs.forEach(function (s) {
            const tr  = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.textContent = s.label;
            const td2 = document.createElement('td');
            td2.textContent = s.value;
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
        });

        body.appendChild(name);
        body.appendChild(desc);
        body.appendChild(table);
        card.appendChild(imgWrap);
        card.appendChild(body);
        return card;
    }

    // ============================================================
    // RENDER PANE — tạo nội dung cho 1 tab (header + grid card)
    // ============================================================
    function renderPane(key) {
        const d = csData[key];

        const pane = document.createElement('div');
        pane.className = 'cs-tab-pane active';
        pane.id = 'cs-pane-' + key;

        const header = document.createElement('div');
        header.className = 'cs-section-header';
        header.innerHTML = '<h2>' + d.sectionTitle + '</h2><p>' + d.sectionSub + '</p>';

        const grid = document.createElement('div');
        grid.className = 'cs-cards-wrap';
        d.types.forEach(function (t) { grid.appendChild(createCard(t)); });

        pane.appendChild(header);
        pane.appendChild(grid);
        return pane;
    }

    // ============================================================
    // RENDER ROOT — dựng toàn bộ section vào #cs-root
    // ============================================================
    function render() {
        const root = document.getElementById('cs-root');
        if (!root) return;
        root.innerHTML = ''; // xoá sạch trước khi render lại

        // -- Tab bar --
        const tabbar = document.createElement('div');
        tabbar.className = 'cs-tabbar';

        const carIcon  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1l2-4h12l2 4h1a2 2 0 012 2v6a2 2 0 01-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></svg>';
        const bikeIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6h-5l-3 6h10l-1-4h-4"/><path d="M12 6V3"/></svg>';

        [
            { key: 'car',  label: 'Ô Tô Điện',  icon: carIcon  },
            { key: 'bike', label: 'Xe Máy Điện', icon: bikeIcon }
        ].forEach(function (def, i) {
            const btn = document.createElement('button');
            btn.className = 'cs-tabbar-btn' + (i === 0 ? ' active' : '');
            btn.dataset.tab = def.key; // lưu key để bindTabs đọc
            btn.innerHTML = def.icon + ' ' + def.label;
            tabbar.appendChild(btn);
        });

        const panesWrap = document.createElement('div');
        panesWrap.className = 'cs-panes';
        panesWrap.appendChild(renderPane('car')); // mặc định hiện tab ô tô trước

        root.appendChild(tabbar);
        root.appendChild(panesWrap);

        bindTabs(panesWrap);
        initAnim();
    }

    // ============================================================
    // BIND TABS — xử lý click chuyển tab
    // ============================================================
    function bindTabs(panesWrap) {
        document.querySelectorAll('.cs-tabbar-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const key = btn.dataset.tab;

                // Bỏ active tất cả, gán lại cho btn được click
                document.querySelectorAll('.cs-tabbar-btn').forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');

                // Render lại nội dung tab mới
                panesWrap.innerHTML = '';
                panesWrap.appendChild(renderPane(key));
                initAnim(); // khởi động lại animation cho card mới
            });
        });
    }

    // ============================================================
    // ANIMATION — card fade in khi scroll tới (không dùng CSS đơn thuần
    // vì cần delay theo thứ tự từng card)
    // ============================================================
    function initAnim() {
        const cards = document.querySelectorAll('.cs-card');
        if (!cards.length) return;

        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (e, i) {
                    if (e.isIntersecting) {
                        // Delay mỗi card 80ms để tạo hiệu ứng lần lượt
                        setTimeout(function () { e.target.classList.add('visible'); }, i * 80);
                        obs.unobserve(e.target); // quan sát 1 lần là đủ
                    }
                });
            }, { threshold: 0.1 }); // kích hoạt khi 10% card vào viewport

            cards.forEach(function (c) { obs.observe(c); });
        } else {
            // Trình duyệt cũ không hỗ trợ IntersectionObserver → hiện hết luôn
            cards.forEach(function (c) { c.classList.add('visible'); });
        }
    }

    // ============================================================
    // INIT — điểm khởi động, gọi theo đúng thứ tự
    // ============================================================
    function init() {
        injectStyles();   // 1. inject CSS
        createLightbox(); // 2. tạo lightbox DOM (gắn vào body)
        render();         // 3. render section vào #cs-root
    }

    // Chờ DOM sẵn sàng rồi mới chạy
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init(); // DOM đã sẵn sàng (script đặt cuối body)
    }

})();