
class LocalStorageClass{
    constructor(){
        this.getData()
    }

    getData(){
        const localStorageData = localStorage.getItem('data')
        if(!localStorageData){
           return ([])
        }
        return JSON.parse(localStorageData)
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