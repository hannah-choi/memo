
class LocalStorageClass{
    constructor(){
        this.data = this.getData();
    }

    getData(){
        const data = localStorage.getItem('data')
        if (!data){
            return [];
        }
        return JSON.parse(data)
    }

    pageUpdate(selected, pageXValue, pageYValue){
        const findData = this.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;

        localStorage.setItem('data', JSON.stringify(this.data));
    }

    colorChange(selected, changedColor){
        const findData = this.data.find(item => item.id === +selected.dataset.id);
        findData.color = changedColor;
        localStorage.setItem('data', JSON.stringify(this.data));
    }

}


export default LocalStorageClass;