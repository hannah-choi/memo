
class LocalStorageClass{
    constructor(data){
        this.data = data;
    }

    pageUpdate(selected, pageXValue, pageYValue){
        const findData = this.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;

        localStorage.setItem('data', JSON.stringify(this.data));
    }

    // colorChange(color){
    //     const findData = this.data.find(item => item.id === +selected.dataset.id);
    //     findData.color = color;
    //     localStorage.setItem('data', JSON.stringify(this.data));
    // }

}


export default LocalStorageClass;