// function greet(firstname : string){
//     console.log("Hiiii",firstname)
// }

// greet("sam");

// function sum(a: number,b:number): number{
//     let c:number;
//     c = a+b;
//     return c;
// }

// function isLegal(num:number): boolean{
//     return num > 18 ? true : false;
// }

// function runAnotherFun(fn: ()=>void){
//     setTimeout(fn,1000);
// }

// runAnotherFun(function(){
//     console.log("Hello");
// })

// function runAnotherFun(fn:(a:number)=>number){
//     const res:number = fn(10);
//     return res
// }

// function fn(a:number):number{
//     return a*a;
// }
// let result: number = runAnotherFun(fn)
// console.log(result);

interface User {
    name : string,
    email? : string, //optional
    age : number
}

function isLegal(user : User) : boolean {
    return user.age > 18
}
