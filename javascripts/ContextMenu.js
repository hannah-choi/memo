class ContextMenu{
    constructor(){
        this.menu = document.querySelector('.contextMenu')
    }

    rightClick(clientY,clientX){
        this.menu.style.top = `${clientY}px`
        this.menu.style.left = `${clientX}px`
        this.menu.classList.add('menuShow')
    }

}

export default ContextMenu;