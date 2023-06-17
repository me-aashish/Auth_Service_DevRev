const list = document.getElementById('list');
const bookingBtn = document.getElementById('bookingsBtn');
const mainDiv = document.getElementById('mainDiv');
mainDiv.style.display = 'none';

bookingBtn.addEventListener('click', async(e) => {
    e.preventDefault();
    list.style.display = 'none';

    try {
        const { data } = await axios.get('http://localhost:3000/api/v1/bookingId',{
            headers:{
                'x-access-token' : localStorage.getItem('x-access-token')
            }
        });
        id = data.data;

        const data2 = await axios.get(`http://localhost:3000/api/v1/bookings/${id}`);
        let bookingsArr = data2.data.data;
        // console.log(bookingsArr);
        // mainDiv.style.display = 'block';
        
        for(let i=0; i<bookingsArr.length; i++){
            // var div = document.createElement("div");
            // div.innerText = data2.data.data[0].id;
            // mainDiv.appendChild(div);
            // console.log(bookingsArr[i]);
            for(let d in bookingsArr[i]){
                var div = document.createElement("div");
                div.innerText = d + " : " + bookingsArr[i][d] + " , ";
                div.style.display = 'inline-block';
                mainDiv.appendChild(div);
            }

            var undrLine = document.createElement("div");
            undrLine.innerHTML = '<hr></hr>'
            mainDiv.appendChild(undrLine);
        }
        mainDiv.style.display = 'block';

    } catch (error) {
        console.log(error.response);
    }
})