
/*---- donut brandtsof ----- */

var ctx = document.getElementById('donutEersteChart').getContext('2d');
var donutEersteChart = new Chart(ctx, {
	 type: 'doughnut',
	 data: {
	 	labels: ["verbruikte brandstof", "Aanwezige brandstof"],
	 	datasets: [{
	 			label: " ",
	 			backgroundColor: ["#021581", "#FFFFFF"],
	 			borderWidth: 0,
	 			borderColor: 'rgb(0,0,0)',   
	 			data: [20,70]
	 		}]
	 }, 
	
	/*   ------ zodra ik dit toevoeg, verdwijnen mijn grafieken, dus even zo gedaan ---- 

	options: {
	 	title: {
	 		display: true,
	 		text: 'Brandstof',
	 		fontSize: 25,
	 		fontFamily: 'Myriad Pro, sans-serif',
	 		padding: 20,
	 		fontColor: '#FFF'
	 	}
	} */
});


/*---- Line grafiek afstand ----- */

var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Juni", "Juli", "Augustus", "September", "Oktober", "November"],
        datasets: [{
            label: " afstand per tijd",
            borderColor: '#FFF',
            borderWidth: 1,
            data: [0, 20, 25, 35, 40, 50],
            pointBackgroundColor: "#021581",
            pointRadius: 5

        }]
    },

   /* options: {
    	title: {
    		display: true,
	 		text: 'Afgelegde afstand',
	 		fontSize: 25,
	 		fontFamily: 'Myriad Pro, sans-serif',
	 		padding: 20,
	 		fontColor: '#FFF'
    	}

    } */
});

/*---- Bar grafiek voedsel ----- */

var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
   type: 'bar',
    data: {
        labels: ['Juni', 'Juli', 'August', 'September', 'Oktober', 'November'],
        datasets: [{
            label: 'Voedsel voorraad per maand',
            data: [10, 7.5, 7, 6.5, 5, 4.5],    
            backgroundColor: '#FFF',
            borderColor: '#FFF',
            borderWidth: 1
        }]
    }, 

   /* options: {
        title: {
    		display: true,
	 		text: 'Voedsel vooraad',
	 		fontSize: 25,
	 		fontFamily: 'Myriad Pro, sans-serif',
	 		padding: 20,
	 		fontColor: '#FFF'
    	}
    }*/
});






	

