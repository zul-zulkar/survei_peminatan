function lightTheme(){
    Highcharts.theme = {
        colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
            '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            backgroundColor: null,
            style: {
                fontFamily: 'Dosis, sans-serif'
            }
        },
        title: {
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'rgb(43,43,43)'
            }
        },
        subtitle: {
            style: {
                color: 'rgb(43,43,43)',
                textTransform: 'uppercase'
            }
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'rgba(219,219,216,0.8)',
            shadow: false,
            style : {
                color : 'rgb(43,43,43)'
            }
        },
        legend: {
            backgroundColor: '#F0F0EA',
            itemStyle: {
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'rgb(43,43,43)'
            }
        },
        xAxis: {
            gridLineWidth: 1,
            labels: {
                style: {
                    fontSize: '20px',
                    color: 'rgb(43,43,43)'
                }
            }
        },
        yAxis: {
            minorTickInterval: 'auto',
            title: {
                style: {
                    textTransform: 'uppercase',
                    color: 'grey'
                }
            },
            labels: {
                style: {
                    fontSize: '20px',
                    color: 'rgb(43,43,43)'
                }
            }
        },
        plotOptions: {
            candlestick: {
                lineColor: 'rgb(43,43,43)'
            },
            series: {
                dataLabels: {
                    color: 'rgb(43,43,43)',
                    style: {
                        fontSize: '15px'
                    }
                },
                marker: {
                    lineColor: 'rgb(43,43,43)'
                }
            }
        }
    };
    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
}
function loadChart1(){
    var colors = Highcharts.getOptions().colors,
        categories = [
            'Laki-laki',
            'Perempuan'
        ],
        data = [
            {
                y: 64,
                color: colors[3],
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
            text: 'Berdasarkan jenis kelamin -> tingkat',
            color: '#ffffff'
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
}
function darkTheme(){
    Highcharts.theme = {
        colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
            '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            style: {
                fontFamily: '\'Unica One\', sans-serif'
            },
            plotBorderColor: '#606063'
        },
        title: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '20px'
            }
        },
        subtitle: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase'
            }
        },
        xAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            title: {
                style: {
                    color: '#A0A0A3'
                }
            }
        },
        yAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            tickWidth: 1,
            title: {
                style: {
                    color: '#A0A0A3'
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            style: {
                color: '#F0F0F0'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    color: '#F0F0F3',
                    style: {
                        fontSize: '13px'
                    }
                },
                marker: {
                    lineColor: '#333'
                }
            },
            boxplot: {
                fillColor: '#505053'
            },
            candlestick: {
                lineColor: 'white'
            },
            errorbar: {
                color: 'white'
            }
        },
        legend: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            itemStyle: {
                color: '#E0E0E3'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#606063'
            },
            title: {
                style: {
                    color: '#C0C0C0'
                }
            }
        },
        credits: {
            style: {
                color: '#666'
            }
        },
        labels: {
            style: {
                color: '#707073'
            }
        },
        drilldown: {
            activeAxisLabelStyle: {
                color: '#F0F0F3'
            },
            activeDataLabelStyle: {
                color: '#F0F0F3'
            }
        },
        navigation: {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                theme: {
                    fill: '#505053'
                }
            }
        },
        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: '#505053',
                stroke: '#000000',
                style: {
                    color: '#CCC'
                },
                states: {
                    hover: {
                        fill: '#707073',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    },
                    select: {
                        fill: '#000003',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            inputBoxBorderColor: '#505053',
            inputStyle: {
                backgroundColor: '#333',
                color: 'silver'
            },
            labelStyle: {
                color: 'silver'
            }
        },
        navigator: {
            handles: {
                backgroundColor: '#666',
                borderColor: '#AAA'
            },
            outlineColor: '#CCC',
            maskFill: 'rgba(255,255,255,0.1)',
            series: {
                color: '#7798BF',
                lineColor: '#A6C7ED'
            },
            xAxis: {
                gridLineColor: '#505053'
            }
        },
        scrollbar: {
            barBackgroundColor: '#808083',
            barBorderColor: '#808083',
            buttonArrowColor: '#CCC',
            buttonBackgroundColor: '#606063',
            buttonBorderColor: '#606063',
            rifleColor: '#FFF',
            trackBackgroundColor: '#404043',
            trackBorderColor: '#404043'
        }
    };
    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
}

document.addEventListener('DOMContentLoaded', function () {
    lightTheme();
    loadChart1();
});

function changeBodyBg(){
    var tombol = document.getElementById('tombol');
    var titel = document.getElementById('title');
    var tema = document.getElementById('tema');
    var head = document.getElementById('head');
    var head1 = document.getElementById('head1');
    var head2 = document.getElementById('head2');
    var head3 = document.getElementById('head3');
    var head4 = document.getElementById('head4');
    var head5 = document.getElementById('head5');
    var head6 = document.getElementById('head6');
    var kaki = document.getElementById('kaki');
    var kontak = document.getElementById('kontak');
    if(tombol.value == 'dark'){
        document.body.style.background = "linear-gradient(to right, gray, rgb(43, 43, 43), rgb(43, 43, 43), rgb(43, 43, 43), rgb(43, 43, 43), rgb(43, 43, 43), gray)";
        darkTheme();
        loadChart1();
        loadChart2();
        loadChart3();
        loadChart4();
        loadChart5();
        loadChart6();
        loadChart7();
        loadChart8();
        loadChart10();
        document.body.style.color = 'lightgray';
        titel.style.color = 'lightgray';
        tema.style.color = 'lightgray';
        tombol.style.background = 'rgb(43,43,43)';
        tombol.style.color = 'lightgray';
        head.style.color = 'lightgray';
        head1.style.color = 'lightgray';
        head2.style.color = 'lightgray';
        head3.style.color = 'lightgray';
        head4.style.color = 'lightgray';
        head5.style.color = 'lightgray';
        head6.style.color = 'lightgray';
        kaki.style.color = 'lightgray';
        kontak.style.color = 'lightblue';
    }
    else {
        document.body.style.background = "linear-gradient(to right, lightgray, white, white, white, lightgray)";
        lightTheme();
        loadChart1();
        loadChart2();
        loadChart3();
        loadChart4();
        loadChart5();
        loadChart6();
        loadChart7();
        loadChart8();
        loadChart10();
        document.body.style.color = 'rgb(43, 43, 43)';
        titel.style.color = 'rgb(43, 43, 43)';
        tema.style.color = 'rgb(43, 43, 43)';
        tombol.style.background = 'white';
        tombol.style.color = 'rgb(43, 43, 43)';
        head.style.color = 'rgb(43, 43, 43)';
        head1.style.color = 'rgb(43, 43, 43)';
        head2.style.color = 'rgb(43, 43, 43)';
        head3.style.color = 'rgb(43, 43, 43)';
        head4.style.color = 'rgb(43, 43, 43)';
        head5.style.color = 'rgb(43, 43, 43)';
        head6.style.color = 'rgb(43, 43, 43)';
        kaki.style.color = 'rgb(43, 43, 43)';
        kontak.style.color = 'blue';
    }
}