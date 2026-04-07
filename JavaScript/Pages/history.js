/**
 * L-Corparation — History Section Plugin
 * Layout: VinFast-style grid — ảnh to trên, text dưới, thanh năm ở cuối
 * + Inject nav link "Lịch sử" vào navbar (giữ nguyên)
 */

(function () {
    'use strict';

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

    // ── LABEL đa ngôn ngữ ────────────────────────────────────────
    const NAV_LABEL = { vi: 'Lịch sử', en: 'History' };
    const HEADING   = { vi: 'Lịch sử thương hiệu', en: 'Brand History' };
    const g = () => typeof window.currentLang !== 'undefined' ? window.currentLang : 'vi';
    const navLabel  = () => NAV_LABEL[g()] || NAV_LABEL.vi;
    const heading   = () => HEADING[g()] || HEADING.vi;

    // ── INJECT NAV LINK (giữ nguyên) ────────────────────────────
    function injectNavLink() {
        const existing = document.getElementById('history-nav-link');
        if (existing) { existing.textContent = navLabel(); return; }

        const navList = document.querySelector('.navbar-nav');
        if (!navList) return;

        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `<a class="nav-link" href="#history-section-root" id="history-nav-link">${navLabel()}</a>`;

        const newsTrigger = navList.querySelector('#nw7-nav-link')?.parentElement
            || [...navList.querySelectorAll('.nav-item')].find(i => i.querySelector('[data-i18n="nav_news"]'));
        const aboutTrigger = [...navList.querySelectorAll('.nav-item')].find(i => i.querySelector('[data-i18n="nav_about"]'));

        if (newsTrigger) navList.insertBefore(li, newsTrigger);
        else if (aboutTrigger) navList.insertBefore(li, aboutTrigger);
        else navList.appendChild(li);

        li.querySelector('a').addEventListener('click', e => {
            e.preventDefault();
            scrollToHistory();
        });
    }

    function scrollToHistory() {
        const section = document.getElementById('history-section-root');
        if (!section) return;
        const navbar = document.getElementById('mainNavbar');
        const offset = navbar ? navbar.offsetHeight + 8 : 70;
        const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    // ── CSS ──────────────────────────────────────────────────────
    function injectStyles() {
        if (document.getElementById('history-plugin-styles')) return;
        const style = document.createElement('style');
        style.id = 'history-plugin-styles';
        style.textContent = `
/* ── SECTION ── */
#history-section-root {
    background: #fff;
    padding: 72px 0 0;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
}

.hs-wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
}

/* ── HEADING ── */
.hs-heading {
    text-align: center;
    margin-bottom: 48px;
}

.hs-heading h2 {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 300;
    color: #111;
    letter-spacing: -0.01em;
    margin: 0;
    padding: 0;
    border: none;
}

.hs-heading h2::after { display: none; }

/* ── CARDS GRID ── */
.hs-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    overflow: hidden;
}

/* ── SINGLE CARD ── */
.hs-card {
    padding: 0 20px 32px;
    border-right: 1px solid #e8e8e8;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    cursor: default;
}

.hs-card:last-child { border-right: none; }

.hs-card.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ── CARD IMAGE ── */
.hs-card-img {
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    background: #f2f2f2;
    margin-bottom: 20px;
}

.hs-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.hs-card:hover .hs-card-img img { transform: scale(1.04); }

.hs-card-img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-size: 0.78rem;
}

/* ── CARD DATE & TEXT ── */
.hs-card-date {
    font-size: 0.95rem;
    font-weight: 400;
    color: #111;
    margin-bottom: 10px;
    letter-spacing: 0.02em;
}

.hs-card-desc {
    font-size: 0.83rem;
    color: #555;
    line-height: 1.65;
    margin: 0;
}

/* ── YEAR TIMELINE BAR ── */
.hs-timeline-bar {
    display: flex;
    align-items: center;
    margin-top: 40px;
    padding: 0 20px;
    border-top: 1px solid #e0e0e0;
    overflow-x: auto;
    scrollbar-width: none;
}

.hs-timeline-bar::-webkit-scrollbar { display: none; }

.hs-year-item {
    flex: 1;
    min-width: 60px;
    padding: 14px 0;
    text-align: center;
    font-size: 0.82rem;
    font-weight: 600;
    color: #aaa;
    cursor: pointer;
    position: relative;
    transition: color 0.2s;
    white-space: nowrap;
}

.hs-year-item::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: transparent;
    transition: background 0.2s;
}

.hs-year-item.active {
    color: #111;
}

.hs-year-item.active::before {
    background: #1a56db;
}

.hs-year-item:hover { color: #333; }

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
    .hs-grid { grid-template-columns: repeat(3, 1fr); }
    .hs-card:nth-child(3) { border-right: none; }
    .hs-card:nth-child(4) { border-right: 1px solid #e8e8e8; }
    .hs-card:nth-child(6) { border-right: none; }
}

@media (max-width: 700px) {
    #history-section-root { padding: 48px 0 0; }
    .hs-wrap { padding: 0 16px; }
    .hs-grid { grid-template-columns: repeat(2, 1fr); }
    .hs-card { border-right: 1px solid #e8e8e8; padding: 0 12px 24px; }
    .hs-card:nth-child(even) { border-right: none; }
    .hs-card:nth-child(odd)  { border-right: 1px solid #e8e8e8; }
}

@media (max-width: 420px) {
    .hs-grid { grid-template-columns: 1fr; }
    .hs-card { border-right: none; border-bottom: 1px solid #e8e8e8; padding: 0 0 20px; margin-bottom: 20px; }
    .hs-card:last-child { border-bottom: none; }
}
        `;
        document.head.appendChild(style);
    }

    // ── STATE ────────────────────────────────────────────────────
    let activeYear = null;
    // Sort newest first (like VinFast — 2023, 2022, 2021, ...)
    const sorted = [...historyData].sort((a, b) => b.year - a.year);

    // Visible 4 at a time, default = 4 newest
    let visibleStart = 0;
    const PAGE = 4;

    function currentItems() {
        return sorted.slice(visibleStart, visibleStart + PAGE);
    }

    // ── FORMAT DATE ──────────────────────────────────────────────
    function fmtDate(year) {
        // Show as "YYYY" — matching the reference image style
        return year.toString();
    }

    // ── RENDER ───────────────────────────────────────────────────
    function renderHistory() {
        const root = document.getElementById('history-section-root');
        if (!root) return;

        const items = currentItems();
        const allYears = sorted.map(d => d.year);
        const activeYr = activeYear || items[0]?.year;

        const cardsHTML = items.map((item, i) => `
        <div class="hs-card" style="transition-delay:${i * 0.07}s">
            <div class="hs-card-img">
                <img src="${item.img}" alt="${item.title}" loading="lazy"
                    onerror="this.parentElement.innerHTML='<div class=\\'hs-card-img-placeholder\\'>—</div>'">
            </div>
            <div class="hs-card-date">${item.year}.&thinsp;${item.title}</div>
            <p class="hs-card-desc">${item.desc}</p>
        </div>`).join('');

        const yearsHTML = allYears.map(y => `
        <div class="hs-year-item${y === activeYr ? ' active' : ''}" data-year="${y}">${y}</div>`).join('');

        root.innerHTML = `
        <div class="hs-wrap">
            <div class="hs-heading">
                <h2>${heading()}</h2>
            </div>
            <div class="hs-grid" id="hs-grid">${cardsHTML}</div>
            <div class="hs-timeline-bar" id="hs-bar">${yearsHTML}</div>
        </div>`;

        // Year click → jump to that year's page
        root.querySelectorAll('.hs-year-item').forEach(el => {
            el.addEventListener('click', () => {
                const yr = parseInt(el.dataset.year);
                const idx = sorted.findIndex(d => d.year === yr);
                if (idx === -1) return;
                // Show page containing that index
                visibleStart = Math.floor(idx / PAGE) * PAGE;
                activeYear = yr;
                renderHistory();
            });
        });

        // Animate cards
        requestAnimationFrame(() => {
            if ('IntersectionObserver' in window) {
                const obs = new IntersectionObserver(entries => {
                    entries.forEach(e => {
                        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
                    });
                }, { threshold: 0.08 });
                root.querySelectorAll('.hs-card').forEach(c => obs.observe(c));
            } else {
                root.querySelectorAll('.hs-card').forEach(c => c.classList.add('visible'));
            }
        });
    }

    // ── PATCH setLanguage (giữ nguyên) ──────────────────────────
    function patchLang() {
        if (typeof window.setLanguage === 'function') { applyPatch(); return; }
        let _s;
        Object.defineProperty(window, 'setLanguage', {
            configurable: true, enumerable: true,
            get() { return _s; },
            set(fn) { _s = fn; applyPatch(); }
        });
    }

    function applyPatch() {
        if (window.__historyPatched) return;
        window.__historyPatched = true;
        const _orig = window.setLanguage;
        Object.defineProperty(window, 'setLanguage', {
            configurable: true, writable: true,
            value(lang) {
                _orig(lang);
                renderHistory();
                injectNavLink();
            }
        });
    }

    // ── INIT ─────────────────────────────────────────────────────
    function init() {
        injectStyles();
        renderHistory();
        if (document.querySelector('.navbar-nav')) {
            injectNavLink();
        } else {
            setTimeout(injectNavLink, 500);
        }
        patchLang();
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();
})();