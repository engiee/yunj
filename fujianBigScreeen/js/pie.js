/**
 * Created by wangzhen on 2018-03-20 13:56:00.
 */
var casePie = echarts.init(document.getElementById('casePie'));
var scale = 1;
var windowWidthPie = window.innerWidth;
if(windowWidthPie<1400){
    scale = 0.8;
}
var rich = {
    blue: {
        color: "#00f1ff",
        fontSize: 18 * scale,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 18 * scale
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
casePieOption  = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    legend: {
        show : false,
        orient: 'vertical',
        x: 'left',
        data:[]
    },
    series: [
        {
            name: '案件类型',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['78%', '79%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#00ccfe',
                        borderWidth: 1
                    }
                }
            }]
        },
        {
            name: '案件类型',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['64%', '65%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                label: {
                    normal: {
                        formatter: '案件类型',
                        textStyle: {
                            color: '#00ccfe',
                            fontSize: 16
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#00ccfe',
                        borderType: 'dashed',
                        borderWidth: 1
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    textStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            }]
        },
        {
            name:'案件类型',
            type:'pie',
            radius: ['70%', '75%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    formatter : function (params) {
                        return '{white|' + params.value + '}{blue|件}\n{blue|' + params.name + '}'
                    },
                    rich:rich
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#00ccfe',
                        borderWidth: 10
                    }
                }
            },
            data:[
                {value:4, name:'刑事'},
                {value:2, name:'行政'},
                {value:3, name:'其他'},
                {value:4, name:'赔偿'},
                {value:2, name:'民事'},
                {value:3, name:'执行'}
            ]
        }
    ],
    color : ['#ffb44f','#00a3fe','#00ffc7','#ff3e3f','#116dda','#ff0e2e']
};
casePie.setOption(casePieOption);
var indexTimer = null;
window.onresize = function () {
    //重置容器高宽
    indexTimer = setTimeout(function () {
        indexMapSize();
        chart.resize();
        casePie.resize();
    },100);
    indexTimer = null;
};