departCity = document.getElementById('to');
arrivalCity = document.getElementById('from');
leaveDate = document.getElementById('date');
searchBtn = document.getElementById('searchBtn');
const formDOM = document.getElementById('frm');
const formAlertDOM = document.querySelector('.form-alert');
var mainContainer = document.getElementById("myData");
var formData = document.querySelector('.form');
mainContainer.style.display = 'none';

// const UserService = require('../services/userService');
// const userServiceObj = new UserService();

searchBtn.addEventListener('click', async(e) => {
  e.preventDefault();


  let ipDate = new Date(leaveDate.value);

  const today = new Date();
  
  if(departCity.value === "" || arrivalCity.value === "" || leaveDate.value === ""){
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = "Please enter all the values below";

  }
 
  else{
    // if(today > ipDate){
    //   console.log("hello");
    //   formAlertDOM.style.display = 'block';
    //   formAlertDOM.textContent = "Please enter current day or upcoming days";

    // }
    // else{
      
      try {
        
        const { data } = await axios.get('http://localhost:3000/api/v1/flights',{
          params: {
            arrivalCity: arrivalCity.value,
            departureCity: departCity.value,
            departureDate: leaveDate.value
          }
        })
        
        console.log(data);
        
        formData.style.display = 'none';
        
        
        for(let i in data.data){
          var passegerIP = document.createElement("div");
          passegerIP.innerHTML = '<input type="number" placeholder="Number Of Passengers" id="numPassId">'
          passegerIP.classList.add('numPass');
          mainContainer.appendChild(passegerIP);

          var buttonEl = document.createElement("button");
          buttonEl.classList.add('book-btn');
          // buttonEl.href = url;
          // var buttonTextEl = document.createElement("span");
          buttonEl.innerText = "Book";
          // buttonEl.appendChild(buttonTextEl);
          mainContainer.appendChild(buttonEl);
          for(let d in data.data[i]){
            var div = document.createElement("div");
            div.innerText = d + " : " + data.data[i][d];
            mainContainer.appendChild(div);
          }
          
          
          div.innerHTML = '<hr></hr>'
        }
        mainContainer.style.display = 'block'
        bookBtn = document.querySelector('.book-btn');
        bookBtn.addEventListener('click', async(e) => {
          e.preventDefault();
          if (e.target.classList.contains('book-btn')) {
              console.log(bookBtn.nextSibling);
              let flightIdText = bookBtn.nextSibling.innerText;
              let flightId = Number(flightIdText.split(':')[1]);
              // console.log(bookBtn.nextSibling.nextSibling);
              let departureCityText = bookBtn.nextSibling.nextSibling.nextSibling.innerText;
              let depatureCity = departureCityText.split(':')[1].trim();
              console.log(depatureCity);

              let arrivalCityText = bookBtn.nextSibling.nextSibling.nextSibling.nextSibling.innerText
              let arrivalCity = arrivalCityText.split(':')[1].trim();

              let numPassDom = document.querySelector('#numPassId');
              console.log(numPassDom.value);
              let noOfSeats = Number(numPassDom.value);

              if(noOfSeats === 0){
                alert('Please add number of seats you want to book');
              }
              else{
                    try {
                      console.log();
                    const { data } = await axios.post('http://localhost:3000/api/v1/bookings',{
                      arrivalCity : arrivalCity,
                      departureCity : depatureCity,
                      noOfSeats : noOfSeats,
                      flightId : flightId
                    },{
                      headers:{
                        'x-access-token' : localStorage.getItem('x-access-token')
                      }
                    })
                    // console.log(data);
                    if(data.success){
                      alert('Successfully booked the flight');
                    }
                } catch (error) {
                  alert(error.response.message);
                  console.log(error.response);
                }
              }
            // try {
            //   const { data } = await axios.post('http://localhost:3000/api/v1/bookings',{

            //   })
            // } catch (error) {
              
            // }
          }
        })
        
        

      } catch (error) {
        console.log(error.response.data);
        formAlertDOM.style.display = 'block'
            
        formAlertDOM.textContent = error.response.data.message;
        
      }
      
    // }
  }
  // // setTimeout(() => {
  // //   formAlertDOM.style.display = 'none',
  // //   location.reload()
  // // }, 6000)
})