import ContextMenu from './ContextMenu.js'
import MemoManager from './MemoManager.js'
import LocalStorageClass from './LocalStorageClass.js'
const localStorageClass = new LocalStorageClass()
const data = localStorageClass.getData()
const memoApp = new MemoManager(data)

//const memoManager = new MemoManager()

class BgMenu extends ContextMenu{

    render(){
        const temp = document.createElement('div')
        temp.innerHTML = `<div class = "contextMenu">
                            <ul>
                                <li data-name="newMemo">New memo</li>
                                <li data-name="deleteAll">Delete all</li>
                            </ul>
                            </div>`
        this.menu = temp.children[0]
        this.memoSection.appendChild(this.menu)
        
    }

    newMemo(){ //how to bring the MemoManager without importing it...???
        this.menu.addEventListener('click', (e)=>{
            memoApp.createMemo(dataId, e.clientX, e.clientY)
        })
    }


}

export default BgMenu;