// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let m ='hello'
let n = 'owu'
let o ='com'
let d ='ua'
let e=10
let f=-999
let g=123
let h=3.14
let i=2.7
let j=16
let k=true
let l=false
console.log(m)
console.log(n)
console.log(o)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(j)
console.log(k)
console.log(l)

//Створити 3 змінних firstName, Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації), lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName ="Boris"
let middleName ="Jonson"
let lastName ="Pavlovich"
console.log(`${firstName} ${middleName} ${lastName}`)

//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

//Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let first_name = prompt("Введіть ваше ім'я.")
console.log(first_name)
let middle_name = prompt("Введіть ваше прізвище.")
console.log(first_name)
let age = prompt("Введіть ваш вік.")
console.log(age)