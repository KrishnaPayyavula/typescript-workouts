
// Just a simple function with type definitions enabled.

function krishna(name:string, age:number, loc:string, isWorking:boolean, company: string):String{

    console.log(`Hey I am ${name}, I am ${age} years old and I live in ${loc} and I work for ${company}`);
    return `Hey I am ${name}, I am ${age} years old and I live in ${loc} and I work for ${company}`;
}

type Address =[string?,number?];
type Company = {
    name:string,
    establishedYear:number,
    employeeCount:number,
    location:string,
    isMnc:boolean,
    phone:number,
    address?:Address
}

let a:Address = ["Fleminggatan 18, Stockholm"];

function getAddress (companyName:string): Company{
    let companyProfile:Company ={
        name:"POSTNORD",
        establishedYear:1943,
        employeeCount:30000,
        location:"Stockholm, Sweden",
        isMnc:true,
        phone:987654321,
        address:a
    }

    if(companyName!=="Postnord"){
        delete companyProfile.address
    }

    console.log(`Company profile created and ready for publish`);
    return companyProfile;
}


console.log(getAddress("Postnord"));
console.log(getAddress("Capgemini"))
