import {MenuElem} from "./main";
import { headerElement } from "../header";
import { footerElem } from "../footer";


  document.getElementById(
    "app"
  ).appendChild(headerElement); 
  
  document.getElementById(
    "app"
  ).appendChild(MenuElem); 

  document.getElementById(
    "app"
  ).appendChild(footerElem);