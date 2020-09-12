class LocalStorage{
    constructor(){
        this.data = this.getData()
    }

    getData(){
        return JSON.parse(localStorage.getItem('data'))
    }

    dropStorageUpdate(selected, pageXValue, pageYvalue){
        let dataFind = this.data.find(item=> item.id === +selected.dataset.id)
        dataFind.pageX = pageXValue
        dataFind.pageY = pageYvalue

        localStorage.setItem('data', JSON.stringify(this.data))
        }

}



export default LocalStorage