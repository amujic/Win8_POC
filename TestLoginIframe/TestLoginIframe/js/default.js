// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    window.onload = function () {

        window.addEventListener("message", showMyMessage);
    }


    function showMyMessage(e) {

        var output = document.getElementById("output");

        if (e.data == "hide") {
            document.getElementById("loginiframe").style.visibility = "hidden";
            output.style.styleFloat = "left";

        }
        else {
            document.getElementById("loginiframe").style.visibility = "";

        }
        output.innerText = e.data;


    }

})();
