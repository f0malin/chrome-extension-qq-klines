$(document).ready(function() {
    $("#config").click(function() {
        console.log("config clicked");
        amplify.store("embeds", []);
        chrome.tabs.executeScript(null, {
            file: 'inject.js'  //'document.body.style.backgroundColor="red";console.log("dddfff");'
        }, function(result) {
            var links = result[0];
            console.log("got links");
            var link = links.shift();
            amplify.store("links", links);
            amplify.store("configing", true);
            chrome.tabs.create({
                active: false,
                url: link
            });
        }); 
    });
    $("#show").click(function() {
        chrome.tabs.create({
            active: false,
            url: "http://stockapp.finance.qq.com/mstats/"
        });
    });
});

