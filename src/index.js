import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/generalStyles.css'
import './css/responsive.css'
import {addCarouselEvents} from "./js/animateCarousel";
import {addSmoothHref} from "./js/smoothScroll";

addCarouselEvents();
addSmoothHref();