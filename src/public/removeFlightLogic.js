const flightID = document.getElementById('flightId');

const removeBtn = document.getElementById('removeBtn');
const formAlertDOM = document.querySelector('.form-alert');

removeBtn.addEventListener('click', async(e) => {
    formAlertDOM.classList.remove('text-success')
    e.preventDefault();
    
    let flightIDval = flightID.value;
   

    if(flightIDval === ""){
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = "Please enter the flight ID";
        // setTimeout(() => {
        //     formAlertDOM.style.display = 'none',
        //     location.reload()
        // }, 4000)
    }

    else{
        try {
            const { data } = await axios.delete(`http://localhost:3000/api/v1/flights/${flightIDval}`);
            // console.log(data);
            formAlertDOM.style.display = 'block'
            formAlertDOM.textContent = data.message
    
            formAlertDOM.classList.add('text-success')
            // usernameInputDOM.value = ''
            // passwordInputDOM.value = ''
            // if(data.success){
            //     window.location.replace('./adminLandingPage.html');
            //     localStorage.setItem('x-access-token', data.data);
            // }
    
        } catch (error) {
            // throw error;
            console.log(error.response.data.message);
            // console.log(error.response.data.message.err);
            formAlertDOM.style.display = 'block'
            
            formAlertDOM.textContent = error.response.data.message;
            
            
        }
    }

    setTimeout(() => {
        formAlertDOM.style.display = 'none',
        location.reload()
    }, 6000)

})