class Login{
    constructor(users){
        this.users = users
        this.loginDiv = document.querySelector('.login')
        this.username = document.getElementById('username')
        this.password = document.getElementById('password')
        this.userid = document.getElementById('userid')
        this.selectedIndex = null;
    }

    loginCheck(){
        if(this.username.value && this.password.value){
            for(let i = 0; i<this.users.length; i++){
                if(this.username.value === this.users[i].username &&
                    this.password.value === this.users[i].password){
                        alert(`Successfully logged in`)
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


