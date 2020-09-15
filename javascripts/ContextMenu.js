class ContextMenu{
    constructor(memoSection){
        this.memoSection = memoSection
    }

    rightButtonClick(clickedItem, clientY,clientX){
        this.render()
        this.clickedItem = clickedItem
        
        
        const contextMenu = document.querySelector('.contextMenu');
        
        contextMenu.style.top = clientY + "px";
        contextMenu.style.left = clientX + "px";
        contextMenu.classList.add('menuShow')
    }

}

export default ContextMenu