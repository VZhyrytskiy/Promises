// console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находится в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const newPromis1 = new Promise(() => {
//     console.log("Promise is created");
// })
// console.log(newPromis1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const newPromis2 = Promise.resolve('Promise Data');
// newPromis2.then(console.log)
// console.log(newPromis2);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const newPromis3 = Promise.reject('Promise Error');
// newPromis3
//     .then(console.log)
//     .catch(console.log);
// console.log(newPromis3);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const newPromis4 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Promise Data')
//     }, 3000)
// }).then(console.log)
// console.log(newPromis4)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// const handlePromise = {
//     resolve: null,
//     reject: null,
//     promise: null,
//     onSuccess(data){
//         console.log(`Promise is resolved with data: ${data}`)
//         return data
//     },
//     onError(data){
//         console.log(`Promise is rejected with error: ${data}`)
//     }
// }
// document.querySelector('#btn-create-promise').addEventListener('click',() => {
//     handlePromise.promise = new Promise((resolve,reject) => {
//         console.log('Promise is created')
//         handlePromise.resolve = resolve;
//         handlePromise.reject = reject;
//     })
//     .then(handlePromise.onSuccess)
//     .then(handlePromise.onSuccess)
//     .catch(handlePromise.onError)
// } )
// document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
//     handlePromise.resolve?.('Some Data')
// })
// document.querySelector('#btn-reject-promise').addEventListener('click', () => {
//     handlePromise.reject?.('Some Error')
// })

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// const newPromis7 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, 'My name is')
// })
// function onSuccess(data){
//     throw new Error('Oups!')

//     return `${data}  Ani`
// }
// function print(data){
//     console.log(data)
// }

// newPromis7
//     .then(onSuccess)
//     .catch((err) => {
//         console.log(err)
//         return 'New Data'
//     })
//     .then(print)

// Task 08
// Используйте предыдущий код. Добавьте в функцию onSuccess генерацию исключения
// Обработайте данное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// function getPromiseData(promise){
//     promise.then?.(console.log)
// }
// const obj = {name: 'Ann'}
// getPromiseData(Promise.resolve(obj))

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

// const p1 = new Promise((resolve) => {
//     setTimeout(resolve,2000, {name: "Anna" })
// })
// const p2 = new Promise((resolve) => {
//     setTimeout(resolve,3000, {age: 16})
// })
// const newPromis10 = Promise.all([p1,p2])
//     .then(([obj1, obj2]) => {
//         console.log({...obj1, ...obj2})
//     })

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

// const p1 = new Promise((resolve) => {
//     setTimeout(resolve,2000, {name: "Anna" })
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(reject ,3000, {age: 16})
// })
// const newPromis10 = Promise.allSettled([p1,p2])
//     .then((data) => {
//         console.log(data)
//     })

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

const promise1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'Promise Data')
})
const promise2 = new Promise(reject => {
    document.querySelector('#btn-cancel-promise').addEventListener('click', () => {
        reject("Cancel Promise")
    })
})

Promise.race([promise1, promise2])
  .then(data => {
    console.log('Resolved:', data);
  })
  .catch(error => {
    console.error('Rejected:', error);
  });
  
// Task 13
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис переходит в состояние rejected со значением "Promise Error".
// Запустите оба эти промисы в параллель и получите результаты тех, которые завершаться успешно
const p1 = new Promise(resolve => {
    return setTimeout(resolve,2000, {name: "Ann"});
})
const p2 = Promise.reject("Promise Error")
Promise.any([p1,p2])
    .then(data => {
        console.log("Resolved: ", data)
    })
    .catch(err => {
        console.error("Rejected: ", err)
    })

// Task 14
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис возвращает дефолтный объект { name: "Unknown" } через 1с.
// Запустите оба эти промисы в параллель и получите результат того, который отработает первым

const prom1 = new Promise(resolve => {
    return setTimeout(resolve,2000, {name: "Jone"})
})
const prom2 = new Promise(resolve => {
    return setTimeout(resolve,1000, {name: "Unknown"})
})
Promise.race([prom1, prom2])
    .then(data => {
        console.log("Resolved: ", data)
    })
    .catch(err => {
        console.error("Rejected: ", err)
    })