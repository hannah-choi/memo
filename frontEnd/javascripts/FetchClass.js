class FetchClass{

    static data;
    getData(updateData){
        fetch(`post`,
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

    pageUpdate(selected, pageXValue, pageYValue){
        const findData = FetchClass.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;
        fetch(`post/position?id=${+selected.dataset.id}&pageX=${pageXValue.slice(0,-2)}&pageY=${pageYValue.slice(0,-2)}`)
            .then(res => res.text)
    }

    static colorChange(selected, changedColor, updateData){
        const findData = FetchClass.data.find(item => item.id === +selected.dataset.id);
        findData.color = changedColor;
        fetch(`post/color?id=${findData.id}&color=${changedColor}`)
            .then(res => res.json())
            .then(result => updateData(result))
    }

    deleteMemo(id){
        return fetch(`post/delete?id=${id}`)
                .then(res => res.text())
    }

    createMemo(color, x, y, createMemo){
        fetch(`post/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({color: color, pageX: x-200, pageY: y})
            })
        .then(res => res.json())
        .then(result => {
                createMemo(result)
                FetchClass.data.push(result)
            })
    }

    deleteAllMemo(){
        return fetch(`post/all`, 
        {
            method:'DELETE'
        })
        .then(res => res.text())
    }

    updateMemo(id, newValue){
        fetch(`post`, 
        {
            method:'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
               },
               body: JSON.stringify({ text: newValue, id: id })
        })
        .then(res => res.text())
    }

    colorFilter(color, filterData){
        fetch(`post/filter?color=${color}`)
        .then(res => res.json())
        .then(result => {
            filterData(result);           
        })
    }




}

export default FetchClass;