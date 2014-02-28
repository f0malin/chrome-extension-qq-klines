console.log("injected");
$(document).ready(function() {
    console.log("getting embeds");
    chrome.runtime.sendMessage({ask: "embed"}, function(res) {
        console.log("got embeds");
        $("body").html(res.embeds);
    });
});

