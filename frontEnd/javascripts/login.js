const form = document.getElementsById('loginForm');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

form.addEventListener('submit', (e)=>{ //폼 데이터 submit의 디폴트값을 없애고 이벤트를 준다 
    e.preventDefault();
    
    function getLoginMessage(email, password){
        return fetch('http://localhost:8440/user',
        { method:'POST',
          headers: {
                'Content-type': 'application/json; charset=UTF-8' 
                },
            body: JSON.stringify({email: `${email}`, password: `${password}`})
        }
        .then(res => res.text()))
    }    

    getLoginMessage(email, password)
    .then(text => {
        if(text === 'fail'){
            alert('Invalid id or password')
        }
    })
})
