// Khai báo hằng số PI
const PI = 3.14159;

//  nhập bán kính của hình tròn
var banKinh = parseFloat(prompt("Nhập bán kính của hình tròn:"));

var chuVi = 2 * PI * banKinh;
var dienTich = PI * Math.pow(banKinh, 2);

console.log("Chu vi của hình tròn là: " + chuVi.toFixed(2));
console.log("Diện tích của hình tròn là: " + dienTich.toFixed(2));
