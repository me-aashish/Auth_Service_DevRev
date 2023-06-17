const showbookingBtn = document.getElementById('showbookingBtn');
const list = document.getElementById('list');
const logOutBtn = document.getElementById('logOutBtn');
const mainDiv = document.getElementById('mainDiv');
mainDiv.style.display = 'none';

showbookingBtn.addEventListener('click', async(e) => {
    e.preventDefault();
    list.style.display = 'none';

    try {
        const data = await axios.get('http://localhost:3000/api/v1/bookings');
        // console.log(data);
        let bookingsArr = data.data.data;
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
        
    }
})

logOutBtn.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem('x-access-token');
    window.location.replace('./index.html')
})