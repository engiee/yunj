/**
 * Created by wangzhen on 2018-03-20 14:35:47.
 */

//jquery对象的扩展方法
$.fn.extend({
    animationBar:function(dataArr,widthFlag){
        if(widthFlag) {
            for (i = 0; i < dataArr.length; i++) {
                $(this).eq(i).animate({'width': dataArr[i] + "%"}, 1000);
            }
        } else {
            for (i = 0; i < dataArr.length; i++) {
                $(this).eq(i).animate({'height': dataArr[i] + "%"}, 1000);
            }
        }
    },
});
//涉外案件
var swajArr = [12,34,56,89];
$(".indexColumn>div>div").animationBar(swajArr,false);
//执行监控
var zxjkArr = [12,34,56,89];
$(".animationBar .animationBarInner>div").animationBar(zxjkArr,true);
var dataInfo =  [12,34,56,89,12,34,56,89,12,34];

$(".caseLeft .animationBarAble").animationBar(dataInfo,true);
$(".caseRight .animationBarAble").animationBar(dataInfo,true);

//安管
var anguanData =  [12,34,56,89,12,34,56,89,12,34,12,67,34];
$(".anguan .botom .list .cont .contlist .left ul li .orleft span").animationBar(anguanData,true);
$(".anguan .botom .list .cont .contlist .right ul li .oright span").animationBar(anguanData,true);

$(".zxck .zxMain .zxMainRight .zxrList .listCon .liststar p:last-child .proportion").animationBar(dataInfo,true);

//法院选择下拉
$(".tankuangBox>i").on('click',function () {
    $(this).hasClass("arrow-droped")?$(this).html("&#xe6b9;").removeClass("arrow-droped"):$(this).html("&#xe9a7;").addClass("arrow-droped");
    $(".tankuang").toggleClass('none');
})
//法院选择切换
$(".tanKcity>span").on("click",function () {
    $(this).addClass("tanKcityFirst").siblings().removeClass('tanKcityFirst');
})
//法院选择确定
$(".tanKchancebtn").on("click",function () {
    var chooseCourtName = $(".tanKcityFirst").html();
    $(".tankuangBox>span").html(chooseCourtName);
    $(".tankuangBox>i").removeClass("arrow-droped").html("&#xe6b9;");
    $(".tankuang").addClass("none");
});

$(document).on("click",function(e){
    if($(e.target).parents(".tankuang").length == 0 && !$(e.target).is(".chooseCourt")){
        $(".tankuang").addClass("none");
        $(".tankuangBox>i").removeClass("arrow-droped").html("&#xe6b9;");
    }
});