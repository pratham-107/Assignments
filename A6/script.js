let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')

btn.addEventListener('click', ()=>{
    let data = inp.value

    let li = document.createElement('li')

    li.innerText = data
    
    ul.appendChild(li)
    
    inp.value =''
})