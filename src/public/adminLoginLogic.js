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

    

    try {
        const { data } = await axios.post('http://localhost:3000/api/v1/adminSignin',{
            
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
            window.location.replace('./adminLandingPage.html');
            localStorage.setItem('x-access-token', data.data);
        }

    } catch (error) {
        // throw error;
        // console.log(error.response);
        // console.log(error.response.data.message.err);
        formAlertDOM.style.display = 'block'
        
        formAlertDOM.textContent = "Incorrect email or password for admin";
        
        
    }

    setTimeout(() => {
        formAlertDOM.style.display = 'none',
        location.reload()
    }, 6000)

})