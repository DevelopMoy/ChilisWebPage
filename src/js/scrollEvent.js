
let last_known_scroll_position = 0;
let ticking = false;
const unlistedList=document.getElementsByClassName("elemNav");
const positionsY=[];

export const addScrollEvent = ()=>{
    prepareElements();

    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                doSomething(last_known_scroll_position);
                ticking = false;
            });
        }
        ticking = true;
    });
}

const prepareElements = ()=>{
    for (let element of unlistedList){
        positionsY.push(document.querySelector(element.hash).offsetTop);
    }
}

function doSomething(scroll_pos) {
    if (scroll_pos>=0&&scroll_pos<=positionsY[1]){
        unlistedList[0].parentElement.classList.add("active");
        unlistedList[1].parentElement.classList.remove("active");
    }else{
        if (scroll_pos>=positionsY[1]&&scroll_pos<=positionsY[2]){
            unlistedList[1].parentElement.classList.add("active");
            unlistedList[0].parentElement.classList.remove("active");
            unlistedList[2].parentElement.classList.remove("active");
        }else{
            if (scroll_pos>positionsY[2]){
                unlistedList[2].parentElement.classList.add("active");
                unlistedList[1].parentElement.classList.remove("active");
            }
        }
    }

}

