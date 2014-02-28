var links = document.querySelectorAll("td.dt-col1 a");
var re = new RegExp('http://stockhtm.finance.qq.com/astock/ggcx/.*.htm');
var rts = [];
for (var i=0;i<links.length;i++) {
    if (re.test(links[i].href)) {
        console.log(links[i].href);
        rts.push(links[i].href);
    }
}

rts;

