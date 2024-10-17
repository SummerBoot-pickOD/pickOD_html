$(document).ready(function () {
    $("#header").load("../main/header.html", function(response, status, xhr) {
        if (status == "error") {
            console.log("Error: " + xhr.status + " - " + xhr.statusText);
        }
    });

    $("#footer").load("../main/footer.html", function(response, status, xhr) {
        if (status == "error") {
            console.log("Error: " + xhr.status + " - " + xhr.statusText);
        }
    });
});