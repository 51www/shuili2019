new function (){
    var _self = this;
    _self.width =1080;//设置UI提供的基准尺寸
    _self.fontSize = 100;
    _self.widthProportion = function(){
    var b_width = (document.body&&
      document.body.clientWidth ||
      document.getElementsByTagName("html")[0].offsetWidth);
	  b_width=b_width>768?768:(b_width<320?320:b_width)
      return b_width/_self.width
    };
    _self.changePage = function(){
        document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
    }
    _self.changePage();
    window.addEventListener("resize",function(){_self.changePage();},false);
    };