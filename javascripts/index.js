import MemoManager from './MemoManager.js'


const data = [

    {   
        text:"dkfjasdasdsdklfjd",
        category:0,
        color: "lightblue",
        id:1

    },

    {   
        text:"dfgsdgfgfgdfgd",
        category:1,
        id:2,
        color:"lightbrown"

    }

]


const memoApp = new MemoManager(data)
const memoSection = document.querySelector('.memoSection')


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
    