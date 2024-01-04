let images = [
    
    "/imgs-for-slide/img2.jpg",
    "/imgs-for-slide/img1.jpg",
    "/imgs-for-slide/img3.jpeg",
    "/imgs-for-slide/img4.jpg",
    "/imgs-for-slide/img5.webp",
    "/imgs-for-slide/img6.jpg",
    "/imgs-for-slide/img7.jpg",
    "/imgs-for-slide/img8.jpg",
    "/imgs-for-slide/img9.jpg",
    "/imgs-for-slide/img10.avif",
    "/imgs-for-slide/img11.jpg",
]
let num = 0;

function next(){
    let slider = document.getElementById("slider")
    num++

    if(num >= images.length){
        num = 0
    }
    slider.src = images[num]
}

function prev(){
    let slider = document.getElementById("slider")
    num--

    if(num < 0){
        num = images.length-1
    }
    slider.src = images[num]
}