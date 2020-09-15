import ContextMenu from './ContextMenu.js'

class BgMenu extends ContextMenu{

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

}

export default BgMenu;