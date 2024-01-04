const sideMenu = document.getElementById("side-bar")
const sideMenuOpenBtn = document.getElementById("open-menu")
const sideMenuCloseBTn = document.getElementById("close-menu")
const sideMenuElem = document.querySelectorAll(".mobile-menu a")

sideMenuOpenBtn.addEventListener('click', function(){
    sideMenu.style.transform = "translateX(0px)"
})
sideMenuCloseBTn.addEventListener('click', function(){
    sideMenu.style.transform = "translateX(500px)"
})
for(let i=0; i < sideMenuElem.length; i++){
    sideMenuElem[i].addEventListener('click', function(){
        sideMenu.style.transform = "translateX(500px)"
    })
}

