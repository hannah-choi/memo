
class FetchClass{
    constructor(){
        //this.getData();
    }

    //static data;
    
    getData(listRender){

        fetch('http://localhost:8440/post',
            {
                method:'get',
                headers:{
                    "Accept": "application/json",
                    "Content-type": "application/json; charset = UTF-8"
                }
            }
            )
            .then(res => res.json())
            .then(result => listRender(result))
            
        // const data = localStorage.getItem('data')
        // if (!data){
        //     return [];
        // }
        // LocalStorageClass.data = JSON.parse(data)
        // return JSON.parse(data)
    }



    pageUpdate(selected, pageXValue, pageYValue){
        const findData = this.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;

        localStorage.setItem('data', JSON.stringify(this.data));
    }

    static colorChange(selected, changedColor){
        const findData = this.data.find(item => item.id === +selected.dataset.id);
        findData.color = changedColor;
        localStorage.setItem('data', JSON.stringify(this.data));
    }

}


export default FetchClass;