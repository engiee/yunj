var zmrChart = echarts.init(document.getElementById('line'));
var caseChart = echarts.init(document.getElementById('zxcase'));
var sumChart = echarts.init(document.getElementById('sum'));
var data=[10, 52, 200, 334, 390, 330, 220 , 100 ,120 , 240 , 260];
var dataShadow = [];
var yMax = 400;
for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
zmroption = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{a0}:{c0}<br/>{a1}:{c1}",
        backgroundColor:'rgba(26,41,104,0.8)'
    },
    legend: {
        right: 20,
        data:['执行到位金额','申请标的金额'],
        textStyle: {
            color: '#fff'
        },
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '3%',
        top: '7%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['2017.05','2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04'],
            axisTick: {
                alignWithLabel: true,
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00dfff',
                    fontFamily:'DIN Alternate'
                }
            },
            axisLine :{
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00dfff',
                    fontFamily:'DIN Alternate'
                }
            },
            axisLine :{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show: true,
                lineStyle:{
                    color:'rgba(255,255,255,0.15)'
                }
            }
        }
    ],
    series : [
       /* { // For shadow
            name:'',
            type: 'bar',
            barWidth: '60%',
            itemStyle: {
                normal: {color: 'rgba(7,33,106,0.61)'}
            },
            barGap:'-100%',
            data:dataShadow,
            animation: false
        },
        {
            name:'执行到位金额',
            type:'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: function(params) {
                        //首先定义一个数组
                        var colorList = ['#ff5252','#ff4081','#7c4dff','#536dfe','#00b0ff','#00e5ff','#1de9b6','#aeea00','#ffc400','#ff9100'];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data:data
        },
        {
            name:'申请标的金额',
            type:'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {

                }
            },
            data:data
        }*/
        {
            name:'执行到位金额',
            type:'bar',
            data:[300,320, 332, 301, 334, 390, 330, 320,123,120,110,140],
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#05edff'},
                            {offset: 1, color: '#0079db'}

                        ]
                    )
                }
            }
        },
        {
            name:'申请标的金额',
            type:'bar',
            stack: '广告',
            data:[200,220, 182, 191, 234, 290, 330, 310,130,90,100,150],
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#f89954'},
                            {offset: 1, color: '#f85a40'}
                        ]
                    )
                }
            }
        }
    ]
};
//执行案件收结案
caseoption = {
    color: ['#00e5ff','#ff5252'],
    tooltip: {
        trigger: 'axis',
        formatter: "{a0}:{c0}<br/>{a1}:{c1}",
        backgroundColor:'rgba(26,41,104,0.8)'
    },
    legend: {
        //data:['收案','结案'],
        data:[{
            name:'收案',
            textStyle:{
                color:'#00dfff'
            }
        },{
            name:'结案',
            textStyle:{
                color:'#ff3e28'
            }
        }
        ],
        right:'5%',
        top:'0px',
        textStyle:{
            color:'auto'
        }
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00dfff',
                fontFamily:'DIN Alternate'
            }
        },
        axisLine :{
            show:false
        },
        splitLine:{
            show: true,
            lineStyle:{
                color:'rgba(255,255,255,0.15)'
            }
        },
        axisTick:{
            show:false
        },
        data : ['2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00dfff',
                fontFamily:'DIN Alternate'
            }
        },
        axisLine :{
            show:false
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show: true,
            lineStyle:{
                color:'rgba(255,255,255,0.15)'
            }
        }
    },
    series: [
        {
            name:'收案',
            type:'line',
            stack: '总量',
            smooth:true,
            data:[120, 132, 101, 134, 90, 130, 210,120,100,130,150,120]
        },
        {
            name:'结案',
            type:'line',
            smooth:true,
            stack: '总量',
            data:[220, 182, 191, 234, 290, 300, 310,130,80,170,100,80]
        }
    ]
};
//执行申请标的金额地区
sumoption = {
    tooltip : {
        trigger: 'axis',
        formatter: '{c}',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
            backgroundColor:'rgba(26,41,104,0.8)'
        }
    },
    grid: {
        top:'10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['高院', '福州', '厦门', '莆田', '泉州', '漳州', '龙岩', '三明', '南平', '宁德', '平潭'],
            axisTick: {
                alignWithLabel: true,
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00dfff',
                    fontFamily:'DIN Alternate'
                }
            },
            axisLine :{
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00dfff',
                    fontFamily:'DIN Alternate'
                }
            },
            axisLine :{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show: true,
                lineStyle:{
                    color:'rgba(255,255,255,0.15)'
                }
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            itemStyle: {
                normal: {
                    //barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#f85a40'},
                            {offset: 1, color: '#f89954'}

                        ]
                    )
                }
            },
            data:[10, 52, 200, 334, 390, 330, 220 , 100 ,120 , 240 , 260]
        }
    ]
};

zmrChart.setOption(zmroption);
caseChart.setOption(caseoption);
sumChart.setOption(sumoption);
var zxckTimer = null;
window.onresize = function () {
    //重置容器高宽
    zxckTimer = setTimeout(function () {
        zmrChart.resize();
        caseChart.resize();
        sumChart.resize()
    },100);
    zxckTimer = null;
};