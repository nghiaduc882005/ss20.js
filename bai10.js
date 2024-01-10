let a = 6;
let result = ++a + a + a++ + ++a + a;

// Giá trị của a và result sau khi thực hiện chương trình:
// a = 9 (tăng lên từ 6 đến 9)
// result = 39 (7 + 7 + 7 + 9 + 9)

console.log("Giá trị của result: " + result);
console.log("Giá trị của biến a: " + a);

// Sự khác nhau giữa ++a (tăng trước, sử dụng sau) và a++ (sử dụng trước, tăng sau):

// ++a: Tăng giá trị của a lên 1 trước khi sử dụng.
// a++: Sử dụng giá trị hiện tại của a, sau đó tăng giá trị của a lên 1.