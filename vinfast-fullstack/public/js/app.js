class VinFastApp {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 3;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadCarModels();
        this.initSlider();
    }

    initSlider() {
        // Auto slide every 5 seconds
        setInterval(() => {
            this.nextSlide();
        }, 5000);

        // Slider dots click events
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlider();
    }

    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateSlider();
    }

    updateSlider() {
        // Update slides
        document.querySelectorAll('.slide').forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });

        // Update dots
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    setupEventListeners() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Dropdown menu interactions
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.display = 'block';
                }
            });

            dropdown.addEventListener('mouseleave', () => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.display = 'none';
                }
            });
        });
    }

    loadCarModels() {
        const models = this.getCarModels();
        const grid = document.getElementById('models-grid');
        
        if (grid) {
            grid.innerHTML = models.map(car => this.createCarCard(car)).join('');
        }
    }

    getCarModels() {
        return [
            {
                id: 1,
                name: 'VinFast EC VAN',
                price: 450000000,
                category: 'Xe tải điện',
                description: 'Xe tải điện thương mại đầu tiên của VinFast',
                features: ['Pin 42.2 kWh', 'Quãng đường 220km', 'Tải trọng 750kg']
            },
            {
                id: 2,
                name: 'VinFast VF 3',
                price: 299000000,
                category: 'SUV nhỏ',
                description: 'SUV điện nhỏ gọn, phù hợp cho gia đình trẻ',
                features: ['Pin 18.64 kWh', 'Quãng đường 210km', 'Công suất 43.8 kW']
            },
            {
                id: 3,
                name: 'VinFast VF 5 Plus',
                price: 529000000,
                category: 'SUV cỡ trung',
                description: 'SUV điện cỡ trung với không gian rộng rãi',
                features: ['Pin 42.2 kWh', 'Quãng đường 300km', 'Công suất 100 kW']
            },
            {
                id: 4,
                name: 'VinFast VF 6',
                price: 694000000,
                category: 'SUV cỡ trung',
                description: 'SUV điện cao cấp với công nghệ tiên tiến',
                features: ['Pin 59.6 kWh', 'Quãng đường 400km', 'Công suất 130 kW']
            },
            {
                id: 5,
                name: 'VinFast VF 7',
                price: 999000000,
                category: 'SUV cỡ lớn',
                description: 'SUV điện 7 chỗ sang trọng và rộng rãi',
                features: ['Pin 75.3 kWh', 'Quãng đường 450km', 'Công suất 150 kW']
            },
            {
                id: 6,
                name: 'VinFast VF 8 Lux',
                price: 1299000000,
                category: 'SUV hạng sang',
                description: 'SUV điện hạng sang với thiết kế đẳng cấp',
                features: ['Pin 87.7 kWh', 'Quãng đường 500km', 'Công suất 200 kW']
            },
            {
                id: 7,
                name: 'VinFast VF 9',
                price: 1599000000,
                category: 'SUV hạng sang',
                description: 'SUV điện cao cấp nhất với công nghệ đỉnh cao',
                features: ['Pin 99.8 kWh', 'Quãng đường 594km', 'Công suất 300 kW']
            },
            {
                id: 8,
                name: 'VinFast Limo Green',
                price: 850000000,
                category: 'Sedan điện',
                description: 'Sedan điện dành cho dịch vụ taxi cao cấp',
                features: ['Pin 54.7 kWh', 'Quãng đường 350km', 'Công suất 120 kW']
            },
            {
                id: 9,
                name: 'VinFast Minio Green',
                price: 650000000,
                category: 'Hatchback điện',
                description: 'Xe điện đô thị nhỏ gọn và tiết kiệm',
                features: ['Pin 32.6 kWh', 'Quãng đường 250km', 'Công suất 80 kW']
            },
            {
                id: 10,
                name: 'VinFast Herio Green',
                price: 750000000,
                category: 'MPV điện',
                description: 'MPV điện 7 chỗ dành cho gia đình',
                features: ['Pin 48.5 kWh', 'Quãng đường 320km', 'Công suất 110 kW']
            },
            {
                id: 11,
                name: 'VinFast Nerio Green',
                price: 950000000,
                category: 'SUV điện cao cấp',
                description: 'SUV điện cao cấp với thiết kế thể thao',
                features: ['Pin 66.3 kWh', 'Quãng đường 420km', 'Công suất 160 kW']
            }
        ];
    }

    createCarCard(car) {
        const carSlug = this.getCarSlug(car.name);
        const carImage = this.getCarImage(car.name);
        return `
            <div class="car-card" data-car-id="${car.id}">
                <div class="car-image">
                    <img src="${carImage}" alt="${car.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div class="car-emoji" style="display: none;">🚗</div>
                </div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p class="car-price">GIÁ TỪ: ${this.formatPrice(car.price)}</p>
                    <p class="car-description">${car.description}</p>
                    <ul class="car-features">
                        ${car.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="car-actions">
                        <a href="${carSlug}.html" class="btn-primary">Xem chi tiết</a>
                        <a href="#test-drive" class="btn-secondary">Lái thử</a>
                    </div>
                </div>
            </div>
        `;
    }

    getCarSlug(carName) {
        const slugMap = {
            'VinFast EC VAN': 'ec-van',
            'VinFast VF 3': 'vf3',
            'VinFast VF 5 Plus': 'vf5-plus',
            'VinFast VF 6': 'vf6',
            'VinFast VF 7': 'vf7',
            'VinFast VF 8 Lux': 'vf8-lux',
            'VinFast VF 9': 'vf9',
            'VinFast Limo Green': 'limo-green',
            'VinFast Minio Green': 'minio-green',
            'VinFast Herio Green': 'herio-green',
            'VinFast Nerio Green': 'nerio-green'
        };
        return slugMap[carName] || 'car-detail';
    }

    getCarImage(carName) {
        const imageMap = {
            'VinFast EC VAN': 'images/ec-van/ecvan-jade.webp',
            'VinFast VF 3': 'images/vf3/vinfast-vf3-240510-c1-765x430.jpg',
            'VinFast VF 5 Plus': 'images/vf5-plus/vinfast-vf-5-240724-c-02-765x430.jpg',
            'VinFast VF 6': 'images/vf6/vinfast-231207_0065_vf-6-765x430.jpg',
            'VinFast VF 7': 'images/vf7/vinfast-231207_0053_vf-7-765x430.jpg',
            'VinFast VF 8 Lux': 'images/vf8-lux/vinfast-vf-8-240723-c-g-20-765x430.jpg',
            'VinFast VF 9': 'images/vf9/vinfast-231207_0020_vf-9-765x430.jpg',
            'VinFast Limo Green': 'images/limo-green/vinfast-limo-green-250318-c01-765x430.jpg',
            'VinFast Minio Green': 'images/minio-green/minio-img-01.webp',
            'VinFast Herio Green': 'images/herio-green/herio-img-01.webp',
            'VinFast Nerio Green': 'images/nerio-green/nerio-img-01.webp'
        };
        return imageMap[carName] || 'images/car-placeholder.jpg';
    }

    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        }).format(price);
    }
}

// ===== TEST DRIVE MODAL =====
class TestDriveModal {
    constructor() {
        this.modal = document.getElementById('test-drive-modal');
        this.closeBtn = document.querySelector('.close-modal');
        this.form = document.getElementById('test-drive-form');
        this.autoShowTimer = null;
        this.lastShowTime = 0;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startAutoShow();
    }
    
    setupEventListeners() {
        // Close modal when clicking X button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.hideModal();
            });
        }
        
        // Close modal when clicking outside
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hideModal();
                }
            });
        }
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.hideModal();
            }
        });
        
        // Show modal when clicking test drive buttons
        this.setupTestDriveButtons();
        
        // Handle form submission
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }
    
    setupTestDriveButtons() {
        // Find all test drive buttons - only buttons that should trigger the modal
        const testDriveButtons = document.querySelectorAll('[href="#test-drive"], .btn-secondary, .btn-hero, [href="#bao-gia"]');
        
        testDriveButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.showModal();
            });
        });
    }
    
    showModal() {
        if (this.modal) {
            this.modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            this.lastShowTime = Date.now();
            
            // Focus on first input
            const firstInput = this.modal.querySelector('input, select');
            if (firstInput) {
                firstInput.focus();
            }
        }
    }
    
    hideModal() {
        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
    
    startAutoShow() {
        // Show modal every 1 minute (60000ms)
        this.autoShowTimer = setInterval(() => {
            const now = Date.now();
            const timeSinceLastShow = now - this.lastShowTime;
            
            // Only show if it's been at least 1 minute since last show
            if (timeSinceLastShow >= 60000) {
                this.showModal();
            }
        }, 60000); // Check every minute
    }
    
    stopAutoShow() {
        if (this.autoShowTimer) {
            clearInterval(this.autoShowTimer);
        }
    }
    
    async handleFormSubmit() {
        const formData = new FormData(this.form);
        const submitBtn = this.form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual API call)
            await this.simulateSubmission();
            
            // Show success message
            this.showNotification('Đăng ký lái thử thành công! Chúng tôi sẽ liên hệ lại sớm nhất.', 'success');
            
            // Reset form and close modal
            this.form.reset();
            this.hideModal();
            
        } catch (error) {
            this.showNotification('Có lỗi xảy ra. Vui lòng thử lại sau.', 'error');
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }
    
    simulateSubmission() {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000); // Simulate 2 second delay
        });
    }
    
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.modal-notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `modal-notification modal-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10002;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Setup close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            this.hideNotification(notification);
        }, 5000);
    }
    
    hideNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
    
    getNotificationColor(type) {
        const colors = {
            success: '#27ae60',
            error: '#e74c3c',
            warning: '#f39c12',
            info: '#3498db'
        };
        return colors[type] || '#3498db';
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VinFastApp();
    new TestDriveModal();
});