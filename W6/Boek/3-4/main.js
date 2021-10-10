var scope = 'superscope';
var aantal = 0;
function testScope() {
    aantal++;
    var scope = 'lokalescope';
    console.log('\t Dit is test nummer: ' + aantal);
    console.log('\t Function scope is: ' + scope);
}
console.log('\t Script scope is: ' + scope);
testScope();
testScope();
