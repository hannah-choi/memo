import ContextMenu from './ContextMenu.js'

class BgMenu extends ContextMenu {
    constructor(){
        this.clickedItem = null;
    }

    render(){
    


    }

    rightButtonClick(clickedItem, clientY,clientX){
        this.clickedItem = clickedItem
        const contextMenu = document.querySelector('.bgMenu');
        contextMenu.style.top = clientY + "px";
        contextMenu.style.left = clientX + "px";
        contextMenu.classList.add('menuShow')
    }

}

export default BgMenu;
