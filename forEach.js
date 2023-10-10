var array = [32, 45, 12, 56];

array.forEach(
    function(item) {
    console.log(item +1);
});

/*
    Example 2:
*/

var list = ['Mario', 'Valentina', 'Victoria'];

var saludo = function(name) {
    window.alert('Hola ' + name + '!');
}

list.forEach(
    function(item) {
        saludo(item);
    }
)