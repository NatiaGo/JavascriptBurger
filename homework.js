'use strict';
// exercise 1

let navigation = document.getElementById("navbar");
let burgerbar = document.getElementById("burgerBar");
burgerbar.addEventListener('click', function(){
    burgerbar.classList.toggle('activeBar');
    navigation.classList.toggle('activeNav');
})


// exercise 2
let input = document.querySelector('.input-form');
input.addEventListener('focus',function(){
    input.style.color='#995c00';
    input.style.fontSize = '18px';
    input.style.background = '#F7E7CE';
    input.style.fontWeight = 'bold';
    input.style.borderRadius = '30px';
})
let addButton = document.querySelector('.btn-add');
addButton.style.background = '#F7E7CE';
addButton.style.borderRadius = '30px';
addButton.style.color = '#995c00';
addButton.style.width = '200px';
addButton.style.height = '30px';
addButton.style.fontWeight= 'bold';
let ul = document.querySelector('.ul-items');

let formWraper = document.querySelector('.form-wraper');
formWraper.addEventListener('submit', function( event){
    event.preventDefault();
}) 
addButton.addEventListener('click', function(){
let inputValue = input.value ;
if (inputValue == ' '){
    return
}
<<<<<<< HEAD
let li = document.createElement('li');
li.style.color='#713C25';
li.style.fontSize= '22px';
li.style.fontWeight = 'bold';


let btnDelete= document.createElement('i'); 
btnDelete.classList.add('fa-solid','fa-trash-can');
btnDelete.addEventListener ('click',function(){
    li.remove();
})



li.textContent = inputValue;
li.appendChild(btnDelete);

ul.appendChild(li);


input.value = ' ';

})

let trashBin= document.querySelector('.trashBin');
let clearAll= document.createElement('i');
trashBin.appendChild(clearAll);
clearAll.classList.add('fa-solid','fa-trash');
clearAll.style.color = '#713C25';
clearAll.style.textAlign = 'center';
clearAll.style.background = '#F7E7CE';
clearAll.style.border = '2px solid black'
clearAll.style.borderRadius = '30px';
clearAll.style.width = '200px';
clearAll.style.height = '25px';
clearAll.addEventListener('click', function(){
    ul.innerHTML = ' '; 
})















=======

for (let item of array){
  console.log(item);
}

let x = 0;
while (x < array.length){
  console.log(array[x]);
  x++;
}

// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5){
    console.log(numbers[i]);
  }
}

for (let item of numbers){
  if (item > 5){
    console.log(item);
  }
}

// 4. თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:hello;
    // თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
    // თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
    // ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
let user = {
    name: 'giorgi', 
    age: 20,
    studentstatus: 'active',
}
  
if (user.age < 18 && studentstatus ==='active'){
  console.log('hello');
} else if (user.name === 'levani'){
  console.log('hello levani');
} else if(user.studentstatus ==='active' || user.age < 25 ){
  console.log('hello world');
} else {
  console.log('error');
}

// 5.მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let arrays = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let i = 0; i < arrays.length; i++)
for (let x = 0; x < arrays[i].length; x++)
  if (arrays[i][x] > 0)
  console.log(arrays[i][x]);

// 6. 1.ამოიღეთ მარტო ლუწი რიცხვები 2.ამოიღეთ კენტი რიცხვები 

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

// for (let item of array){
//   if (item % 2 == 0){
//     console.log(item);
//   }
// }

for (let item of array) {
  if (item % 2 !=0){
    console.log(item);
  }
}
// 7. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს   მხოლოდ დადებითი რიცხვების ჯამს:

function positiveNumbers (... array){
    let sum = 0; 
     for (let item of array){
      if (item > 0) {
       sum =item + sum;
       }
    }
     return sum;
   }

   let positiveSum = positiveNumbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 80);
   console.log(positiveSum)


// 8. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

function saakadze (user){
    if (user.isloggedin ==true){
      return user.firstname + ' ' + user.lastname;
    }else if (user.isloggedin == false){
      return false;
    }
  }
  let nameSurname = saakadze(user);
  console.log(nameSurname);

//9. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function maxNumbers (... array){
  let max = 0; 
   for (let muxnumber of array){
    if (muxnumber > max) {
      max = muxnumber;
     }
  }
   return max
 }
 let max = maxNumbers(2, 12, 5, 11, 100, 80, 22 );
 console.log(max);

// 10. მოცემულია მასივი გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;
let array = [1,2,4,10,34,5,7,87]
for (let item of array){
  if (item > 0 && item <10){
    console.log(item);
  }
}

// 11. მოცემულია მასივი ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი
let numbers =[1,2,3,4,5,6,7,8,9,10];
for (let item of numbers){
  if (item == 5){
    break;
  }
  console.log(item);
}
  
>>>>>>> d5d3f8c5b6bea2ef06d46f6648283b205aac79e5



