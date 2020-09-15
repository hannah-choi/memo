import MemoManager from './MemoManager.js'
import ContextMenu from './ContextMenu.js'
import LocalStorageClass from './LocalStorageClass.js'

const data = JSON.parse(localStorage.getItem('data'))
const memoApp = new MemoManager(data)
const contextMenu = new ContextMenu()
const localStorageClass = new LocalStorageClass(data)
const contextMenuDiv = document.querySelector('.contextMenu');
const memoSection = document.querySelector('.memoSection')
let rightClick = null;

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
                contextMenuDiv.classList.remove('menuShow')
                return;
        }
    })

    
memoSection.addEventListener('contextmenu', (e)=>{
    e.preventDefault(); 
    let clickedItem = ""
    if(e.target.tagName === "HEADER"){
        clickedItem = e.target.parentElement
    } else if (e.target.tagName === "TEXTAREA" || e.target.tagName === "ARTICLE") {
        clickedItem = e.target.parentElement.parentElement.parentElement
    } else {
        return;
    }
    rightClick = clickedItem;
    contextMenu.rightButtonClick(clickedItem, e.clientY, e.clientX)
})

contextMenuDiv.addEventListener('click', ({target})=>{
    switch(target.dataset.name){
        case "color":
            contextMenu.memoColorChange(target.className)
            localStorageClass.colorChange(rightClick, target.className)
            break;
    }   
})

// posts.forEach(post => {
//     post.addEventListener('click', (e)=>{
//         posts.forEach(item => {
//             item.style.zIndex = "0"
//         })
//         post.style.zIndex = "10"
//     })
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
    let pageYValue = e.pageY - memoApp.shiftY + "px";

    memoApp.drop(selected, pageXValue, pageYValue)
    localStorageClass.pageUpdate(selected, pageXValue, pageYValue)
})


document.addEventListener('scroll', (e)=>{
    contextMenuDiv.classList.remove('menuShow')
})