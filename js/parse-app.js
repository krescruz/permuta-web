(function(){

    Parse.initialize("PPIfD7DOoAuMI1ikE5YRiyF5nLHRT2JwSTBlcypJ", "7rT12DIXshDZy5fvfIXu6hM3jqQtPLWwcoETsj8f");
    
    var messageParseCls = Parse.Object.extend("Message");
    var messageParseCls = new messageParseCls();

    messageParseCls.save({'message': "Hola mundo"}, {
        success: function(object) {
            console.log("Success");
        },
        error: function(model, error) {
            console.log("Error");
        }
    });

})();