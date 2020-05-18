document.addEventListener('DOMContentLoaded', function () {
    var colors = Highcharts.getOptions().colors,
        categories = [
            'Laki-laki',
            'Perempuan'
        ],
        data = [
            {
                y: 64,
                color: colors[4],
                drilldown: {
                    name: 'Laki-laki',
                    categories: [
                        'Tingkat 1',
                        'Tingkat 2'
                    ],
                    data: [
                        30,
                        34
                    ]
                }
            },
            {
                y: 37,
                color: colors[5],
                drilldown: {
                    name: 'Perempuan',
                    categories: [
                        'Tingkat 1',
                        'Tingkat 2'
                    ],
                    data: [
                        27,
                        10
                    ]
                }
            }
        ],
        JKData = [],
        tingkatanData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        JKData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            tingkatanData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    Highcharts.chart('container1', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Berdasarkan jenis kelamin -> tingkat'
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: ' orang'
        },
        series: [{
            name: 'Frekuensi Jenis kelamin',
            data: JKData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.point.name;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'Frekuensi tingkatan belajar',
            data: tingkatanData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    var persentase = this.y * 100 / 101;
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                        persentase.toFixed(2) + ' %' : null;
                }
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{
                    }, {
                        dataLabels: {
                            enabled: false
                        }
                    }]
                }
            }]
        }
    });
});