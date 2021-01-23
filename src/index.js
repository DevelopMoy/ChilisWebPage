import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import './css/responsive.css'
import './css/secondDIvResponsive.css'
import {addCarouselEvents} from "./js/animateCarousel";
import {addSmoothHref} from "./js/smoothScroll";
import {addScrollEvent} from "./js/scrollEvent";

addCarouselEvents();
addSmoothHref();
addScrollEvent();