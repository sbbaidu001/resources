/**
 * Created by MBENBEN on 2017/8/11.
 */
function ajaxWebPage(url,parameters,caption){
    $.ajax({
        type : "POST",
        dataType : "text",
        url: url,
        data : parameters,
        cache : true,
        async : false,
        success : function(result){
            $("#"+caption).html(result);
        }
    });
}

function ajaxAdminPage(url,parameters){
    $.ajax({
        type : "POST",
        dataType : "text",
        url: url,
        data : parameters,
        cache : true,
        async : false,
        success : function(result){
            $("#pageCaption").html(result);
        }
    });
}

//鍐檆ookies
function setCookie(name,value,minute)
{
    var exp = new Date();
    exp.setTime(exp.getTime() + minute*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
}

//璇诲彇cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//鍒犻櫎cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
