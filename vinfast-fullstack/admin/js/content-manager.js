// ===== CONTENT MANAGER =====

class ContentManager {
    constructor() {
        this.news = [];
        this.content = {};
        this.settings = {};
        this.init();
    }

    init() {
        this.loadNews();
        this.loadContent();
        this.loadSettings();
        this.setupEventListeners();
    }

    // Load news data
    loadNews() {
        // Sample news data - will be loaded from JSON/database
        this.news = [
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
                title: 'VinFast mở rộng mạng lưới trạm sạc',
                content: 'VinFast tiếp tục mở rộng mạng lưới trạm sạc điện trên toàn quốc. Đến cuối năm 2025, dự kiến sẽ có hơn 1000 trạm sạc phủ khắp 63 tỉnh thành.',
                excerpt: 'Mở rộng mạng lưới trạm sạc điện trên toàn quốc',
                author: 'VinFast Vĩnh Yên',
                image: 'images/pin-tram-sac/pin-tram-sac-01.jpg',
                status: 'draft',
                published_at: null,
                views: 0,
                category: 'Tin tức công ty'
            },
            {
                id: 4,
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
                id: 5,
                title: 'Công nghệ pin VinFast - Bước tiến vượt bậc',
                content: 'VinFast đã phát triển công nghệ pin tiên tiến với khả năng sạc nhanh và tuổi thọ cao. Công nghệ này giúp xe có quãng đường xa hơn và thời gian sạc ngắn hơn.',
                excerpt: 'Công nghệ pin tiên tiến với khả năng sạc nhanh và tuổi thọ cao',
                author: 'VinFast Vĩnh Yên',
                image: 'images/pin-tram-sac/pin-tram-sac-02.jpg',
                status: 'published',
                published_at: '2024-12-28',
                views: 2100,
                category: 'Công nghệ'
            }
        ];
        
        this.renderNewsList();
        this.saveNews();
    }

    // Load content settings
    loadContent() {
        this.content = {
            contactInfo: 'VinFast Vĩnh Yên\nĐiện thoại: 0926666050\nEmail: info@vinfastvinhyen.vn\nWebsite: www.vinfastvinhyen.vn',
            addressInfo: 'Cơ sở 1: Quốc lộ 2, xã Bình Nguyên, Tỉnh Phú Thọ\nCơ sở 2: Đình Ấm, phường Vĩnh Phúc, Tỉnh Phú Thọ',
            aboutUs: 'VinFast Vĩnh Yên - Đại lý chính thức của VinFast tại Phú Thọ, chuyên cung cấp các mẫu xe điện VinFast chất lượng cao với dịch vụ hậu mãi tốt nhất.',
            services: 'Bán xe VinFast, Dịch vụ bảo hành, Sửa chữa xe, Tư vấn mua xe, Đăng ký lái thử, Hỗ trợ tài chính'
        };
    }

    // Load system settings
    loadSettings() {
        this.settings = {
            siteName: 'VinFast Vĩnh Yên - Đại lý chính thức',
            siteDescription: 'Đại lý chính thức VinFast tại Phú Thọ - Cung cấp xe điện VinFast chất lượng cao với dịch vụ hậu mãi tốt nhất',
            siteKeywords: 'VinFast, xe điện, SUV điện, xe VinFast, đại lý VinFast, Phú Thọ, Vĩnh Yên',
            siteLogo: 'images/logo-1.png',
            contactPhone: '0926666050',
            contactEmail: 'info@vinfastvinhyen.vn',
            businessHours: 'Thứ 2 - Chủ nhật: 8:00 - 20:00',
            socialMedia: {
                facebook: 'https://facebook.com/vinfastvinhyen',
                youtube: 'https://youtube.com/vinfastvinhyen',
                zalo: 'https://zalo.me/0926666050'
            }
        };
    }

    setupEventListeners() {
        // Event listeners will be set up here
    }

    // Load news list for admin
    loadNewsList() {
        this.renderNewsList();
    }

    // Render news list
    renderNewsList() {
        const newsList = document.getElementById('newsList');
        if (!newsList) return;

        if (this.news.length === 0) {
            newsList.innerHTML = '<p class="no-data">Chưa có bài viết nào.</p>';
            return;
        }

        newsList.innerHTML = this.news.map(news => this.createNewsCard(news)).join('');
    }

    // Create news card
    createNewsCard(news) {
        const statusBadge = news.status === 'published' ? 
            '<span class="status-badge published">Đã xuất bản</span>' : 
            '<span class="status-badge draft">Bản nháp</span>';

        const publishDate = news.published_at ? 
            `<p><strong>Ngày xuất bản:</strong> ${news.published_at}</p>` : 
            '<p><strong>Trạng thái:</strong> Chưa xuất bản</p>';

        return `
            <div class="news-card" data-news-id="${news.id}">
                <div class="news-header">
                    <h3>${news.title}</h3>
                    <div class="news-actions">
                        <button class="btn btn-primary btn-sm" onclick="editNews(${news.id})">
                            <i class="fas fa-edit"></i> Sửa
                        </button>
                        ${news.status === 'draft' ? 
                            `<button class="btn btn-success btn-sm" onclick="publishNews(${news.id})">
                                <i class="fas fa-globe"></i> Xuất bản
                            </button>` : 
                            `<button class="btn btn-warning btn-sm" onclick="unpublishNews(${news.id})">
                                <i class="fas fa-eye-slash"></i> Ẩn
                            </button>`
                        }
                        <button class="btn btn-danger btn-sm" onclick="deleteNews(${news.id})">
                            <i class="fas fa-trash"></i> Xóa
                        </button>
                    </div>
                </div>
                
                <div class="news-content">
                    <div class="news-image">
                        <img src="../${news.image}" alt="${news.title}" onerror="this.src='../images/logo-1.png'">
                    </div>
                    
                    <div class="news-info">
                        <p><strong>Mô tả ngắn:</strong> ${news.excerpt}</p>
                        <p><strong>Tác giả:</strong> ${news.author}</p>
                        <p><strong>Danh mục:</strong> ${news.category}</p>
                        ${publishDate}
                        <p><strong>Lượt xem:</strong> ${news.views}</p>
                        ${statusBadge}
                    </div>
                </div>
                
                <div class="news-preview">
                    <h4>Nội dung:</h4>
                    <p>${news.content.substring(0, 200)}${news.content.length > 200 ? '...' : ''}</p>
                </div>
            </div>
        `;
    }

    // Show add news form
    showAddNewsForm() {
        const newsList = document.getElementById('newsList');
        if (!newsList) return;

        const addForm = `
            <div class="add-news-form">
                <h3>Thêm bài viết mới</h3>
                <form onsubmit="addNews(event)">
                    <div class="form-group">
                        <label>Tiêu đề:</label>
                        <input type="text" id="newsTitle" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Mô tả ngắn:</label>
                        <textarea id="newsExcerpt" rows="2" required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Nội dung:</label>
                        <textarea id="newsContent" rows="8" required placeholder="Nhập nội dung chi tiết của bài viết..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Tác giả:</label>
                        <input type="text" id="newsAuthor" value="VinFast Vĩnh Yên" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Danh mục:</label>
                        <select id="newsCategory" required>
                            <option value="">Chọn danh mục</option>
                            <option value="Tin tức sản phẩm">Tin tức sản phẩm</option>
                            <option value="Khuyến mãi">Khuyến mãi</option>
                            <option value="Tin tức công ty">Tin tức công ty</option>
                            <option value="Công nghệ">Công nghệ</option>
                            <option value="Dịch vụ">Dịch vụ</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Hình ảnh:</label>
                        <input type="text" id="newsImage" placeholder="VD: images/vf9/vinfast-231207_0020_vf-9-765x430.jpg" required>
                        <small class="form-help">Nhập đường dẫn hình ảnh từ thư mục images/</small>
                    </div>
                    
                    <div class="form-group">
                        <label>Trạng thái:</label>
                        <select id="newsStatus">
                            <option value="draft">Bản nháp</option>
                            <option value="published">Xuất bản ngay</option>
                        </select>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-plus"></i> Thêm bài viết
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="cancelAddNews()">
                            <i class="fas fa-times"></i> Hủy
                        </button>
                    </div>
                </form>
            </div>
        `;

        newsList.insertAdjacentHTML('afterbegin', addForm);
    }

    // Add new news
    addNews(event) {
        event.preventDefault();
        
        const title = document.getElementById('newsTitle').value;
        const excerpt = document.getElementById('newsExcerpt').value;
        const content = document.getElementById('newsContent').value;
        const author = document.getElementById('newsAuthor').value;
        const category = document.getElementById('newsCategory').value;
        const image = document.getElementById('newsImage').value;
        const status = document.getElementById('newsStatus').value;

        const newNews = {
            id: Date.now(),
            title,
            excerpt,
            content,
            author,
            category,
            image,
            status,
            published_at: status === 'published' ? new Date().toISOString().split('T')[0] : null,
            views: 0
        };

        this.news.push(newNews);
        this.saveNews();
        this.renderNewsList();
        this.showMessage('Đã thêm bài viết mới thành công!', 'success');
    }

    // Edit news
    editNews(newsId) {
        const news = this.news.find(n => n.id === newsId);
        if (!news) return;

        const newsList = document.getElementById('newsList');
        if (!newsList) return;

        const editForm = `
            <div class="edit-news-form" data-news-id="${news.id}">
                <h3>Sửa bài viết: ${news.title}</h3>
                <form onsubmit="updateNews(event, ${news.id})">
                    <div class="form-group">
                        <label>Tiêu đề:</label>
                        <input type="text" id="editNewsTitle" value="${news.title}" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Mô tả ngắn:</label>
                        <textarea id="editNewsExcerpt" rows="2" required>${news.excerpt}</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Nội dung:</label>
                        <textarea id="editNewsContent" rows="8" required placeholder="Nhập nội dung chi tiết của bài viết...">${news.content}</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Tác giả:</label>
                        <input type="text" id="editNewsAuthor" value="${news.author}" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Danh mục:</label>
                        <select id="editNewsCategory" required>
                            <option value="Tin tức sản phẩm" ${news.category === 'Tin tức sản phẩm' ? 'selected' : ''}>Tin tức sản phẩm</option>
                            <option value="Khuyến mãi" ${news.category === 'Khuyến mãi' ? 'selected' : ''}>Khuyến mãi</option>
                            <option value="Tin tức công ty" ${news.category === 'Tin tức công ty' ? 'selected' : ''}>Tin tức công ty</option>
                            <option value="Công nghệ" ${news.category === 'Công nghệ' ? 'selected' : ''}>Công nghệ</option>
                            <option value="Dịch vụ" ${news.category === 'Dịch vụ' ? 'selected' : ''}>Dịch vụ</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Hình ảnh:</label>
                        <input type="text" id="editNewsImage" value="${news.image}" required>
                        <small class="form-help">Nhập đường dẫn hình ảnh từ thư mục images/</small>
                    </div>
                    
                    <div class="form-group">
                        <label>Trạng thái:</label>
                        <select id="editNewsStatus">
                            <option value="draft" ${news.status === 'draft' ? 'selected' : ''}>Bản nháp</option>
                            <option value="published" ${news.status === 'published' ? 'selected' : ''}>Xuất bản</option>
                        </select>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> Cập nhật
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="cancelEditNews(${news.id})">
                            <i class="fas fa-times"></i> Hủy
                        </button>
                    </div>
                </form>
            </div>
        `;

        // Replace news card with edit form
        const newsCard = document.querySelector(`[data-news-id="${news.id}"]`);
        if (newsCard) {
            newsCard.outerHTML = editForm;
        }
    }

    // Update news
    updateNews(event, newsId) {
        event.preventDefault();
        
        const news = this.news.find(n => n.id === newsId);
        if (!news) return;

        news.title = document.getElementById('editNewsTitle').value;
        news.excerpt = document.getElementById('editNewsExcerpt').value;
        news.content = document.getElementById('editNewsContent').value;
        news.author = document.getElementById('editNewsAuthor').value;
        news.category = document.getElementById('editNewsCategory').value;
        news.image = document.getElementById('editNewsImage').value;
        news.status = document.getElementById('editNewsStatus').value;

        // Update published date if status changes to published
        if (news.status === 'published' && !news.published_at) {
            news.published_at = new Date().toISOString().split('T')[0];
        }

        this.saveNews();
        this.renderNewsList();
        this.showMessage('Đã cập nhật bài viết thành công!', 'success');
    }

    // Publish news
    publishNews(newsId) {
        const news = this.news.find(n => n.id === newsId);
        if (news) {
            news.status = 'published';
            news.published_at = new Date().toISOString().split('T')[0];
            this.saveNews();
            this.renderNewsList();
            this.showMessage('Đã xuất bản bài viết thành công!', 'success');
        }
    }

    // Unpublish news
    unpublishNews(newsId) {
        const news = this.news.find(n => n.id === newsId);
        if (news) {
            news.status = 'draft';
            this.saveNews();
            this.renderNewsList();
            this.showMessage('Đã ẩn bài viết thành công!', 'success');
        }
    }

    // Delete news
    deleteNews(newsId) {
        if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
            this.news = this.news.filter(n => n.id !== newsId);
            this.saveNews();
            this.renderNewsList();
            this.showMessage('Đã xóa bài viết thành công!', 'success');
        }
    }

    // Cancel add news
    cancelAddNews() {
        const addForm = document.querySelector('.add-news-form');
        if (addForm) {
            addForm.remove();
        }
    }

    // Cancel edit news
    cancelEditNews(newsId) {
        this.renderNewsList();
    }

    // Load content settings for admin
    loadContentSettings() {
        const contactInfo = document.getElementById('contactInfo');
        const addressInfo = document.getElementById('addressInfo');
        
        if (contactInfo) contactInfo.value = this.content.contactInfo || '';
        if (addressInfo) addressInfo.value = this.content.addressInfo || '';
    }

    // Load system settings for admin
    loadSystemSettings() {
        const siteName = document.getElementById('siteName');
        const siteDescription = document.getElementById('siteDescription');
        
        if (siteName) siteName.value = this.settings.siteName || '';
        if (siteDescription) siteDescription.value = this.settings.siteDescription || '';
    }

    // Save content
    saveContent() {
        const contactInfo = document.getElementById('contactInfo');
        const addressInfo = document.getElementById('addressInfo');
        
        if (contactInfo && addressInfo) {
            this.content.contactInfo = contactInfo.value;
            this.content.addressInfo = addressInfo.value;
            this.saveContentToStorage();
            this.showMessage('Đã lưu nội dung thành công!', 'success');
        }
    }

    // Save settings
    saveSettings() {
        const siteName = document.getElementById('siteName');
        const siteDescription = document.getElementById('siteDescription');
        
        if (siteName && siteDescription) {
            this.settings.siteName = siteName.value;
            this.settings.siteDescription = siteDescription.value;
            this.saveSettingsToStorage();
            this.showMessage('Đã lưu cài đặt thành công!', 'success');
        }
    }

    // Save news to storage
    saveNews() {
        localStorage.setItem('vinfast_news', JSON.stringify(this.news));
    }

    // Save content to storage
    saveContentToStorage() {
        localStorage.setItem('vinfast_content', JSON.stringify(this.content));
    }

    // Save settings to storage
    saveSettingsToStorage() {
        localStorage.setItem('vinfast_settings', JSON.stringify(this.settings));
    }

    // Show message
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Global functions for HTML onclick
function showAddNewsForm() {
    if (window.contentManager) {
        window.contentManager.showAddNewsForm();
    }
}

function addNews(event) {
    if (window.contentManager) {
        window.contentManager.addNews(event);
    }
}

function editNews(newsId) {
    if (window.contentManager) {
        window.contentManager.editNews(newsId);
    }
}

function updateNews(event, newsId) {
    if (window.contentManager) {
        window.contentManager.updateNews(event, newsId);
    }
}

function publishNews(newsId) {
    if (window.contentManager) {
        window.contentManager.publishNews(newsId);
    }
}

function unpublishNews(newsId) {
    if (window.contentManager) {
        window.contentManager.unpublishNews(newsId);
    }
}

function deleteNews(newsId) {
    if (window.contentManager) {
        window.contentManager.deleteNews(newsId);
    }
}

function cancelAddNews() {
    if (window.contentManager) {
        window.contentManager.cancelAddNews();
    }
}

function cancelEditNews(newsId) {
    if (window.contentManager) {
        window.contentManager.cancelEditNews(newsId);
    }
}

function saveContent() {
    if (window.contentManager) {
        window.contentManager.saveContent();
    }
}

function saveSettings() {
    if (window.contentManager) {
        window.contentManager.saveSettings();
    }
}

// Initialize content manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.contentManager = new ContentManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentManager;
} 