/*jslint node: true */

var fs = require('fs');
var times = ['+12:00:00', '+11:30:00', '+11:00:00', '+10:30:00', '+10:00:00', '+09:30:00', '+09:00:00', '+08:30:00', '+08:00:00', '+07:30:00', '+07:00:00', '+06:30:00', '+06:00:00', '+05:30:00', '+05:00:00', '+04:30:00', '+04:00:00', '+03:30:00', '+03:00:00', '+02:30:00', '+02:00:00', '+01:30:00', '+01:00:00', '+00:30:00', '+00:00:00', '-00:30:00', '-01:00:00', '-01:30:00', '-02:00:00', '-02:30:00', '-03:00:00', '-03:30:00', '-04:00:00', '-04:30:00', '-05:00:00', '-05:30:00', '-06:00:00', '-06:30:00', '-07:00:00', '-07:30:00', '-08:00:00', '-08:30:00', '-09:00:00', '-09:30:00', '-10:00:00', '-10:30:00', '-11:00:00', '-11:30:00', '-12:00:00'];

var i = 0;

var data = JSON.parse(fs.readFileSync('feedData/routes.json').toString());
console.log('sasad');

setInterval(function () {
    var dataFile = JSON.parse(fs.readFileSync('feedData/routes.json').toString());
    if (i == 48)
        i = 0;
    else if (i !== 0)
        i++;
    else i = 1;
    dataFile.timezone = times[i];
    console.log(dataFile.timezone);
    fs.writeFile('feedData/routes.json', JSON.stringify(dataFile));
}, 1000);
