const fn = document.getElementById('flightNumber');
const dc = document.getElementById('dprtCity');
const ac = document.getElementById('arvlCity');
const pr = document.getElementById('price');
const addBtn = document.getElementById('addBtn');
const formAlertDOM = document.querySelector('.form-alert');

addBtn.addEventListener('click', async(e) => {
    formAlertDOM.classList.remove('text-success')
    e.preventDefault();
    
    let flightNumber = fn.value;
    let dprtCity = dc.value;
    let arvlCity = ac.value;
    let price = pr.value;

    if(flightNumber === "" || dprtCity == "" || arvlCity === "" || price === "" ){
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = "Please enter all the values";
        // setTimeout(() => {
        //     formAlertDOM.style.display = 'none',
        //     location.reload()
        // }, 4000)
    }

    else{
        try {
            const { data } = await axios.post('http://localhost:3000/api/v1/flights',{
                
                flightNumber : flightNumber,
                departureCity : dprtCity,
                arrivalCity : arvlCity,
                departureTime : '2023-07-01 22:07:13.014123',
                arrivalTime : '2023-07-01 23:09:13.014123',
                price : price
               
            })
            console.log(data);
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
            console.log(error.response);
            // console.log(error.response.data.message.err);
            // formAlertDOM.style.display = 'block'
            
            // formAlertDOM.textContent = "Incorrect email or password for admin";
            
            
        }
    }

    setTimeout(() => {
        formAlertDOM.style.display = 'none',
        location.reload()
    }, 6000)

})