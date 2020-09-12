

class Memo{
    constructor(memoContents, memoColor, memoId){
        this.memoContents = memoContents
        this.memoColor = memoColor
        this.memoId = memoId
    }

    create(){
        Memo.listRender(data)
    }
    edit(){
           
    }
    delete(){

    }
    render(){
        return `<div class="post ${this.memoColor}" data-id="${this.memoId}" draggable="true">
                    <header class="postHeader" data-name="post">
                        <a class="create" href="#" data-name="create"><img src="images/add.svg" data-name="create"></a>
                        <a class="remove" href="#"><img src="images/remove.svg" data-name="remove" data-id="${this.memoId}"></a>
                       <img class="minimize" src="images/minimize.svg" data-name="minimize">
                    </header>
                    <article class="postMain" data-name="post">
                        <form action="">
                        <textarea class="text" data-id="${this.memoId}" data-name="post">${this.memoContents}</textarea>
                        <input type="text" hidden>
                    </form>
                    </article>
                  </div>`;

        
    }

}

export default Memo