window.onload = function () {

    document.getElementById("submit").addEventListener("click", submitForm, false);
    

}

function submitForm(e) {

    var message = document.getElementById("msg").value;
    window.parent.postMessage(message, "/")


}