var customer = /** @class */ (function () {
    function customer(country, income) {
        this.country = country;
        this.income = income;
    }
    return customer;
}());
var sam = new customer("Russia", 2500000);
var ram = new customer("india", (Math.floor(Math.random() * 3500000)));
function Cal(cust) {
    if (cust.income < 0) {
        console.log("negative");
        return 0;
    }
    else {
        if (cust.country == "india") {
            console.log('india');
            if (cust.income <= 250000) {
                return 0;
            }
            else if (cust.income <= 500000) {
                return (cust.income * 6) / 100;
            }
            else if (cust.income <= 3000000) {
                return (cust.income * 20) / 100;
            }
            else {
                return (cust.income * 35) / 100;
            }
        }
        else {
            console.log("Russia");
            if (cust.income <= 500000) {
                return (cust.income * 3) / 100;
            }
            else if (cust.income <= 1500000) {
                return (cust.income * 12) / 100;
            }
            else if (cust.income <= 3000000) {
                return (cust.income * 20) / 100;
            }
            else if (cust.income <= 5000000) {
                return (cust.income * 35) / 100;
            }
            else {
                return (cust.income * 40) / 100;
            }
        }
    }
}
console.log(Cal(sam));
console.log(Cal(ram));
// console.log(Cal("india",20000));
// console.log(Cal("india",501000));
// console.log(Cal("india",1561230));
// console.log(Cal("india",5000000));
// console.log(Cal("india",-5000000));
// console.log(Cal("Russia",-5000000));
// console.log(Cal("Russia",20000));
// console.log(Cal("Russia",200000));
// console.log(Cal("Russia",2000000));
// console.log(Cal("Russia",1520000));
// console.log(Cal("Russia",1315321));
// console.log(Cal("Russia",5456655));
// console.log(Cal("Russia",7251254));
