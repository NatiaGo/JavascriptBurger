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