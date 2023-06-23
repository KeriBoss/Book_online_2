
var options = {
    series: [{
        name: "Tổng doanh thu",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    }
    ],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    title: {
        text: 'Biểu đồ thể hiện doanh thu của bạn trong năm này',
        align: 'left'
    },
    legend: {
        tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['Tháng 01', 'Tháng 02', 'Tháng 03', 'Tháng 04', 'Tháng 05', 'Tháng 06', 'Tháng 07', 'Tháng 08', 'Tháng 09',
            'Tháng 10', 'Tháng 11', 'Tháng 12'
        ],
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val) {
                        return val + " (VNĐ)"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val + " per session"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();