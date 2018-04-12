
$('#map').ready(function(){
    getEcharts();
});
var fillSize;
var windowWidthPie = window.innerWidth;
if(windowWidthPie<1400){
    fillSize = 10;
}else if(windowWidthPie<1700){
    fillSize = 40;
}else{
    fillSize = 50;
}
function getEcharts(){
    // Step:3 conifg ECharts's path, link to echarts.js from current page.
    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
    require.config({
        paths: {
            echarts: './js'
        }
    });

    // Step:4 require echarts and use it in the callback.
    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
    require(
        [
            'echarts',
            'echarts/chart/map'
        ],
        function (ec) {
            // --- 地图 ---
            var myChart2 = ec.init(document.getElementById('map'));
            myChart2.setOption({
               dataRange: {
                   show:false,
                    min : 0,
                    max : 100,
                    //calculable : true,
                    splitNumber:2,
                    y:'bottom',
                    x:'right',
                    padding:20,
                    orient:'horizontal',
                    color: ['#ff3333', 'orange'],
                    text:null,
                    zlevel:-1,
                    /*text: ['严重违规','一般违规'],*/
                    textStyle:{
                        color:'#fff'
                    }
                },
                series : [
                    {
                        name: '福建省',
                        type: 'map',
                        roam: false,
                        hoverable: false,
                        mapType: '福建',
                        zlevel:1,
                        itemStyle:{
                            normal:{
                                borderColor:'#3f72e5',
                                borderWidth:0.5,
                                areaStyle:{
                                    color: '#1d4fc0'
                                },
                                label: {
                                    show:true,
                                    textStyle:{
                                        color:'white'
                                    }
                                }
                            },
                            emphasis: {
                                textStyle:{
                                    color:'white'
                                },
                                areaStyle:{
                                    color: '#3a428c'
                                }
                            }
                        },

                        data:[],
                        markLine : {
                            smooth:true,
                            symbol: ['none', 'circle'],
                            symbolSize : 1,
                            itemStyle : {
                                normal: {
                                    color:'#fff',
                                    borderWidth:1,
                                    borderColor:'rgba(30,144,255,0.5)'
                                }
                            },
                            data : [],
                        },
                        geoCoord: {
                            '福州': [119.306239,26.075302],
                            '福州铁路法院': [119.406239,26.475302],
                            '省高级法院': [119.706239,26.275302],
                            '平潭实验区': [119.806239,25.425302],
                            '厦门海事法院': [118.406239,24.475302],
                            '厦门': [118.11022,24.490474],
                            '莆田': [119.007558,25.431011],
                            '三明': [117.635001,26.265444],
                            '泉州': [118.589421,24.908853],
                            '漳州': [117.261801,24.510897],
                            '南平': [118.178459,27.335627],
                            '龙岩': [116.82978,25.091603],
                            '宁德': [119.527082,26.85924]
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return fillSize + v/10;
                            },
                            effect : {
                                show: true,
                                shadowBlur : 0
                            },
                            itemStyle:{
                                normal:{
                                    label:{show:false}
                                },
                                emphasis: {
                                    label:{position:'top'}
                                }
                            },
                            data : [
                                {name:'福州',value:95},
                                {name:'福州铁路法院',value:5},
                                {name:'省高级法院',value:6},
                                {name:'平潭实验区',value:7},
                                {name:'厦门海事法院',value:8},
                                {name:'厦门',value:90},
                                {name:'莆田',value:80},
                                {name:'三明',value:70},
                                {name:'泉州',value:60},
                                {name:'漳州',value:50},
                                {name:'南平',value:40},
                                {name:'龙岩',value:30},
                                {name:'宁德',value:20}
                            ]
                        }
                    }
                ]
            });
        });
}
var anguanTimer = null;
window.onresize = function () {
    //重置容器高宽
    anguanTimer = setTimeout(function () {
        getEcharts();
    },100);
    anguanTimer = null;
};