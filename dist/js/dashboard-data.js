/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	/*Toaster Alert*/
	$.toast({
		heading: '<strong><h1>Announcement!</h1></strong>',
		text: '<p>1. The company will be going on vacation very soon</p><br><p>2. There has been an increment of 20% on employees salary</p><button style="color: white;" class="btn btn-blue btn-sm mt-10">Dismiss</button>',
		position: 'top-right',
		loaderBg:'#f83f37',
		class: 'jq-toast-primary',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
});

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var option3 = {
			timeline: {
				data: ['91', '92', '93', '94', '95', '96', '97', '98', '99', '91'],
				axisType: 'category',
				show: false,
				autoPlay: true,
				playInterval: 1000,
			},
			options: [{
				tooltip: {
					show: true,
					trigger: 'axis',
					backgroundColor: '#fff',
					borderRadius:6,
					padding:6,
					axisPointer:{
						lineStyle:{
							width:0,
						}
					},
					textStyle: {
						color: '#324148',
						fontFamily: '"Roboto", sans-serif',
						fontSize: 12
					}	
				},
				calculable: true,
				grid: {
					top: '3%',
					left: '3%',
					right: '3%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					'type': 'category',
					axisLabel: {
						textStyle: {
							color: '#324148',
							fontFamily: '"Roboto", sans-serif',
							fontSize: 12
						}	
					},
					axisLine: {
						show:false
					},
					splitLine:{
						show:false
					},
					'data': [
						'x1', ' x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8'
					]
				}],
				yAxis: [{
					type: 'value',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					}
				}, {
					type: 'value',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					}
				}],
				series: [{
					'name': 'tq',
					'yAxisIndex': 1,
					'type': 'line',
					'data': [5, 6, 8, 28, 8, 24, 11, 16],
					symbolSize: 6,
					itemStyle: {
						normal: {
							color: '#044067'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#044067'
							}, {
								offset: 1,
								color: '#f6f3f2'
							}])
						}
					},
					label: {
						normal: {
							show: true,
							position: 'top',
							formatter: '{c}',
							color: '#5e7d8a',
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontFamily: "inherit",
							fontSize: 12
						}
					},
				}]
			}, {
				series: [{
					'data': [45, 43, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [110, 32, 111, 176, 73, 59, 181, 9]
				}]
			}, {
				series: [{
					'data': [94, 37, 64, 55, 56, 41, 70, 17]
				}]
			}, {
				series: [{
					'data': [5, 6, 5, 28, 8, 24, 11, 16]
				}]
			}, {
				series: [{
					'data': [45, 34, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [5, 6, 34, 28, 8, 24, 11, 16]
				}]
			}, {
				series: [{
					'data': [94, 37, 64, 55, 56, 41, 70, 17]
				}]
			}, {
				series: [{
					'data': [45, 40, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [5, 6, 10, 28, 8, 24, 11, 16]
				}]
			}, ]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
	}
	
	if( $('#e_chart_5').length > 0 ){
		var eChart_5 = echarts.init(document.getElementById('e_chart_5'));
		var option4 = {
			color: ['#0092ee', '#21a0f0','#52b5f3','#7fc8f6','#b2defa'],		
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif;',
					fontSize: 12
				}	
			},
			
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'value',
					data : ['Female','Male'],
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					}
				}
			],
			yAxis : [
				{
					
					type : 'category',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					}
				}
			],
			series : [
				{
					name:'1',
					type:'bar',
					barMaxWidth: 18,
					data:[320, 332],
					barGap:'70%',
				},
				{
					name:'2',
					type:'bar',
					barMaxWidth: 18,
					data:[120, 132],
					barGap:'70%',
				},
				{
					name:'3',
					type:'bar',
					barMaxWidth: 18,
					data:[220, 182],
					barGap:'70%',
				},
				{
					name:'4',
					type:'bar',
					barMaxWidth: 18,
					data:[150, 232],
					barGap:'70%',
				},
				{
					name:'5',
					type:'bar',
					barMaxWidth: 18,
					data:[170, 222],
					barGap:'70%',
				}
			]
		};

		eChart_5.setOption(option4);
		eChart_5.resize();
	}
	
	if( $('#e_chart_6').length > 0 ){
		var eChart_6 = echarts.init(document.getElementById('e_chart_6'));
		var option5 = {
			color: ['#4a6b78'],
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#a58b84',
					fontFamily: '"Roboto", sans-serif;',
					fontSize: 12
				}	
			},
			
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					}
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					}
				}
			],
		   
			series: [
				{
					data:[420, 332, 401, 334, 400, 330, 410],
					type: 'bar',
					barMaxWidth: 20,
				},
				{
					data: [120, 152, 251, 124, 250, 120, 110],
					type: 'line',
					symbolSize: 6,
					smooth: true,
					itemStyle: {
						color: '#428bca',
					},
					lineStyle: {
						color: '#428bca',
						width:2,
					}
				}
			]
		};
		eChart_6.setOption(option5);
		eChart_6.resize();
	}
	
}
/*****E-Charts function end*****/

var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#324148',
			fillColor: '#f6f3f2',
			spotColor:'#324148',
			spotRadius:'0',
			minSpotColor: '#324148',
			maxSpotColor: '#324148',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#324148'
		});
	}	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([2,7,7,5,8,5,4,4,3,4,6,1 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#324148',
			fillColor: '#f6f3f2',
			spotColor:'#324148',
			spotRadius:'0',
			minSpotColor: '#324148',
			maxSpotColor: '#324148',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#324148'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([9,3,3,2,8,6,4,3,3,2,6,1 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#324148',
			fillColor: '#f6f3f2',
			spotColor:'#324148',
			spotRadius:'0',
			minSpotColor: '#324148',
			maxSpotColor: '#324148',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#324148'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([5,3,3,2,1,6,2,3,5,2,2,1 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#324148',
			fillColor: '#f6f3f2',
			spotColor:'#324148',
			spotRadius:'0',
			minSpotColor: '#324148',
			maxSpotColor: '#324148',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#324148'
		});
	}
	if( $('#sparkline_5').length > 0 ){
		$("#sparkline_5").sparkline([1,2,4,2,3,4,5,6,6,7,5,5,6,7,8 ], {
			type: 'line',
			width: '100',
			height: '40',
			resize: true,
			lineWidth: '2',
			lineColor: '#6f1333',
			fillColor: '#f6f3f2',
			spotColor:'#6f1333',
			spotRadius:'0',
			minSpotColor: '#6f1333',
			maxSpotColor: '#6f1333',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#6f1333'
		});
	}
	if( $('#sparkline_6').length > 0 ){
		$("#sparkline_6").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
			type: 'bar',
			width: '100%',
			height: '40',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#f83f37',	
			highlightSpotColor: '#f83f37'
		});
	}
	if( $('#sparkline_7').length > 0 ){
		$('#sparkline_7').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
			type: 'line',
			width: '100%',
			height: '50',
			chartRangeMax: 50,
			resize: true,
			lineWidth: '1',
			lineColor: '#22af47',
			fillColor: '#f6f3f2',
			spotColor:'#22af47',
			spotRadius:'2',
			minSpotColor: '#22af47',
			maxSpotColor: '#22af47',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#22af47'
		});
		$('#sparkline_7').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
			type: 'line',
			width: '100%',
			height: '50',
			chartRangeMax: 40,
			lineWidth: '1',
			lineColor: '#22af47',
			fillColor: '#f6f3f2',
			spotColor:'#22af47',
			composite: true,
			spotRadius:'2',
			minSpotColor: '#22af47',
			maxSpotColor: '#22af47',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#22af47'
		});
	}
	if( $('#e_chart_8').length > 0 ){
		var e_chart_8 = echarts.init(document.getElementById('e_chart_8'));
		var option8 = {
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif',
					fontSize: 12
				}	
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				}
			},
			yAxis: {
				type: 'value',
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#eaecec',
					}
				}
			},
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [
				{
					data:[120, 132, 101, 134, 90, 230, 210],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#7a5449',
					},
					lineStyle: {
						color: '#7a5449',
						width:0,
					},
					areaStyle: {
						color: '#7a5449',
					},
				},
				{
					data: [220, 300, 191, 234, 290, 330, 310],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#bca9a4',
					},
					lineStyle: {
						color: '#bca9a4',
						width:0,
					},
					areaStyle: {
						color: '#bca9a4',
					},
				},
				{
					data: [150, 232, 201, 154, 190, 330, 410],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#f6f3f2',
					},
					lineStyle: {
						color: '#f6f3f2',
						width:0,
					},
					areaStyle: {
						color: '#f6f3f2',
					},
				}
			]
		};
		e_chart_8.setOption(option8);
		e_chart_8.resize();
	}
	if( $('#e_chart_10').length > 0 ){
		var e_chart_10 = echarts.init(document.getElementById('e_chart_10'));
		var option10 = {
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif',
					fontSize: 12
				}	
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				}
			},
			yAxis: {
				type: 'value',
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#eaecec',
					}
				}
			},
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [
				{
					data:[120, 132, 101, 134, 90, 230, 210],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#7a5449',
					},
					lineStyle: {
						color: '#7a5449',
						width:0,
					},
					areaStyle: {
						color: '#7a5449',
					},
				},
				{
					data: [220, 300, 191, 234, 290, 330, 310],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#bca9a4',
					},
					lineStyle: {
						color: '#bca9a4',
						width:0,
					},
					areaStyle: {
						color: '#bca9a4',
					},
				},
				{
					data: [150, 232, 201, 154, 190, 330, 410],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#f6f3f2',
					},
					lineStyle: {
						color: '#f6f3f2',
						width:0,
					},
					areaStyle: {
						color: '#f6f3f2',
					},
				}
			]
		};
		e_chart_10.setOption(option10);
		e_chart_10.resize();
	}
	if( $('#e_chart_11').length > 0 ){
		var e_chart_11 = echarts.init(document.getElementById('e_chart_11'));
		var option11 = {
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif',
					fontSize: 12
				}	
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				}
			},
			yAxis: {
				type: 'value',
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#eaecec',
					}
				}
			},
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [
				{
					data:[120, 132, 101, 134, 90, 230, 210],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#7a5449',
					},
					lineStyle: {
						color: '#7a5449',
						width:0,
					},
					areaStyle: {
						color: '#7a5449',
					},
				},
				{
					data: [220, 300, 191, 234, 290, 330, 310],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#bca9a4',
					},
					lineStyle: {
						color: '#bca9a4',
						width:0,
					},
					areaStyle: {
						color: '#bca9a4',
					},
				},
				{
					data: [150, 232, 201, 154, 190, 330, 410],
					type: 'line',
					stack: 'a',
					symbolSize: 0,
					itemStyle: {
						color: '#f6f3f2',
					},
					lineStyle: {
						color: '#f6f3f2',
						width:0,
					},
					areaStyle: {
						color: '#f6f3f2',
					},
				}
			]
		};
		e_chart_11.setOption(option11);
		e_chart_11.resize();
	}
	if( $('#e_chart_9').length > 0 ){
		var eChart_9 = echarts.init(document.getElementById('e_chart_9'));
		var option9 = {
			color: ['#00aced', '#3a55b1'],		
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif',
					fontSize: 12
				}
			},
			
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['2016','2017','2018','2019'],
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					}
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					}
				}
			],
			series : [
				{
					name:'1',
					type:'bar',
					barMaxWidth: 30,
					data:[250, 270, 320, 390],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 0, 0, 0] ,
						}
					},
				},
				{
					name:'2',
					type:'bar',
					barMaxWidth: 30,
					data:[310, 350, 410, 450],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 0, 0, 0] ,
						}
					},
				},
			]
		};

		eChart_9.setOption(option9);
		eChart_9.resize();
	}
	if( $('#e_chart_12').length > 0 ){
		var eChart_12 = echarts.init(document.getElementById('e_chart_12'));
		var option11 = {
			color: ['#0092ee'],
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: 'inherit',
					fontSize: 12
				}	
			},
			
			xAxis: [{
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				}
			}],
			yAxis: {
				type: 'value',
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#eaecec',
					}
				}
			},
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				data: [20, 100, 150, 90, 170, 210, 130],
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: [2, 2, 0, 0] ,
					}
				},
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
			}]
		};
		eChart_12.setOption(option11);
		eChart_12.resize();
	}
	if( $('#e_chart_13').length > 0 ){
		var eChart_13 = echarts.init(document.getElementById('e_chart_13'));
		
		var option13 = {
			tooltip: {
				show: true,
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif',
					fontSize: 12
				}	
			},
			series: [
				{
					name:'',
					type:'pie',
					radius: ['45%', '50%'],
					color: ['#3a55b1', '#ff6028', '#0092ee'],
					data:[
						{value:435, name:'Facebook'},
						{value:679, name:'Instagram'},
						{value:848, name:'Twitter'},
					],
					label: {
						normal: {
							formatter: '{b}\n{d}%'
						},
				  
					}
				}
			]
		};
		eChart_13.setOption(option13);
		eChart_13.resize();
	}
	if( $('#e_chart_14').length > 0 ){
		var e_Chart_14 = echarts.init(document.getElementById('e_chart_14'));
		
		var option14 = {
			tooltip: {
				show: true,
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif',
					fontSize: 12
				}	
			},
			series: [
				{
					name:'',
					type:'pie',
					radius : '55%',
					color: ['#f83f37', '#0092ee'],
					data:[
						{value:231, name:'Failed'},
						{value:820, name:'Succesful'},
					],
					label: {
						normal: {
							formatter: '{b}\n{d}%'
						},
				  
					}
				}
			]
		};
		e_Chart_14.setOption(option14);
		e_Chart_14.resize();
	}
}
sparklineLogin();

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/