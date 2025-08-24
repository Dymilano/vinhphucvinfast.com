class ECVanDetailPage {
    constructor() {
        this.currentImageIndex = 0;
        this.images = [];
        this.init();
    }

    init() {
        this.setupImageGallery();
        this.setupTabs();
        this.setupNavigation();
        this.setupFullscreen();
    }

    setupImageGallery() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-car-image');

        // Tự động phát hiện ảnh từ thumbnail
        this.images = Array.from(thumbnails).map(thumb => 
            thumb.getAttribute('data-image')
        );

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                this.changeMainImage(index);
                this.updateThumbnailActive(index);
            });
        });
    }

    changeMainImage(index) {
        const mainImage = document.getElementById('main-car-image');
        if (this.images[index]) {
            mainImage.src = this.images[index];
            this.currentImageIndex = index;
        }
    }

    updateThumbnailActive(activeIndex) {
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.classList.toggle('active', index === activeIndex);
        });
    }

    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                this.switchTab(targetTab);
                this.updateTabButtons(button);
            });
        });
    }

    switchTab(targetTab) {
        // Hide all tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });

        // Show target tab pane
        const targetPane = document.getElementById(targetTab);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    }

    updateTabButtons(activeButton) {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to clicked button
        activeButton.classList.add('active');
    }

    setupNavigation() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.previousImage();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextImage();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousImage();
            } else if (e.key === 'ArrowRight') {
                this.nextImage();
            }
        });
    }

    previousImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.changeMainImage(this.currentImageIndex);
        this.updateThumbnailActive(this.currentImageIndex);
    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.changeMainImage(this.currentImageIndex);
        this.updateThumbnailActive(this.currentImageIndex);
    }

    // Fullscreen functionality
    setupFullscreen() {
        const fullscreenBtn = document.querySelector('.fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                this.toggleFullscreen();
            });
        }
    }

    toggleFullscreen() {
        const mainImage = document.getElementById('main-car-image');
        
        if (!document.fullscreenElement) {
            if (mainImage.requestFullscreen) {
                mainImage.requestFullscreen();
            } else if (mainImage.webkitRequestFullscreen) {
                mainImage.webkitRequestFullscreen();
            } else if (mainImage.msRequestFullscreen) {
                mainImage.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ECVanDetailPage();
}); 