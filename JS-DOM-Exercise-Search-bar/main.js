const input = document.querySelector("input")
const items = document.querySelectorAll(".item")
const itemError = document.querySelector('.not-found')
const inputAddItem = document.querySelector(".inputAddItem")
const serchSection = document.querySelector('.serch-section')
const FruitPool = document.querySelector('.Fruit-pool')
const btnAddItem = document.querySelector('.btn')

input.addEventListener('input', function(event){
    let inputText = input.value
    let counter = 0
    items.forEach(function(item){
        if(item.innerText.trim() === ''){
            counter = 0
        }
        let itemText = item.innerText.trim() // trim  - for remove all space in the srting
        itemError.classList.add("dispNone")
        if (itemText.includes(inputText)){ // check if input text in item text
            item.classList.remove("dispNone"); 
            counter++
        } else {
            item.classList.add("dispNone");

        } if (counter === 0){
            itemError.classList.remove("dispNone");
        };
})})




