import Login from './Login.js'
import FetchClass from './FetchClass.js'

const login = new Login();
const body = document.querySelector('body')

body.addEventListener('click', (e)=>{
    if(e.target.dataset.name !== "login"){
        return;
    }
    login.loginCheck(FetchClass.userData, memoApp.listRender)
        
    } 
)


class LoginManager{

    constructor(){

    }



}