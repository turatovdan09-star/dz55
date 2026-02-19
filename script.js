// var a = 10;
// var b = "Hello, World!";
// var q;

// console.log(q); 
// console.log(a>100);
// console.log(a<100);
// console.log(a==10);
// console.log(typeof a);
// console.log(typeof b);


var sum = Number (prompt("Введите сумму покупки в $ ")) 
var discount;

if (sum < 100) {
    discount = 0;
}
else if (sum >= 100 && sum < 500) {
    discount = 5;
}
else if (sum >= 500 && sum < 1000) {
    discount = 10;
}
else {
    discount = 15;
}

var finalPrice = sum - (sum * discount / 100);
console.log("Сумма скидки: " + (sum * discount / 100));
console.log("Финальная цена: " + finalPrice);
