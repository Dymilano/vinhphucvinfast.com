// ===== NEWS MANAGEMENT JAVASCRIPT =====

class NewsManager {
    constructor() {
        this.news = [];
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.init();
    }

    init() {
        this.loadNews();
        this.setupEventListeners();
    }

    // Load news from localStorage (from admin panel)
    loadNews() {
        const storedNews = localStorage.getItem('vinfast_news');
        if (storedNews) {
            this.news = JSON.parse(storedNews);
        } else {
            // Fallback to sample data if no admin data
            this.news = this.getSampleNews();
        }
        
        // Filter only published news
        this.news = this.news.filter(item => item.status === 'published');
        
        // Sort by published date (newest first)
        this.news.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
        
        this.renderNews();
    }

    // Sample news data as fallback
    getSampleNews() {
        return [
            {
                id: 1,
                title: 'VinFast VF 9 - SUV điện cao cấp mới nhất',
                content: 'VinFast VF 9 là mẫu SUV điện cao cấp mới nhất với công nghệ tiên tiến và thiết kế sang trọng. Xe được trang bị pin 106.0 kWh, quãng đường lên đến 700km và công suất 400 kW.',
                excerpt: 'SUV điện cao cấp mới nhất với công nghệ tiên tiến',
                author: 'VinFast Vĩnh Yên',
                image: 'images/vf9/vinfast-231207_0020_vf-9-765x430.jpg',
                status: 'published',
                published_at: '2025-01-15',
                views: 1250,
                category: 'Tin tức sản phẩm'
            },
            {
                id: 2,
                title: 'Khuyến mãi đặc biệt tháng 12/2025',
                content: 'Giảm giá lên đến 50 triệu đồng cho các mẫu xe VinFast trong tháng 12/2025. Chương trình áp dụng cho tất cả các mẫu xe từ VF 3 đến VF 9.',
                excerpt: 'Giảm giá lên đến 50 triệu đồng cho các mẫu xe VinFast',
                author: 'VinFast Vĩnh Yên',
                image: 'images/vf8-lux/vinfast-vf-8-240723-c-g-20-765x430.jpg',
                status: 'published',
                published_at: '2025-01-10',
                views: 890,
                category: 'Khuyến mãi'
            },
            {
                id: 3,
                title: 'VinFast VF 8 Lux - Lựa chọn hàng đầu cho gia đình',
                content: 'VinFast VF 8 Lux với không gian rộng rãi, công nghệ tiên tiến và thiết kế sang trọng là lựa chọn hoàn hảo cho những gia đình hiện đại.',
                excerpt: 'Lựa chọn hoàn hảo cho những gia đình hiện đại',
                author: 'VinFast Vĩnh Yên',
                image: 'images/vf8-lux/vinfast-vf-8-240723-c-g-21-765x430.jpg',
                status: 'published',
                published_at: '2025-01-05',
                views: 1560,
                category: 'Tin tức sản phẩm'
            },
            {
                id: 4,
                title: 'Công nghệ pin VinFast - Bước tiến vượt bậc',
                content: 'VinFast đã phát triển công nghệ pin tiên tiến với khả năng sạc nhanh và tuổi thọ cao. Công nghệ này giúp xe có quãng đường xa hơn và thời gian sạc ngắn hơn.',
                excerpt: 'Công nghệ pin tiên tiến với khả năng sạc nhanh và tuổi thọ cao',
                author: 'VinFast Vĩnh Yên',
                image: 'images/vf8-lux/vinfast-vf-8-240723-c-g-16-765x430.jpg',
                status: 'published',
                published_at: '2024-12-28',
                views: 2100,
                category: 'Công nghệ'
            },
            {
                id: 5,
                title: 'VinFast VF 3 - Xe điện quốc dân giá rẻ',
                content: 'VinFast VF 3 với giá chỉ từ 299 triệu đồng, là lựa chọn số 1 cho người Việt Nam trong năm 2025. Xe được trang bị công nghệ hiện đại và thiết kế trẻ trung.',
                excerpt: 'Xe điện quốc dân với giá chỉ từ 299 triệu đồng',
                author: 'VinFast Vĩnh Yên',
                image: 'images/vf3/vinfast-vf3-240510-c1-765x430.jpg',
                status: 'published',
                published_at: '2024-12-25',
                views: 1800,
                category: 'Tin tức sản phẩm'
            },
            {
                id: 6,
                title: 'VinFast VF 5 Plus - SUV điện cỡ trung hoàn hảo',
                content: 'VinFast VF 5 Plus với không gian rộng rãi, công nghệ tiên tiến và giá cả hợp lý. Xe được trang bị pin 57.8 kWh, quãng đường 400km và công suất 150 kW.',
                excerpt: 'SUV điện cỡ trung với không gian rộng rãi và công nghệ tiên tiến',
                author: 'VinFast Vĩnh Yên',
                image: 'images/vf5-plus/vinfast-vf-5-240724-c-02-765x430.jpg',
                status: 'published',
                published_at: '2024-12-20',
                views: 1450,
                category: 'Tin tức sản phẩm'
            }
        ];
    }

    setupEventListeners() {
        // Listen for storage changes from admin panel
        window.addEventListener('storage', (e) => {
            if (e.key === 'vinfast_news') {
                this.loadNews();
            }
        });
    }

    // Render news on the page
    renderNews() {
        if (this.news.length === 0) {
            this.showNoNews();
            return;
        }

        this.renderFeaturedNews();
        this.renderNewsList();
        this.renderPagination();
    }

    // Render featured news (first published article)
    renderFeaturedNews() {
        const featuredContainer = document.getElementById('featured-article');
        if (!featuredContainer || this.news.length === 0) return;

        const featured = this.news[0];
        featuredContainer.innerHTML = `
            <div class="article-image">
                <img src="${featured.image}" alt="${featured.title}" onerror="this.src='images/logo-1.png'">
            </div>
            <div class="article-content">
                <h2 class="article-title">${featured.title}</h2>
                <p class="article-excerpt">${featured.excerpt}</p>
                <div class="article-meta">
                    <span class="article-date"><i class="fas fa-calendar"></i> ${this.formatDate(featured.published_at)}</span>
                    <span class="article-category"><i class="fas fa-tag"></i> ${featured.category}</span>
                    <span class="article-views"><i class="fas fa-eye"></i> ${featured.views} lượt xem</span>
                </div>
                <a href="#" class="read-more" onclick="showNewsDetail(${featured.id})">Đọc thêm <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
    }

    // Render news list
    renderNewsList() {
        const newsContainer = document.getElementById('news-list');
        if (!newsContainer) return;

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageNews = this.news.slice(startIndex + 1, endIndex); // Skip first (featured)

        if (pageNews.length === 0) {
            newsContainer.innerHTML = '<p class="no-news">Không có tin tức nào để hiển thị.</p>';
            return;
        }

        newsContainer.innerHTML = pageNews.map(news => this.createNewsItem(news)).join('');
    }

    // Create individual news item HTML
    createNewsItem(news) {
        return `
            <article class="news-item" data-news-id="${news.id}">
                <div class="news-image">
                    <img src="${news.image}" alt="${news.title}" onerror="this.src='images/logo-1.png'">
                </div>
                <div class="news-content">
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-excerpt">${news.excerpt}</p>
                    <div class="news-meta">
                        <span class="news-date"><i class="fas fa-calendar"></i> ${this.formatDate(news.published_at)}</span>
                        <span class="news-category"><i class="fas fa-tag"></i> ${news.category}</span>
                        <span class="news-views"><i class="fas fa-eye"></i> ${news.views} lượt xem</span>
                    </div>
                    <a href="#" class="read-more" onclick="showNewsDetail(${news.id})">Đọc thêm <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `;
    }

    // Render pagination
    renderPagination() {
        const paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) return;

        const totalPages = Math.ceil((this.news.length - 1) / this.itemsPerPage); // -1 for featured
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // Previous button
        if (this.currentPage > 1) {
            paginationHTML += `<a href="#" class="page-link prev" onclick="changePage(${this.currentPage - 1})"><i class="fas fa-chevron-left"></i> Trước</a>`;
        }

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === this.currentPage ? 'active' : '';
            paginationHTML += `<a href="#" class="page-link ${activeClass}" onclick="changePage(${i})">${i}</a>`;
        }

        // Next button
        if (this.currentPage < totalPages) {
            paginationHTML += `<a href="#" class="page-link next" onclick="changePage(${this.currentPage + 1})">Tiếp <i class="fas fa-chevron-right"></i></a>`;
        }

        paginationContainer.innerHTML = paginationHTML;
    }

    // Show no news message
    showNoNews() {
        const featuredContainer = document.getElementById('featured-article');
        const newsContainer = document.getElementById('news-list');
        const paginationContainer = document.getElementById('pagination');

        if (featuredContainer) {
            featuredContainer.innerHTML = `
                <div class="no-news-message">
                    <i class="fas fa-newspaper"></i>
                    <h3>Chưa có tin tức nào</h3>
                    <p>Hãy quay lại sau để xem tin tức mới nhất về VinFast!</p>
                </div>
            `;
        }

        if (newsContainer) {
            newsContainer.innerHTML = '';
        }

        if (paginationContainer) {
            paginationContainer.innerHTML = '';
        }
    }

    // Format date for display
    formatDate(dateString) {
        if (!dateString) return 'Chưa có ngày';
        
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }

    // Change page
    changePage(page) {
        this.currentPage = page;
        this.renderNews();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Show news detail - navigate to detail page
    showNewsDetail(newsId) {
        const news = this.news.find(n => n.id === newsId);
        if (news) {
            // Navigate to news detail page
            window.location.href = `tin-tuc-chi-tiet.html?id=${newsId}`;
        }
    }

    // Refresh news (called from admin panel)
    refreshNews() {
        this.loadNews();
    }
}

// Global functions for HTML onclick
function changePage(page) {
    if (window.newsManager) {
        window.newsManager.changePage(page);
    }
}

function showNewsDetail(newsId) {
    if (window.newsManager) {
        window.newsManager.showNewsDetail(newsId);
    }
}

// Initialize news manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.newsManager = new NewsManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NewsManager;
} 