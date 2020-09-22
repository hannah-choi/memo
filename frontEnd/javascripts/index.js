import FetchClass from './FetchClass.js'
import MemoManager from './MemoManager.js'
import ContextMenu from './ContextMenu.js'
import BgMenu from './BgMenu.js'
import PostItMenu from './PostItMenu.js'
import Login from './Login.js'

const memoSection = document.querySelector('.memoSection')
const body = document.querySelector('body')

const memoApp = new MemoManager()
const fetchClass = new FetchClass()
fetchClass.getData(memoApp.listRender)

const postItMenu = new PostItMenu(memoApp.listRender, memoSection)

const bgMenu = new BgMenu(memoApp.listRender, memoSection)


const users = [
    {
        userid:1,
        username: "aaa",
        password: "123"
    },

    {
        userid:2,
        username: "bbb",
        password: "456"
    }, 

    {
        userid:3,
        username: "ccc",
        password: "789"
    },


]

const login = new Login(users)


body.addEventListener('click', (e)=>{
        switch(e.target.dataset.name){
            case "create":
                fetchClass.createMemo(e.clientX, e.clientY, memoApp.listRender)
                break;
            case "deleteAll":
                memoApp.deleteAllMemo();
                fetchClass.deleteAllMemo(memoApp.listRender);
                break;
            case "remove":
                memoApp.removeMemo(e.target.dataset.id)
                fetchClass.removeMemo(+e.target.dataset.id, memoApp.listRender)
                break;
            case "minimize":
                memoApp.minimize(e.target.parentElement.parentElement)
                break;
            case "maximize":
                memoApp.maximize(e.target)
                break;
            case "post":
                memoApp.bringFront(postItMenu.targetConvert(e.target))
                break;
            case "login":
                login.loginCheck()
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
    fetchClass.pageUpdate(selected, pageXValue, pageYValue, memoApp.listRender)
})


// document.addEventListener('scroll', (e)=>{
//     contextMenuDiv.classList.remove('menuShow')
// })