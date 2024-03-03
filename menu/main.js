import '../main.css';
import {CardDomCreator} from '../DomManipulationUtil';
import podigreePhoto from '/assets/Porridge.webp';
import idliPhoto from "/assets/idli_dosa.jpg"; 
import bagelPhoto from "/assets/bagel.webp";
import sandWitchPhoto from "/assets/sandwich.jpeg";
import french_toastPhoto from "/assets/french_toast.jpeg"; 
import fruitPhoto from "/assets/fruit.jpg"; 
import PanCakePhoto from '/assets/pancake.jpeg'
import toastAndJamPhoto from "/assets/toast_and_jam.jpg";
import CoffeePhoto from "/assets/coffee.jpeg"; 
import blackTeaPhoto from "/assets/Black_Tea.jpg";
const mainElem = document.createElement('main');
const SectionElem = document.createElement("section");
SectionElem.classList.add("flex");
SectionElem.classList.add("c");
SectionElem.classList.add("pos_rel");
SectionElem.appendChild(
  CardDomCreator.header("carrot", "h1", "Menu")
);
SectionElem.appendChild(
  CardDomCreator.header("menu_item", "h1", "Beverages")
);
SectionElem.appendChild(
  CardDomCreator.info(
    "Black Tea",
    "top",
    [
     " A warm, sweet tea without refined sugar but stavea, made with the highest quality tea leaves to start your day off right!",
    ],
    {
      cost:2,
      imgName:"black tea",
      imgSrc :blackTeaPhoto
    }
  )
);
SectionElem.appendChild(
  CardDomCreator.info(
    "Coffee",
    "top",
    [
     " Freshly roasted, single-origin coffees ",
    ],
    {
      cost:1,
      imgName:"Coffee",
      imgSrc :CoffeePhoto
    }
  )
);
SectionElem.appendChild(
  CardDomCreator.header("menu_item", "h1", "Sides")
);
SectionElem.appendChild(
  CardDomCreator.info(
    " Toast and Jam",
    "top",
    [
     " A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam. ",
    ],
    {
      cost:2,
      imgName:"toast and jam",
      imgSrc :toastAndJamPhoto
    }
  )
);
SectionElem.appendChild(
  CardDomCreator.info(
    " Fresh Fruit",
    "top",
    [
     " A small bowl of fresh fruit, whatever we find at the market for the day.",
    ],
    {
      cost:1,
      imgName:"Fresh Fruit",
      imgSrc :fruitPhoto
    }
  )
);

SectionElem.appendChild(
  CardDomCreator.header("menu_item", "h1", "Dishes")
);

SectionElem.appendChild(
  CardDomCreator.info(
    "Pancakes",
    "top",
    [
     " A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
    ],
    {
      cost:4,
      imgName:"Pancakes",
      imgSrc :PanCakePhoto
    }
  )
);
SectionElem.appendChild(
  CardDomCreator.info(
    "French Toast",
    "top",
    [
     " Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
    ],
    {
      cost:3,
      imgName:"French Toast",
      imgSrc :french_toastPhoto
    }
  )
);

SectionElem.appendChild(
  CardDomCreator.info(
    "Sandwich",
    "top",
    [
     "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
    ],
    {
      cost:5,
      imgName:"Sandwitch",
      imgSrc :sandWitchPhoto
    }
  )
);

SectionElem.appendChild(
  CardDomCreator.info(
    "Bagel",
    "top",
    [
      "A batch of these lovely vegan bagels and serve them with favourite dairy-free spread.",
    ],
    {
      cost:3,
      imgName:"Bagel",
      imgSrc :bagelPhoto
    }
  )
);

SectionElem.appendChild(
  CardDomCreator.info(
    "Idli Dosa",
    "top",
    [
      " THE TEXTURE IS UNPARALLELED!",
    ],
    {
      cost:3,
      imgName:"Idli Dosa",
      imgSrc :idliPhoto
    }
  )
);


SectionElem.appendChild(
  CardDomCreator.info(
    "Oliver twist 's Porridge",
    "top",
    [
      " THE TEXTURE IS UNPARALLELED!",
    ],
    {
      cost:1,
      imgName:"Oliver twist 's Porridge",
      imgSrc :podigreePhoto
    }
  )
);

mainElem.appendChild(SectionElem);

export const MenuElem = mainElem ;

    