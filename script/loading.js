var urlall = "http://www.7wanl.com/7wanlSOA/";


// 取得url参数
function GetString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


//加载图
document.writeln("<div id=\"shadowDiv\" style=\"display: none;position:fixed;\">");
document.writeln("    <img src=\"../image/loading_more.gif\" />");
document.writeln("</div>");

function loading(opt) {
    if (opt) {
        $api.css($api.byId("shadowDiv"),"display:block");
        var left = 0;
        var _top = 0;
        if (window.innerHeight) {
            left = (window.innerWidth - 64) / 2;
            _top = (window.innerHeight - 64) / 2;
        } else if (document.documentElement.clientHeight) {
            left = (document.documentElement.clientWidth - 64) / 2;
            _top = (document.documentElement.clientHeight - 64) / 2;
        }

        $api.css($api.byId("shadowDiv"),"left:"+left+"px;top:"+_top + "px");
    } else {
        $api.css($api.byId("shadowDiv"),"display:none");
    }
}


//扫描二维码
function scanSingle(){
	var FNScanner = api.require('FNScanner');
	FNScanner.openScanner({
	    autorotation: true
	}, function(ret, err){       
	    if( ret ){
	        if (ret.eventType == 'success') {
               $api.val($api.byId("mobile"),ret.content);
               document.getElementById("inputCode").click()
            } else if (ret.eventType == 'fail') {
               api.toast({msg:'扫描失败，请稍后重试'});
            }
	    }else{
	        alert( JSON.stringify( err ) );
	    }
	});
}