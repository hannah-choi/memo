//import PostItMenu from "./PostItMenu";

class FetchClass{
    static data;
    getData(updateData){
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
                updateData(result);
                FetchClass.data = result;
            })

    }

    pageUpdate(selected, pageXValue, pageYValue, updateData){
        const findData = FetchClass.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;
        fetch(`http://localhost:8440/post/position?id=${+selected.dataset.id}&pageX=${pageXValue.slice(0,-2)}&pageY=${pageYValue.slice(0,-2)}`)
            .then(res => res.json())
            .then(result => updateData(result))
    }

    static colorChange(selected, changedColor, updateData){
        const findData = this.data.find(item => item.id === +selected.dataset.id);
        findData.color = changedColor;
        fetch(`http://localhost:8440/post/color?id=${findData.id}&color=${changedColor}`)
            .then(res => res.json())
            .then(result => updateData(result))
    }

    deleteMemo(id){
        return fetch(`http://localhost:8440/post/delete?id=${id}`)
                .then(res => res.text())
    }

    createMemo(x, y, createMemo){
        fetch(`http://localhost:8440/post/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({pageX: x-200, pageY: y})
            })
        .then(res => res.json())
        .then(result => createMemo(result))
    }

    deleteAllMemo(updateData){
        fetch(`http://localhost:8440/post/all`, 
        {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => updateData(result))
    }

    colorFilter(color, updateData){
        fetch(`http://localhost:8440/post/filter?color=${color}`)
        .then(res => res.json())
        .then(result => {
            updateData(result);
            FetchClass.data = result;
        })
    }
}

export default FetchClass;