// ===== ADMIN MAIN JAVASCRIPT =====

class AdminPanel {
    constructor() {
        this.currentSection = 'dashboard';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupSidebarToggle();
        this.loadDashboardStats();
    }

    // Setup navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.showSection(section);
            });
        });
    }

    // Setup sidebar toggle for mobile
    setupSidebarToggle() {
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }
    }

    // Show specific section
    showSection(sectionName) {
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update navigation active state
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionName) {
                link.classList.add('active');
            }
        });

        // Update page title
        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
            const titles = {
                'dashboard': 'Dashboard',
                'cars': 'Quản lý xe',
                'images': 'Quản lý ảnh',
                'news': 'Quản lý tin tức',
                'content': 'Nội dung website',
                'settings': 'Cài đặt'
            };
            pageTitle.textContent = titles[sectionName] || 'Dashboard';
        }

        this.currentSection = sectionName;
        this.loadSectionContent(sectionName);
    }

    // Load section specific content
    loadSectionContent(sectionName) {
        switch (sectionName) {
            case 'cars':
                this.loadCarsList();
                break;
            case 'images':
                this.loadImagesGrid();
                break;
            case 'news':
                this.loadNewsList();
                break;
            case 'content':
                // Content section removed per user request
                break;
            case 'settings':
                this.loadSystemSettings();
                break;
        }
    }
    
    // Load news list
    loadNewsList() {
        if (window.contentManager) {
            window.contentManager.renderNewsList();
        }
    }
    
    // Show add news form
    showAddNewsForm() {
        if (window.contentManager) {
            window.contentManager.showAddNewsForm();
        }
    }

    // Load dashboard statistics
    loadDashboardStats() {
        // This will be populated with real data later
        console.log('Loading dashboard stats...');
    }

    // Load cars list
    loadCarsList() {
        console.log('Loading cars list...');
        // Will be implemented in car-manager.js
    }

    // Load images grid
    loadImagesGrid() {
        console.log('Loading images grid...');
        // Will be implemented in image-manager.js
    }

    // Load news list
    loadNewsList() {
        console.log('Loading news list...');
        // Will be implemented in content-manager.js
    }

    // Load content settings - removed per user request
    loadContentSettings() {
        console.log('Content section removed per user request');
    }

    // Load system settings
    loadSystemSettings() {
        console.log('Loading system settings...');
        // Will be implemented in content-manager.js
    }
}

// Global functions for button clicks
function showSection(sectionName) {
    if (window.adminPanel) {
        window.adminPanel.showSection(sectionName);
    }
}

function showAddCarForm() {
    // Will be implemented in car-manager.js
    console.log('Show add car form');
}

function showImageUpload() {
    // Will be implemented in image-manager.js
    console.log('Show image upload');
}

function showAddNewsForm() {
    // Will be implemented in content-manager.js
    console.log('Show add news form');
}

function saveContent() {
    // Will be implemented in content-manager.js
    console.log('Save content');
}

function saveSettings() {
    // Will be implemented in content-manager.js
    console.log('Save settings');
}

// Initialize admin panel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.adminPanel = new AdminPanel();
    
    // Initialize content manager for news management
    if (window.contentManager) {
        window.contentManager.init();
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdminPanel;
} 