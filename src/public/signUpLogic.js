const inputEmailDOM = document.getElementById('emailId');
const inputPasswordDOM = document.getElementById('pId');
const singupButton = document.getElementById('signupBtn');
const formDOM = document.getElementById('frm');
const formAlertDOM = document.querySelector('.form-alert');

singupButton.addEventListener('click', async(e) => {
    formAlertDOM.classList.remove('text-success')
    e.preventDefault();
    
    const email = inputEmailDOM.value;
    const password = inputPasswordDOM.value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.match(mailformat)){
        formAlertDOM.style.display = 'block'
        
        formAlertDOM.textContent = "Incorrect email type";
    }

   else{
        try {
            const { data } = await axios.post('http://localhost:3000/api/v1/signup',{
                
                email : email,
                password : password
            
                
            })
            console.log(data);
            formAlertDOM.style.display = 'block'
            formAlertDOM.textContent = data.message

            formAlertDOM.classList.add('text-success')
            usernameInputDOM.value = ''
            passwordInputDOM.value = ''
        } catch (error) {
            // throw error;
            console.log(error.response.data.err.errors[0].message);
            formAlertDOM.style.display = 'block'
            if(error.response.data.err.errors[0].message === "Validation len on password failed"){
                formAlertDOM.textContent = "Too Short Password";
            }
            else formAlertDOM.textContent = error.response.data.err.errors[0].message;
        }
   }

    setTimeout(() => {
        formAlertDOM.style.display = 'none',
        location.reload()
    }, 6000)

})