import Memo from './Memo.js'

class MemoManager{
    constructor(data){
        this.data = data
        this.memoSection = document.querySelector('.memoSection')
        this.memos = data.map(data => new Memo(data.text, data.color, data.id, data.pageX, data.pageY, false))
        this.listRender()
        this.selected = null;
        this.shiftX = null;
        this.shiftY = null;
    }

    createMemo(){
        const memo = new Memo("", "brightred", 3)
        this.memos.push(memo)
        this.listRender()
    }

    removeMemo(selected){
        const selectedId = this.memos.findIndex(data => data.id === +selected)
        this.memos.splice(selectedId, 1)
        this.listRender()
    }

    updateMemo(selected, newValue){
        const selectedId = this.memos.findIndex(data => data.memoId === +selected)
        this.memos[selectedId].memoContents = newValue
        //console.log(this.memos[selectedId].memoContents)
        this.listRender()
    }

    minimize(selected){
        selected.parentElement.nextElementSibling.style.display = "none";
        selected.src = "images/maximize.svg";
        selected.dataset.name = 'maximize'
    }

    maximize(selected){
        selected.parentElement.nextElementSibling.style.display = "block";
        selected.src = "images/minimize.svg";
        selected.dataset.name = 'minimize';
    }

    bringFront(clickedItem){
        if(this.selected){
            this.selected.style.zIndex = 0;
        }
        this.selected = clickedItem; //store the previously clicked element
        this.selected.style.zIndex = 10;
        console.log(this.selected)
    }

    dragStart(e){
        const id = e.target.dataset.id
        e.dataTransfer.setData("text", id)

        this.shiftX = e.pageX - e.target.getBoundingClientRect().left
        this.shiftY = e.pageY - e.target.getBoundingClientRect().top
    }


    drop(selected, pageXValue, pageYValue){        
        selected.style.left = pageXValue;
        selected.style.top = pageYValue;
    }

    listRender(){ //데이터를 받아서 리스트를 그려주는 역할
        const memosArray = this.memos.map(memo => memo.render()).join('')
        this.memoSection.innerHTML = memosArray
}

}


export default MemoManager;