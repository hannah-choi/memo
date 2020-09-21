import ContextMenu from './ContextMenu.js'
import FetchClass from './FetchClass.js'


class PostItMenu extends ContextMenu{
    // constructor(){
    //     this.menu = menu
    // }

    rightButtonClick(clickedItem, clientY, clientX){ //overwriting하는것 숙제
        super.rightButtonClick(clientY, clientX);
        this.clickedItem = clickedItem;
    }

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
        this.clickEvent()
    }

    clickEvent(){
        this.menu.addEventListener('click', ({target})=>{
            switch(target.dataset.name){
                case "color":
                    this.memoColorChange(target.className)
                    FetchClass.colorChange(this.clickedItem, target.className, this.listRender)
                    break;
            }   
        })
    }


    targetConvert(target){
        if(target.tagName === "HEADER"){
            return target.parentElement
        } else if (target.tagName === "TEXTAREA" || target.tagName === "ARTICLE") {
            return target.parentElement.parentElement.parentElement
        }
    }

}

export default PostItMenu;
