import FetchClass from './FetchClass.js'
import MemoManager from './MemoManager.js'
import ContextMenu from './ContextMenu.js'
import BgMenu from './BgMenu.js'
import PostItMenu from './PostItMenu.js'
import Login from './Login.js'

const memoSection = document.querySelector('.memoSection')
const body = document.querySelector('body')
const fetchClass = new FetchClass()
const memoApp = new MemoManager()
fetchClass.getData(memoApp.updateData)
const postItMenu = new PostItMenu(memoApp.updateData, memoSection)
const bgMenu = new BgMenu(memoApp.updateData, memoSection)
const filterSection = document.querySelector('.memoList')
const login = new Login();
fetchClass.getUser();

body.addEventListener('click', (e)=>{
    switch(e.target.dataset.name){
        case "create":
            fetchClass.createMemo(e.clientX, e.clientY, memoApp.newMemo);
            break;
        case "deleteAll":
            fetchClass.deleteAllMemo()
            .then(text => {
                if(text === 'success'){
                    memoApp.deleteAllMemo();
                }
            });
            break;
        case "remove":
            fetchClass.removeMemo(+e.target.dataset.id)
            .then(text => {
                if(text === 'success'){
                    memoApp.removeMemo(e.target.dataset.id);
                }
            });
            break;
        case "minimize":
            memoApp.minimize(e.target.parentElement.parentElement);
            break;
        case "maximize":
            memoApp.maximize(e.target);
            break;
        case "post":
            memoApp.bringFront(postItMenu.targetConvert(e.target));
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
    else if (e.target.className === "memoSection"){
        clickedItem = e.target;
        bgMenu.rightButtonClick(e.clientY, e.clientX)
    } else {
        return;
    }
})

memoSection.addEventListener('change', ({target})=>{
    switch(target.tagName){
        case "TEXTAREA":
            memoApp.updateMemo(target.dataset.id, target.value);
            fetchClass.updateMemo(target.dataset.id, target.value);
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
    const selected = document.querySelector(`[data-id="${id}"]`)    
    const pageXValue = e.pageX-200 - memoApp.shiftX + "px";
    const pageYValue = e.pageY - memoApp.shiftY + "px";
    memoApp.drop(selected, pageXValue, pageYValue)
    fetchClass.pageUpdate(selected, pageXValue, pageYValue, memoApp.updateData)
})

filterSection.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SECTION'){
        return;
    } else if (e.target.dataset.name === 'all'){
        fetchClass.getData(memoApp.updateData)
    } else {    
        fetchClass.colorFilter(e.target.dataset.name, memoApp.updateData)}
})