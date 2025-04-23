document.getElementById('floors').addEventListener('input', function () {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const floors = parseInt(document.getElementById('floors').value);

    if (isNaN(length) || isNaN(width) || isNaN(floors)) {
        return; // Do nothing if inputs are invalid
    }

    const baseArea = length * width;

    // Removed foundation suggestion logic
});

document.getElementById('calculateBtn').addEventListener('click', () => {
    const projectName = document.getElementById('projectName').value.trim() || "Công trình Nhà Ở MK Home"; // Use default if empty
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const floors = parseInt(document.getElementById('floors').value, 10);
    const roofFactor = parseFloat(document.getElementById('roof').value) / 100;
    const foundationFactor = parseFloat(document.getElementById('foundation').value) / 100;

    if (!projectName) {
        alert('Vui lòng nhập tên công trình!');
        return;
    }

    const costPerSquareMeter = 6000000; // 6 triệu/m²
    const baseArea = length * width;
    const foundationArea = baseArea * foundationFactor;
    const roofArea = baseArea * roofFactor;
    const floorCost = baseArea * costPerSquareMeter;
    const foundationCost = foundationArea * costPerSquareMeter;
    const roofCost = roofArea * costPerSquareMeter;
    const totalCost = foundationCost + floorCost * floors + roofCost;

    // Material estimates
    const totalConcreteVolume = (baseArea * floors + foundationArea + roofArea) * 0.15;
    const sand = totalConcreteVolume * 0.6;
    const stone = totalConcreteVolume * 0.4;
    const cementBags = totalConcreteVolume * 7;
    const bricks = baseArea * floors * 60;
    const plainSteel = totalConcreteVolume * 120 * 0.3; // 30% plain steel
    const deformedSteel = totalConcreteVolume * 120 * 0.7; // 70% deformed steel

    // Generate results table
    let floorRows = '';
    for (let i = 1; i <= floors; i++) {
        floorRows += `
            <tr>
                <td>${i + 1}</td>
                <td>Sàn ${i}</td>
                <td>${baseArea.toFixed(2)}</td>
                <td>100%</td>
                <td>${costPerSquareMeter.toLocaleString()}</td>
                <td>${floorCost.toLocaleString()}</td>
            </tr>
        `;
    }

    const resultTable = `
        <h3 style="text-align: center; margin-top: 20px;">BẢNG BẢO GIÁ CHI PHÍ XÂY DỰNG NHÀ</h3> <!-- Added title -->
        <p style="text-align: center; font-style: italic; color: gray;">(Không bao gồm nội thất rời)</p> <!-- Added note -->
        <table border="1" style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên Hạng Mục</th>
                    <th>Khối Lượng (m²)</th>
                    <th>Hệ Số</th>
                    <th>Đơn Giá (VND)</th>
                    <th>Thành Tiền (VND)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Móng</td>
                    <td>${baseArea.toFixed(2)}</td>
                    <td>${(foundationFactor * 100).toFixed(0)}%</td>
                    <td>${costPerSquareMeter.toLocaleString()}</td>
                    <td>${foundationCost.toLocaleString()}</td>
                </tr>
                ${floorRows}
                <tr>
                    <td>${floors + 2}</td>
                    <td>Mái</td>
                    <td>${baseArea.toFixed(2)}</td>
                    <td>${(roofFactor * 100).toFixed(0)}%</td>
                    <td>${costPerSquareMeter.toLocaleString()}</td>
                    <td>${roofCost.toLocaleString()}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" style="text-align: right;"><strong>Tổng Cộng</strong></td>
                    <td><strong>${totalCost.toLocaleString()}</strong></td>
                </tr>
            </tfoot>
        </table>
    `;

    // Generate materials table
    const materialsTable = `
        <table border="1" style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Vật Liệu</th>
                    <th>Khối Lượng</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Cát</td>
                    <td>${sand.toFixed(2)} m³</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Đá (1x2)</td>
                    <td>${stone.toFixed(2)} m³</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Xi măng</td>
                    <td>${cementBags.toFixed(0)} bao</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Gạch</td>
                    <td>${bricks.toFixed(0)} viên</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Thép trơn</td>
                    <td>${plainSteel.toFixed(2)} kg</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Thép vằn</td>
                    <td>${deformedSteel.toFixed(2)} kg</td>
                </tr>
            </tbody>
        </table>
    `;

    // Estimated durations for tasks (in days)
    const foundationDays = 10; // Ví dụ: 10 ngày cho thi công móng
    const columnDays = 3.5; // Cố định 3.5 ngày cho thi công cột
    const beamSlabDays = 7; // Cố định 7 ngày cho thi công dầm và sàn
    const wallDays = 5; // Ví dụ: 5 ngày mỗi tầng cho xây tường bao
    const partitionWallDays = 3; // Ví dụ: 3 ngày mỗi tầng cho xây tường ngăn phòng
    const electricalPlumbingDays = 7; // Cố định 7 ngày cho công tác điện nước
    const plasterDays = 10; // Cố định 10 ngày cho tô trong và ngoài
    const paintingDays = 15; // Cố định 15 ngày cho sơn hoàn thiện
    const totalDays = foundationDays + (floors * (columnDays + beamSlabDays + wallDays + partitionWallDays)) + electricalPlumbingDays + plasterDays + paintingDays;

    // Generate progress table rows dynamically
    let progressRows = `
        <tr>
            <td>1</td>
            <td>Thi Công Móng</td>
            <td>${foundationDays} ngày</td>
        </tr>
    `;
    let taskIndex = 2;
    for (let i = 1; i <= floors; i++) {
        progressRows += `
            <tr>
                <td>${taskIndex++}</td>
                <td>Thi Công Cột Tầng ${i}</td>
                <td>${columnDays} ngày</td>
            </tr>
            <tr>
                <td>${taskIndex++}</td>
                <td>Thi Công Dầm Sàn Tầng ${i}</td>
                <td>${beamSlabDays} ngày</td>
            </tr>
            <tr>
                <td>${taskIndex++}</td>
                <td>Xây Tường Bao Tầng ${i}</td>
                <td>${wallDays} ngày</td>
            </tr>
            <tr>
                <td>${taskIndex++}</td>
                <td>Xây Tường Ngăn Phòng Tầng ${i}</td>
                <td>${partitionWallDays} ngày</td>
            </tr>
            <tr>
                <td>${taskIndex++}</td>
                <td>Công Tác Điện Nước Tầng ${i}</td>
                <td>${electricalPlumbingDays} ngày</td>
            </tr>
            <tr>
                <td>${taskIndex++}</td>
                <td>Tô Trong và Ngoài Tầng ${i}</td>
                <td>${plasterDays} ngày</td>
            </tr>
            <tr>
                <td>${taskIndex++}</td>
                <td>Sơn Hoàn Thiện Tầng ${i}</td>
                <td>${paintingDays} ngày</td>
            </tr>
        `;
    }

    // Generate progress table
    const progressTable = `
        <table border="1" style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Công Tác</th>
                    <th>Số Ngày Dự Kiến</th>
                </tr>
            </thead>
            <tbody>
                ${progressRows}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2" style="text-align: right;"><strong>Tổng Thời Gian</strong></td>
                    <td><strong>${totalDays} ngày</strong></td>
                </tr>
            </tfoot>
        </table>
        <p style="margin-top: 10px; font-style: italic; color: gray;">
            Tiến độ trên chỉ mang tính chất tham khảo. Thực tế khi thi công ngoài công trình còn phụ thuộc vào rất nhiều yếu tố thiên thời, địa lợi, nhân hòa (và tiền). Nên sẽ có sự chênh lệch thực tế.
        </p>
    `;

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Kết Quả</h2>
        <h3 style="text-align: center;">Tên Công Trình: ${projectName}</h3> <!-- Display project name -->
        ${resultTable}
        <h3>Dự Toán Vật Liệu</h3>
        ${materialsTable}
        <h3>Tiến Độ Dự Đoán</h3>
        ${progressTable}
    `;

    // Hiển thị nút "Xuất Kết Quả" sau khi tính toán
    document.getElementById('exportBtn').style.display = 'block';

    // Show the "Export to Excel" button after calculation
    document.getElementById('exportExcelBtn').style.display = 'block';

    // Save full content (including project name) to history
    const fullContent = `
        <h2>Kết Quả</h2>
        <h3 style="text-align: center;">Tên Công Trình: ${projectName}</h3>
        ${resultTable}
        <h3>Dự Toán Vật Liệu</h3>
        ${materialsTable}
        <h3>Tiến Độ Dự Đoán</h3>
        ${progressTable}
    `;
    saveToHistory(projectName, fullContent);
});

document.getElementById('exportBtn').addEventListener('click', () => {
    window.print(); // Sử dụng trình in của trình duyệt
});

document.getElementById('exportExcelBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    const tables = resultDiv.querySelectorAll('table'); // Get all tables in the result section
    const workbook = XLSX.utils.book_new();
    const worksheetData = [];

    // Add project name and main title
    const projectName = document.getElementById('projectName').value.trim() || "Công trình Nhà Ở MK Home";
    worksheetData.push([`Tên Công Trình: ${projectName}`]);
    worksheetData.push(['BẢNG BẢO GIÁ CHI PHÍ XÂY DỰNG NHÀ']);
    worksheetData.push([]); // Empty row for spacing

    tables.forEach((table, index) => {
        // Add section title before each table
        if (index === 0) worksheetData.push(['Dự Toán Chi Phí']);
        if (index === 1) worksheetData.push(['Dự Toán Vật Liệu']);
        if (index === 2) worksheetData.push(['Tiến Độ Dự Đoán']);
        worksheetData.push([]); // Empty row for spacing

        const rows = table.querySelectorAll('tr');
        rows.forEach((row) => {
            const rowData = [];
            row.querySelectorAll('th, td').forEach((cell) => {
                rowData.push(cell.innerText);
            });
            worksheetData.push(rowData);
        });
        worksheetData.push([]); // Empty row for spacing between tables
    });

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Apply styles to the worksheet
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    for (let R = range.s.r; R <= range.e.r; ++R) {
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
            if (!worksheet[cellAddress]) continue;

            const cell = worksheet[cellAddress];
            cell.s = {
                font: { name: 'Arial', sz: 12, bold: R === 0 || R === 1 || worksheetData[R - 1]?.[0]?.startsWith('Dự Toán') }, // Bold for titles and section headers
                alignment: { horizontal: 'center', vertical: 'center' },
                border: {
                    top: { style: 'thin', color: { rgb: '000000' } },
                    bottom: { style: 'thin', color: { rgb: '000000' } },
                    left: { style: 'thin', color: { rgb: '000000' } },
                    right: { style: 'thin', color: { rgb: '000000' } },
                },
            };

            // Apply background color for headers
            if (worksheetData[R - 1]?.[0]?.startsWith('STT')) {
                cell.s.fill = { fgColor: { rgb: 'D2B48C' } }; // Tan color for headers
                cell.s.font.color = { rgb: 'FFFFFF' }; // White text for headers
            }
        }
    }

    const fileName = `${projectName.replace(/[^a-zA-Z0-9]/g, '_')}_Export.xlsx`; // Sanitize file name

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Báo Giá');
    XLSX.writeFile(workbook, fileName);
});

function saveToHistory(projectName, data) {
    const history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
    const timestamp = new Date().toLocaleString();
    history.push({ projectName, timestamp, data });
    localStorage.setItem('calculationHistory', JSON.stringify(history));
}

const historyBtn = document.getElementById('historyBtn');
const historyPopup = document.getElementById('historyPopup');
const closeHistoryPopup = document.getElementById('closeHistoryPopup');
const popupHistoryList = document.getElementById('popupHistoryList');

historyBtn.addEventListener('click', () => {
    const history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
    popupHistoryList.innerHTML = '';
    history.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${entry.projectName} - ${entry.timestamp}
            <button class="deleteHistoryBtn" data-index="${index}" style="margin-left: 10px;">Xóa</button>
        `;
        li.style.cursor = 'pointer';
        li.querySelector('.deleteHistoryBtn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the click event for opening the entry
            deleteHistoryEntry(index);
        });
        li.addEventListener('click', () => {
            const newWindow = window.open('', '_blank', 'width=800,height=600');
            newWindow.document.write(`
                <html>
                    <head>
                        <title>${entry.projectName} - ${entry.timestamp}</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 20px;
                                padding: 0;
                                background-color: #f5f5dc;
                                color: #4b4b4b;
                            }
                            h3 {
                                text-align: center;
                                color: #8b4513;
                            }
                            table {
                                width: 100%;
                                border-collapse: collapse;
                                margin-top: 20px;
                            }
                            table th, table td {
                                border: 1px solid #ddd;
                                padding: 10px;
                                text-align: center;
                            }
                            table th {
                                background-color: #d2b48c;
                                color: white;
                            }
                            table tr:nth-child(even) {
                                background-color: #fdf5e6;
                            }
                            table tr:hover {
                                background-color: #f5deb3;
                            }
                        </style>
                    </head>
                    <body>
                        <h3>${entry.projectName} - ${entry.timestamp}</h3>
                        ${entry.data}
                    </body>
                </html>
            `);
            newWindow.document.close();
        });
        popupHistoryList.appendChild(li);
    });
    historyPopup.style.display = 'block'; // Hiển thị popup
});

function deleteHistoryEntry(index) {
    const history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
    history.splice(index, 1); // Remove the selected entry
    localStorage.setItem('calculationHistory', JSON.stringify(history));
    historyBtn.click(); // Refresh the history list
}

document.getElementById('clearAllHistoryBtn').addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử?')) {
        localStorage.removeItem('calculationHistory'); // Clear all history
        historyBtn.click(); // Refresh the history list
    }
});

closeHistoryPopup.addEventListener('click', () => {
    historyPopup.style.display = 'none'; // Ẩn popup
});

// Make the popup draggable
const makePopupDraggable = (popup) => {
    let isDragging = false;
    let offsetX, offsetY;

    popup.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - popup.offsetLeft;
        offsetY = e.clientY - popup.offsetTop;
        popup.style.cursor = 'move';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            popup.style.left = `${e.clientX - offsetX}px`;
            popup.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        popup.style.cursor = 'default';
    });
};

// Apply draggable functionality to the history popup
makePopupDraggable(historyPopup);
