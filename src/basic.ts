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

// interface User {
//     name : string,
//     email? : string, //optional
//     age : number
// }

// function isLegal(user : User) : boolean {
//     return user.age > 18
// }

// enms

// type directions = 'up' | 'down' | 'right' | 'left'

// function doSomething(keyPressed : directions) {
//     console.log(keyPressed)
// }

// doSomething('up')
// doSomething('sdf') //Not part of directions, so compile time error.

// enum Directions  {
//     up,
//     down,
//     left,
//     right
// }
// function doSomething(keyPressed: Directions){
//     console.log(keyPressed)
// }
// doSomething(Directions.up);
// doSomething(Directions.left);


// enum ResponseStatus{
//     Success = 200,
//     Error = 500,
//     NotFound = 404
// }

// app.get('/',(req,res)=>{
//     if(!req.query.username){
//         res.status(ResponseStatus.NotFound).json({})
//     } else {
//         res.status(ResponseStatus.Success).json({})
//     }
// })

// Generics:

// Problem:
// type Input = string | number        //Can be solved by string[] | number[]

// function doSomething(arg:Input[]){
//     return arg
// }

// console.log(doSomething([1,2,"asf"])) //Totally possible, but this creates issue

// function doSomething<T>(args:T){
//     return args
// }
// doSomething<string>('asdf');
// doSomething<number>(22);

function doSomething<T>(args:T[]){
    return args
}
doSomething<string>(['sdgg','ergtg']);
doSomething([1,2,3,4]) // eevn if not specified its not a problem
