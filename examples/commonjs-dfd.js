_.mixin( require('../belated.js') );

function asyncEvent(){
    var dfd = new _.Deferred();
    setTimeout(function(){
        dfd.resolve("hurray");
    }, Math.floor(Math.random()*100));
    setTimeout(function(){
        dfd.reject("sorry");
    }, Math.floor(Math.random()*100));
    return dfd.promise();
}
// Attach a done and fail handler for the asyncEvent
asyncEvent().then(
    function(status){
        console.log( status+', things are going well' );
    },
    function(status){
        console.log( status+', you fail this time' );
    }
);

