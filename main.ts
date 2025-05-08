function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : toUpper === undefined ? input.toUpperCase() : input.toLowerCase();
}

formatString("Hello");          
formatString("Hello", true);   
formatString("Hello", false); 

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter((item) => item.rating >= 4.0)
}


const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

filterByRating(books); 

//console.log(filterByRating(books))

function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.reduce((empty,current) => empty.concat(current))
}

concatenateArrays(["a", "b"], ["c"]);       
concatenateArrays([1, 2], [3, 4], [5]); 

// console.log(concatenateArrays(["a", "b"], ["c"]))
// console.log(concatenateArrays([1, 2], [3, 4], [5]))


class Vehicle {
    private make : string
    private year : number

    constructor(make: string,year: number){
        this.make = make
        this.year = year
    }

    getInfo(){
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle{
    private model : string

    constructor(make: string,year: number,model: string){
        super(make,year)
        this.model = model;
    }

    getModel(){
        console.log(`Model: ${this.model}`)
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   
myCar.getModel();


function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : Number.parseFloat(value.toString()) * 2
}

processValue("hello"); 
processValue(10);    

// console.log(processValue("hello"))
// console.log(processValue(10))

interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length != 0){
        const prices = products.map(p => p.price);
        const maxPrice = Math.max(...prices);
        const maxIndex = prices.indexOf(maxPrice);
        return products[maxIndex]
    }else return null
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  getMostExpensiveProduct(products)
  //console.log(getMostExpensiveProduct(products))

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }else return "Weekday"
  }

getDayType(Day.Monday);   
getDayType(Day.Sunday);

// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(n > 0){
                resolve(n * n);
            }else{
                reject("Error: Nevative number not Allowed")
            }
        }, 1000)
    }
    );
}

squareAsync(4).then((value) => {
    console.log(`After 1s: ${value}`)
});
squareAsync(-3).catch(console.error);
