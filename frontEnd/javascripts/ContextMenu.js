class ContextMenu{
    constructor(listRender, memoSection){
        this.listRender = listRender;
        this.memoSection = memoSection;
    }

    rightButtonClick(clientY,clientX){
        ContextMenu.remove()
        this.render()
        //const contextMenu = document.querySelector('.contextMenu');
        this.menu.style.top = clientY + "px";
        this.menu.style.left = clientX - 200 + "px";
        this.menu.classList.add('menuShow')
    }

    static remove(){
        if(document.querySelector('.contextMenu')){
            document.querySelector('.contextMenu').remove();
        }
    }

}

export default ContextMenu;