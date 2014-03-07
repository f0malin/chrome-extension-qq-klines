var timer;

$(document).ready(function() {
    console.log("injected");
    console.log(localStorage.myaaa);
    timer = setInterval(function() {
        var div = $("#body-wrapper .head-dora");
        if (div.html()) {
            div.append(' | <a href="#" class="fun" id="qq_kline_config">配置K线汇总图</a> | <a href="#" class="fun" id="qq_kline_show">查看K线汇总</a>');
            $("a#guojinad").css("display", "none");
            clearInterval(timer);
            console.log("link added");

            $("#qq_kline_config").click(function() {
                var links = $("td.dt-col1 a");
                var re = new RegExp('http://stockhtm.finance.qq.com/astock/ggcx/.*.htm');
                var rts = [];
                links.each(function() {
                    if (re.test(this.href)) {
                        rts.push(this.href);
                    }
                });
                console.log(rts);
                chrome.runtime.sendMessage({links: rts});
            });
            
            $("#qq_kline_show").click(function() {
                console.log("show clicked");
                console.log(localStorage.myaaa);
                chrome.runtime.sendMessage({show: true});
                
            });
        } else {
            console.log("not yet");
        }
    }, 500);

});

