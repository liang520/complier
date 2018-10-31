const interpreter=require('./src/main');
interpreter.run(`(function(){
    console.log(5)
})()`,{'process':this})