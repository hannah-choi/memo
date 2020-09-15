class ContextMenu{
    constructor(memoSection){
        this.memoSection = memoSection
    }

    rightButtonClick(clickedItem, clientY,clientX){
        this.remove()
        this.render()
        this.clickedItem = clickedItem
        
        //const contextMenu = document.querySelector('.contextMenu');
        this.menu.style.top = clientY + "px";
        this.menu.style.left = clientX + "px";
        this.menu.classList.add('menuShow')
    }

    remove(){
        if(this.menu){
            document.querySelector('.contextMenu').remove();
        }
    }

}

export default ContextMenu