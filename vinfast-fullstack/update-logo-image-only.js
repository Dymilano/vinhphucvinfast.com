const fs = require('fs');
const path = require('path');

const pages = [
    'index.html',
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
    'nerio-green.html',
    'bang-gia.html',
    'tin-tuc.html',
    'pin-tram-sac.html',
    'lien-he.html'
];

const newLogoHTML = `<img src="images/logo-1.png" alt="VinFast Logo" style="width: 40px; height: 40px; object-fit: contain;">`;

function updateLogoInPage(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace the entire logo section (both icon and text) with just the image
        const logoSectionRegex = /<div class="logo-icon">[\s\S]*?<\/div>\s*<div class="logo-text">[\s\S]*?<\/div>/g;
        
        if (logoSectionRegex.test(content)) {
            content = content.replace(logoSectionRegex, `<div class="logo-icon">${newLogoHTML}</div>`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated logo in ${filePath}`);
        } else {
            console.log(`⚠️  No logo section found in ${filePath}`);
        }
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
    }
}

console.log('🔄 Updating logo to show only image without text in all pages...\n');

pages.forEach(page => {
    const filePath = path.join(__dirname, 'public', page);
    if (fs.existsSync(filePath)) {
        updateLogoInPage(filePath);
    } else {
        console.log(`⚠️  File not found: ${page}`);
    }
});

console.log('\n✅ Logo update completed!');
console.log('🎨 All pages now show only the logo image without text'); 