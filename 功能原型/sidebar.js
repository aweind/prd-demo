const menuData = [
    {
        title: '主页',
        icon: '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
        target: '#'
    },
    {
        title: '订单',
        icon: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
        submenus: [
            { title: '所有订单', target: 'order_list.html' },
            { title: '草稿', target: '#' },
            { title: '弃单', target: '#' }
        ],
        matchUrls: ['order_list.html', 'order_detail.html']
    },
    {
        title: '商品',
        icon: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>',
        submenus: [
            { title: '商品列表', target: 'product_list.html' },
            { title: '库存列表', target: '#' },
            { title: '商品分类', target: '#' }
        ],
        matchUrls: ['product_list.html', 'product_detail.html']
    },
    {
        title: '顾客',
        icon: '<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>'
    },
    {
        title: '数据',
        icon: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
        hasArrow: true
    },
    {
        title: '折扣',
        icon: '<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>',
        hasArrow: true
    },
    {
        title: '博客',
        icon: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
        hasArrow: true
    },
    {
        title: '应用中心',
        icon: '<svg viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>'
    },
    {
        title: '店铺管理',
        icon: '<svg viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>',
        hasArrow: true
    }
];

function renderSidebar() {
    // Current URL pathname
    const currentPath = window.location.pathname.split('/').pop() || '';
    
    let html = `
    <div class="sidebar">
        <div class="logo-area">
            <img class="logo-icon" src="placeholder.svg" alt="Logo">
            <div class="logo-text">
                <span class="logo-title">Demostore <span style="font-size: 10px; opacity: 0.6; margin-left:4px;">▼</span></span>
                <span class="logo-subtitle">ID: 001</span>
            </div>
        </div>
        <div class="menu-list">
    `;

    menuData.forEach(item => {
        let isActiveGroup = false;
        if (item.matchUrls && item.matchUrls.some(url => currentPath.includes(url))) {
            isActiveGroup = true;
        } else if (item.target && currentPath.includes(item.target)) {
            isActiveGroup = true;
        }

        const iconColor = isActiveGroup ? 'var(--primary-color)' : '#666';
        const maskSvg = encodeURIComponent(item.icon).replace(/'/g, "%27").replace(/"/g, "%22");
        const iconStyle = \`background-color: \${iconColor}; -webkit-mask: url('data:image/svg+xml;utf8,\${maskSvg}') no-repeat center;\`;

        const itemClass = isActiveGroup ? 'menu-item active' : 'menu-item';
        const arrow = (item.submenus || item.hasArrow) ? (isActiveGroup ? '▼' : '▶') : '';

        const urlClick = item.target ? \`onclick="window.location.href='\${item.target}'"\` : '';

        html += \`
            <div class="\${itemClass}" \${urlClick}>
                <div class="menu-item-left">
                    <div class="menu-icon" style="\${iconStyle}"></div>
                    \${item.title}
                </div>
                \${arrow ? \`<span style="font-size:12px; opacity:0.5;">\${arrow}</span>\` : ''}
            </div>
        \`;

        if (item.submenus && isActiveGroup) {
            html += \`<div class="submenu">\`;
            item.submenus.forEach(sub => {
                const isSubActive = currentPath === sub.target || currentPath.includes(sub.target);
                const subClass = isSubActive ? 'submenu-item active' : 'submenu-item';
                const subClick = \`onclick="window.location.href='\${sub.target}'"\`;
                html += \`<div class="\${subClass}" \${subClick}>\${sub.title}</div>\`;
            });
            html += \`</div>\`;
        }
    });

    html += `
        </div>
        <div class="sidebar-bottom">
            <div class="menu-icon" style="background-color: #666; -webkit-mask: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 24 24%22%3E%3Cpath d=%22M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z%22/%3E%3C/svg%3E') no-repeat center;"></div>
            设置
        </div>
    </div>
    `;

    document.write(html);
}

renderSidebar();
