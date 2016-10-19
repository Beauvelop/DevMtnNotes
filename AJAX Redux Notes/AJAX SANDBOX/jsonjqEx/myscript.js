$(document).ready(function() {
    $.getJSON('text.json', function(list) {
        var output = '';
        for (var entry in list) {
            if (list.hasOwnProperty(entry)) {
                output += '<h1>' + entry + '</h1>';
            }
            for (var subset in list[entry]) {
                output += '<h2>' + subset + ': ' +
                    list[entry][subset] + '</h2>';
            }
        }
        var update = document.getElementById('demo');
        update.innerHTML = output;
    }); //getJSON
}); //ready
