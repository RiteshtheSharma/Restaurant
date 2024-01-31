import '../main.css'
import {CardDomCreator} from '../DomManipulationUtil'
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
      imgSrc :"../src/assets/Black_Tea.jpg"
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
      imgSrc :"../src/assets/coffee.jpeg"
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
      imgSrc :"../src/assets/toast_and_jam.jpg"
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
      imgSrc :"../src/assets/fruit.jpg"
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
      imgSrc :"../src/assets/fruit.jpg"
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
      imgSrc :"../src/assets/french_toast.jpeg"
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
      imgSrc :"../src/assets/sandwich.jpeg"
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
      imgSrc :"../src/assets/bagel.webp"
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
      imgSrc :"../src/assets/idli_dosa.jpg"
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
      imgSrc :"../src/assets/Porridge.webp"
    }
  )
);

mainElem.appendChild(SectionElem);
document.getElementById(
    "app"
  ).appendChild(
    mainElem 
  ) ;

    