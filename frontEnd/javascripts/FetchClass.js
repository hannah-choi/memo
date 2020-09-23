//import PostItMenu from "./PostItMenu";
import Login from './Login.js'

class FetchClass{
    static data;
    static userData;

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

    }

    pageUpdate(selected, pageXValue, pageYValue, listRender){
        const findData = FetchClass.data.find(item => item.id === +selected.dataset.id)
        findData.pageX = pageXValue;
        findData.pageY = pageYValue;
        fetch(`http://localhost:8440/post/position?id=${+selected.dataset.id}&pageX=${pageXValue.slice(0,-2)}&pageY=${pageYValue.slice(0,-2)}`)
            .then(res => res.json())
            .then(result => listRender(result))
    }

    static colorChange(selected, changedColor, listRender){
        const findData = this.data.find(item => item.id === +selected.dataset.id);
        findData.color = changedColor;
        fetch(`http://localhost:8440/post/color?id=${findData.id}&color=${changedColor}`)
            .then(res => res.json())
            .then(result => listRender(result))
    }

    removeMemo(id, listRender){
        fetch(`http://localhost:8440/post/delete?id=${id}`)
        .then(res => res.json())
        .then(result => listRender(result))
    }

    createMemo(x, y, listRender){
        fetch(`http://localhost:8440/post/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({pageX: `${x}`, pageY: `${y}`})
            })
        .then(res => res.json())
        .then(result => listRender(result))
    }

    deleteAllMemo(listRender){
        fetch(`http://localhost:8440/post/all`, 
        {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => listRender(result))
    }

    colorFilter(color, listRender){
        fetch(`http://localhost:8440/post/filter?color=${color}`)
        .then(res => res.json())
        .then(result => {
            listRender(result);
            FetchClass.data = result;
        })
    }

    getUser(){
        fetch('http://localhost:8440/user',
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
            FetchClass.userData = result;
        })
    }

    static showUserMemo(cookieObj, listRender){
        fetch('http://localhost:8440/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(cookieObj)
            })
        .then(res => res.json())
        .then(result => listRender(result))
    }


}

export default FetchClass;