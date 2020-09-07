import Memo from './Memo.js'

class MemoManager{
    constructor(data){
        this.data = data
        this.memoSection = document.querySelector('.memoSection')
        this.memos = data.map(data => new Memo(data.text, data.color, data.id))
        this.listRender()
    }

    createMemo(){
        const memo = new Memo("", "beige", 3)
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

    listRender(){ //데이터를 받아서 리스트를 그려주는 역할
        const memosArray = this.memos.map(memo => memo.render()).join('')
        this.memoSection.innerHTML = memosArray
}
}


export default MemoManager;