// create a type name with a string
var Name = "anu";
// create a type age with a number
var age = 23;
// create a type isFetching with boolean
var isFetching = true;
isFetching = false;
// create an array of numbers
var arr = [1, 2, 3, 4];
// create an array of strings (using array constructor generic type)
// create a tuple , which keeps a string as the first value, and boolean as the second
var tuples;
tuples = ["Masai", 3];
// create an enum
// it should have User, SuperUser, Admin, SuperAdmin
var employe;
(function (employe) {
    employe[employe["User"] = 0] = "User";
    employe[employe["SuperUser"] = 1] = "SuperUser";
    employe[employe["Admin"] = 2] = "Admin";
    employe[employe["SuperAdmin"] = 3] = "SuperAdmin";
})(employe || (employe = {}));
// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
var sumA = function (x, y) {
    return x + y;
};
// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
var sub = function (x, y) {
    return x / y;
};
// create a function that takes a name and prints it without returning anything
var prinName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age, isWorking = _a.isWorking;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person3 = {
    first_name: "Masai",
    last_name: "School",
    age: 3,
    isWorking: true
};
printName(person3);
