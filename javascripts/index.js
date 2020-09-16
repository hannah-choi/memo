import MemoManager from './MemoManager.js'
import ContextMenu from './PostItMenu.js'
import LocalStorageClass from './LocalStorageClass.js'
import BgMenu from './BgMenu.js'
import PostItMenu from './PostItMenu.js'

const memoSection = document.querySelector('.memoSection')
const postItMenu = new PostItMenu(memoSection)
const localStorageClass = new LocalStorageClass()
const data = localStorageClass.getData()
const memoApp = new MemoManager(data)
const bgMenu = new BgMenu(memoSection)



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
                memoApp.bringFront(postItMenu.targetConvert(target))
                break;
            default:
                ContextMenu.remove()
                return;
        }
    })

    
memoSection.addEventListener('contextmenu', (e)=>{
    e.preventDefault(); 
    let clickedItem = ""
    if(e.target.tagName === "HEADER"){
        clickedItem = e.target.parentElement
        postItMenu.rightButtonClick(clickedItem, e.clientY, e.clientX)
    } else if (e.target.tagName === "TEXTAREA" || e.target.tagName === "ARTICLE") {
        clickedItem = e.target.parentElement.parentElement.parentElement
        postItMenu.rightButtonClick(clickedItem, e.clientY, e.clientX)
    } 
    
    else if (e.target.className = "memoSection"){
        clickedItem = e.target;
        bgMenu.rightButtonClick(clickedItem, e.clientY, e.clientX)
    } else{
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
    let pageYValue = e.pageY - memoApp.shiftY + "px";

    memoApp.drop(selected, pageXValue, pageYValue)
    localStorageClass.pageUpdate(selected, pageXValue, pageYValue)
})


// document.addEventListener('scroll', (e)=>{
//     contextMenuDiv.classList.remove('menuShow')
// })