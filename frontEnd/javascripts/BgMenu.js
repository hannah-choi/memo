import ContextMenu from './ContextMenu.js'

class BgMenu extends ContextMenu{
    render(){
        const temp = document.createElement('div')
        temp.innerHTML = `
            <div class = "contextMenu">
                <ul>
                <li data-name="create">New memo</li>
                <li data-name="deleteAll">Delete all</li>
                </ul>
            </div>`
        this.menu = temp.children[0]
        this.memoSection.appendChild(this.menu)   
    }
}

export default BgMenu;