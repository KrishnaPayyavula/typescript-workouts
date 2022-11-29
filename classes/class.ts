class Getter {
    what !: string
    configurableThings!: []
    constructor(what :string){
        if(what !=='WHAT'){
            this.what = what
        }
    }

    getWhatIsConfigured(){
        return `This is what is configured: ${this.what}`
    }

    getMeWhatCanBeConfigured() : string{
        return `These are the following things can be configured at any point of time ${this.configurableThings.join(" ")}`
    }

    setMeWhatCanBeConfigured(configure: any): void{
            this.configurableThings = configure
            console.log(`Configured all the things here.`)
    }

    getMeRandomArray (length:number): Array<number>{
        let randomArray = [];

        for (let index = 0; index <= length; index++) {
             randomArray.push(1000000* Math.random())
        }
        return randomArray
    }
}

const getter = new Getter('It can be anything')
console.log(getter.getWhatIsConfigured())

getter.setMeWhatCanBeConfigured(["Name","age","location"])
console.log(getter.getMeRandomArray(20))
console.log(getter.getMeWhatCanBeConfigured())

module.exports =Getter