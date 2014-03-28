
localStorage.configing = "";
console.log("event page start");

chrome.webRequest.onCompleted.addListener(
    function(details) {
        console.log("got web request " + details.url);
    },
    {
        urls: ["https://invest2.firstrade.com/cgi-bin/getchain*"]
    },
    [
    ]);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.show) {
        chrome.tabs.create({
            active: false,
            url: "http://stockapp.finance.qq.com/mstats/"
        });
    }
    else if (request.links) {
        localStorage.myaaa = "youraaa";
        localStorage.maintab_id = sender.tab.id;
        lsarray.store("embeds", []);
        console.log("got links");
        var links = request.links;
        var link = links.shift();
        lsarray.store("links", links);
        localStorage.configing = true;
        chrome.tabs.create({
            active: false,
            url: link
        });
    } 
    else if (request.ask) {
        console.log("being asked");
        sendResponse({embeds: localStorage.embeds_str});
    }
    else if (request.embed) {
        console.log("configing=" + localStorage.configing);
        if (!localStorage.configing) {
            console.log("configing is false");
            return;
        }
        
        console.log("got embed: " + request.embed);
        lsarray.push("embeds", request.embed);
        chrome.tabs.remove(sender.tab.id, function() {
            var link = lsarray.shift("links");
            console.log("shift ok");
            if (link) {
                chrome.tabs.create({
                    active: false,
                    url: link
                });
            } else {
                // to finish
                var content = "";
                var embeds = lsarray.store("embeds");
                for (var j=0;j<embeds.length;j++) {
                    var embed = embeds[j];
                    content += embed + "\n";
                    if (j % 2 != 0) {
                        //content +="<br/>\n";
                    }
                }
                localStorage.embeds_str = content;
                localStorage.configing = "";
                chrome.tabs.executeScript(parseInt(localStorage.maintab_id), {
                    code: "window.alert('Done');"
                });
            }
        });
    } 
});
