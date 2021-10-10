let scope = 'superscope';
let aantal = 0;
function testScope() {
    aantal++;
    let scope = 'lokalescope';
    console.log('\t Dit is test nummer: ' + aantal);
    console.log('\t Function scope is: ' + scope);
}

console.log('\t Script scope is: ' + scope);
testScope()
testScope()