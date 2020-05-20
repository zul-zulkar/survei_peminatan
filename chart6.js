function loadChart6(){
    Highcharts.chart('container6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Persentase<br>berdasarkan<br>yang diberikan',
            align: 'center',
            verticalAlign: 'middle',
            y: 70
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'pilihan peminatan',
            innerSize: '50%',
            data: [
                ['Sains Data', 36],
                ['Netral', 33],
                ['Sistem Informasi Statistik', 32]
            ]
        }]
    });
}
document.addEventListener('DOMContentLoaded', function () {
    loadChart6();
});