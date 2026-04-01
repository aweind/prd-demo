const fs = require('fs');
const path = require('path');

const dir = 'd:\\AI-PRD\\原型设计';
const files = ['order_list.html', 'order_detail.html', 'product_list.html', 'product_detail.html'];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Append sidebar.css before </head>
    if (!content.includes('sidebar.css')) {
        content = content.replace('</style>', `</style>\n    <link rel="stylesheet" href="sidebar.css">`);
    }

    // 2. Remove old sidebar CSS block
    // Look for /* Sidebar Styles */.../* Main Content */ 
    content = content.replace(/\/\*\s*Sidebar Styles\s*\*\/(.*?)\/\*\s*Main Content\s*\*\//s, '/* Main Content */');

    // 3. Remove old sidebar HTML block and replace with JS script inclusion
    // Look for <!-- Sidebar ... --> ... <!-- Main Container -->
    const htmlRegex = /<!--\s*Sidebar.*?>.*?<!--\s*Main Container\s*-->/s;
    if (htmlRegex.test(content)) {
        if (!content.includes('sidebar.js')) {
            content = content.replace(htmlRegex, '<script src="sidebar.js"></script>\n\n    <!-- Main Container -->');
        } else {
            content = content.replace(htmlRegex, '<!-- Main Container -->');
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Patched ${file}`);
});
