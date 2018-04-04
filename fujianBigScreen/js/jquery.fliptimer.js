(function($) {

  /**
   * @class flipTimer
   * @constructor
   *
   * @param element {HTMLElement} the element flipTimer is called on
   */
  var flipTimer = function(element, options) {
    this.element = element;
    // ensures the HTMLElement has a class of 'flipTimer'
    if (!this.element.hasClass('flipTimer')) {
      this.element.addClass('flipTimer');
    }

    // attach users options to instance
    this.userOptions = options;

    // attach default options to instance
    this.defaultOptions = flipTimer.defaults;

    // merge default options with user options and attach to instance
    this.options = $.extend({}, this.defaultOptions, this.userOptions);
	this.num = this.options.num;
	this.init();
    // detects if the seconds digits should be used

    // store the date/time when initialised
    //this.initDate = new Date();

    // make the date into a javascript date
    //this.options.num = this.options.num;

    // untested
    //this.calculateDate();
  };

  flipTimer.defaults = {
    setTimeout:15000,
	digitSetFontSize:50,
	digitSetWidth:41,
	digitSetMargin:"0 2px",
	shadowTopPadding:"0 7px",
	digitWrapLineHeight:55,
	digitWrapMarginTop:"-101%",
	height:57,
    num: 00,
	numLength : 2,
    direction: 'up',
    callback: null,
    digitTemplate: '' +
      '<div class="digit">' +
      '  <div class="digit-top">' +
      '    <span class="digit-wrap"></span>' +
      '  </div>' +
      '  <div class="shadow-top"></div>' +
      '  <div class="digit-bottom">' +
      '    <span class="digit-wrap"></span>' +
      '  </div>' +
      '  <div class="shadow-bottom"></div>' +
      '</div>'
  };

  flipTimer.prototype = {
    /**
     * Calculates the difference in date for the timer
     *
     * @method calculateDate
     */
    init: function() {
      this.render();
    },


    /**
     * Dictates what needs rendering for the plugin
     *
     * @method render
     */
    render: function() {
      // if using seconds, populate it
      this.renderDigits(this.numDiff);
    },

    reset: function() {
    	//this.numDiff = 0;
    	//this.num = 0;
    	//console.log("nextNum:"+this.nextNum+";numDiff"+this.numDiff+";num:"+this.num);
    	this.resetDigits(this.numDiff);
    },
    resetDigits: function(value) {
        var i, x, max, currentDigit, _this = this;

        // if digits are not already rendered...
        if ($(this.element).find('.digit').length == 0) {

          // set maximum digits for seconds/minutes/hours

  		var numLength = this.options.numLength;
  		var thisnum = this.num;
          // append two divs to contain two sets of digits for each subject
  		//4位一个逗号 小于6位不加
  		for(var n =numLength ; n>0; n--){
  			if(numLength>5&&numLength<8){
				if(n%4==0){
			$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}else if(numLength==8){
				if(n==4){
				$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
			}
			}else if(numLength>8&&numLength<12){
				if(n%4==0){
				$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}else if(numLength==12){
				if(n==4||n==8){
					$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}
			else if(numLength>12){
				if(n==4||n==8|n==12){
					$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}
  			$(this.element).append('<div class="digit-set" style="font-size:'+_this.options.digitSetFontSize+'px;width:'+_this.options.digitSetWidth+'px;margin:'+_this.options.digitSetMargin+';"></div>');
  		}
          // for each digit-set in the subject
          $(this.element).find('.digit-set').each(function(el) {
            // if first digit, then use digit max
            max = 9;
        	var templateHtml = '' +
        	      '<div class="digit" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;">' +
        	      '  <div class="digit-top" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;">' +
        	      '    <span class="digit-wrap" style="line-height:'+_this.options.digitWrapLineHeight+'px;"></span>' +
        	      '  </div>' +
        	      '  <div class="shadow-top" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;"></div>' +
        	      '  <div class="digit-bottom" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;">' +
        	      '    <span class="digit-wrap" style="margin-top:'+_this.options.digitWrapMarginTop+';line-height:'+_this.options.digitWrapLineHeight+'px;"></span>' +
        	      '  </div>' +
        	      '  <div class="shadow-bottom" style="line-height:'+_this.options.digitWrapLineHeight+'px;"></div>' +
        	      '</div>'
            // generate the right number of digits
            for(i=0; i<=max; i++) {
            
              // append the digit template
            	$(this).append(templateHtml);
            
              // if direction is down then make numbers decline
              x = i;
  			var initnum;
  			if(el < numLength - String(thisnum).length)
  				initnum="0";
  			else
  				initnum = String(thisnum).substring(el-(numLength - String(thisnum).length),el-(numLength - String(thisnum).length)+1);
              // select the current digit and apply the number to it
              currentDigit = $(this).find('.digit')[i];
              $(currentDigit).find('.digit-wrap').append(x);
              // if the current number matches the value then apply active class
              if (x == Number(initnum)) {
                $(currentDigit).addClass('active');
              } else if (Number(initnum) != 0 && ((x + 1) == Number(initnum))) {
                // if the current number is one less than active but not zero
                $(currentDigit).addClass('previous');
              } else if (Number(initnum) == 0 && x == max) {
                // if the current number is zero then apply previous to max
                $(currentDigit).addClass('previous');
              }
            }
          });
        }
      },
    /**
     * Renders the digits for a given subject
     *
     * @method renderDigits
     * @param subject {HTMLElement} the element to generate digits for
     */
    renderDigits: function(value) {
      var i, x, max, currentDigit, _this = this;

      // if digits are not already rendered...
      if ($(this.element).find('.digit').length == 0) {

        // set maximum digits for seconds/minutes/hours

		var numLength = this.options.numLength;
		
		var thisnum = this.num;
        // append two divs to contain two sets of digits for each subject
		//4位一个逗号 小于6位不加
  		for(var n =numLength ; n>0; n--){
  			if(numLength>4&&numLength<6){
				if(n%3==0){
			$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}else if(numLength==6){
				if(n==3){
				$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
			}
			}else if(numLength>4&&numLength<9){
				if(n%3==0){
				$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}else if(numLength==9){
				if(n==3||n==6){
					$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}
			else if(numLength>9){
				if(n==3||n==6|n==9){
					$(this.element).append('<div class="iconfont cmma">&#xe612;</div>');
				}
			}
			$(this.element).append('<div class="digit-set" style="font-size:'+_this.options.digitSetFontSize+'px;width:'+_this.options.digitSetWidth+'px;margin:'+_this.options.digitSetMargin+';"></div>');
		}
        // for each digit-set in the subject
        $(this.element).find('.digit-set').each(function(el) {
          // if first digit, then use digit max
          max = 9;
      	var templateHtml = '' +
      	      '<div class="digit" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;">' +
      	      '  <div class="digit-top" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;">' +
      	      '    <span class="digit-wrap" style="line-height:'+_this.options.digitWrapLineHeight+'px;"></span>' +
      	      '  </div>' +
      	      '  <div class="shadow-top" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;"></div>' +
      	      '  <div class="digit-bottom" style="padding:'+_this.options.shadowTopPadding+';line-height:'+_this.options.digitWrapLineHeight+'px;">' +
      	      '    <span class="digit-wrap" style="margin-top:'+_this.options.digitWrapMarginTop+';line-height:'+_this.options.digitWrapLineHeight+'px;"></span>' +
      	      '  </div>' +
      	      '  <div class="shadow-bottom" style="line-height:'+_this.options.digitWrapLineHeight+'px;"></div>' +
      	      '</div>'
          // generate the right number of digits
          for(i=0; i<=max; i++) {
        		
            // append the digit template
            $(this).append(templateHtml);

            // if direction is down then make numbers decline
            x = i;
			var initnum;
			if(el < numLength - String(thisnum).length)
				initnum="0";
			else
				initnum = String(thisnum).substring(el-(numLength - String(thisnum).length),el-(numLength - String(thisnum).length)+1);
            // select the current digit and apply the number to it
            currentDigit = $(this).find('.digit')[i];
            $(currentDigit).find('.digit-wrap').append(x);
            // if the current number matches the value then apply active class
            if (x == Number(initnum)) {
              $(currentDigit).addClass('active');
            } else if (Number(initnum) != 0 && ((x + 1) == Number(initnum))) {
              // if the current number is one less than active but not zero
              $(currentDigit).addClass('previous');
            } else if (Number(initnum) == 0 && x == max) {
              // if the current number is zero then apply previous to max
              $(currentDigit).addClass('previous');
            }
          }
        });
      }
    },

    /**
     * Changes classes on the digits to increase the number
     *
     * @method increaseDigit
     * @param target {HTMLElement} the element to increase digit for
     */
    increaseDigit: function(nextNum) {
      var digitSets = new Array(), _this = this;

      // find all digit-sets related to digit type
      $(_this.element).find('.digit-set').each(function() {
        digitSets.push(this);
      });
	  var ss = 0;
      _this.numDiff = nextNum - _this.num;
	  _this.num = nextNum;
      // increase individual digit
	  clearInterval(_this.timer);
	  if(_this.numDiff > 0){
		  var numDiff_str = ""+_this.numDiff;
		  var lastLength = numDiff_str.length-3;
		  /*for(var i1 = 0; i1 < lastLength; i1++){
				var cn = parseInt(numDiff_str.substring(numDiff_str.length-i1-1,numDiff_str.length-i1));
				cn = 800+cn;
				increaseFun(i1,cn,0);
		  }*/
		  var factLength = numDiff_str.length;
		  if(factLength > 3)
			  factLength = 3;
		  var factNum = parseInt(numDiff_str.substring(0,factLength));
		  var timeRoll = 15000/factNum;
		  //console.log("timout:"+setTimeout+";factNum"+factNum);
		  //console.log("timeRoll:"+timeRoll);
		  if(timeRoll > 350)
				timeRoll = 350;
		  if(timeRoll < 15)
				timeRoll = 15;
		  var factLast = numDiff_str.substring(2,3);
	      _this.timer = setInterval(function() {
			  increase(digitSets[digitSets.length - numDiff_str.length + factLength - 1],true);
			  for(var i1 = 0; i1 < lastLength; i1++){
				  increase(digitSets[digitSets.length - i1 - 1],false);
			  }
			  ss ++;
			  if(ss >= factNum){
				clearInterval(_this.timer);
				for(var i1 = 0; i1 <=lastLength; i1++){
					var tempSS = getCurrentNum(digitSets[digitSets.length - i1 - 1]);
				  /*var haveAdd = parseInt(numDiff_str.substring(numDiff_str.length-i1-1,numDiff_str.length-i1)) - factLast;
				  if(haveAdd < 0)
					haveAdd = 10 + haveAdd;*/
					var haveAdd = getTurnTimes(tempSS,nextNum.toString().substring(nextNum.toString().length-i1-1,nextNum.toString().length-i1));
					increaseFun(i1,haveAdd,0);
				}
			  }
	      },timeRoll);
	  }
      
    //求出当前位数当前数字，如个位 当前数字是8
	  function getCurrentNum(el){
		  var current = $(el).find('.active'),
          	  previous = $(el).find('.previous'),
          	  index = $.inArray(el, digitSets);
		  var valid = current.find(".digit-wrap").html();
		  //console.log("digitSets="+digitSets +"   e1="+e1);
		  return parseInt(valid);
	  }
	  
	  //求出需要转多少次才能达到要求，比如原来是3，要到5，转2次，原来是3，要到2，转（10-3+2）次
	  function getTurnTimes(num1,num2){
		  if(parseInt(num1) <= parseInt(num2)){
			  return parseInt(num2) - parseInt(num1);
		  }else{
			  return (10 - parseInt(num1) + parseInt(num2));
		  }
	  }
	  
	  /**
       * Increases individual digit in a digit-set
       *
       * @param el {HTMLElement} the digit-set being increased
       */
	   function increaseFun(i,num,curNum){
		   var ic = i;
		   var numc = num;
		   var curNumc = curNum;
		   if(num > 0){
			   var timer1 = setInterval(function() {
				increase(digitSets[digitSets.length - ic-1]);
				curNumc++;
				if(curNumc >= numc)
					clearInterval(timer1);
				},15);
		   }
	   }

      /**
       * Increases individual digit in a digit-set
       *
       * @param el {HTMLElement} the digit-set being increased
       */
      function increase(el,rollNext) {
          var current = $(el).find('.active'),
          previous = $(el).find('.previous'),
          index = $.inArray(el, digitSets);//guojx
          previous.removeClass('previous');
	      current.removeClass('active').addClass('previous');
	
	      if (current.next().length == 0) {
	          // increase to first digit in set
	        $(el).find('.digit:first-child').addClass('active');
	        //if (index != 0 && rollNext) {//guojx
	        if (rollNext && index != -1) {
	          // increase digit of sibling digit-set
	          increase(digitSets[index - 1],rollNext);
	        }
	      } else {
	          // increase the next digit
	          current.next().addClass('active');
	      }
	    }
    }
  };

  $.fn.flipTimer = function(options) {
	  if (!$(this).data('flipTimer')) {
		var f = new flipTimer($(this), options);
		$(this).data('flipTimer', f);
		return f;
	  }
  };
})(jQuery);
