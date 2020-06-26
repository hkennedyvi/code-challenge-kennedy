togglePopup = () => {
    document.getElementById("explore-popup").classList.toggle("active");
    document.getElementById("main-header").style.opacity = 0;
}

closeWindow = () => {
    document.getElementById("explore-popup").classList.toggle("active");
    document.getElementById("main-header").style.opacity = 1;
}