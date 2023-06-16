const inputEmailDOM = document.getElementById('emailId');
const inputPasswordDOM = document.getElementById('pId');
const logInBtn = document.getElementById('logInBtn');
const formDOM = document.getElementById('frm');
const formAlertDOM = document.querySelector('.form-alert');

logInBtn.addEventListener('click', async(e) => {
    formAlertDOM.classList.remove('text-success')
    e.preventDefault();
    
    const email = inputEmailDOM.value;
    const password = inputPasswordDOM.value;

    if(email === "" || password == ""){
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = "Please enter email and password";
    }

    else{
        try {
            const { data } = await axios.post('http://localhost:3000/api/v1/signin',{
                
                email : email,
                password : password
               
                
            })
            console.log(data.data);
            // formAlertDOM.style.display = 'block'
            // formAlertDOM.textContent = data.message
    
            // formAlertDOM.classList.add('text-success')
            // usernameInputDOM.value = ''
            // passwordInputDOM.value = ''
            if(data.success){
                window.location.replace('./userLanding.html');
                localStorage.setItem('x-access-token', data.data);
            }
    
        } catch (error) {
            // throw error;
            console.log(error.response.data.message.err);
            formAlertDOM.style.display = 'block'
            if(error.response.data.message.err === "Incorrect password"){
                formAlertDOM.textContent = "Incorrect email or password";
            }
            else formAlertDOM.textContent =error.response.data.message.err;
        }
    }

    setTimeout(() => {
        formAlertDOM.style.display = 'none',
        location.reload()
    }, 6000)

})