import ContextMenu from './ContextMenu.js'

class PostItMenu extends ContextMenu{

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


}

export default PostItMenu;
