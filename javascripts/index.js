import MemoManager from './MemoManager.js'
import ContextMenu from './ContextMenu.js'
import LocalStorage from './LocalStorage.js'


const localStorage = new LocalStorage()
const data = localStorage.getData()
const memoApp = new MemoManager(data)
const contextMenu = new ContextMenu()
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
                memoApp.bringFront(clickedItem)
                break;
            default:
                return;
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
    memoApp.dragStart(e)
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
    let pageXValue = e.pageX-200 - memoApp.shiftX + "px";
    let pageYvalue = e.pageY - memoApp.shiftY + "px";

    localStorage.dropStorageUpdate(selected, pageXValue, pageYvalue)
    memoApp.htmlPositionUpdate(selected, pageXValue, pageYvalue)
})


memoSection.addEventListener('contextmenu', (e)=>{
    e.preventDefault(); 
    if(e.target.className === 'memoSection'){
        return;
    }
    contextMenu.rightClick(e.clientY, e.clientX)
})


// memoSection.addEventListener('drag',(e)=>{
// })

// memoSection.addEventListener('dragstart',({target})=>{
// })

// memoSection.addEventListener("drop", (e)=> {
//     e.preventDefault();
//   });