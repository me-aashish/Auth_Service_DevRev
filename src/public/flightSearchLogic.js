departCity = document.getElementById('to');
arrivalCity = document.getElementById('from');
leaveDate = document.getElementById('date');
searchBtn = document.getElementById('searchBtn');
const formDOM = document.getElementById('frm');
const formAlertDOM = document.querySelector('.form-alert');
var mainContainer = document.getElementById("myData");
var formData = document.querySelector('.form');
mainContainer.style.display = 'none';

searchBtn.addEventListener('click', async(e) => {
  e.preventDefault();

  // formData.style.display = 'none';
  // mainContainer.style.display = 'block';

  let ipDate = new Date(leaveDate.value);
  // console.log(leaveDate.value);
  const today = new Date();
  // console.log(today,ipDate);
  // console.log(departCity.value);
  // console.log(leaveDate.value);
  if(departCity.value === "" || arrivalCity.value === "" || leaveDate.value === ""){
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = "Please enter all the values below";
    // setTimeout(() => {
    //   formAlertDOM.style.display = 'none',
    //   location.reload()
    // }, 6000)
  }
 
  else{
    if(today > ipDate){
      console.log("hello");
      formAlertDOM.style.display = 'block';
      formAlertDOM.textContent = "Please enter current day or upcoming days";
      // setTimeout(() => {
      //   formAlertDOM.style.display = 'none',
      //   location.reload()
      // }, 6000)
    }
    else{
      
      try {
        
        const { data } = await axios.get('http://localhost:3000/api/v1/flights',{
          params: {
            arrivalCity: arrivalCity.value,
            departureCity: departCity.value,
            departureDate: leaveDate.value
          }
        })
        // console.log(data);
        // console.log(data.data);
        // for(let d in data.data[0]){
        //   console.log(d);
        //   console.log(data.data[0][d]);
        // }

        
        formData.style.display = 'none';
        
        for(let d in data.data[0]){
          var div = document.createElement("div");
          div.innerText = d + " : " + data.data[0][d];
          mainContainer.appendChild(div);
          // console.log(d);
          // console.log(data.data[0][d]);
        }
        
        mainContainer.style.display = 'block'

      } catch (error) {
        console.log(error.response.data);
        formAlertDOM.style.display = 'block'
            
        formAlertDOM.textContent = error.response.data.message;
        // setTimeout(() => {
        //   formAlertDOM.style.display = 'none',
        //   location.reload()
        // }, 6000)
      }
      
    }
  }
  // // setTimeout(() => {
  // //   formAlertDOM.style.display = 'none',
  // //   location.reload()
  // // }, 6000)
})