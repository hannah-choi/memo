class FetchClass{
    constructor(){
        //this.data = null;
    }

    static data;
    
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
            .then(result => {
                listRender(result);
                FetchClass.data = result;
            })
            
        // const data = localStorage.getItem('data')
        // if (!data){
        //     return [];
        // }
        // LocalStorageClass.data = JSON.parse(data)
        // return JSON.parse(data)
    }


    pageUpdate(selected, pageXValue, pageYValue, listRender){
        const findData = FetchClass.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;

        fetch(`http://localhost:8440/post/position?id=${+selected.dataset.id}&pageX=${pageXValue.slice(0,-2)}&pageY=${pageYValue.slice(0,-2)}`)
            .then(res => res.json())
            .then(result => listRender(result))

        //localStorage.setItem('data', JSON.stringify(this.data));
    }
x
    static colorChange(selected, changedColor, listRender){
        const findData = this.data.find(item => item.id === +selected.dataset.id);
        findData.color = changedColor;

        fetch(`http://localhost:8440/post/color?id=${findData.id}&color=${changedColor}`)
            .then(res => res.json())
            .then(result => listRender(result))

        //localStorage.setItem('data', JSON.stringify(this.data));
    }


    removeMemo(id, listRender){
        fetch(`http://localhost:8440/post/delete?id=${id}`)
        .then(res => res.json())
        .then(result => listRender(result))
    }

    // getUser(){

    //     fetch(`http://localhost:8440/user`,
    //     {
    //         method:'get',
    //         headers:{
    //             "Accept": "application/json",
    //             "Content-type": "application/json; charset = UTF-8"
    //         }
    //     }
    //     )
    //     .then(res => res.json())
    //     .then(result => console.log(result))

    // }


}


export default FetchClass;