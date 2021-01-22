const totalImages = 5; // HOW MANY IMAGES THE CAROUSEL WILL HAVE, MINIMUM VALUE -> 1
const carouselArea = document.querySelector("#areaImgSld");
let imgIndex=1;
const images = document.querySelectorAll(".carImg");

export const addCarouselEvents = ()=>{
    addButtonsEvents();
}

const changeImg = (direction)=>{
    const imgIndex=goDirection(direction);
    updateImage(imgIndex,direction);
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

const updateImage = (imageNumber,direction)=>{
    imageNumber--;
    const image = images[imageNumber];

    if(direction){
        imageNumber--;
        if (imageNumber<0){
            imageNumber=totalImages-1;
        }
    }else{
        imageNumber++;
        if(imageNumber>totalImages-1){
            imageNumber=0;
        }
    }

    const auxImage = images[imageNumber];
    auxImage.classList.remove("showCar");
    auxImage.classList.add("hiddeCar");
    image.classList.remove("hiddeCar");
    image.classList.add("showCar");
}

const addButtonsEvents = ()=>{
    carouselArea.querySelector("p:first-child").addEventListener("click",()=>{changeImg(0)});
    carouselArea.querySelector("p:last-child").addEventListener("click",()=>{changeImg(1)});
    setInterval(()=>{changeImg(1)},100000);
}