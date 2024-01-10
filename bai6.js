// Yêu cầu người dùng nhập giá trị độ C
var doCelsius = parseFloat(prompt("Nhập giá trị độ Celsius:"));

// Chuyển đổi độ C sang độ F
var doFahrenheit = (doCelsius * 9 / 5) + 32;

// Hiển thị kết quả trên màn hình console
console.log(doCelsius + " độ Celsius tương đương với " + doFahrenheit.toFixed(2) + " độ Fahrenheit");
