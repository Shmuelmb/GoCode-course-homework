
const tagsArr = [
    {name: 'fullname', tag:'input', placeholder:'enter your full name'}, // placeholder is only for inputs
    {name: 'email', tag:'input', placeholder:'enter your email'},
    {name: 'idNumber', tag:'input', placeholder:'enter your id number', type: 'number'},
    {name: 'phoneNumber', tag:'input', placeholder:'enter your phone number', type: 'number'},
    {name: 'city', tag:'input', placeholder:'enter your city'},
    {name: 'Address', tag:'input', placeholder:'enter your Address'},
    {name: 'gender', tag:'select', value:'gender'},
    {name: 'age', tag:'select'},
    {name: 'checkBox', tag:'input', type:'radio'},
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
const formObj = {}

//1
tagsArr.forEach(function(item){
    const element = document.createElement(item.tag)
    element.style.display = 'block'
    element.placeholder = item.placeholder
    element.type = item.type
    element.name = item.name
    if(item.name === 'gender'){
        if(!formObj.hasOwnProperty(item.name)){
            formObj[item.name] = 'male'
        }
        const genderPar = document.createElement('p')
        genderPar.style.display = 'inline-block'
        genderPar.innerText = 'select your gender: '
        document.body.appendChild(genderPar)
        element.value = item.value
        genderOptionsArr.forEach(function(opt){
            const option = document.createElement(opt.tag)
            option.value = opt.value;
            option.innerText = opt.name
            element.appendChild(option)
        })

    } else if(item.name === 'age'){
        if(!formObj.hasOwnProperty(item.name)){
            formObj[item.name] = '18'
        }
        const agePar = document.createElement('p')
        agePar.style.display = 'inline-block'
        agePar.innerText = 'select your age: '
        document.body.appendChild(agePar)
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
    
    }else if (item.name === 'checkBox'){
        element.style.display = 'inline-block'
        const pCheckbox = document.createElement('p')
        pCheckbox.innerText = 'i am agree for the conditions of registration'
        pCheckbox.style.display = 'inline-block'
        document.body.append(pCheckbox)


    }element.addEventListener('change', function(c){
        formObj[item.name] = c.target.value
        if (c.target.value === 'on'){
            formObj[item.name] = 'confirmed'
        }
    })
    document.body.appendChild(element)

})



