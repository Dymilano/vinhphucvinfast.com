const fs = require('fs');
const path = require('path');

const pages = [
    'vf5-plus.html',
    'vf3.html',
    'ec-van.html',
    'vf6.html',
    'vf7.html',
    'vf8-lux.html',
    'vf9.html',
    'limo-green.html',
    'minio-green.html',
    'herio-green.html',
    'nerio-green.html'
];

function updateBaoGiaButtons(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace href="#bao-gia" with href="#test-drive"
        if (content.includes('href="#bao-gia"')) {
            content = content.replace(/href="#bao-gia"/g, 'href="#test-drive"');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated bao-gia buttons in ${filePath}`);
        } else {
            console.log(`⚠️  No bao-gia buttons found in ${filePath}`);
        }
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
    }
}

console.log('🔄 Updating BÁO GIÁ LĂN BÁNH buttons in all car detail pages...\n');

pages.forEach(page => {
    const filePath = path.join(__dirname, 'public', page);
    if (fs.existsSync(filePath)) {
        updateBaoGiaButtons(filePath);
    } else {
        console.log(`⚠️  File not found: ${page}`);
    }
});

console.log('\n✅ Button update completed!');
console.log('🎯 All BÁO GIÁ LĂN BÁNH buttons now trigger the test drive modal'); 