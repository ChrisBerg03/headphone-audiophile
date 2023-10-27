document
.getElementById("toggleBtn")
.addEventListener("click", function () {
    let menu = document.getElementById("menu");
    // IF THE MENU IS NOT SHOWING (HIDDEN)
    // SHOW THE MENU
    //
    // ELSE
    //
    // HIDE THE MENU
    if (
        menu.style.display === "none" ||
        menu.style.display === ""
    ) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});