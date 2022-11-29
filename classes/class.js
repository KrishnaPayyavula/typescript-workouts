var Getter = /** @class */ (function () {
    function Getter(what) {
        if (what !== 'WHAT') {
            this.what = what;
        }
    }
    Getter.prototype.getWhatIsConfigured = function () {
        return "This is what is configured: ".concat(this.what);
    };
    Getter.prototype.getMeWhatCanBeConfigured = function () {
        return "These are the following things can be configured at any point of time ".concat(this.configurableThings.join(" "));
    };
    Getter.prototype.setMeWhatCanBeConfigured = function (configure) {
        this.configurableThings = configure;
        console.log("Configured all the things here.");
    };
    Getter.prototype.getMeRandomArray = function (length) {
        var randomArray = [];
        for (var index = 0; index <= length; index++) {
            randomArray.push(1000000 * Math.random());
        }
        return randomArray;
    };
    return Getter;
}());
var getter = new Getter('It can be anything');
console.log(getter.getWhatIsConfigured());
getter.setMeWhatCanBeConfigured(["Name", "age", "location"]);
console.log(getter.getMeRandomArray(20));
console.log(getter.getMeWhatCanBeConfigured());
module.exports = Getter;
