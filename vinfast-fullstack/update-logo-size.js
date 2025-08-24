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

const newLogoHTML = `<a href="index.html" style="text-decoration: none; display: flex; align-items: center;">
    <img src="images/logo-1.png" alt="VinFast Logo" style="width: 150px; height: 50px; object-fit: contain;">
</a>`;

function updateLogoInPage(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find the logo section and replace it with larger size
        const logoSectionRegex = /<div class="logo">\s*<div class="logo-icon">[\s\S]*?<\/div>\s*<span class="logo-text">[\s\S]*?<\/span>\s*<\/div>/g;
        
        if (logoSectionRegex.test(content)) {
            content = content.replace(logoSectionRegex, `<div class="logo">${newLogoHTML}</div>`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated logo size in ${filePath}`);
        } else {
            console.log(`⚠️  No logo section found in ${filePath}`);
        }
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
    }
}

console.log('🔄 Updating logo size to be larger and more prominent...\n');

pages.forEach(page => {
    const filePath = path.join(__dirname, 'public', page);
    if (fs.existsSync(filePath)) {
        updateLogoInPage(filePath);
    } else {
        console.log(`⚠️  File not found: ${page}`);
    }
});

console.log('\n✅ Logo size update completed!');
console.log('🎨 All pages now have larger logo (150px x 50px)');
console.log('🔗 Logo is clickable and links to homepage'); 