import "./main.css";
import { CardDomCreator } from "./DomManipulationUtil";
const mainElem = document.createElement("main");
const SectionElem = document.createElement("section");
SectionElem.classList.add("flex");
SectionElem.classList.add("c");
SectionElem.classList.add("pos_rel");
SectionElem.appendChild(
  CardDomCreator.header("carrot", "h1", "Vegan 's Meals")
);
const RabbitIconDomElement = document.createElement("div");
RabbitIconDomElement.classList.add("rabbit_icon");
SectionElem.appendChild(RabbitIconDomElement);
SectionElem.appendChild(
  CardDomCreator.info(
    "The White Rabbit",
    "bottom",
    [
      ` Vegan's Meal has the best meals! The atmosphere and customer
service make you feel like you are sitting in the middle of
the woods, eating like a rabbit! This is exactly the kind of
place that I like to return to again and again.`,
    ],
    null
  )
);
SectionElem.appendChild(
  CardDomCreator.info(
    "Hours",
    "top",
    [
      " Sunday: 8am - 8pm",
      "Monday: 6am - 6pm",
      "Tuesday: 6am - 6pm",
      "Wednesday: 6am - 6pm",
      "Thursday: 6am - 10pm",
      "Friday: 6am - 10pm",
      "Saturday: 8am - 10pm",
    ],
    null
  )
);

SectionElem.appendChild(
  CardDomCreator.info(
    "Location",
    "top",
    [
      `675 North Buena Vista Drive
      Lake Buena Vista, Florida 32830`,
    ],
    null
  )
);
mainElem.appendChild(SectionElem);

export const HomeElem = mainElem ;
