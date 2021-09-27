window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 11,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 67, label: "Vitamin D" },
                { y: 28, label: "Vitamin C" },
                { y: 15, label: "Vitamin A"},
            ]
        }]
    });
    chart.render();
    
    }