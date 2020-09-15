import ContextMenu from './ContextMenu.js'

class PostItMenu extends ContextMenu{
    // constructor(){
    //     this.menu = menu
    // }

    memoColorChange(colorName){
        this.clickedItem.classList.remove(`${this.clickedItem.dataset.color}`)
        this.clickedItem.classList.add(`${colorName}`)
        this.clickedItem.dataset.color = `${colorName}`
    }

    render(){
        const temp = document.createElement('div')
        temp.innerHTML = `<div class = "contextMenu">
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

        this.menu = temp.children[0]
        this.memoSection.appendChild(this.menu)

    }


}

export default PostItMenu;
