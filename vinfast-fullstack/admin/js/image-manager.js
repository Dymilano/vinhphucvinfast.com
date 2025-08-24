// ===== IMAGE MANAGER JAVASCRIPT =====

class ImageManager {
    constructor() {
        this.images = [];
        this.init();
    }

    init() {
        this.loadImages();
        this.setupEventListeners();
    }

    // Load images from data
    loadImages() {
        // For now, we'll use sample data
        // Later this will scan the images directory
        this.images = [
            {
                id: 1,
                name: 'vinfast-vf3-240510-c1-765x430.jpg',
                path: '../images/vf3/vinfast-vf3-240510-c1-765x430.jpg',
                category: 'vf3',
                size: '245 KB',
                dimensions: '765x430',
                uploadDate: '2024-05-10'
            },
            {
                id: 2,
                name: 'vinfast-vf-5-240724-c-02-765x430.jpg',
                path: '../images/vf5-plus/vinfast-vf-5-240724-c-02-765x430.jpg',
                category: 'vf5-plus',
                size: '312 KB',
                dimensions: '765x430',
                uploadDate: '2024-07-24'
            },
            {
                id: 3,
                name: 'vinfast-vf-8-240723-c-g-20-765x430.jpg',
                path: '../images/vf8-lux/vinfast-vf-8-240723-c-g-20-765x430.jpg',
                category: 'vf8-lux',
                size: '456 KB',
                dimensions: '765x430',
                uploadDate: '2024-07-23'
            },
            {
                id: 4,
                name: 'ecvan-jade.webp',
                path: '../images/ec-van/ecvan-jade.webp',
                category: 'ec-van',
                size: '89 KB',
                dimensions: '800x600',
                uploadDate: '2024-06-15'
            }
        ];
        
        this.renderImagesGrid();
    }

    // Setup event listeners
    setupEventListeners() {
        // Event delegation for image actions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-image')) {
                const imageId = e.target.getAttribute('data-image-id');
                this.deleteImage(imageId);
            } else if (e.target.classList.contains('view-image')) {
                const imageId = e.target.getAttribute('data-image-id');
                this.viewImage(imageId);
            }
        });
    }

    // Render images grid
    renderImagesGrid() {
        const imagesGrid = document.getElementById('imagesGrid');
        if (!imagesGrid) return;

        if (this.images.length === 0) {
            imagesGrid.innerHTML = '<p class="no-data">Chưa có ảnh nào được upload.</p>';
            return;
        }

        const imagesHTML = this.images.map(image => this.createImageCard(image)).join('');
        imagesGrid.innerHTML = imagesHTML;
    }

    // Create image card HTML
    createImageCard(image) {
        return `
            <div class="image-card" data-image-id="${image.id}">
                <div class="image-preview">
                    <img src="${image.path}" alt="${image.name}" onerror="this.src='../images/logo-1.png'">
                    <div class="image-overlay">
                        <button class="btn btn-secondary view-image" data-image-id="${image.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-danger delete-image" data-image-id="${image.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="image-info">
                    <h4>${image.name}</h4>
                    <p><strong>Thư mục:</strong> ${image.category}</p>
                    <p><strong>Kích thước:</strong> ${image.dimensions}</p>
                    <p><strong>Dung lượng:</strong> ${image.size}</p>
                    <p><strong>Ngày upload:</strong> ${image.uploadDate}</p>
                </div>
            </div>
        `;
    }

    // Show image upload form
    showImageUpload() {
        const imagesGrid = document.getElementById('imagesGrid');
        if (!imagesGrid) return;

        const formHTML = `
            <div class="upload-form-container">
                <h3>Upload ảnh mới</h3>
                <form id="uploadImageForm" class="upload-form">
                    <div class="form-group">
                        <label for="imageFile">Chọn file ảnh *</label>
                        <input type="file" id="imageFile" name="imageFile" accept="image/*" required>
                        <small>Hỗ trợ: JPG, PNG, WEBP. Kích thước tối đa: 5MB</small>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="imageCategory">Thư mục *</label>
                            <select id="imageCategory" name="imageCategory" required>
                                <option value="">Chọn thư mục</option>
                                <option value="vf3">VF 3</option>
                                <option value="vf5-plus">VF 5 Plus</option>
                                <option value="vf6">VF 6</option>
                                <option value="vf7">VF 7</option>
                                <option value="vf8-lux">VF 8 Lux</option>
                                <option value="vf9">VF 9</option>
                                <option value="ec-van">EC VAN</option>
                                <option value="limo-green">Limo Green</option>
                                <option value="minio-green">Minio Green</option>
                                <option value="herio-green">Herio Green</option>
                                <option value="nerio-green">Nerio Green</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="imageName">Tên ảnh (tùy chọn)</label>
                            <input type="text" id="imageName" name="imageName" placeholder="Để trống để giữ tên gốc">
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-upload"></i> Upload ảnh
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="this.cancelUpload()">
                            <i class="fas fa-times"></i> Hủy
                        </button>
                    </div>
                </form>
            </div>
        `;

        imagesGrid.innerHTML = formHTML + imagesGrid.innerHTML;
        
        // Setup form submission
        const form = document.getElementById('uploadImageForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.uploadImage();
            });
        }
    }

    // Upload image
    uploadImage() {
        const form = document.getElementById('uploadImageForm');
        if (!form) return;

        const formData = new FormData(form);
        const fileInput = document.getElementById('imageFile');
        const category = formData.get('imageCategory');
        const customName = formData.get('imageName');

        if (!fileInput.files[0]) {
            this.showMessage('Vui lòng chọn file ảnh!', 'error');
            return;
        }

        const file = fileInput.files[0];
        
        // Validate file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
            this.showMessage('File ảnh quá lớn! Kích thước tối đa là 5MB.', 'error');
            return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            this.showMessage('File không phải là ảnh!', 'error');
            return;
        }

        // Create image object
        const imageData = {
            id: Date.now(),
            name: customName || file.name,
            path: `../images/${category}/${file.name}`,
            category: category,
            size: this.formatFileSize(file.size),
            dimensions: 'Unknown', // Will be updated after upload
            uploadDate: new Date().toISOString().split('T')[0]
        };

        // Simulate upload (in real app, this would upload to server)
        this.images.unshift(imageData);
        this.renderImagesGrid();
        this.saveImages();
        
        // Show success message
        this.showMessage('Ảnh đã được upload thành công!', 'success');
        
        // Reset form
        form.reset();
    }

    // View image
    viewImage(imageId) {
        const image = this.images.find(img => img.id == imageId);
        if (!image) return;

        // Create modal to view image
        const modalHTML = `
            <div class="image-modal" id="imageModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${image.name}</h3>
                        <button class="close-modal" onclick="this.closeImageModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="${image.path}" alt="${image.name}" onerror="this.src='../images/logo-1.png'">
                        <div class="image-details">
                            <p><strong>Thư mục:</strong> ${image.category}</p>
                            <p><strong>Kích thước:</strong> ${image.dimensions}</p>
                            <p><strong>Dung lượng:</strong> ${image.size}</p>
                            <p><strong>Ngày upload:</strong> ${image.uploadDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.getElementById('imageModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Close modal when clicking outside
        const modal = document.getElementById('imageModal');
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeImageModal();
            }
        });
    }

    // Close image modal
    closeImageModal() {
        const modal = document.getElementById('imageModal');
        if (modal) {
            modal.remove();
        }
    }

    // Delete image
    deleteImage(imageId) {
        if (confirm('Bạn có chắc chắn muốn xóa ảnh này?')) {
            this.images = this.images.filter(img => img.id != imageId);
            this.renderImagesGrid();
            this.saveImages();
            this.showMessage('Ảnh đã được xóa thành công!', 'success');
        }
    }

    // Cancel upload
    cancelUpload() {
        this.renderImagesGrid();
    }

    // Format file size
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Save images to storage
    saveImages() {
        // For now, save to localStorage
        // Later this will save to JSON file
        localStorage.setItem('vinfast-images', JSON.stringify(this.images));
    }

    // Show message
    showMessage(message, type = 'info') {
        // Simple message display
        alert(message);
    }
}

// Initialize image manager
let imageManager;
document.addEventListener('DOMContentLoaded', () => {
    imageManager = new ImageManager();
});

// Global functions
function showImageUpload() {
    if (imageManager) {
        imageManager.showImageUpload();
    }
}

function closeImageModal() {
    if (imageManager) {
        imageManager.closeImageModal();
    }
}

// Add CSS for image management
const imageStyles = `
    <style>
        .images-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
        }
        
        .image-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .image-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .image-preview {
            position: relative;
            height: 200px;
            overflow: hidden;
        }
        
        .image-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .image-card:hover .image-overlay {
            opacity: 1;
        }
        
        .image-info {
            padding: 16px;
        }
        
        .image-info h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #1e293b;
            word-break: break-word;
        }
        
        .image-info p {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 4px;
        }
        
        .upload-form-container {
            background: white;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            grid-column: 1 / -1;
        }
        
        .upload-form-container h3 {
            margin-bottom: 20px;
            color: #1e293b;
        }
        
        .upload-form small {
            color: #64748b;
            font-size: 12px;
        }
        
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        }
        
        .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 90vw;
            max-height: 90vh;
            overflow: auto;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #1e293b;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 20px;
            color: #64748b;
            cursor: pointer;
            padding: 8px;
            border-radius: 6px;
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            background: #f1f5f9;
            color: #1e293b;
        }
        
        .modal-body {
            padding: 24px;
        }
        
        .modal-body img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .image-details p {
            margin-bottom: 8px;
            color: #64748b;
        }
        
        .no-data {
            text-align: center;
            color: #64748b;
            font-style: italic;
            padding: 40px;
            grid-column: 1 / -1;
        }
        
        @media (max-width: 768px) {
            .images-grid {
                grid-template-columns: 1fr;
                gap: 16px;
            }
            
            .modal-content {
                margin: 20px;
                max-width: calc(100vw - 40px);
            }
        }
    </style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', imageStyles); 