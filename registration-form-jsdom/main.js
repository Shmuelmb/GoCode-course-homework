
const tagsArr = [
    {name: 'fullname', tag:'input', placeholder:'enter your full name'}, // placeholder is only for inputs
    {name: 'email', tag:'input', placeholder:'enter your email'},
    {name: 'idNumber', tag:'input', placeholder:'enter your id number', type: 'number'},
    {name: 'phoneNumber', tag:'input', placeholder:'enter your phone number', type: 'number'},
    {name: 'city', tag:'input', placeholder:'enter your city'},
    {name: 'Address', tag:'input', placeholder:'enter your Address'},
    {name: 'gender', tag:'select'},
    {name: 'age', tag:'select'},
    {name: 'checkbox of registration conditions', tag:'input', type:'radio'},
    {name:'Approval of the registration conditions', tag:'span', innerText: 'i am agrre for the conditions of registration'},
    {name: 'btn', tag: 'button', innerText:'Submit'},


]

const genderOptionsArr = [
    {name:'male', tag:'option', value:'male'},
    {name:'female', tag:'option', value:'female'}
]

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    } return ans
}

//1
tagsArr.forEach(function(item){
    const element = document.createElement(item.tag)
    element.innerText = item.innerText
    element.placeholder = item.placeholder
    element.type = item.type
    element.name = item.name
    if(item.name === 'gender'){
        genderOptionsArr.forEach(function(opt){
            const option = document.createElement(opt.tag)
            option.value = opt.value;
            option.innerText = opt.name
            element.appendChild(option)
        })

    } else if(item.name === 'age'){
        range(18,90).forEach(function(num){
            const option = document.createElement('option')
            option.value = num
            option.innerText = num
            element.appendChild(option)
        })
    } else if(item.name === 'btn'){
        element.innerText = item.innerText
        element.addEventListener('click', function(){
            console.log(formObj)
        })
    }element.addEventListener('change', function(c){
        formObj[item.name] = c.target.value
    })
    document.body.appendChild(element)
})

const formObj = {}




