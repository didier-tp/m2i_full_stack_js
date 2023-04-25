var stdin = process.stdin;
var stdout = process.stdout;
function ask(question, callback) {
    stdin.resume();
    stdout.write(question + ": ");
    stdin.once('data', function (data) {
        data = data.toString().trim();
        callback(data);
    });
}
//utilisation chaînée avec callbacks imbriquées:
ask("x", function (valX) {
    var x = Number(valX); 
    console.log("code déclenché en différé lorsque x aura été saisi ,x="+x)
    ask("y", function (valY) {
        var y = Number(valY);
        var res = x + y;
        console.log("res = (x+y)=" + res);
        process.exit();
    });
});
console.log("suite immediate sans attente bloquante ...")