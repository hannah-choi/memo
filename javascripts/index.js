import MemoManager from './MemoManager.js'


const data = [

    {   
        text:"Pariatur dolor aute nulla non consectetur magna commodo.",
        category:0,
        color: "darkblue",
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
        //console.log(target)
        switch(target.dataset.name){
            case "create":
                memoApp.createMemo()
                break;
            case "remove":
                memoApp.removeMemo(target.dataset.id)
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

memoSection.addEventListener('drag',(e)=>{
})

memoSection.addEventListener('dragstart',({target})=>{
})

memoSection.addEventListener("drop", (e)=> {
    e.preventDefault();
  });