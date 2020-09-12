import MemoManager from './MemoManager.js'
import ContextMenu from './ContextMenu.js'

const data = [

    {   
        text:"Pariatur dolor aute nulla non consectetur magna commodo.",
        category:0,
        color: "lightblue",
        id:1

    },

    {   
        text:"Velit fugiat aute et non irure sint non anim in quis eu esse et.",
        category:1,
        id:2,
        color:"blue"

    },

    {   
        text:"Ad aliqua in minim tempor excepteur quis duis anim fugiat fugiat ipsum occaecat eu.",
        category:1,
        id:3,
        color:"brightred"

    },

    {   
        text:"Ad aliqua in minim tempor excepteur quis duis anim fugiat fugiat ipsum occaecat eu.",
        category:1,
        id:4,
        color:"lightpink"

    }

]


const memoApp = new MemoManager(data)
const contextMenu = new ContextMenu()
const memoSection = document.querySelector('.memoSection')
let posts = document.querySelectorAll('.post')
let dragElement;

//const eachMemo = document.querySelectorAll('.post')


memoSection.addEventListener('click', ({target})=>{
        switch(target.dataset.name){
            case "create":
                memoApp.createMemo()
                break;
            case "remove":
                memoApp.removeMemo(target.dataset.id)
                break;
            case "minimize":
                memoApp.minimize(target)
                break;
            case "maximize":
                memoApp.maximize(target)
                break;
            // case "post":
            //     let clickedItem ="";
            //     if(target.tagName === "HEADER"){
            //         clickedItem = target.parentElement
            //     } else if (target.tagName === "TEXTAREA" || target.tagName === "ARTICLE") {
            //         clickedItem = target.parentElement.parentElement.parentElement
            //     }
            //     console.log(clickedItem.style.zIndex)
            //     memoApp.bringFront(clickedItem)
            //     break;
            default:
                contextMenu.classList.remove('menuShow')
                return
        }
    })


memoSection.addEventListener('change', ({target})=>{
    switch(target.tagName){
        case "TEXTAREA":
            memoApp.updateMemo(target.dataset.id, target.value);
            data[target.dataset.id].text = target.value
            break;
    }
    
})


memoSection.addEventListener('dragstart',(e)=>{
    if(!e.target.className === 'post'){
        return;
    } 
    const id = e.target.dataset.id
    e.dataTransfer.setData("text", id)
})

memoSection.addEventListener('dragover',(e)=>{
    e.preventDefault();
    if(!e.target.className === 'post'){
        return;
    }
})

memoSection.addEventListener('drop', (e)=>{
    e.preventDefault();
    const id = e.dataTransfer.getData("text")
    let selected = document.querySelector(`[data-id="${id}"]`)
    selected.style.left = `${e.pageX-200}px`;
    selected.style.top = `${e.pageY}px`;
})


posts.forEach(post => {
    post.addEventListener('click', (e)=>{
        posts.forEach(item => {
            item.style.zIndex = "0"
        })
        post.style.zIndex = "10"
    })
})


memoSection.addEventListener('contextmenu', (e)=>{
    e.preventDefault(); 
    if(e.target.className === 'memoSection'){
        return;
    }
    contextMenu.rightClick(e.clientY, e.clientX)
})


window.addEventListener('scroll', (e)=>{
    contextMenu.classList.remove('menuShow')
})



// memoSection.addEventListener('drag',(e)=>{
// })

// memoSection.addEventListener('dragstart',({target})=>{
// })

// memoSection.addEventListener("drop", (e)=> {
//     e.preventDefault();
//   });