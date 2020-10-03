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

    pageUpdate(selected, pageXValue, pageYValue){
        const findData = FetchClass.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;
        fetch(`http://localhost:8440/post/position?id=${+selected.dataset.id}&pageX=${pageXValue.slice(0,-2)}&pageY=${pageYValue.slice(0,-2)}`)
            .then(res => res.text())
    }

    static colorChange(selected, changedColor){
        const findData = FetchClass.data.find(item => item.id === +selected.dataset.id);
        findData.color = changedColor;
        fetch(`http://localhost:8440/post/color?id=${findData.id}&color=${changedColor}`)
            .then(res => res.text())
    }

    removeMemo(id){
        return fetch(`http://localhost:8440/post/delete?id=${id}`)
        .then(res => res.text())
    }

    createMemo(x, y, newMemo){
        fetch(`http://localhost:8440/post/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({pageX: `${x}`, pageY: `${y}`})
            })
        .then(res => res.json())
        .then(result => {
            newMemo(result)
            FetchClass.data = result
            console.log(FetchClass.data)})
    }

    updateMemo(id, newText){
        fetch(`http://localhost:8440/post/update`,{
            method: 'PUT', 
            headers: {
            'Content-type': 'application/json; charset=UTF-8' 
            },
            body: JSON.stringify({text: `${newText}`, id: `${id}`})
            }
        )
    }

    deleteAllMemo(){
        return fetch(`http://localhost:8440/post/all`, 
        { method:'DELETE'})
        .then(res => res.text())
    }

    colorFilter(color, updateData){
        fetch(`http://localhost:8440/post/filter?color=${color}`)
        .then(res => res.json())
        .then(result => {
            updateData(result);
            FetchClass.data = result;
        })
    }


    static showUserMemo(cookieObj, updateData){
        fetch('http://localhost:8440/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(cookieObj)
            })
        .then(res => res.json())
        .then(result => updateData(result))
    }




}

export default FetchClass;