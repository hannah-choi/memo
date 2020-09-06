

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
        return `<div class="post ${this.memoColor}" data-id="${this.memoId}">
                    <header class="postHeader">
                        <a class="create" href="#" data-name="create"><img src="images/add.svg" data-name="create"></a>
                        <a class="edit" href="#" data-name="edit"><img src="images/edit.svg"></a>
                        <a class="remove" href="#"><img src="images/remove.svg" data-name="remove" data-id="${this.memoId}"></a>
                    </header>
                    <article class="postMain">
                        <form action="">
                        <textarea class="text">${this.memoContents}</textarea>
                        <input type="text" hidden>
                    </form>
                    </article>
                  </div>`;

        
    }

}

export default Memo