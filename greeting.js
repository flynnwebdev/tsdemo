var greeting = function (person) {
    console.log("Good day " + person.name + ", you are " + person.age + " years old.");
};
var foo = 2;
greeting({ name: 'Matt', age: 46 });
var isAwesome = true;
var decimalNumber = 42;
var binaryNumber = 85;
var octalNumber = 493;
var hexNumber = 0x2a;
console.log(hexNumber);
var myPetFamily = ['rocket', 'fluffy', 'harry'];
// tuple
var tuple;
tuple = ['chair', 20, true];
// tuple = [5, 20, true]
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
console.log(Sizes.Medium);
var stocklevel = [];
stocklevel[Sizes.Medium] = 20;
var myfunc = function (x) {
    console.log('foo');
    if (x) {
        return 123;
    }
};
var x = myfunc(false);
console.log(x);
