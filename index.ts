function formatString(input: string, toUpper?: boolean): string{
    if( toUpper=== undefined || toUpper){
       return input.toUpperCase()
    }
    else{
       return input.toLowerCase()
  
    }
  } 

  
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {

    const filteredItems = items.filter((item) => {
      return item.rating >= 4;
    });
  
    return filteredItems;
  }


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
  
    for (let i = 0; i < arrays.length; i++) {
      const currentArray = arrays[i];
      for (let j = 0; j < currentArray.length; j++) {
        result.push(currentArray[j]);
      }
    }
  
    return result;
  }
  

class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); 
      this.model = model;
    }
  
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensive = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensive.price) {
        mostExpensive = products[i];
      }
    }
  
    return mostExpensive;
  }
  
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
 

  async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      throw new Error("Negative number not allowed");
    }
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000); 
    });
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  const result = filterByRating(books); 
 

  