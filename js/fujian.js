// 地图
function indexMapSize(){
        var mapWidth = window.innerWidth/4*3;
        $("#cont_pro_map").css({
            "width":mapWidth+'px'
        });
}
indexMapSize();
var samcir = 'path://M29.32,29.32C48.88,9.78,72.44,0,100,0c27.561,0,51.12,9.78,70.68,29.32C190.221,48.88,200,72.44,200,100c0,27.58-9.779,51.141-29.32,70.68C151.12,190.221,127.561,200,100,200c-27.56,0-51.12-9.779-70.68-29.32C9.78,151.141,0,127.58,0,100C0,72.44,9.78,48.88,29.32,29.32z M100,8.18c-16.66,0-32.06,4.08-46.16,12.26c-14.1,8.16-25.24,19.3-33.4,33.4C12.26,67.96,8.18,83.34,8.18,100c0,25.32,8.98,46.96,26.92,64.9c17.94,17.959,39.58,26.92,64.9,26.92c25.32,0,46.96-8.961,64.9-26.92c17.959-17.94,26.92-39.58,26.92-64.9c0-25.32-8.98-46.94-26.92-64.9C146.96,17.14,125.32,8.18,100,8.18z M100,62c-5.413,0-10.504,1.058-15.304,3.128c-4.785,2.101-9.032,4.861-12.712,8.295c-3.435,3.681-6.21,7.928-8.295,12.712c-2.086,4.785-3.128,9.906-3.128,15.303c0,5.413,1.042,10.505,3.128,15.305c2.085,4.799,4.861,9.031,8.295,12.712c3.68,3.45,7.928,6.21,12.712,8.296c4.799,2.085,9.891,3.128,15.304,3.128s10.504-1.043,15.304-3.128c4.784-2.086,9.032-4.846,12.712-8.296c3.435-3.681,6.211-7.928,8.296-12.712c2.086-4.785,3.128-9.892,3.128-15.305c0-5.397-1.042-10.504-3.128-15.303c-2.085-4.799-4.861-9.017-8.296-12.712c-3.68-3.435-7.928-6.195-12.712-8.295C110.504,63.058,105.413,62,100,62z';

var geoCoordMap = {
    '福州市': [119.306239,26.075302],
    '厦门市': [118.11022,24.490474],
    '莆田市': [119.007558,25.431011],
    '三明市': [117.635001,26.265444],
    '泉州市': [118.589421,24.908853],
    '漳州市': [117.261801,24.510897],
    '南平市': [118.178459,27.335627],
    '龙岩市': [116.82978,25.091603],
    '宁德市': [119.527082,26.85924],
    /*三明市*/
    '三元区': [117.607418,26.104191],
    '清流县': [116.815821,26.17761],
    '梅列区': [117.63687,26.269208],
    '大田县': [117.849355,25.690803],
    '明溪县': [117.201845,26.357375],
    '宁化县': [116.659725,26.259932],
    '将乐县': [117.473558,26.728667],
    '泰宁县': [117.177522,26.897995],
    '建宁县': [116.845832,26.831398],
    '永安市': [117.364447,25.974075],
    '沙县': [117.789095,26.397361],
    /*南平市*/
    '顺昌县': [117.80771,26.792851],
    '光泽县': [117.337897,27.542803],
    '建阳区': [118.12267,27.332067],
    '松溪县': [118.783491,27.525785],
    '浦城县': [118.536822,27.920412],
    '延平区': [118.178918,26.636079],
    '武夷山市': [118.032796,27.751733],
    '邵武市': [117.491544,27.337952],
    '建瓯市': [118.321765,27.03502],
    '政和县': [118.858661,27.365398],
    /*厦门市*/
    '海沧区': [118.036364,24.492512],
    '思明区': [118.087828,24.462059],
    '同安区': [118.150455,24.729333],
    '翔安区': [118.242811,24.637479],
    '集美区': [118.100869,24.572874],
    '湖里区': [118.10943,24.512764],
    /*宁德市*/
    '屏南县': [118.987544,26.910826],
    '蕉城区': [119.527225,26.659253],
    '寿宁县': [119.506733,27.457798],
    '周宁县': [119.338239,27.103106],
    '古田县': [118.743156,26.577491],
    '霞浦县': [120.005214,26.882068],
    '柘荣县': [119.898226,27.236163],
    '福安市': [119.650798,27.084246],
    '福鼎市': [120.219761,27.318884],
    /*泉州市*/
    '鲤城区': [118.488929,24.907645],
    '丰泽区': [118.605147,24.996041],
    '洛江区': [118.670312,24.941153],
    '泉港区': [118.912285,25.126859],
    '安溪县': [118.186014,25.056824],
    '惠安县': [118.798954,25.028718],
    '永春县': [118.29503,25.320721],
    '德化县': [118.242986,25.489004],
    '金门县': [118.323221,24.436417],
    '晋江市': [118.577338,24.807322],
    '南安市': [118.387031,25.159494],
    '石狮市': [118.698402,24.721978],
    /*漳州市*/
    '龙文区': [117.671387,24.515656],
    '芗城区': [117.656461,24.659955],
    '云霄县': [117.340946,23.950486],
    '长泰县': [117.755913,24.821475],
    '诏安县': [117.176083,23.710834],
    '漳浦县': [117.614023,24.117907],
    '南靖县': [117.365462,24.516425],
    '东山县': [117.427679,23.702845],
    '平和县': [117.313549,24.366158],
    '华安县': [117.53631,25.001416],
    '龙海市': [117.817292,24.445341],
    /*福州市*/
    '马尾区': [119.658725,26.191975],
    '台江区': [119.420156,26.058616],
    '仓山区': [119.390988,25.978912],
    '晋安区': [119.328597,26.278837],
    '闽侯县': [119.145117,26.148567],
    '鼓楼区': [119.29929,26.102284],
    '罗源县': [119.552645,26.487234],
    '连江县': [119.538365,26.242109],
    '闽清县': [118.868416,26.223793],
    '永泰县': [118.939089,25.864825],
    '平潭县': [119.791197,25.503672],
    '福清市': [119.376992,25.720402],
    '长乐市': [119.510849,25.830583],
    /*莆田市*/
    '城厢区': [118.891028,25.433737],
    '荔城区': [119.020047,25.430047],
    '涵江区': [119.119102,25.459273],
    '仙游县': [118.694331,25.356529],
    '秀屿区': [119.092607,25.316141],
    /*龙岩市*/
    '连城县': [116.756687,25.708506],
    '新罗区': [117.030721,25.0918],
    '长汀县': [116.361007,25.842278],
    '上杭县': [116.424774,25.050019],
    '武平县': [116.100928,25.08865],
    '永定区': [116.732691,24.720442],
    '漳平市': [117.42073,25.291597],
};
var BJData = [
    [{name:'今日使用数：150以上'}, {name:'福州市',value:'167@12'}],
    [{name:'今日使用数：150以上'}, {name:'厦门市',value:190}],
    [{name:'今日使用数：100~149'},{name:'莆田市',value:123}],
    [{name:'今日使用数：100~149'},{name:'三明市',value:134}],
    [{name:'今日使用数：50~99'},{name:'泉州市',value:95}],
    [{name:'今日使用数：50~99'},{name:'漳州市',value:90}]
];
var SHData = [
    [{name:'今日使用数：50以下'},{name:'宁德市',value: 112}],
    [{name:'今日使用数：50以下'},{name:'南平市',value:25}],
    [{name:'今日使用数：50以下'},{name:'龙岩市',value:40}]
];

var data04 = [
    {name: '宁德市', value: '122@23'},
    {name: '福州市', value: '178@20'},
    {name: '厦门市', value: '168@3'},
    {name: '莆田市', value: '123@23'},
    {name: '三明市', value: '134@6'},
    {name: '泉州市', value: '95@12'},
    {name: '漳州市', value: '90@11'},
    {name: '南平市', value: '25@2'},
    {name: '龙岩市', value: '40@6'}
];

function convertData01(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var color = ['#ff3b57', '#ffea03', '#3292ff'];
var chart = echarts.init(document.getElementById('cont_pro_map'));//在id为mainMap的dom元素中显示地图

$().ready(function(){
    /*echarts*/
    $.get('json/fujian/350000.json', function (mapJson) {
        echarts.registerMap('zhejiang', mapJson);
        var chart = echarts.init(document.getElementById('cont_pro_map'));//在id为mainMap的dom元素中显示地图
        var series = [];
        [['今日收案数（件）', BJData], ['今日结案数（件）', SHData]].forEach(function (item, i) {
            series.push(
                {  //有值的情况
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData01(data04),
                    symbolSize: 2,
                    zlevel: 4,
                    label: {
                        normal: {
                            show: true,
                            formatter: function (value) {
                                console.log(value);
                                var caseAndReal = value.data.value[2].split('@');
                                return '{b|' + value.data.name + '}\n{m|' + caseAndReal[0] + '}{n|' +
                                        '/ '+caseAndReal[1] + '}';

                            },

                            // 这里是文本块的样式设置：
                            textStyle:{
                                color:'white',
                                fontSize: 20
                            },
                            borderColor:'#c0c5f3',
                            padding:[0,0,0,120],
                            // rich 里是文本片段的样式设置：
                            rich: {
                                b: {
                                    color: 'white',
                                    lineHeight: 30,
                                    fontSize: 18,

                                },
                                m:{
                                    fontSize: 18,
                                    fontFamily: 'DIN Alternate',
                                    color:'#fe9850'
                                },
                                n:{
                                    fontSize: 18,
                                    color:'#00f1ff',
                                    fontFamily: 'DIN Alternate'
                                }
                            }
                        }
                    }
                },
                {
                    name: item[0],
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 4,
                    roam: false,
                    rippleEffect: {
                        brushType: 'stroke',
                        scale: 30
                    },
                    symbolSize: function (val) {
                        if(val[2] < 50){
                            return 2;
                        }else if( 50< val[2] < 100){
                            return 4;
                        }else if(100< val[2] < 149){
                            return 6;
                        }else{
                            return 8;
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                           formatter: [
                                //'{b|{b}}{m|90}/{n|45}'//使用样式b
                                //'{c|+99999}{x|(字)}'//使用样式c
                            ].join('\n'),
                           /* formatter: function (value) {
                                console.log(value);
                                var caseAndReal = value.data.value[2].split('@');
                                return '{b|' + value.data.name + '} {m|' + caseAndReal[0] + '}/{n|' +
                                    caseAndReal[1] + '}'
                            },*/
                            // 这里是文本块的样式设置：
                            textStyle:{
                                color:'white',
                                fontSize: 20
                            },
                            borderColor:'#c0c5f3',
                            padding:[0,0,0,120],
                            // rich 里是文本片段的样式设置：
                            rich: {
                                b: {
                                    color: 'white',
                                    lineHeight: 30,
                                    fontSize: 18,

                                },
                                m:{
                                    fontSize: 18,
                                    fontFamily: 'DIN Alternate',
                                    color:color[i]
                                },
                                n:{
                                    fontSize: 18,
                                    color:'#9da8fe',
                                    fontFamily: 'DIN Alternate'
                                }
                            }
                        },
                        emphasis: {
                            textStyle:{
                                color:'white',
                                fontSize: 20
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                })
        });
        chart.setOption({
            title : {
                show:false,
                text: '',
                left: 'right',
                textStyle : {
                    color: '#fff'
                }
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: '70%',
                data:['今日收案数（件）', '今日结案数（件）'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: 'multiple',
                icon:samcir
            },
            visualMap: {
                show: false,
                type: 'piecewise',
                splitNumber:4,
                pieces: [
                    {max: 49,color:'#09cb89'}, // 不指定 max，表示 max 为无限大（Infinity）。
                    {min: 50, max: 99,color:'#3292ff'},
                    {min: 100, max: 149,color:'#ffea03'},
                    {min: 150,color:'#ff3b57'},
                    {value: 'green', color: '#09cb89'},
                    {value: 'white', color: '#4e57a6'},
                ],
                calculable : true,
                //color: ['#ff3b57', '#ffea03', '#a55cff','#09cb89'],
                textStyle:{
                    color:'#fff'
                }
            },
            geo: {
                show:true,
                map:'zhejiang',
                roam: false,
                zoom:0.8,
                aspectScale:1,
                //layoutSize: 300,
                itemStyle: {
                    normal: {
                        areaColor: '#1d4fc0',
                        borderWidth:1.5,
                        borderColor: '#4577ea' //市的边框颜色

                    },
                    emphasis: {
                        areaColor: '#0d124f'
                    }
                },
                label:{
                    emphasis:{
                        show:false
                    }
                }
            },
            series:series
        });

    });
});
