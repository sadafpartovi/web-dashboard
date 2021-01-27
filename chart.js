    
    const alertBanner = document.getElementById("alert");
   const trafficCanves = document.getElementById('traffic-chart');
    const dailyChart = document.getElementById('daily-chart');
    const mobileCanvas = document.getElementById('mobile-pie');
    const user = document.getElementById("userField");
    const message = document.getElementById("messageField");
    const send = document.getElementById("send");
    
   
   
   // Alert
   alertBanner.innerHTML = `
<div class="alert-banner">
    <p><strong>Alert:</strong> You Have <strong>6</strong> Overdue Tasks to Complete</p>
    <p class="alert-banner-close">X</p>
</div>`;

alertBanner.addEventListener("click", e =>{
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none";

    }

});


// traffic Data






let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };
    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false
        }
        };
        let trafficChart = new Chart(trafficCanves, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
            });





            // Daily Traffic Chart



var myChart = new Chart(dailyChart, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [230, 120, 140, 180, 140, 210, 105],
            backgroundColor: 'rgba(147, 112, 219, 1)',
            borderWidth: 1,
           
           
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    
                }
            }]
        },
        legend: {
            display: false
        } 

    }
});

// Pie Chart

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

    const mobileOptions = {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        
        
        fontStyle: 'bold'
        }
        }
        }
        let mobileChart = new Chart(mobileCanvas, {
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
            
            });


            // user msg

            send.addEventListener("click", () => {
                if  (user.value === "" && message.value === "") {
                    window.alert("Please fill out user and message fields before sending");
                } else if (user.value === "") {
                    window.alert("Please fill out user field before sending"); 
                } else if (message.value === "") {
                    window.alert("Please fill out message field before sending");
                } else {
                    window.alert(`Message successfully sent to: ${user.value}`);
                    user.value = "";
                    message.value = "";
                }

            });

            /* INITIALIZING PAGE */

//     function init() {
// 	    search.value = '';
// 	    user.value = '';
// 	    message.value = '';
// 	    trafficFunction(hourly);

// }


// init();