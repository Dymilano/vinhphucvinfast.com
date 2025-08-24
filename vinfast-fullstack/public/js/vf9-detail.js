// Car detail page for VF 9
class CarDetailPage {
    constructor() {
        this.currentImageIndex = 0;
        this.images = [
            'images/vf9/vinfast-231207_0020_vf-9-765x430.jpg',
            'images/vf9/vinfast-231207_0022_vf-9-765x430.jpg',
            'images/vf9/vinfast-231207_0021_vf-9-765x430.jpg',
            'images/vf9/vinfast-231207_0025_vf-9-765x430.jpg',
            'images/vf9/vinfast-231207_0023_vf-9-765x430.jpg',
            'images/vf9/vinfast-231207_0024_vf-9-765x430.jpg',
            'images/vf9/vinfast-231207_0024_vf-9.jpg'
        ];
        this.autoSlideInterval = null;
        this.autoSlideDelay = 3000; // 3 giây
        this.init();
    }

    init() {
        this.setupImageGallery();
        this.setupTabs();
        this.setupNavigation();
        this.startAutoSlide();
    }

    setupImageGallery() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-car-image');
        const mainImageContainer = document.querySelector('.main-image');

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                this.currentImageIndex = index;
                this.changeMainImage(index);
                this.updateThumbnailActive(index);
                this.restartAutoSlide();
            });
        });

        // Pause auto-slide khi hover vào ảnh chính
        if (mainImageContainer) {
            mainImageContainer.addEventListener('mouseenter', () => {
                this.stopAutoSlide();
            });

            mainImageContainer.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }
    }

    changeMainImage(index) {
        const mainImage = document.getElementById('main-car-image');
        mainImage.src = this.images[index];
        this.currentImageIndex = index;
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
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });

        const targetPane = document.getElementById(targetTab);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    }

    updateTabButtons(activeButton) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    setupNavigation() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.previousImage();
                this.restartAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextImage();
                this.restartAutoSlide();
            });
        }
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

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextImage();
        }, this.autoSlideDelay);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    restartAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CarDetailPage();
}); 