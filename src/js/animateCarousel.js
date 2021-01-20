const totalImages = 5; // HOW MANY IMAGES THE CAROUSEL WILL HAVE, MINIMUM VALUE -> 1
const carouselArea = document.querySelector("#areaImgSld");
let imgIndex=1;

export const addCarouselEvents = ()=>{
    addButtonsEvents();
}

const changeImg = (direction)=>{ // 0 FOR LEFT, 1 FOR RIGHT
    if (direction){
        imgIndex++;
        imgIndex=imgIndex<=totalImages?imgIndex:1;
    }else{
        imgIndex--;
        imgIndex=imgIndex>=1?imgIndex:totalImages;
    }
    updateImage(imgIndex);
}

const updateImage = (imageNumber)=>{
    const image = carouselArea.querySelector("img");
    image.src=`./assets/productsImg/p${imageNumber}.png`;
}

const addButtonsEvents = ()=>{
    carouselArea.querySelector("p:first-child").addEventListener("click",()=>{changeImg(0)});
    carouselArea.querySelector("p:last-child").addEventListener("click",()=>{changeImg(1)});
    setInterval(()=>{changeImg(1)},2000);
}