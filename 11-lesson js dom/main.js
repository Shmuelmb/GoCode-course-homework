// 1.
//  const input = document.createElement('input')
// const btn = document.createElement('button')
// btn.innerText = "show"
// console.log(input.innerText)
// btn.addEventListener('click', function(event){
//     alert(input.value)
// })
// document.body.append(input, btn)

//2. 
// const bodyEl = document.querySelector('body')
// bodyEl.style.margin = 0
// bodyEl.style.width = '100vw'
// bodyEl.style.height = '100vh'
// bodyEl.style.display = 'flex'
// bodyEl.style.alignItems = 'flex-end'
// document.body.addEventListener('mousemove',function(event){
//     const x = event.clientX
//     const y = event.clientY
//     const Coordinates = document.createElement('div')
//     document.body.append(Coordinates)
//     Coordinates.innerText = "X coords: " + x + ", Y coords: " + y;
//     Coordinates.style.position = 'fixed'
//     Coordinates.style.backgroundColor = 'blue'
//     Coordinates.style.color = 'white'
//     Coordinates.style.fontWeight = 'bolder'
// })

//3.

// const input = document.createElement('input')
// const showBtn = document.createElement('button')
// const img = document.createElement('img')
// const br = document.createElement('br')
// input.placeholder = 'Please enter url image'
// showBtn.innerText = "show"
// document.body.append(input, showBtn, br, img)
// showBtn.addEventListener('click', function(event){
//     imgUrl = input.value
//     img.src = imgUrl
// })

//4.1
// const btn = document.createElement('button')
// btn.innerText = "remove"
// const arrEl = document.createElement('div')
// arrEl.innerText = "1 2 3 4 5"
// document.body.append(arrEl, btn)
// btn.addEventListener('click', function(event){
//    arrEl.innerText = (arrEl.innerText).replace(arrEl.innerText.slice(-1), '')
// })

//4.2
// const btn = document.createElement('button')
// btn.innerText = "remove"
// const arrEl = document.createElement('div')
// const arr = [1,2,3,4,5]
// arrEl.innerText = arr.join(' ')
// document.body.append(arrEl, btn)
// btn.addEventListener('click', function(event){
//     arr.pop()
//     arrEl.innerText = arr.join('')
//     console.log(arr)
// })

//5.
// const btnBlack = document.createElement('button')
// btnBlack.innerText = 'BLACK'
// btnBlack.style.backgroundColor = 'black'
// btnBlack.style.height = '60px'
// btnBlack.style.width = '60px'
// btnBlack.style.borderRadius = '50%'
// btnBlack.style.color = 'white'
// const btnGreen = document.createElement('button')
// btnGreen.innerText = 'GREEN'
// btnGreen.style.backgroundColor = 'green'
// btnGreen.style.width = '60px'
// btnGreen.style.height = '60px'
// btnGreen.style.borderRadius = '50%'
// const btnBlue = document.createElement('button')
// btnBlue.innerText = 'BLUE'
// btnBlue.style.backgroundColor = 'blue'
// btnBlue.style.width = '60px'
// btnBlue.style.height = '60px'
// btnBlue.style.borderRadius = '50%'
// const btnRed = document.createElement('button')
// btnRed.innerText = 'RED'
// btnRed.style.backgroundColor = 'red'
// btnRed.style.width = '60px'
// btnRed.style.height = '60px'
// btnRed.style.borderRadius = '50%'

// document.body.style.width = '100vw'
// document.body.style.height = '100vh'
// document.body.style.margin = 0
// document.body.style.display = 'flex'
// document.body.style.justifyContent = 'center'
// document.body.style.alignItems = 'center'

// document.body.append(btnBlack, btnBlue, btnRed, btnGreen)

// const btn = document.querySelectorAll('button')

// btn.forEach(function(event){
//     if (event.innerText == "BLACK"){
//         event.addEventListener('click', function(){
//             document.body.style.backgroundColor = 'black'
    
//         })
//     }
//     if (event.innerText == "GREEN"){
//         event.addEventListener('click', function(){
//             document.body.style.backgroundColor = 'green'
    
//         })
//     }
//     if (event.innerText == "BLUE"){
//         event.addEventListener('click', function(){
//             document.body.style.backgroundColor = 'blue'
    
//         })
//     }
//     if (event.innerText == "RED"){
//         event.addEventListener('click', function(){
//             document.body.style.backgroundColor = 'red'
    
//         })
//     }
// })

//6. 

// const colors = ['red', 'blue', 'yellow', 'black']
// function getRndInteger(min, max) {
//     return  Math.floor(Math.random() * (max - min) ) + min;
//   }
// setInterval(function(event){
//     const randomColor = (colors[getRndInteger(0, colors.length -1)])
//     document.body.style.backgroundColor = randomColor
// }, 2000)