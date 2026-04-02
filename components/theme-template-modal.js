class ThemeTemplateModal {
    static initialized = false;

    static init() {
        if(this.initialized) return;

        const style = document.createElement('style');
        style.innerHTML = \$(
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.45);
            z-index: 2000;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .modal-overlay.active {
            display: flex;
        }

        .modal-wrapper {
            background: #fff;
            border-radius: 8px;
            width: 800px;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
            transform: translateY(20px);
            opacity: 0;
            transition: 0.3s;
        }

        .modal-overlay.active .modal-wrapper {
            transform: translateY(0);
            opacity: 1;
        }

        .m-header {
            padding: 16px 24px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .m-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-main);
        }

        .m-close {
            cursor: pointer;
            color: var(--text-light);
        }

        .m-close:hover {
            color: var(--text-main);
        }

        .m-body {
            padding: 24px;
            overflow-y: auto;
            flex: 1;
        }

        .m-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .search-box {
            position: relative;
            width: 280px;
        }

        .search-box input {
            width: 100%;
            height: 32px;
            padding: 0 12px 0 32px;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            font-size: 14px;
            outline: none;
        }

        .search-box input:focus {
            border-color: var(--primary-color);
        }

        .search-box svg {
            position: absolute;
            left: 10px;
            top: 9px;
            width: 14px;
            height: 14px;
            fill: var(--text-light);
        }

        .btn {
            padding: 5px 16px;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
            border: 1px solid #d9d9d9;
            background: #fff;
        }

        .btn-primary {
            background: var(--primary-color);
            border-color: var(--primary-color);
            color: #fff;
        }

        .btn-primary:hover {
            background: var(--primary-hover);
            border-color: var(--primary-hover);
        }

        .btn-danger {
            color: var(--danger-color);
            border-color: #ffa39e;
            background: #fff1f0;
        }

        .btn-danger:hover {
            background: #ffccc7;
        }

        /* Table */
        .custom-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }

        .custom-table th {
            background: #fafafa;
            border-bottom: 1px solid #f0f0f0;
            padding: 12px 16px;
            font-weight: 500;
            font-size: 14px;
            color: var(--text-main);
        }

        .custom-table td {
            border-bottom: 1px solid #f0f0f0;
            padding: 12px 16px;
            font-size: 14px;
            color: var(--text-main);
        }

        .custom-table td:last-child {
            white-space: nowrap;
        }

        .custom-table tr:hover td {
            background: #fafafa;
        }

        .system-tag {
            font-size: 12px;
            background: #f5f5f5;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            padding: 2px 6px;
            color: var(--text-secondary);
            margin-left: 8px;
        }

        /* Checkbox Override */
        .checkbox {
            width: 16px;
            height: 16px;
            cursor: pointer;
            accent-color: var(--primary-color);
        }

        .checkbox:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        /* Header Batch Bar */
        .custom-table-container {
            position: relative;
        }

        .header-batch-bar {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 46px;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            display: none;
            align-items: center;
            padding: 0 16px;
            z-index: 5;
        }

        .header-batch-bar.active {
            display: flex;
        }

        .batch-info {
            font-size: 14px;
            color: var(--text-main);
            margin-left: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .btn-white {
            background: #fff;
            border: 1px solid #d9d9d9;
            padding: 4px 12px;
            border-radius: 4px;
            color: var(--danger-color);
            cursor: pointer;
            font-size: 14px;
        }

        .btn-white:hover {
            border-color: var(--danger-color);
        }

        /* Pagination */
        .pagination {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 16px;
            margin-top: 24px;
            font-size: 14px;
            color: var(--text-secondary);
        }

        .page-ctrl {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .page-item {
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            cursor: pointer;
            background: #fff;
        }

        .page-item.active {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        .page-item:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        /* --- CONFIRM MODAL STYLES --- */
        .confirm-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 3000;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .confirm-overlay.active {
            display: flex;
        }

        .confirm-card {
            background: #fff;
            border-radius: 8px;
            width: 420px;
            padding: 24px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .confirm-title {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
            font-weight: 600;
            font-size: 16px;
            color: var(--text-main);
        }

        .confirm-title svg {
            fill: #faad14;
            width: 22px;
            height: 22px;
        }

        .confirm-msg {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 24px;
            padding-left: 34px;
        }

        .confirm-btns {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }

        .Replace('', '\').Replace('$', '\$'))\;
        document.head.appendChild(style);

        const container = document.createElement('div');
        container.innerHTML = \$(
                <div class="modal-overlay" id="templateModal">
                    <div class="modal-wrapper">
                        <div class="m-header">
                            <div class="m-title">绠＄悊鍟嗗搧璇︽儏妯℃澘</div>
                            <div class="m-close"
                                onclick="document.getElementById('templateModal').classList.remove('active')">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                </svg>
                            </div>
                        </div>
                        <div class="m-body">
                            <div class="m-toolbar">
                                <div class="search-box">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <path
                                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                    </svg>
                                    <input type="text" placeholder="杈撳叆妯℃澘鍚嶇О妯＄硦鎼滅储...">
                                </div>
                                <button class="btn btn-primary" onclick="showNewTemplateModal()">+ 鏂板缓鍟嗗搧璇︽儏妯℃澘</button>
                            </div>

                            <div class="custom-table-container">
                                <div class="header-batch-bar" id="headerBatchBar">
                                    <input type="checkbox" class="checkbox" id="selectAllOverlay">
                                    <div class="batch-info">
                                        <span>宸查€夋嫨 <strong id="selCount">0</strong> 涓ā鏉?/span>
                                        <button class="btn-white" onclick="showConfirm()">鍒犻櫎</button>
                                    </div>
                                </div>

                                <table class="custom-table" id="tplTable">
                                    <thead>
                                        <tr>
                                            <th width="40"><input type="checkbox" class="checkbox" id="selectAll"></th>
                                            <th>妯℃澘鍚嶇О</th>
                                            <th width="140">鍏宠仈鍟嗗搧鏁伴噺</th>
                                            <th width="180">鎿嶄綔</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" class="checkbox" disabled></td>
                                            <td>榛樿鍟嗗搧璇︽儏椤垫ā鏉?<span class="system-tag">绯荤粺</span></td>
                                            <td>1,204 浠?/td>
                                            <td>
                                                <a href="#"
                                                    style="color:var(--primary-color); text-decoration:none; margin-right:8px;">閰嶇疆</a>
                                                <a href="javascript:void(0)" onclick="copyTemplateCode('榛樿鍟嗗搧璇︽儏椤垫ā鏉?)"
                                                    style="color:var(--primary-color); text-decoration:none;">澶嶅埗浠ｇ爜</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="checkbox" disabled></td>
                                            <td>鐧捐揣鍟嗗搧璇︽儏妯℃澘1 <span class="system-tag">绯荤粺</span></td>
                                            <td>1,204 浠?/td>
                                            <td>
                                                <a href="#"
                                                    style="color:var(--primary-color); text-decoration:none; margin-right:8px;">閰嶇疆</a>
                                                <a href="javascript:void(0)" onclick="copyTemplateCode('鐧捐揣鍟嗗搧璇︽儏妯℃澘1')"
                                                    style="color:var(--primary-color); text-decoration:none;">澶嶅埗浠ｇ爜</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="checkbox row-checkbox"></td>
                                            <td>绉嬪鐗规儬娆炬ā鏉?/td>
                                            <td>15 浠?/td>
                                            <td>
                                                <a href="#"
                                                    style="color:var(--primary-color); text-decoration:none; margin-right:8px;">閰嶇疆</a>
                                                <a href="javascript:void(0)" onclick="copyTemplateCode('绉嬪鐗规儬娆炬ā鏉?)"
                                                    style="color:var(--primary-color); text-decoration:none; margin-right:8px;">澶嶅埗浠ｇ爜</a>
                                                <a href="javascript:void(0)" class="delete-link"
                                                    style="color:var(--danger-color); text-decoration:none;">鍒犻櫎</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="checkbox row-checkbox"></td>
                                            <td>鐢疯涓撲韩璇︽儏椤?/td>
                                            <td>340 浠?/td>
                                            <td>
                                                <a href="#"
                                                    style="color:var(--primary-color); text-decoration:none; margin-right:8px;">閰嶇疆</a>
                                                <a href="javascript:void(0)" onclick="copyTemplateCode('鐢疯涓撲韩璇︽儏椤?)"
                                                    style="color:var(--primary-color); text-decoration:none; margin-right:8px;">澶嶅埗浠ｇ爜</a>
                                                <a href="javascript:void(0)" class="delete-link"
                                                    style="color:var(--danger-color); text-decoration:none;">鍒犻櫎</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="pagination">
                                    <span>鍏?45 鏉¤褰?/span>
                                    <div class="page-ctrl">
                                        <div class="page-item active">1</div>
                                        <div class="page-item">2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- NEW TEMPLATE MODAL -->
                <div class="modal-overlay" id="newTemplateModal" style="z-index: 3001;">
                    <div class="modal-wrapper" style="width: 480px;">
                        <div class="m-header">
                            <div class="m-title">鏂板缓鍟嗗搧璇︽儏妯℃澘</div>
                            <div class="m-close" onclick="hideNewTemplateModal()">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                </svg>
                            </div>
                        </div>
                        <div class="m-body" style="padding: 24px;">
                            <div class="form-item">
                                <label class="form-label"><span class="required">*</span>妯℃澘鍚嶇О</label>
                                <input type="text" class="form-input" placeholder="璇疯緭鍏ユā鏉垮悕绉? id="newTplName">
                            </div>
                            <div class="form-item">
                                <label class="form-label"><span class="required">*</span>鍒涘缓鏂瑰紡</label>
                                <div style="display: flex; gap: 24px; margin-top: 8px;">
                                    <label
                                        style="display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 14px;">
                                        <input type="radio" name="createMethod" value="template" checked
                                            onchange="switchCreateMethod('template')"> 鍩轰簬宸叉湁妯℃澘
                                    </label>
                                    <label
                                        style="display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 14px;">
                                        <input type="radio" name="createMethod" value="json"
                                            onchange="switchCreateMethod('json')"> 瀵煎叆 JSON 浠ｇ爜
                                    </label>
                                </div>
                            </div>

                            <!-- Method: Template -->
                            <div id="method-template">
                                <div class="form-item">
                                    <label class="form-label"><span class="required">*</span>閫夋嫨鍩虹妯℃澘</label>
                                    <div class="form-select">
                                        <input type="text" class="form-input" placeholder="璇烽€夋嫨鐢ㄤ簬鍏嬮殕鐨勬ā鏉? readonly>
                                    </div>
                                </div>
                            </div>

                            <!-- Method: JSON -->
                            <div id="method-json" style="display: none;">
                                <div class="form-item">
                                    <label class="form-label"><span class="required">*</span>JSON 浠ｇ爜</label>
                                    <textarea class="form-input"
                                        style="height: 120px; padding: 12px; resize: none; font-family: monospace;"
                                        placeholder="璇风矘璐翠粠鍏朵粬搴楅摵澶嶅埗鐨勫姞瀵?JSON 浠ｇ爜"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="m-footer">
                            <button class="btn btn-cancel" onclick="hideNewTemplateModal()">鍙?娑?/button>
                            <button class="btn btn-confirm" id="btnConfirmNew">纭?瀹?/button>
                        </div>
                    </div>
                </div>

                <div class="confirm-overlay" id="confirmOverlay">
                    <div class="confirm-card">
                        <div class="confirm-title">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="#faad14">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                            纭鍒犻櫎妯℃澘锛?                        </div>
                        <div class="confirm-msg" id="confirmMsg">鍒犻櫎鎿嶄綔鏃犳硶鎾ら攢锛屽叧鑱旇妯℃澘鐨勫晢鍝佸皢鑷姩璋冩暣涓轰娇鐢ㄩ粯璁ゅ晢鍝佽鎯呴〉妯℃澘锛屾槸鍚︾‘璁わ紵</div>
                        <div class="confirm-btns">
                            <button class="btn" onclick="hideConfirm()">鍙?娑?/button>
                            <button class="btn btn-danger" onclick="executeDelete()"
                                style="background:var(--danger-color); color:#fff; border-color:var(--danger-color);">纭鍒犻櫎</button>
                        </div>
                    </div>
                </div>

                <div class="toast-container" id="globalToast">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="#52c41a">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span id="toastMsg">鎿嶄綔鎴愬姛</span>
                </div>
            </div>

            .Replace('', '\').Replace('$', '\$'))\;
        
        while(container.firstChild) {
            document.body.appendChild(container.firstChild);
        }

        const script = document.createElement('script');
        script.innerHTML = \$(
        // Tab Switching Logic
        function switchTaskPage(pageId, btn) {
            // Update Tab UI
            document.querySelectorAll('.nav-tab-item').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            // Update Page Visibility
            document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
        }

        // Existing Logic for Page 1 Modals and Tables
        const selectAll = document.getElementById('selectAll');
        const selectAllOverlay = document.getElementById('selectAllOverlay');
        const checkboxes = document.querySelectorAll('.row-checkbox');
        const headerBatchBar = document.getElementById('headerBatchBar');
        const selCount = document.getElementById('selCount');
        const confirmOverlay = document.getElementById('confirmOverlay');

        function updateBatchBar() {
            const checkedBoxes = document.querySelectorAll('.row-checkbox:checked');
            if (headerBatchBar) {
                if (checkedBoxes.length > 0) {
                    headerBatchBar.classList.add('active');
                    selCount.textContent = checkedBoxes.length;
                } else {
                    headerBatchBar.classList.remove('active');
                }
            }
            const isAllChecked = (checkedBoxes.length === checkboxes.length && checkboxes.length > 0);
            if (selectAll) selectAll.checked = isAllChecked;
            if (selectAllOverlay) selectAllOverlay.checked = isAllChecked;
        }

        checkboxes.forEach(box => {
            box.addEventListener('change', updateBatchBar);
        });

        const syncCheckboxes = (e) => {
            checkboxes.forEach(box => {
                box.checked = e.target.checked;
            });
            updateBatchBar();
        };

        if (selectAll) selectAll.addEventListener('change', syncCheckboxes);
        if (selectAllOverlay) selectAllOverlay.addEventListener('change', syncCheckboxes);

        function showToast(msg) {
            const toast = document.getElementById('globalToast');
            document.getElementById('toastMsg').textContent = msg;
            toast.classList.add('active');
            setTimeout(() => { toast.classList.remove('active'); }, 2500);
        }

        // Delete Logic
        document.querySelectorAll('.delete-link').forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();
                const row = link.closest('tr');
                const name = row.cells[1].textContent.trim();
                const count = row.cells[2].textContent.trim();
                document.getElementById('confirmMsg').innerHTML = `鍒犻櫎鎿嶄綔鏃犳硶鎾ら攢锛屽叧鑱旀ā鏉?[${name}] 鐨勫晢鍝侊紙璁?${count}锛夊皢鑷姩璋冩暣涓洪粯璁ゅ晢鍝佽鎯呴〉妯℃澘锛屾槸鍚︾‘璁わ紵`;
                showConfirm();
            };
        });

        function showConfirm() { if (confirmOverlay) confirmOverlay.classList.add('active'); }
        function hideConfirm() { if (confirmOverlay) confirmOverlay.classList.remove('active'); }
        function executeDelete() {
            hideConfirm();
            showToast('鍒犻櫎鎴愬姛');
        }

        // New Template Modal Logic
        function showNewTemplateModal() {
            document.getElementById('newTemplateModal').classList.add('active');
        }
        function hideNewTemplateModal() {
            document.getElementById('newTemplateModal').classList.remove('active');
        }

        const newTplName = document.getElementById('newTplName');
        const btnConfirmNew = document.getElementById('btnConfirmNew');

        function switchCreateMethod(method) {
            document.getElementById('method-template').style.display = method === 'template' ? 'block' : 'none';
            document.getElementById('method-json').style.display = method === 'json' ? 'block' : 'none';
        }

        function copyTemplateCode(name) {
            showToast('澶嶅埗Json浠ｇ爜鎴愬姛');
        }

        if (newTplName) {
            newTplName.addEventListener('input', (e) => {
                if (e.target.value.trim().length > 0) {
                    btnConfirmNew.classList.add('active');
                    btnConfirmNew.style.cursor = 'pointer';
                } else {
                    btnConfirmNew.classList.remove('active');
                    btnConfirmNew.style.cursor = 'default';
                }
            });
        }

        btnConfirmNew.onclick = () => {
            if (btnConfirmNew.classList.contains('active')) {
                alert('鏂板缓鎴愬姛锛? + newTplName.value);
                hideNewTemplateModal();
                newTplName.value = '';
                btnConfirmNew.classList.remove('active');
            }
        };

        .Replace('', '\').Replace('$', '\$'))\;
        document.body.appendChild(script);

        this.initialized = true;
    }

    static open() {
        this.init();
        document.getElementById('templateModal').classList.add('active');
    }
}
window.ThemeTemplateModal = ThemeTemplateModal;