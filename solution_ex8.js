// 1. Khởi tạo dữ liệu
const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];

const portStatuses = [
    'AVAILABLE',
    'CHARGING',
    'ERROR',
    'AVAILABLE',
    'CHARGING',
    'AVAILABLE'
];

const portPowersKw = [250, 150, 60, 250, 60, 150];


// 2. Cập nhật trạng thái khi xe cắm sạc vào S01
const portS01Index = portIds.indexOf('S01');

if (portS01Index !== -1) {
    portStatuses[portS01Index] = 'CHARGING';
}


// 3. Cập nhật trạng thái khi S03 sửa xong
const portS03Index = portIds.indexOf('S03');

if (portS03Index !== -1) {
    portStatuses[portS03Index] = 'AVAILABLE';
}


// 4. Đếm số trụ đang AVAILABLE
let availableCount = 0;

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;
    }
}


// 5. Tìm trụ AVAILABLE có công suất lớn nhất
let maxPower = 0;
let maxPowerPort = '';

for (let i = 0; i < portIds.length; i++) {
    if (
        portStatuses[i] === 'AVAILABLE' &&
        portPowersKw[i] > maxPower
    ) {
        maxPower = portPowersKw[i];
        maxPowerPort = portIds[i];
    }
}


// 6. Xuất báo cáo
console.log('===== BÁO CÁO TRẠNG THÁI TRẠM SẠC =====');

for (let i = 0; i < portIds.length; i++) {
    console.log(
        `${portIds[i]} - Trạng thái: ${portStatuses[i]} - Công suất: ${portPowersKw[i]} kW`
    );
}

console.log('-----------------------------------------');
console.log(`Tổng số trụ AVAILABLE: ${availableCount}`);
console.log(`Trụ AVAILABLE có công suất lớn nhất: ${maxPowerPort}`);
console.log(`Công suất lớn nhất: ${maxPower} kW`);