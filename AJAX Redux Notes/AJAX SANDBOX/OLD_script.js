(function() {
    document.getElementById("jax").append("Hello World");
    var myRequest = new XMLHttpRequest();

    //skip feature check

    //when a response comes in
    myRequest.open("GET", "../../wordsdb/text.json", true);

    myRequest.onreadystatechange = function() {
            var ready = myRequest.readyState;
            if (ready === 4) {
                var db = myRequest.responseText;
                var output = '';
                for (var key in db.key) {
                    output += "<br>" + db.key;
                }
                var update = document.getElementById('jax');
                update.innerHTML = output;
            }
        }
        //THEN configure and send
    myRequest.send(null);
})();
