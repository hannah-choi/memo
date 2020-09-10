import MemoManager from './MemoManager.js'


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

    }

]


const memoApp = new MemoManager(data)
const memoSection = document.querySelector('.memoSection')
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
            case "post":
                let clickedItem ="";
                if(target.tagName === "HEADER"){
                    clickedItem = target.parentElement
                } else if (target.tagName === "TEXTAREA" || target.tagName === "ARTICLE") {
                    clickedItem = target.parentElement.parentElement.parentElement
                }
                console.log(clickedItem)
                memoApp.bringFront(clickedItem)
                break;
            default:
                return
        }
    })

// eachMemo.addEventListener('focus',({target})=>{

// })



memoSection.addEventListener('change', ({target})=>{
    switch(target.tagName){
        case "TEXTAREA":
            memoApp.updateMemo(target.dataset.id, target.value);
            data[target.dataset.id].text = target.value
            break;
    }
    
})


memoSection.addEventListener('dragstart',(e)=>{
    console.log('dragstart')
    if(!e.target.className === 'post'){
        return;
    } 
    const id = e.target.dataset.id
    e.dataTransfer.setData("text", id)
})

memoSection.addEventListener('dragover',(e)=>{
    console.log('dragover')
    e.preventDefault();
    if(!e.target.className === 'post'){
        return;
    }
})

memoSection.addEventListener('drop', (e)=>{
    e.preventDefault();
    const id = e.dataTransfer.getData("text")
    let selected = document.querySelector(`[data-id="${id}"]`)
    selected.style.left = e.pageX+"px";
    selected.style.top = e.pageY+"px";
})

// memoSection.addEventListener('drag',(e)=>{
// })

// memoSection.addEventListener('dragstart',({target})=>{
// })

// memoSection.addEventListener("drop", (e)=> {
//     e.preventDefault();
//   });