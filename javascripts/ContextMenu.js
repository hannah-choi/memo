class ContextMenu{

    constructor(){


    }

    rightButtonClick(clientY,clientX){
        const contextMenu = document.querySelector('.contextMenu');
        contextMenu.style.top = clientY + "px";
        contextMenu.style.left = clientX + "px";
        contextMenu.classList.add('menuShow')
    }

}

export default ContextMenu;
