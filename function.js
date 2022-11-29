// Just a simple function with type definitions enabled.
function krishna(name, age, loc, isWorking, company) {
    console.log("Hey I am ".concat(name, ", I am ").concat(age, " years old and I live in ").concat(loc, " and I work for ").concat(company));
    return "Hey I am ".concat(name, ", I am ").concat(age, " years old and I live in ").concat(loc, " and I work for ").concat(company);
}
var a = ["Fleminggatan 18, Stockholm"];
function getAddress(companyName) {
    var companyProfile = {
        name: "POSTNORD",
        establishedYear: 1943,
        employeeCount: 30000,
        location: "Stockholm, Sweden",
        isMnc: true,
        phone: 987654321,
        address: a
    };
    if (companyName !== "Postnord") {
        delete companyProfile.address;
    }
    console.log("Company profile created and ready for publish");
    return companyProfile;
}
console.log(getAddress("Postnord"));
console.log(getAddress("Capgemini"));
