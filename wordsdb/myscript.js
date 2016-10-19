//1. create a request
var request;
//2. check for IE
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
//3. open the request
request.open('GET', 'text.json');

//4. monitor the comms
request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            // //4.5 parse that shit!
            var list = JSON.parse(request.responseText);
            //5. If all is well, create output
            var output = '';
            for (var entry in list) {
                if (list.hasOwnProperty(entry)) {
                    output += '<h1>' + entry + '</h1>';
                }
                for (var subset in list[entry]) {
                    output += '<h2>' + subset + ': ' + list[entry][subset] +
                        '</h2>';
                }
            }

            //7. Create update var to link to the toehold in the document
            var update = document.getElementById('demo');
            //8. use a (?) method on 'update' to 'own' the innerHTML
            update.innerHTML = output;


        } // state & status condition
    } //comms check fn
    //9. finally the send();
request.send();
