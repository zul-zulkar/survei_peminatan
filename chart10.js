document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container10', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Keahlian yang dapat digunakan'
        },
        xAxis: {
            categories: ['Pascal', 'C', 'C++', 'C#',
                'Phyton', 'Java', 'R', 'Javascript', 'SQL',
                'PHP', 'HTML/CSS', 'Ruby', 'Matlab', 'VbA',
                'Kotlin', 'Ga ada yang ahli'],
            title: {
                text: null
            },
            size: 100
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Frekuensi (orang)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' orang'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
                
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Tingkat 1',
            data: [57, 4, 6, 0, 8, 0, 5, 0, 1, 2, 9, 0, 0, 0, 0, 0]
        }, {
            name: 'Tingkat 2',
            data: [41, 36, 19, 1, 10, 43, 13, 39, 25, 35, 41, 1, 2, 1, 1, 1]
        }]
    });
});
