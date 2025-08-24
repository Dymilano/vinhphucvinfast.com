// ===== NEWS DETAIL PAGE JAVASCRIPT =====

class NewsDetailManager {
    constructor() {
        this.news = [];
        this.currentNews = null;
        this.newsId = this.getNewsIdFromUrl();
        this.init();
    }

    init() {
        this.loadNews();
        this.setupEventListeners();
    }

    // Get news ID from URL parameters
    getNewsIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('id')) || 1;
    }

    // Load news data
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
        
        // Find current news
        this.currentNews = this.news.find(n => n.id === this.newsId);
        
        if (this.currentNews) {
            this.renderNewsDetail();
            this.renderRelatedNews();
            this.updatePageTitle();
            this.updateBreadcrumb();
        } else {
            this.showNewsNotFound();
        }
    }

    // Sample news data as fallback
    getSampleNews() {
        return [
            {
                id: 1,
                title: 'VinFast VF 9 - SUV điện cao cấp mới nhất',
                content: 'VinFast VF 9 là mẫu SUV điện cao cấp mới nhất với công nghệ tiên tiến và thiết kế sang trọng. Xe được trang bị pin 106.0 kWh, quãng đường lên đến 700km và công suất 400 kW.\n\nVới thiết kế hiện đại và không gian nội thất rộng rãi, VF 9 là lựa chọn hoàn hảo cho những gia đình yêu thích công nghệ và sự tiện nghi. Xe được trang bị đầy đủ các tính năng an toàn tiên tiến như hệ thống phanh tự động khẩn cấp, cảnh báo điểm mù, và hỗ trợ giữ làn đường.\n\nĐặc biệt, VF 9 sử dụng công nghệ pin LFP tiên tiến với khả năng sạc nhanh, chỉ cần 30 phút để sạc từ 10% đến 80%. Điều này giúp xe có thể di chuyển xa mà không cần lo lắng về thời gian sạc.',
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
                content: 'Giảm giá lên đến 50 triệu đồng cho các mẫu xe VinFast trong tháng 12/2025. Chương trình áp dụng cho tất cả các mẫu xe từ VF 3 đến VF 9.\n\nCụ thể:\n- VinFast VF 3: Giảm 20 triệu đồng\n- VinFast VF 5 Plus: Giảm 30 triệu đồng\n- VinFast VF 6: Giảm 35 triệu đồng\n- VinFast VF 7: Giảm 40 triệu đồng\n- VinFast VF 8 Lux: Giảm 45 triệu đồng\n- VinFast VF 9: Giảm 50 triệu đồng\n\nChương trình khuyến mãi này áp dụng cho tất cả khách hàng mua xe trong tháng 12/2025. Ngoài ra, khách hàng còn được hưởng thêm các ưu đãi về bảo hành và dịch vụ hậu mãi.',
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
                content: 'VinFast VF 8 Lux với không gian rộng rãi, công nghệ tiên tiến và thiết kế sang trọng là lựa chọn hoàn hảo cho những gia đình hiện đại.\n\nVới chiều dài 4.7m và chiều rộng 1.9m, VF 8 Lux cung cấp không gian nội thất rộng rãi cho 7 người ngồi thoải mái. Nội thất được thiết kế với chất liệu cao cấp, bao gồm da Nappa và gỗ tự nhiên.\n\nVề công nghệ, VF 8 Lux được trang bị màn hình cảm ứng 15.6 inch, hệ thống âm thanh 12 loa, và kết nối 5G. Xe cũng có các tính năng an toàn tiên tiến như hệ thống phanh tự động khẩn cấp, cảnh báo điểm mù, và hỗ trợ giữ làn đường.',
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
                content: 'VinFast đã phát triển công nghệ pin tiên tiến với khả năng sạc nhanh và tuổi thọ cao. Công nghệ này giúp xe có quãng đường xa hơn và thời gian sạc ngắn hơn.\n\nCông nghệ pin LFP (Lithium Iron Phosphate) của VinFast có những ưu điểm vượt trội:\n- Tuổi thọ cao: Có thể sạc xả hơn 3000 lần\n- An toàn: Không bị cháy nổ như pin lithium-ion thông thường\n- Hiệu suất cao: Giữ được 80% dung lượng sau 8 năm sử dụng\n- Sạc nhanh: Có thể sạc từ 10% đến 80% trong 30 phút\n\nVinFast đang đầu tư mạnh mẽ vào việc phát triển mạng lưới trạm sạc trên toàn quốc, với mục tiêu có 1000 trạm sạc vào cuối năm 2025.',
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
                content: 'VinFast VF 3 với giá chỉ từ 299 triệu đồng, là lựa chọn số 1 cho người Việt Nam trong năm 2025. Xe được trang bị công nghệ hiện đại và thiết kế trẻ trung.\n\nVF 3 có kích thước nhỏ gọn, phù hợp với đường phố Việt Nam. Xe được trang bị pin 42 kWh, có thể di chuyển được 300km với một lần sạc. Động cơ điện có công suất 110 kW, đủ để xe có thể tăng tốc từ 0-100 km/h trong 8 giây.\n\nVề thiết kế, VF 3 có ngoại hình hiện đại với đèn LED, màn hình cảm ứng 10.25 inch, và hệ thống âm thanh 6 loa. Xe cũng được trang bị các tính năng an toàn cơ bản như túi khí, hệ thống phanh ABS, và cảnh báo va chạm.',
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
                content: 'VinFast VF 5 Plus với không gian rộng rãi, công nghệ tiên tiến và giá cả hợp lý. Xe được trang bị pin 57.8 kWh, quãng đường 400km và công suất 150 kW.\n\nVF 5 Plus có thiết kế SUV hiện đại với kích thước vừa phải, phù hợp cho cả gia đình và sử dụng cá nhân. Nội thất được thiết kế với chất liệu cao cấp và không gian rộng rãi cho 5 người ngồi thoải mái.\n\nVề công nghệ, xe được trang bị màn hình cảm ứng 12.3 inch, hệ thống âm thanh 8 loa, và kết nối 4G. Các tính năng an toàn bao gồm hệ thống phanh tự động khẩn cấp, cảnh báo điểm mù, và hỗ trợ giữ làn đường.',
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

    // Render news detail
    renderNewsDetail() {
        const container = document.getElementById('news-detail-content');
        if (!container || !this.currentNews) return;

        // Increment view count
        this.currentNews.views = (this.currentNews.views || 0) + 1;
        this.saveNews();

        container.innerHTML = `
            <article class="news-detail-article">
                <div class="news-detail-header">
                    <h1 class="news-detail-title">${this.currentNews.title}</h1>
                    <div class="news-detail-meta">
                        <span class="news-detail-date">
                            <i class="fas fa-calendar"></i> ${this.formatDate(this.currentNews.published_at)}
                        </span>
                        <span class="news-detail-author">
                            <i class="fas fa-user"></i> ${this.currentNews.author}
                        </span>
                        <span class="news-detail-category">
                            <i class="fas fa-tag"></i> ${this.currentNews.category}
                        </span>
                        <span class="news-detail-views">
                            <i class="fas fa-eye"></i> ${this.currentNews.views} lượt xem
                        </span>
                    </div>
                </div>
                
                <div class="news-detail-image">
                    <img src="${this.currentNews.image}" alt="${this.currentNews.title}" onerror="this.src='images/logo-1.png'">
                </div>
                
                <div class="news-detail-content">
                    ${this.formatContent(this.currentNews.content)}
                </div>
                
                <div class="news-detail-footer">
                    <div class="news-detail-tags">
                        <span class="tag">${this.currentNews.category}</span>
                        <span class="tag">VinFast</span>
                        <span class="tag">Xe điện</span>
                    </div>
                    
                    <div class="news-detail-share">
                        <span class="share-label">Chia sẻ:</span>
                        <a href="#" class="share-btn facebook" onclick="shareOnFacebook()">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#" class="share-btn twitter" onclick="shareOnTwitter()">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="share-btn zalo" onclick="shareOnZalo()">
                            <i class="fas fa-share"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    // Render related news
    renderRelatedNews() {
        const container = document.getElementById('related-news');
        if (!container) return;

        // Get related news (same category, exclude current)
        const relatedNews = this.news
            .filter(n => n.id !== this.currentNews.id && n.category === this.currentNews.category)
            .slice(0, 3);

        if (relatedNews.length === 0) {
            // If no same category, get latest news
            const latestNews = this.news
                .filter(n => n.id !== this.currentNews.id)
                .slice(0, 3);
            
            this.renderNewsGrid(container, latestNews);
        } else {
            this.renderNewsGrid(container, relatedNews);
        }
    }

    // Render news grid
    renderNewsGrid(container, newsList) {
        if (newsList.length === 0) {
            container.innerHTML = '<p class="no-related-news">Không có tin tức liên quan.</p>';
            return;
        }

        container.innerHTML = newsList.map(news => `
            <article class="related-news-item">
                <div class="related-news-image">
                    <a href="tin-tuc-chi-tiet.html?id=${news.id}">
                        <img src="${news.image}" alt="${news.title}" onerror="this.src='images/logo-1.png'">
                    </a>
                </div>
                <div class="related-news-content">
                    <h4 class="related-news-title">
                        <a href="tin-tuc-chi-tiet.html?id=${news.id}">${news.title}</a>
                    </h4>
                    <p class="related-news-excerpt">${news.excerpt}</p>
                    <div class="related-news-meta">
                        <span class="related-news-date">
                            <i class="fas fa-calendar"></i> ${this.formatDate(news.published_at)}
                        </span>
                        <span class="related-news-views">
                            <i class="fas fa-eye"></i> ${news.views}
                        </span>
                    </div>
                </div>
            </article>
        `).join('');
    }

    // Format content with line breaks
    formatContent(content) {
        if (!content) return '';
        return content.split('\n').map(paragraph => {
            if (paragraph.trim() === '') return '';
            if (paragraph.startsWith('- ')) {
                return `<li>${paragraph.substring(2)}</li>`;
            }
            return `<p>${paragraph}</p>`;
        }).join('').replace(/<li>/g, '<ul><li>').replace(/<\/li>/g, '</li></ul>');
    }

    // Update page title
    updatePageTitle() {
        if (this.currentNews) {
            document.title = `${this.currentNews.title} - Tin Tức VinFast`;
        }
    }

    // Update breadcrumb
    updateBreadcrumb() {
        const breadcrumbTitle = document.getElementById('breadcrumb-title');
        if (breadcrumbTitle && this.currentNews) {
            breadcrumbTitle.textContent = this.currentNews.title;
        }
    }

    // Show news not found
    showNewsNotFound() {
        const container = document.getElementById('news-detail-content');
        if (container) {
            container.innerHTML = `
                <div class="news-not-found">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h2>Không tìm thấy tin tức</h2>
                    <p>Tin tức bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                    <a href="tin-tuc.html" class="btn-primary">Quay lại trang tin tức</a>
                </div>
            `;
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

    // Save news data
    saveNews() {
        localStorage.setItem('vinfast_news', JSON.stringify(this.news));
    }
}

// Global functions for sharing
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
}

function shareOnZalo() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://zalo.me/share?u=${url}&t=${title}`, '_blank');
}

// Initialize news detail manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.newsDetailManager = new NewsDetailManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NewsDetailManager;
} 