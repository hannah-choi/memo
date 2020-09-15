class BgMenu{
    constructor(memoSection){
        this.memoSection = memoSection
    }

    render(){
       let contents = '';
       contents = `<div class = "bgMenu">
                    <ul>
                        <li>New memo</li>
                        <li>Delete memo</li>
                    </ul>
                    </div>`
        this.memoSection.innerHTML += contents;
    }

    rightButtonClick(clickedItem, clientY, clientX){
        if(clickedItem.className === 'memoSection'){
            this.render()
            const bgMenu = document.querySelector('.bgMenu');
            bgMenu.style.top = clientY + "px";
            bgMenu.style.left = clientX + "px";
            bgMenu.classList.add('menuShow')
        }
    }
}

export default BgMenu;