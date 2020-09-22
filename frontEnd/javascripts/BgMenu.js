import ContextMenu from './ContextMenu.js'

//const memoManager = new MemoManager()

class BgMenu extends ContextMenu{

    render(){
        const temp = document.createElement('div')
        temp.innerHTML = `<div class = "contextMenu">
                            <ul>
                                <li data-name="create">New memo</li>
                                <li data-name="deleteAll">Delete all</li>
                            </ul>
                            </div>`
        this.menu = temp.children[0]
        this.memoSection.appendChild(this.menu)
        
    }

    // newMemo(){ //how to bring the MemoManager without importing it...???
    //     this.menu.addEventListener('click', (e)=>{
    //         memoApp.createMemo(dataId, e.clientX, e.clientY)
    //     })
    // }


}

export default BgMenu;