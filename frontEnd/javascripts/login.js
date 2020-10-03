const form = document.getElementById('loginForm');
form.addEventListener('submit', (e)=>{ //폼 데이터 submit의 디폴트값을 없애고 이벤트를 준다 
    e.preventDefault();
    
    function getLoginMessage(){

        let email = form.email.value;
        let password = form.password.value;

        return fetch('http://localhost:8440/user',
        { method:'POST',
          headers: {
                'Content-type': 'application/json; charset=UTF-8' 
                },
            body: JSON.stringify({ email: `${email}`, password: `${password}` })
        })
        .then(res => res.text())
    }    

    getLoginMessage()
    .then(text => {
        if(text === 'fail'){
            alert('Invalid id or password')
        } else {
            location.href = "memo.html"
        }
    })
})
