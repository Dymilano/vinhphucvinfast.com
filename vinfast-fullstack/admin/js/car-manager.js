// ===== CAR MANAGER =====

class CarManager {
    constructor() {
        this.cars = [];
        this.init();
    }

    init() {
        this.loadCars();
        this.setupEventListeners();
    }

    // Load cars data
    loadCars() {
        // Sample car data - will be loaded from JSON/database
        this.cars = [
            {
                id: 1,
                name: 'VinFast VF 3',
                price: '299.000.000 VNĐ',
                category: 'SUV nhỏ',
                description: 'SUV điện nhỏ gọn, phù hợp cho gia đình',
                features: ['Pin 42.2 kWh', 'Quãng đường 300km', 'Công suất 95 kW'],
                images: [
                    'images/vf3/vinfast-vf3-240510-c1-765x430.jpg',
                    'images/vf3/vinfast-vf3-240510-c4-765x430.jpg',
                    'images/vf3/vinfast-vf3-240510-c5-765x430.jpg'
                ],
                status: 'active'
            },
            {
                id: 2,
                name: 'VinFast VF 5 Plus',
                price: '529.000.000 VNĐ',
                category: 'SUV cỡ trung',
                description: 'SUV điện cỡ trung với không gian rộng rãi',
                features: ['Pin 57.8 kWh', 'Quãng đường 400km', 'Công suất 150 kW'],
                images: [
                    'images/vf5-plus/vinfast-vf-5-240724-c-02-765x430.jpg',
                    'images/vf5-plus/vinfast-vf-5-240724-c-03-765x430.jpg',
                    'images/vf5-plus/vinfast-vf-5-240724-c-05.jpg'
                ],
                status: 'active'
            },
            {
                id: 3,
                name: 'VinFast VF 6',
                price: '694.000.000 VNĐ',
                category: 'SUV cỡ trung',
                description: 'SUV điện cao cấp với công nghệ tiên tiến',
                features: ['Pin 74.0 kWh', 'Quãng đường 500km', 'Công suất 180 kW'],
                images: [
                    'images/vf6/vinfast-231207_0065_vf-6-765x430.jpg',
                    'images/vf6/vinfast-231207_0066_vf-6-765x430.jpg'
                ],
                status: 'active'
            },
            {
                id: 4,
                name: 'VinFast VF 7',
                price: '799.000.000 VNĐ',
                category: 'SUV cỡ lớn',
                description: 'SUV điện 7 chỗ với thiết kế sang trọng',
                features: ['Pin 87.7 kWh', 'Quãng đường 550km', 'Công suất 200 kW'],
                images: [
                    'images/vf7/vinfast-231207_0053_vf-7-765x430.jpg',
                    'images/vf7/vinfast-231207_0054_vf-7-765x430.jpg'
                ],
                status: 'active'
            },
            {
                id: 5,
                name: 'VinFast VF 8 Lux',
                price: '1.069.000.000 VNĐ',
                category: 'SUV cao cấp',
                description: 'SUV điện cao cấp với công nghệ hàng đầu',
                features: ['Pin 92.0 kWh', 'Quãng đường 600km', 'Công suất 300 kW'],
                images: [
                    'images/vf8-lux/vinfast-vf-8-240723-c-g-20-765x430.jpg',
                    'images/vf8-lux/vinfast-vf-8-240723-c-g-21-765x430.jpg',
                    'images/vf8-lux/vinfast-vf-8-240723-c-g-16-765x430.jpg',
                    'images/vf8-lux/vinfast-vf-8-240723-c-g-14-765x430.jpg',
                    'images/vf8-lux/vinfast-vf-8-240723-c-02-765x430.jpg'
                ],
                status: 'active'
            },
            {
                id: 6,
                name: 'VinFast VF 9',
                price: '1.499.000.000 VNĐ',
                category: 'SUV cao cấp',
                description: 'SUV điện cao cấp nhất với không gian xa xỉ',
                features: ['Pin 106.0 kWh', 'Quãng đường 700km', 'Công suất 400 kW'],
                images: [
                    'images/vf9/vinfast-231207_0020_vf-9-765x430.jpg',
                    'images/vf9/vinfast-231207_0021_vf-9-765x430.jpg'
                ],
                status: 'active'
            },
            {
                id: 7,
                name: 'VinFast Limo Green',
                price: 'Liên hệ',
                category: 'Xe thương mại',
                description: 'Xe thương mại điện thân thiện môi trường',
                features: ['Pin 42.2 kWh', 'Quãng đường 300km', 'Công suất 95 kW'],
                images: [
                    'images/limo-green/vinfast-limo-green-250318-c01-765x430.jpg',
                    'images/limo-green/vinfast-limo-green-250318-c02-765x430.jpg'
                ],
                status: 'active'
            },
            {
                id: 8,
                name: 'VinFast Minio Green',
                price: 'Liên hệ',
                category: 'Xe thương mại',
                description: 'Xe thương mại điện nhỏ gọn',
                features: ['Pin 35.0 kWh', 'Quãng đường 250km', 'Công suất 80 kW'],
                images: [
                    'images/minio-green/minio-img-01.webp',
                    'images/minio-green/minio-img-02.webp'
                ],
                status: 'active'
            },
            {
                id: 9,
                name: 'VinFast Herio Green',
                price: 'Liên hệ',
                category: 'Xe thương mại',
                description: 'Xe thương mại điện đa dụng',
                features: ['Pin 45.0 kWh', 'Quãng đường 320km', 'Công suất 100 kW'],
                images: [
                    'images/herio-green/herio-img-01.webp',
                    'images/herio-green/herio-img-02.webp'
                ],
                status: 'active'
            },
            {
                id: 10,
                name: 'VinFast Nerio Green',
                price: 'Liên hệ',
                category: 'Xe thương mại',
                description: 'Xe thương mại điện tiết kiệm',
                features: ['Pin 40.0 kWh', 'Quãng đường 280km', 'Công suất 90 kW'],
                images: [
                    'images/nerio-green/nerio-img-01.webp',
                    'images/nerio-green/nerio-img-02.webp'
                ],
                status: 'active'
            },
            {
                id: 11,
                name: 'VinFast EC Van',
                price: 'Liên hệ',
                category: 'Xe thương mại',
                description: 'Xe van điện thân thiện môi trường',
                features: ['Pin 50.0 kWh', 'Quãng đường 350km', 'Công suất 120 kW'],
                images: [
                    'images/ec-van/ecvan-jade.webp',
                    'images/ec-van/ecvan-img-03.webp',
                    'images/ec-van/minivan-jade-03.webp',
                    'images/ec-van/minivan-red-03.webp',
                    'images/ec-van/minivan-white-03.webp',
                    'images/ec-van/minivan-yellow-04.webp'
                ],
                status: 'active'
            }
        ];
        
        this.renderCarsList();
        this.saveCars();
    }

    setupEventListeners() {
        // Event listeners will be set up here
    }

    renderCarsList() {
        const carsList = document.getElementById('carsList');
        if (!carsList) return;

        carsList.innerHTML = this.cars.map(car => this.createCarCard(car)).join('');
    }

    createCarCard(car) {
        const imagesHtml = car.images.map(img => `
            <div class="car-image-item">
                <img src="../${img}" alt="${car.name}" onclick="viewCarImage('${img}', '${car.name}')">
                <button class="btn btn-danger btn-sm" onclick="deleteCarImage(${car.id}, '${img}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        return `
            <div class="car-card" data-car-id="${car.id}">
                <div class="car-header">
                    <h3>${car.name}</h3>
                    <div class="car-actions">
                        <button class="btn btn-primary btn-sm" onclick="editCar(${car.id})">
                            <i class="fas fa-edit"></i> Sửa
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="deleteCar(${car.id})">
                            <i class="fas fa-trash"></i> Xóa
                        </button>
                    </div>
                </div>
                
                <div class="car-info">
                    <p><strong>Giá:</strong> ${car.price}</p>
                    <p><strong>Phân loại:</strong> ${car.category}</p>
                    <p><strong>Mô tả:</strong> ${car.description}</p>
                    <p><strong>Trạng thái:</strong> 
                        <span class="status-badge ${car.status}">${car.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}</span>
                    </p>
                </div>

                <div class="car-features">
                    <h4>Tính năng:</h4>
                    <ul>
                        ${car.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>

                <div class="car-images">
                    <h4>Hình ảnh (${car.images.length}):</h4>
                    <div class="car-images-grid">
                        ${imagesHtml}
                    </div>
                    <button class="btn btn-secondary btn-sm" onclick="addCarImage(${car.id})">
                        <i class="fas fa-plus"></i> Thêm ảnh
                    </button>
                </div>
            </div>
        `;
    }

    showAddCarForm() {
        const carsList = document.getElementById('carsList');
        if (!carsList) return;

        const addForm = `
            <div class="add-car-form">
                <h3>Thêm xe mới</h3>
                <form onsubmit="addCar(event)">
                    <div class="form-group">
                        <label>Tên xe:</label>
                        <input type="text" id="carName" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Giá:</label>
                        <input type="text" id="carPrice" placeholder="VD: 299.000.000 VNĐ" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Phân loại:</label>
                        <input type="text" id="carCategory" placeholder="VD: SUV nhỏ" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Mô tả:</label>
                        <textarea id="carDescription" rows="3" required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Tính năng (mỗi dòng một tính năng):</label>
                        <textarea id="carFeatures" rows="3" placeholder="Pin 42.2 kWh&#10;Quãng đường 300km&#10;Công suất 95 kW" required></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-plus"></i> Thêm xe
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="cancelAddCar()">
                            <i class="fas fa-times"></i> Hủy
                        </button>
                    </div>
                </form>
            </div>
        `;

        carsList.insertAdjacentHTML('afterbegin', addForm);
    }

    addCar(event) {
        event.preventDefault();
        
        const name = document.getElementById('carName').value;
        const price = document.getElementById('carPrice').value;
        const category = document.getElementById('carCategory').value;
        const description = document.getElementById('carDescription').value;
        const features = document.getElementById('carFeatures').value.split('\n').filter(f => f.trim());

        const newCar = {
            id: Date.now(),
            name,
            price,
            category,
            description,
            features,
            images: [],
            status: 'active'
        };

        this.cars.push(newCar);
        this.saveCars();
        this.renderCarsList();
        this.showMessage('Đã thêm xe mới thành công!', 'success');
    }

    editCar(carId) {
        const car = this.cars.find(c => c.id === carId);
        if (!car) return;

        const carsList = document.getElementById('carsList');
        if (!carsList) return;

        const editForm = `
            <div class="edit-car-form" data-car-id="${car.id}">
                <h3>Sửa xe: ${car.name}</h3>
                <form onsubmit="updateCar(event, ${car.id})">
                    <div class="form-group">
                        <label>Tên xe:</label>
                        <input type="text" id="editCarName" value="${car.name}" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Giá:</label>
                        <input type="text" id="editCarPrice" value="${car.price}" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Phân loại:</label>
                        <input type="text" id="editCarCategory" value="${car.category}" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Mô tả:</label>
                        <textarea id="editCarDescription" rows="3" required>${car.description}</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Tính năng (mỗi dòng một tính năng):</label>
                        <textarea id="editCarFeatures" rows="3" required>${car.features.join('\n')}</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Trạng thái:</label>
                        <select id="editCarStatus">
                            <option value="active" ${car.status === 'active' ? 'selected' : ''}>Hoạt động</option>
                            <option value="inactive" ${car.status === 'inactive' ? 'selected' : ''}>Tạm dừng</option>
                        </select>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> Cập nhật
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="cancelEditCar(${car.id})">
                            <i class="fas fa-times"></i> Hủy
                        </button>
                    </div>
                </form>
            </div>
        `;

        // Replace car card with edit form
        const carCard = document.querySelector(`[data-car-id="${car.id}"]`);
        if (carCard) {
            carCard.outerHTML = editForm;
        }
    }

    updateCar(event, carId) {
        event.preventDefault();
        
        const car = this.cars.find(c => c.id === carId);
        if (!car) return;

        car.name = document.getElementById('editCarName').value;
        car.price = document.getElementById('editCarPrice').value;
        car.category = document.getElementById('editCarCategory').value;
        car.description = document.getElementById('editCarDescription').value;
        car.features = document.getElementById('editCarFeatures').value.split('\n').filter(f => f.trim());
        car.status = document.getElementById('editCarStatus').value;

        this.saveCars();
        this.renderCarsList();
        this.showMessage('Đã cập nhật xe thành công!', 'success');
    }

    deleteCar(carId) {
        if (confirm('Bạn có chắc chắn muốn xóa xe này?')) {
            this.cars = this.cars.filter(c => c.id !== carId);
            this.saveCars();
            this.renderCarsList();
            this.showMessage('Đã xóa xe thành công!', 'success');
        }
    }

    addCarImage(carId) {
        const car = this.cars.find(c => c.id === carId);
        if (!car) return;

        const imagePath = prompt('Nhập đường dẫn ảnh (VD: images/vf3/new-image.jpg):');
        if (imagePath && imagePath.trim()) {
            car.images.push(imagePath.trim());
            this.saveCars();
            this.renderCarsList();
            this.showMessage('Đã thêm ảnh thành công!', 'success');
        }
    }

    deleteCarImage(carId, imagePath) {
        if (confirm('Bạn có chắc chắn muốn xóa ảnh này?')) {
            const car = this.cars.find(c => c.id === carId);
            if (car) {
                car.images = car.images.filter(img => img !== imagePath);
                this.saveCars();
                this.renderCarsList();
                this.showMessage('Đã xóa ảnh thành công!', 'success');
            }
        }
    }

    cancelAddCar() {
        const addForm = document.querySelector('.add-car-form');
        if (addForm) {
            addForm.remove();
        }
    }

    cancelEditCar(carId) {
        this.renderCarsList();
    }

    saveCars() {
        localStorage.setItem('vinfast_cars', JSON.stringify(this.cars));
    }

    showMessage(message, type = 'info') {
        // Create a simple message display
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
function showAddCarForm() {
    if (window.carManager) {
        window.carManager.showAddCarForm();
    }
}

function addCar(event) {
    if (window.carManager) {
        window.carManager.addCar(event);
    }
}

function editCar(carId) {
    if (window.carManager) {
        window.carManager.editCar(carId);
    }
}

function updateCar(event, carId) {
    if (window.carManager) {
        window.carManager.updateCar(event, carId);
    }
}

function deleteCar(carId) {
    if (window.carManager) {
        window.carManager.deleteCar(carId);
    }
}

function addCarImage(carId) {
    if (window.carManager) {
        window.carManager.addCarImage(carId);
    }
}

function deleteCarImage(carId, imagePath) {
    if (window.carManager) {
        window.carManager.deleteCarImage(carId, imagePath);
    }
}

function cancelAddCar() {
    if (window.carManager) {
        window.carManager.cancelAddCar();
    }
}

function cancelEditCar(carId) {
    if (window.carManager) {
        window.carManager.cancelEditCar(carId);
    }
}

function viewCarImage(imagePath, carName) {
    // Open image in new tab
    window.open(`../${imagePath}`, '_blank');
}

// Initialize car manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.carManager = new CarManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CarManager;
} 