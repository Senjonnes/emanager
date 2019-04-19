/*Easypiechart Init*/

$(document).ready(function() {
	"use strict";
	if( $('#pie_chart_1').length > 0 ){
		$('#pie_chart_1').easyPieChart({
			barColor : '#1ebccd',
			lineWidth: 3,
			animate: 3000,
			size:	60,
			lineCap: 'square',
			scaleColor: '#f5f5f6',
			trackColor: '#f5f5f6',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
});