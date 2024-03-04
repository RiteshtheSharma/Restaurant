
import { navigationCreator } from "./DomManipulationUtil";

import 'normalize.css';
import './style.css'

export const headerElement = navigationCreator({
  "Home":'/',
  "Contact" : '/Restaurant/contact/',
  "Menu" : '/Restaurant/menu/'
},'header',true) ;

const homeListElement =  headerElement.querySelector('li');
const contactListElement = headerElement.querySelectorAll('li')[1];
const menuListElement = headerElement.querySelectorAll('li')[2];
if(location.href.indexOf('contact')>-1)
contactListElement.classList.add('tabbed');
else if(location.href.indexOf('menu')>-1)
menuListElement.classList.add('tabbed') ;
else homeListElement.classList.add('tabbed') ;
homeListElement.addEventListener('click',(e)=>{
  location.href = `/`
  homeListElement.className = 'tabbed';
  contactListElement.className = '' ;
  menuListElement.className = '' ;
})
contactListElement.addEventListener('click',(e)=>{
  location.href = `/Restaurant/contact/`
  contactListElement.className = 'tabbed' ;
  homeListElement.className = '' ;
  menuListElement.className = '' ;
})
menuListElement.addEventListener('click',(e)=>{
  location.href = `/Restaurant/menu/`
  menuListElement.className = 'tabbed' ;
  homeListElement.className = '' ;
  contactListElement.className = '' ;
})




