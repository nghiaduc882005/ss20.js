var diemVatLy = parseFloat(prompt("Nhập điểm Vật lý:"));
var diemHoaHoc = parseFloat(prompt("Nhập điểm Hóa học:"));
var diemSinhHoc = parseFloat(prompt("Nhập điểm Sinh học:"));

var tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;
var diemTrungBinh = tongDiem / 3;

console.log("Tổng điểm: " + tongDiem);
console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2)); 
