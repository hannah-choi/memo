import FetchClass from './FetchClass.js'

class Login{
    constructor(){
        //this.users = users
        this.loginDiv = document.querySelector('.login')
        this.username = document.getElementById('username')
        this.password = document.getElementById('password')
        this.userid = document.getElementById('userid')
        this.selectedIndex = null;
    }


    loginCheck(users, listRender){
        let cookieObj = null;
        if(this.username.value && this.password.value){
            for(let i = 0; i<users.length; i++){
                if(this.username.value === users[i].username &&
                    this.password.value === users[i].password){
                        alert(`Successfully logged in`)
                        cookieObj = { username:`${users[i].username}`, password:`${users[i].password}`, userID:`${users[i].userID}` }
                        this.loginDiv.style.display = "none";
                        FetchClass.showUserMemo(cookieObj, listRender);
                        return;
                    }   
            }
            alert('invalid username or password')
        } else {
            alert('type something')
        }
    }
}

export default Login;


