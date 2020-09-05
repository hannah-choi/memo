
    .addEventListener('click', ({target})=>{
        switch(target.dataset.name){
            case 'delete': memo.delete(){

            }
            case 'create': memo.create(){

            }
            case 'edit': memo.edit(){

            }
        }
    })



class Memo{
    constructor(){
        this.memoList = []
    }
    setState(data){
        this.listRender()
    }
    create(){    
        this.memoList.push()
        this.listRender(data)
    }
    edit(){
           
    }
    delete(){

    }
    listRender(rows){ //데이터를 받아서 리스트를 그려주는 역할
        for(let i = 0; i<rows.length; i++){
            let contents = '';
            contents += `<div src..>`
        }

    }
}