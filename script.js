const toggle = document.querySelector('#toggle')
const add = document.querySelector('#add')
const body = document.body
const container = document.querySelector("#container")
let num = 1;

const box = document.querySelector('.box')


toggle.addEventListener('click', ()=> body.className ? body.classList.remove('toggle'): body.classList.add('toggle'))

add.addEventListener('click', () => {

    const div = document.createElement("div");
    container.appendChild(div).classList.add('box')
    const textNode = document.createTextNode(num++)
    div.appendChild(textNode )
    div.setAttribute('title', "I'm a box")

        // box.addEventListener('click', ()=>{
        //     console.log(box);
        // })

})

container.addEventListener("click", e => {
    if (e.target.classList.contains('box')) {
      e.target.remove();      
    }
})

