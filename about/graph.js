var ctx = document.getElementById("chart");
    var data = {
	            labels: "C, C++, Assembly Language, Python, Java".split(", "),
	            datasets: [{
			                label: "Ability",
			                data: parse("15, 20, 10, 30, 25"),
			                backgroundColor: parseColor("1, 3, 10, 9, 6")
			            }]
	        };
    var __my_ch4rt__ = new Chart(ctx, {
	            type: 'bar',
	            data: data,
	            options: {
			                responsive: true,
			                legend: {display: true},
			                animation: {
						                animateScale: true, animateRotate: true
						            },
					
			            }
	        });
    function parse(x) {
	            return x.split(", ").map(function(e) {
			                return parseInt(e);
			            });
	        }
    function parseColor(s) {
	            var colorMap = [
			                'rgb(36,74,225)','rgb(255,212,36)','rgb(93,225,36)','rgb(225,137,36)','rgb(225,36,36)','rgb(124,36,225)','rgb(36,181,225)','rgb(130,225,36)','rgb(212,225,36)','rgb(225,36,105)','rgb(134,132,128)'
			            ];
	            return s.split(", ").map(function(e) {
			                return colorMap[parseInt(e)];
			            });
	        }
