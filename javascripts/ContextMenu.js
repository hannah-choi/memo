class ContextMenu{
    constructor(memoSection){
        this.clickedItem = null;
        this.memoSection = memoSection
    }

    memoColorChange(colorName){
        this.clickedItem.classList.remove(`${this.clickedItem.dataset.color}`)
        this.clickedItem.classList.add(`${colorName}`)
        this.clickedItem.dataset.color = `${colorName}`
    }

    render(){
        let contents = "";
        contents = `<div class = "contextMenu">
		<ul>
			<li class = "contextItem">COPY</li>
			<li class = "contextItem">COLOR
				<ul>
					<li class="colorLi"><div class="blue" data-name="color"></div></li>
					<li class="colorLi"><div class="lightblue" data-name="color"></div></li>
					<li class="colorLi"><div class="brightred" data-name="color"></div></li>
					<li class="colorLi"><div class="lightpink" data-name="color"></div></li>
				</ul>
			</li>
		</ul>
        </div>`
        
        this.memoSection.innerHTML += contents;

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

export default ContextMenu;
