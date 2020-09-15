import MemoManager from './MemoManager.js'
import ContextMenu from './ContextMenu.js'

const data = JSON.parse(localStorage.getItem('data'))

const memoApp = new MemoManager(data)
const contextMenu = new ContextMenu()
const contextMenuDiv = document.querySelector('.contextMenu');
const memoSection = document.querySelector('.memoSection')

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
                console.log(clickedItem.style.zIndex)
                memoApp.bringFront(clickedItem)
                break;
            default:
                contextMenuDiv.classList.remove('menuShow')
                return
        }
    })

    // posts.forEach(post => {
    //     post.addEventListener('contextmenu',(e)=>{
    //         e.preventDefault(); 
    //         contextMenu.style.top = `${e.clientY}px`
    //         contextMenu.style.left = `${e.clientX}px`
    //         contextMenu.classList.add('menuShow')
    // })
    // })
    
memoSection.addEventListener('contextmenu', (e)=>{
    e.preventDefault(); 
    if(e.target.tagName==="SECTION"){
        return;
    }
    contextMenu.rightButtonClick(e.clientY, e.clientX)
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
    if(e.target.className !== 'post'){
        return;
    } 
    MemoManager.dragStart(e)
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

    memoApp.drop(selected, pageXValue, pageYvalue)
})


document.addEventListener('scroll', (e)=>{
    contextMenuDiv.classList.remove('menuShow')
})