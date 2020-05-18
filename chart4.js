document.addEventListener('DOMContentLoaded', function () {
    var colors = Highcharts.getOptions().colors,
        categories = [
            'Sains Data',
            'Sistem Informasi Statistik'
        ],
        data = [
            {
                y: 39,
                color: colors[8],
                drilldown: {
                    name: 'Sains Data',
                    categories: [
                        'Laki-laki',
                        'Perempuan'
                    ],
                    data: [
                        20,
                        19
                    ]
                }
            },
            {
                y: 18,
                color: colors[2],
                drilldown: {
                    name: 'Sistem Informasi Statistik',
                    categories: [
                        'Laki-laki',
                        'Perempuan'
                    ],
                    data: [
                        10,
                        8
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
    Highcharts.chart('container4', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Tingkat 1'
        },
        subtitle: {
            text: 'Berdasarkan peminatan -> jenis kelamin'
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