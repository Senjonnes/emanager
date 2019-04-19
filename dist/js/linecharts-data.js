/*Dashboard Init*/
 
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	if($('#m_chart_2').length > 0)
		Morris.Line({
        element: 'm_chart_2',
        data: [{
            day: '1',
            project: 200,
        }, {
            day: '2',
            project: 180,
        }, {
            day: '3',
            project: 170,
        }, {
            day: '4',
            project: 180,
        }, {
            day: '5',
            project: 190,
        }, {
            day: '6',
            project: 170,
        },	{
            day: '7',
            project: 160,
        }, {
            day: '8',
            project: 150,
        }, {
            day: '9',
            project: 100,
        }, {
            day: '10',
            project: 120,
        }, {
            day: '11',
            project: 100,
        }, {
            day: '12',
            project: 200,
        },	{
            day: '13',
            project: 80,
        }, {
            day: '14',
            project: 70,
        }, {
            day: '15',
            project: 70,
        }, {
            day: '16',
            project: 70,
        }, {
            day: '17',
            project: 60,
        }, {
            day: '18',
            project: 40,
        }, {
            day: '19',
            project: 60,
        }, {
            day: '20',
            project: 50,
        }, {
            day: '21',
            project: 70,
        }, {
            day: '22',
            project: 60,
        }, {
            day: '23',
            project: 30,
        }, {
            day: '24',
            project: 35,
        }, {
            day: '25',
            project: 40,
        }, {
            day: '26',
            project: 50,
        }, {
            day: '27',
            project: 60,
        }, {
            day: '28',
            project: 30,
        }, {
            day: '29',
            project: 50,
        }, {
            day: '30',
            project: 30,
        }],
        xkey: 'day',
        ykeys: ['project'],
        labels: ['project'],
        pointSize: 3,
        fillOpacity: 0,
		lineWidth:2,
		pointFillColors:['#fff'],
		pointStrokeColors:['#5d1864'],
		behaveLikeLine: true,
		hideHover: 'auto',
		gridLineColor: '#eaecec',
		lineColors: ['#5d1864'],
		resize: true,
		smooth:false,
		gridTextColor:'#5e7d8a',
		gridTextFamily:"Inherit"
        
    });
	if( $('#m_chart_4').length > 0 ){
		// Line Chart
		var data=[{ y: '100', a: 10, b: 20, c: 40},
				  { y: '200', a: 30, b: 50, c: 70},
				  { y: '300', a: 20, b: 40, c: 50},
				  { y: '400', a: 50, b: 70, c: 90},
				  { y: '500', a: 10, b: 40, c: 100},
				  
				];
		var lineChart = Morris.Line({
				element: 'm_chart_4',
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b', 'c'],
				labels: ['Total Income', 'Total Outcome', 'Total Expences'],
				gridLineColor: '#eaecec',
				resize: true,
				gridTextColor:'#5e7d8a',
				gridTextFamily:"Inherit",
				hideHover: 'auto',
				behaveLikeLine: true,
				smooth:false,
				pointSize:3,
				lineWidth:2,
				pointFillColors:['#fff','#fff','#fff'],
				pointStrokeColors: ['#5d1864','#bca9a4','#a58b84'],
				lineColors: ['#5d1864','#bca9a4','#a58b84'],
			});	
	}
});
