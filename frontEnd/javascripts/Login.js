


class Login{
    constructor(users){
        this.users = users
        this.loginDiv = document.querySelector('.login')
        this.username = this.loginDiv.querySelector('#username').value;
        this.password = this.loginDiv.querySelector('#password').value;
        this.userid = this.loginDiv.querySelector('#userid').value;
        this.selectedIndex = null
    }

    loginCheck(){
        if(this.username){
            this.selectedIndex = this.users.findIndex(user=> user.username === this.username)
            if(this.selectedIndex === -1){
                alert(`there's no such username`)
            } else {
                if this.password === this.users[this.selectedIndex].password 
            }
        }


    }


}

export default Login;


