import FetchClass from './FetchClass.js'

class Login{
    constructor(){
        //this.users = users
        this.loginDiv = document.querySelector('.login')
        this.email = document.getElementById('email')
        this.password = document.getElementById('password')
        this.userid = document.getElementById('userid')
        this.selectedIndex = null;
    }


    loginCheck(users, updateData){
        let cookieObj = null;
        if(this.email.value && this.password.value){
            for(let i = 0; i<users.length; i++){
                if(this.email.value === users[i].email &&
                    this.password.value === users[i].password){
                        alert(`Successfully logged in`)
                        cookieObj = { email:`${users[i].email}`, password:`${users[i].password}`, userID:`${users[i].userID}` }
                        this.loginDiv.style.display = "none";
                        FetchClass.showUserMemo(cookieObj, updateData);
                        return;
                    }   
            }
            alert('invalid email or password')
        } else {
            alert('type something')
        }
    }
}

export default Login;


