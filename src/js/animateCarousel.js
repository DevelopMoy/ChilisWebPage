const totalImages = 5; // HOW MANY IMAGES THE CAROUSEL WILL HAVE, MINIMUM VALUE -> 1
const carouselArea = document.querySelector("#areaImgSld");
let imgIndex=1;
const images = document.querySelectorAll(".carImg");

export const addCarouselEvents = ()=>{
    addButtonsEvents();
}

const changeImg = (direction)=>{
    const imgIndex=goDirection(direction);
    updateImage(imgIndex);
}

const goDirection =(direction)=>{
    // 0 FOR LEFT, 1 FOR RIGHT
    if (direction){
        imgIndex++;
        imgIndex=imgIndex<=totalImages?imgIndex:1;
    }else{
        imgIndex--;
        imgIndex=imgIndex>=1?imgIndex:totalImages;
    }
    return imgIndex;
}

const updateImage = (imageNumber)=>{
    const image = images[imageNumber-1];
    imageNumber=imageNumber-2;
    if (imageNumber<0){
        imageNumber=totalImages-1;
    }
    if (imageNumber>=totalImages){
        imageNumber=0;
    }
    const prevImage = images[imageNumber];
    console.log("IMAGEN ACTUAL "+image.src);
    console.log("IMAGEN ANTERIOR "+prevImage.src);
    image.classList.remove("hiddeCar");
    image.classList.add("showCar");
    prevImage.classList.remove("showCar");
    prevImage.classList.add("hiddeCar");
}

const addButtonsEvents = ()=>{
    carouselArea.querySelector("p:first-child").addEventListener("click",()=>{changeImg(0)});
    carouselArea.querySelector("p:last-child").addEventListener("click",()=>{changeImg(1)});
    setInterval(()=>{changeImg(1)},2000);
}