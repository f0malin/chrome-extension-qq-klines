var timer;
$(document).ready(function() {
    $("span#ykc101").click();
    timer = setInterval(function() {
        var embed = $("div#flash_quote_kline").html();
        if (embed) {
            console.log(embed);
            clearInterval(timer);
            chrome.runtime.sendMessage({embed: '<div style="float:left"><a href="' + window.location + '" target="_blank">明细</a><br/>'+embed+'</div>'});
            
        } else {
            console.log("not yet");
        }   
    }, 500);
});


