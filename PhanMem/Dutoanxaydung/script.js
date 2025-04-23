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
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const floors = parseInt(document.getElementById('floors').value, 10);
    const roofFactor = parseFloat(document.getElementById('roof').value) / 100;
    const foundationFactor = parseFloat(document.getElementById('foundation').value) / 100;

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
        ${resultTable}
        <h3>Dự Toán Vật Liệu</h3>
        ${materialsTable}
        <h3>Tiến Độ Dự Đoán</h3>
        ${progressTable}
    `;

    // Hiển thị nút "Xuất Kết Quả" sau khi tính toán
    document.getElementById('exportBtn').style.display = 'block';
});

document.getElementById('exportBtn').addEventListener('click', () => {
    window.print(); // Sử dụng trình in của trình duyệt
});
