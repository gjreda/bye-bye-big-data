// Icon created by: http://icons8.com/

var re = new RegExp('big.data|bigdata'); // in case I want to add more terms later
var i = 0;

$('a').each(function() {
    if ( this.href.toLowerCase().match(re) || this.innerText.toLowerCase().match(re)) {
        $(this).parent().toggle();
    }
});