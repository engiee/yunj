var changeTime = {
    bindTop:function(){
        if($(".checkedMaster").length == 0){
            var times = '';
            times+='<div id="times" class="times">',
                times+='<p id="nowTimes">2018年4月1日 13:10:15</p>',
                times+='<i class="iconfont" onClick="changeTime.toggleCheckedMaster(this)">&#xe6b9;</i>',
                times+='</div>',
                times+='<div id="historyTimes" class="none">',
                times+='<div id="historyStartTime">',
                times+='</div>',
                times+='<span class="timesLine none">-</span>',
                times+='<div id="historyEndTime">',
                times+='</div>',
                times+='<i class="iconfont updown none" onClick="changeTime.showThisData(this)">&#xe60a;</i>',
                times+='</div>';
            $("#changeTimes").append(times);
            this.setIntervalTime();
        }else if($(".checkedMaster").hasClass("none")){
            $(".checkedMaster").removeClass("none");
        }else{
            $(".checkedMaster").addClass("none");
        }
    },
    setIntervalTime:function(){
        var day = new Date();
        var nowTime = day.getFullYear() +"年" + (day.getMonth()+1)+"月";
        $("#times p").html(nowTime);
    },
    toggleCheckedMaster:function(obj){
        $(".tankuang").addClass('none');
        if($(".checkedMaster").length==0){
            this.bindCheckedMaster();
        }else{
            this.bindTop();
        }
        if($("#checkedMaster").hasClass('none')){
            $(obj).html('&#xe6b9;')//
        }else{
            $(obj).html('&#xe9a7;');
        }
        //$(this).addClass('rotateAnimation');
    },
    bindCheckedMaster:function(){
        var day = new Date();
        if(String(day.getDate()).length ==1 ){
            var str = "0"+day.getDate();
        }else{
            var str = day.getDate();
        }
        var Mr = '';
        Mr+= '<div id="checkedMaster" class="checkedMaster">',
            Mr+= '<div id="startData" >',
            Mr+= '<div class="checkedTitle" onClick="changeTime.showMoth(event)">',
            Mr+= '<span id="startMoth">01</span>',
            Mr+= '<span>月</span>',
           // Mr+= '<span id="startDay">01</span>',
           // Mr+= '<span>日</span>',
            Mr+= '<i class="iconfont">&#xe60a;</i>',
            Mr+= '<ins class="iconfontBefore"></ins>',
            Mr+= '</div>',
            Mr+= '</div>',
            Mr+= '<div id="range">',
            Mr+= '<input type="range" name="changeYear" id="changeYear" min="1959" max="2018" value=""/>',
            $("#changeTimes").is(".changeTimesRight")?Mr+= '<ins id="yearText">1997年</ins>':Mr+= '<ins id="yearText" class="yearTextRight">1997年</ins>',
            Mr+= '</div>',
            Mr+= '<div id="endData">',
            Mr+= '<div class="checkedTitle" onClick="changeTime.showMoth(event)">',
            Mr+= '<ins class="iconfontAfter"></ins>',
            Mr+= '<i class="iconfont">&#xe60a;</i>';
        if(String((day.getMonth()+1)).length==1 ){
            var str = "0"+(day.getMonth()+1);
        }else{
            var str = (day.getMonth()+1)
        }
        if(String(day.getDate()).length==1){
            var sub = "0" +day.getDate();
        }else{
            var sub = day.getDate();
        }
        Mr+= '<span id="endMoth">'+str+'</span>',
            Mr+= '<span>月</span>',
           // Mr+= '<span id="endDay">'+sub+'</span>',
           // Mr+= '<span>日</span>',
            Mr+= '</div>',
            Mr+= '</div>',
            Mr+= '<button type="button" id="determine" onClick="changeTime.determine()">',
            Mr+= '<i class="iconfont">&#xe676;</i>',
            Mr+= '<span>确定</span>',
            Mr+= '</button>',
            Mr+= '<button type="button" id="resetTimes" onClick="changeTime.reset();">',
            Mr+= '<i class="iconfont">&#xe639;</i>',
            Mr+= '<span>重置</span>',
            Mr+= '</button>',
            Mr+= '</div>';
        $("#changeTimes").append(Mr);
        this.Range = $("#changeYear");
        this.RangeText = $("#yearText");
        this.historyStartTime = $("#historyStartTime");
        this.historyEndTime = $("#historyEndTime");
        this.startMoth = $("#startMoth");
        this.startData = $("#startData");
        this.endData = $("#endData");
        this.endMoth = $("#endMoth");
        //this.endDay = $("#endDay");
        this.RangeInt();
        this.Range.click(function(){
            this.upDataRange();
        }.bind(this));
        this.Range.mousemove(function(){
        	this.upDataRange();
        }.bind(this));
        this.Range.keydown(function(e){
            if(e.keyCode == 38 || e.keyCode == 39){//右
                this.upDataRange();
            }else if(e.keyCode == 40 || e.keyCode == 37){//左
                this.upDataRange();
                this.upDataEndTime(null);
            }
        }.bind(this));
        this.Range.change(function(){
            this.upDataRange();
            this.upDataEndTime(null);
            $(".timesLine,.updown").removeClass('none');
        }.bind(this))
    },
    showMoth:function(event){
        $(".month").remove();
        var status =false;//false指的是开始
        if($(event.target).parents("#startData").length >0){
            status = true;
        }else{
            status = false;
        }
        var div = '';
        div+= '<div class="month">';
        div+= '	<div class="montnYear">',
            div+=this.Range.val()+"年",
            div+='</div>';
        if(status){
            div+= '<div class="monthNumber">'
            for(var i = 1; i<13;i++){
                if(i<10){i='0'+i}
                i == this.startMoth.html()?div+= '<span class="monthNumberMiddle on" id="monthNumberMiddle">'+this.startMoth.html()+'月</span>':div+='<span onclick="changeTime.changeMonth(this)">'+i+'月</span>'
            }
            div+='</div>';
        }else{
            div+= '<div class="monthNumber">'
            for(var i = 1; i<13;i++){
                if(i<10){i='0'+i}
                i == this.endMoth.html()?div+= '<span class="monthNumberMiddle on" id="monthNumberMiddle">'+this.endMoth.html()+'月</span>':div+='<span onclick="changeTime.changeMonth(this)">'+i+'月</span>'
            }
            div+='</div>';
        }
        div+= '		  <div class="clear"></div>',
            div+= '		  <div class="monthDay" id="monthDays">';
        div+='</div>',
            div+= '		  <div class="clear"></div>';
        if(status){
            //div+= '		  <button  type="button" id="monthBtn" onClick="changeTime.defines(event,true)">确定</button>',
            div+= '		</div>';
            this.startData.append(div);
        }else{
            //div+= '		  <button  type="button" id="monthBtn" onClick="changeTime.defines(event,false)">确定</button>';
            div+= '		</div>';
            this.endData.append(div);
        }
        this.monthNumberMiddle = $("#monthNumberMiddle");
    },
    changeMonth:function (ele) {
        $(ele).addClass('on').siblings().removeClass('on').parents(".month").hide();
        if($(ele).parents("#startData").size()>0){
            this.startMoth.html($(ele).html().substring(2,0))
        }else if($(ele).parents("#endData").size()>0){
            this.endMoth.html($(ele).html().substring(2,0))
        }
    },
    defines:function(e,status){
        e.stopPropagation();
        this.startDataTime = $(".monthDay .on");//最新的选择日期参数
        if(this.startDataTime.length>0){
            this.updataDataTime(status);
            if(status){
                this.startMoth.html(this.monthNumberMiddle.html());
            }else{
                this.endMoth.html(this.monthNumberMiddle.html());
            }

            $(".month").remove();
        }else{
            alert("请选择日期")
        }
    },
    updataDataTime:function(status){
        if(status){
            if(this.startDataTime.html().length==1){
                //
                var str = "0"+ this.startDataTime.html();
            }else{
                var str = this.startDataTime.html();
            }
            this.startDay.html(str);
            if(this.selectData){
                this.selectData.html(str);
            }
        }else{
            if(this.startDataTime.html().length==1){
                var str = "0"+ this.startDataTime.html();
            }else{
                var str = this.startDataTime.html();
            }
            this.endDay.html(str);
            if(this.endSelectDay){
                this.endSelectDay.html(str);
            }
        }
    },
    upDataEndTime:function(obj){
        if(obj != null){
            this.RangeText.html(obj.year);
            this.upDataRange();
            this.upDataHistory();
        }
        var days = new Date();
        var span = '';
        span += '<span id="endYears">',
            span += this.RangeText.html()
        span += '</span>';
        span += '<span id="endSelectMonth">';
        if(obj != null){
            span  += obj.endMoth;
            span += '</span><span>月</span>';
            span += '<span id="endSelectDay">';
            span += obj.endDay;
            this.endMoth.html(obj.endMoth);
            this.endDay.html(obj.endDay);
            this.startMoth.html(obj.startMoth);
            this.startDay.html(obj.startDay);
            this.Range.val(obj.year);
            $("#historyTimes,.timesLine,.updown").removeClass('none');
            $("#checkedMaster,#times").addClass("none");
        }else if(days.getFullYear() != Number(this.Range.val() )){//如果不是今年
            span += "12"
            span += '</span><span>月</span>';
            span += '<span id="endSelectDay">',
                span += "31";
            this.endMoth.html("12");
            this.startMoth.html("01");
        }else{
            span += this.endMoth.html()
            span += '</span><span>月</span>';
            span += '<span id="endSelectDay">';
            if(String(days.getMonth()+1).length==1 ){
                var str ="0"+String(days.getMonth()+1);
            }else{
                var str =String(days.getMonth()+1);
            }
            if(String(days.getDate()).length==1 ){
                var sub = "0"+ days.getDate();
            }else{
                var sub = days.getDate();
            }
            this.endMoth.html(str);
            span += sub;
        }
        span += '</span><span>日</span>';
        this.historyEndTime.html(span);
        this.endYears= $("#endYears");
        this.endSelectMonth = $("#endSelectMonth");
        this.endSelectDay = $("#endSelectDay");
        this.endSelectMonth.html(this.endMoth.html());
    },
    reset:function(){//恢复默认
        var day = new Date();
        this.Range.val(day.getFullYear())
        this.upDataRange();
        this.startMoth.html("01");
        if(String(day.getMonth()+1).length==1){
            var sub = "0"+(day.getMonth()+1)
        }else{
            var sub = day.getMonth()+1
        }
        this.endMoth.html(sub);
        if(String(day.getDate()).length==1 ){
            var str = "0"+day.getDate();
        }else{
            var str = day.getDate();
        }
        $("#checkedMaster,#historyTimes").addClass('none');
        $("#times").removeClass('none');
        $("#historyTimes>i,#times>i").html('&#xe6b9;');
    },
    showThisData:function(obj){
        $("#historyTimes").addClass('none');
        $("#times").addClass('none');
        $("#historyTimes").removeClass('none');
        $("#checkedMaster").toggleClass('none');
        if($("#checkedMaster").hasClass('none')){
            $(obj).html('&#xe60a;');
        }else{
            $(obj).html('&#xe9a6;');
        }
    },
    upDataHistory:function(){
        var historyStartTime = '';
        historyStartTime+='<span id="startYear">',
            historyStartTime+=this.Range.val()+"年",
            historyStartTime+='</span>'
            historyStartTime+='<span id="selectMonth">',
            historyStartTime+=this.startMoth.html(),
            historyStartTime+='</span>',
            historyStartTime+='<span>月</span>',
            historyStartTime+='<span id="selectData">',
            historyStartTime+=this.startDay.html(),
            historyStartTime+='</span>',
            historyStartTime+='<span>日</span>',
            historyStartTime+='</div>';
        var historyEndTime = '';
        historyEndTime+='<span id="startYear">',
            historyEndTime+=this.Range.val()+"年",
            historyEndTime+='</span>'
        historyEndTime+='<span id="selectMonth">',
            historyEndTime+=this.endMoth.html(),
            historyEndTime+='</span>',
            historyEndTime+='<span>月</span>',
            historyEndTime+='<span id="selectData">',
            historyEndTime+=this.endDay.html(),
            historyEndTime+='</span>',
            historyEndTime+='<span>日</span>',
            historyEndTime+='</div>';
        this.historyStartTime.empty();
        this.historyEndTime.empty();
        this.historyStartTime.append(historyStartTime);
        this.historyEndTime.append(historyEndTime);
    },
    determine:function(){
        //if(this.historyStartTime.children().length==0 || this.historyEndTime.children().length==0){
        //this.upDataHistory();
        //$(".timesLine,.updown").removeClass('none');
        //$("#historyStartTime").removeClass('none');
        //$("#historyTimes").removeClass('none');
        $("#checkedMaster").addClass('none');
       $("#historyTimes>i,#times>i").html('&#xe6b9;');
    },
    upDataRange:function(){
        this.RangeText.is(".yearTextRight")?this.RangeText.css({"margin-left":parseInt(this.Range.val()-parseInt(this.Range.attr("min")))*4.47-parseInt(this.RangeText.width()/2)-178+"px"}):this.RangeText.css({"margin-left":parseInt(this.Range.val()-parseInt(this.Range.attr("min")))*4.47-parseInt(this.RangeText.width()/2)+"px"})
        this.RangeText.html(this.Range.val()+"年");
    },
    RangeInt:function(){
        var toDay = new Date();
        this.Range.attr("max",toDay.getFullYear());
        this.Range.attr("min",1949);
        this.Range.val(toDay.getFullYear());
        this.upDataRange();
    }

}
changeTime.bindTop();
$(document).on("click",function(e){
    if($(e.target).parents("#startData,#endData").length==0 ){
        $(".month").remove();
    };
    if($(e.target).parents("#checkedMaster,#historyTimes,#times").length==0){
       $("#checkedMaster").addClass('none');
       $("#historyTimes>i,#times>i").html('&#xe6b9;');
    };
});