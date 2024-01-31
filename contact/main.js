
import '../main.css'
import {CardDomCreator} from '../DomManipulationUtil'

const mainElem = document.createElement('main');
const SectionElem = document.createElement('section') ;
SectionElem.classList.add('flex');
SectionElem.classList.add('c') ;
SectionElem.classList.add('pos_rel');
SectionElem.appendChild(
  CardDomCreator.header("carrot fit-content", "h1", "Contact Us")
);
SectionElem.appendChild(
  CardDomCreator.info(
    "Mr White Rabbit",
    "top",
    [
      " Chef  ",
      " 555-555-5554 ",
      "totallyRealEmail@notFake.com"
    ],
    null
  )
);
SectionElem.appendChild(
  CardDomCreator.info(
    "Mr Black Rabbit",
    "top",
    [
      "Waiter",
      " 555-555-5555 ",
      "totallyRealEmail@notFake.com"
    ],
    null
  )
);
SectionElem.appendChild(
  CardDomCreator.info(
    "Mr Parrot",
    "top",
    [
      "Manager",
      " 555-555-5556 ",
      "totallyRealEmail@notFake.com"
    ],
    null
  )
);

mainElem.appendChild(SectionElem);
document.getElementById(
    "app"
  ).appendChild(
    mainElem
  ) 
