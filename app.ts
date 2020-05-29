
interface user{
    country:string 
    income: number
    // open for more types 
}

class customer implements user {
    country:string;
    income:number;

    constructor(country,income ){
        this.country = country
        this.income = income
    }

  

    // open for more methods
}

let sam = new customer("Russia", Math.floor(Math.random()* 5500000))

let ram = new customer("india", (Math.floor(Math.random()*3500000))) 



function incomeTaxCal(cust: user):number {
    if(cust.income<0) 
    {
        console.log("negative")
        return 0
    }else{
        if(cust.country=="india"){
            console.log('india')
            if(cust.income<=250000){
                return 0
            }else if(cust.income<=500000){
                return (cust.income*6)/100
            }
            else if(cust.income<=3000000){
                return (cust.income*20)/100
            }
            else{
                return (cust.income*35)/100
            }
        }else{
            console.log("Russia")
            if(cust.income<=500000){
                return(cust.income*3)/100
            }
            else if(cust.income<=1500000){
                return(cust.income*12)/100
            }else if(cust.income<=3000000){
                return (cust.income*20)/100
            }else if(cust.income<=5000000){
                return (cust.income*35)/100
            }else {
                return (cust.income*40)/100
            }
        }

    }
    
    
}

console.log(incomeTaxCal(sam))
console.log(incomeTaxCal(ram))
