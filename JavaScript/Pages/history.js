/**
 * L-Corparation — History Section Plugin
 * ----------------------------------------
 * CÁCH DÙNG: Chỉ cần thêm vào index.html, KHÔNG sửa file nào khác.
 *
 * 1. Thêm thẻ này vào HTML (sau #featured-scooters):
 *    <section id="history-section-root"></section>
 *
 * 2. Thêm script trước </body> (sau main.js):
 *    <script src="../JavaScript/Pages/history.js"></script>
 */

(function () {
    'use strict';

    // ============================================================
    // 1. DỮ LIỆU — chỉnh sửa ở đây nếu muốn thêm/sửa mốc lịch sử
    // ============================================================
    const historyData = [
        {
            year: 2017,
            img: '../Data/Images/History/image.png',
            title: 'Khởi nguồn',
            desc: 'L-Corparation được thành lập với tầm nhìn xây dựng hệ sinh thái năng lượng xanh tại Việt Nam, đặt nền móng cho cuộc cách mạng xe điện.'
        },
        {
            year: 2019,
            img: '../Data/Images/History/image copy.png',
            title: 'Ra mắt dòng xe đầu tiên',
            desc: 'Mẫu xe điện đầu tiên chính thức ra mắt thị trường, nhận được phản hồi tích cực từ người tiêu dùng Việt Nam.'
        },
        {
            year: 2021,
            img: '../Data/Images/History/image copy 2.png',
            title: 'Mở rộng quy mô',
            desc: 'Mở rộng mạng lưới phân phối ra 30 tỉnh thành, ra mắt thêm 3 mẫu xe mới và đạt mốc 10.000 xe bàn giao.'
        },
        {
            year: 2022,
            img: '../Data/Images/History/image copy 3.png',
            title: 'Hệ thống sạc toàn quốc',
            desc: 'Triển khai hơn 500 trạm sạc trên toàn quốc, giải quyết bài toán hạ tầng — rào cản lớn nhất của xe điện tại Việt Nam.'
        },
        {
            year: 2023,
            img: '../Data/Images/History/image copy 8.png',
            title: 'Bước ra thế giới',
            desc: 'Lần đầu xuất khẩu xe điện sang thị trường Đông Nam Á và bắt đầu hành trình chinh phục thị trường quốc tế.'
        },
        {
            year: 2024,
            img: '../Data/Images/History/image copy 9.png',
            title: 'Công nghệ AI tích hợp',
            desc: 'Ra mắt thế hệ xe mới tích hợp AI — tự lái cấp độ 2, nhận diện giọng nói tiếng Việt và hệ thống dự đoán bảo dưỡng thông minh.'
        },
        {
            year: 2025,
            img: '../Data/Images/History/image copy 7.png',
            title: 'Dẫn đầu thị trường',
            desc: 'L-Corparation trở thành thương hiệu xe điện số 1 Việt Nam với hơn 100.000 xe lưu thông trên đường, khẳng định vị thế tiên phong.'
        },
        {
            year: 2026,
            img: '../Data/Images/History/image copy 5.png',
            title: 'Tương lai xanh',
            desc: 'Khởi động dự án nhà máy pin thể rắn thế hệ mới, hướng tới mục tiêu trung hoà carbon vào năm 2030 và định hình lại ngành giao thông Việt Nam.'
        }
    ];

    // ============================================================
    // 2. CSS — inject vào <head>, không cần file .css riêng
    // ============================================================
    function injectStyles() {
        if (document.getElementById('history-plugin-styles')) return;

        const style = document.createElement('style');
        style.id = 'history-plugin-styles';
        style.textContent = `
            /* ===== History Section ===== */
            #history-section-root {
                background: #0a0a0a14;
                padding: 100px 0 80px;
                overflow: hidden;
                position: relative;
            }

            #history-section-root::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent, #4CAF50, transparent);
            }

            .history-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
            }

            /* --- Tiêu đề section --- */
            .history-header {
                text-align: center;
                margin-bottom: 72px;
            }

            .history-header h2 {
                font-size: clamp(2rem, 5vw, 3.2rem);
                font-weight: 700;
                color: #ffffff;
                letter-spacing: -0.02em;
                margin-bottom: 16px;
                line-height: 1.1;
            }

            .history-header h2 span {
                color: #4a8f4d;
            }

            .history-header p {
                font-size: 1.1rem;
                color: #9e9e9e;
                max-width: 535px;
                margin: 0 auto;
                line-height: 1.6;
            }

            /* --- Timeline wrapper --- */
            .history-timeline {
                position: relative;
                padding: 0 0 40px;
            }

            /* Đường thẳng dọc giữa */
            .history-timeline::before {
                content: '';
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(to bottom, transparent, #2E7D32 8%, #2E7D32 92%, transparent);
                transform: translateX(-50%);
            }

            /* --- Mỗi mốc lịch sử --- */
            .history-item {
                display: grid;
                grid-template-columns: 1fr 60px 1fr;
                gap: 0;
                margin-bottom: 80px;
                align-items: center;
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }

            .history-item.visible {
                opacity: 1;
                transform: translateY(0);
            }

            /* Item lẻ: nội dung bên trái, ảnh bên phải */
            .history-item:nth-child(odd) .history-content { order: 1; text-align: right; padding-right: 48px; background: #f5deb333 }
            .history-item:nth-child(odd) .history-dot    { order: 2; }
            .history-item:nth-child(odd) .history-image  { order: 3; }

            /* Item chẵn: ảnh bên trái, nội dung bên phải */
            .history-item:nth-child(even) .history-image  { order: 1; }
            .history-item:nth-child(even) .history-dot    { order: 2; }
            .history-item:nth-child(even) .history-content { order: 3; text-align: left; padding-left: 48px; background: #f5deb333 }

            /* --- Dot giữa timeline --- */
            .history-dot {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                position: relative;
                z-index: 1;
            }

            .history-dot-circle {
                width: 16px;
                height: 16px;
                background: #4CAF50;
                border-radius: 50%;
                border: 3px solid #0a0a0a87;
                box-shadow: 0 0 0 3px #217e26, 0 0 16px rgb(76 175 80 / 68%);
                flex-shrink: 0;
            }

            .history-year-badge {
                background: #1B5E20;
                color: #4CAF50;
                font-size: 0.75rem;
                font-weight: 700;
                padding: 3px 10px;
                border-radius: 20px;
                letter-spacing: 0.05em;
                white-space: nowrap;
            }

            /* --- Nội dung text --- */
            .history-content {
                padding: 28px 32px;
                background: #111;
                border: 1px solid #1e1e1e;
                border-radius: 12px;
                transition: border-color 0.3s ease, transform 0.3s ease;
            }

            .history-content:hover {
                border-color: #2E7D32;
                transform: translateY(-4px);
            }

            .history-content-title {
                font-size: 1.25rem;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 10px;
                line-height: 1.3;
            }

            .history-content-desc {
                font-size: 0.95rem;
                color: #9e9e9e;
                line-height: 1.7;
                margin: 0;
            }

            /* --- Ảnh minh hoạ --- */
            .history-image {
                border-radius: 12px;
                overflow: hidden;
                background: #111;
                border: 1px solid #1e1e1e;
                aspect-ratio: 16/9;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .history-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                background: white;
                transition: transform 0.5s ease;
            }

            .history-image:hover img {
                transform: scale(1.04);
            }

            .history-img-placeholder {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                color: #444;
                font-size: 0.85rem;
                padding: 32px;
                text-align: center;
            }

            .history-img-placeholder svg {
                width: 40px;
                height: 40px;
                opacity: 0.4;
            }

            /* --- Responsive Mobile --- */
            @media (max-width: 768px) {
                #history-section-root { padding: 64px 0 48px; }

                .history-timeline::before {
                    left: 20px;
                }

                .history-item {
                    grid-template-columns: 40px 1fr;
                    grid-template-rows: auto auto;
                    margin-bottom: 48px;
                    gap: 0 16px;
                }

                .history-item:nth-child(odd) .history-content,
                .history-item:nth-child(even) .history-content {
                    order: 2; text-align: left;
                    padding: 20px; grid-column: 2;
                    grid-row: 1;
                }

                .history-item:nth-child(odd) .history-dot,
                .history-item:nth-child(even) .history-dot {
                    order: 1; grid-column: 1; grid-row: 1;
                    align-items: flex-start; padding-top: 24px;
                }

                .history-item:nth-child(odd) .history-image,
                .history-item:nth-child(even) .history-image {
                    order: 3; grid-column: 2; grid-row: 2;
                    margin-top: 12px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================================
    // 3. RENDER
    // ============================================================
    function renderHistory() {
        const root = document.getElementById('history-section-root');
        if (!root) return;

        const itemsHTML = historyData.map((item) => {
            const imageHTML = `
                <div class="history-image">
                    <img
                        src="${item.img}"
                        alt="${item.title} ${item.year}"
                        loading="lazy"
                        onerror="this.parentElement.innerHTML='<div class=\\'history-img-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><polyline points=\\'21 15 16 10 5 21\\'/></svg><span>Hình ảnh sắp có</span></div>'"
                    >
                </div>
            `;

            const contentHTML = `
                <div class="history-content">
                    <div class="history-content-title">${item.title}</div>
                    <p class="history-content-desc">${item.desc}</p>
                </div>
            `;

            const dotHTML = `
                <div class="history-dot">
                    <div class="history-dot-circle"></div>
                    <span class="history-year-badge">${item.year}</span>
                </div>
            `;

            return `<div class="history-item">${imageHTML}${dotHTML}${contentHTML}</div>`;
        }).join('');

        root.innerHTML = `
            <div class="history-container">
                <div class="history-header">
                    <h2><span>Hành Trình</span> Hình Thành</h2>
                    <p>Từ một ý tưởng táo bạo đến thương hiệu xe điện dẫn đầu Việt Nam</p>
                </div>
                <div class="history-timeline">
                    ${itemsHTML}
                </div>
            </div>
        `;

        initScrollAnimation();
    }

    // ============================================================
    // 4. ANIMATION — hiện item khi scroll tới
    // ============================================================
    function initScrollAnimation() {
        const items = document.querySelectorAll('.history-item');
        if (!items.length) return;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('visible'), 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            items.forEach(item => observer.observe(item));
        } else {
            items.forEach(item => item.classList.add('visible'));
        }
    }

    // ============================================================
    // 5. KHỞI ĐỘNG
    // ============================================================
    function init() {
        injectStyles();
        renderHistory();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();