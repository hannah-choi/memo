import ContextMenu from './ContextMenu.js'

class BgMenu extends ContextMenu{

    rightButtonClick(clickedItem, clientY, clientX){
        super.rightButtonClick(clientY, clientX)
    }

    render(){
        const temp = document.createElement('div')
        temp.innerHTML = `<div class = "contextMenu">
                            <ul>
                                <li>New memo</li>
                                <li>Delete memo</li>
                            </ul>
                            </div>`
        this.menu = temp.children[0]
        this.memoSection.appendChild(this.menu)
        
    }

}

export default BgMenu;