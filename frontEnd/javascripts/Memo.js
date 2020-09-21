class Memo{
    constructor(memoContents, memoColor, memoId, memoPageX, memoPageY){
        this.memoContents = memoContents
        this.memoColor = memoColor
        this.memoId = memoId
        this.memoPageX = parseInt(memoPageX)
        this.memoPageY = parseInt(memoPageY)
    }

    create(){
        Memo.listRender(data)
    }
    
    edit(){
           
    }
    delete(){

    }
    render(){
        return `<div class="post ${this.memoColor}" data-id="${this.memoId}" data-color="${this.memoColor}" draggable="true" spellcheck="false" style="left: ${this.memoPageX}px; top: ${this.memoPageY}px;">
                    <header class="postHeader" data-name="post">
                        <img src="images/add.svg" data-name="create">
                        <img src="images/remove.svg" data-name="remove" data-id="${this.memoId}">
                        <img class="minimize" src="images/minimize.svg" data-name="minimize">
                        <span class="headerText"></span>
                    </header>
                    <article class="postMain" data-name="post">
                        <form action="">
                        <textarea class="text" data-id="${this.memoId}" data-name="post" spellcheck="false">${this.memoContents}</textarea>
                        <input type="text" hidden>
                    </form>
                    </article>
                  </div>`;

        
    }

}

export default Memo