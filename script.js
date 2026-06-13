function searchGoogle() {
    let query = document.getElementById("searchInput").value;

    if(query.trim() !== "") {
        window.open(
            "https://www.google.com/search?q=" +
            encodeURIComponent(query),
            "_blank"
        );
    }
}

function feelingLucky() {
    window.open("https://www.google.com", "_blank");
}