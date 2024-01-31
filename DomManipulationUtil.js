export function navigationCreator(objArr, Tag, buttonNeeded) {
  const headerElement = document.createElement(Tag);
  console.log(Tag, "in navigationCreator");
  const navElement = document.createElement("nav");
  const ulElement = document.createElement("ul");
  for (const [navText, navLink] of Object.entries(objArr)) {
    const listElement = document.createElement("li");
    if (navLink) {
      const anchorLink = document.createElement("a");
      anchorLink.href = navLink;
      anchorLink.appendChild(document.createTextNode(navText));
      if (buttonNeeded) {
        const button = document.createElement("button");
        button.appendChild(anchorLink);
        listElement.appendChild(button);
      } else listElement.appendChild(anchorLink);
    } else {
      listElement.appendChild(document.createTextNode(navText));
    }
    ulElement.appendChild(listElement);
  }
  navElement.appendChild(ulElement);
  headerElement.appendChild(navElement);
  return headerElement;
}

export class CardDomCreator {

  static #proto(headerTagName, headerText) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("card");

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");
    cardBodyDiv.classList.add("flex");
    cardBodyDiv.classList.add("c");
    cardBodyDiv.classList.add("g2");
    cardBodyDiv.classList.add("vcenter");

    const WrapperDiv = document.createElement("div");
    WrapperDiv.classList.add("wrapper");

    const HeaderDiv = document.createElement(headerTagName);
    HeaderDiv.classList.add("card-heading");

    HeaderDiv.classList.add((headerTagName==="h1")?"cursive_font":"sub_head_font");
    HeaderDiv.appendChild(document.createTextNode(headerText));

    WrapperDiv.appendChild(HeaderDiv);
    cardBodyDiv.appendChild(WrapperDiv);
    mainDiv.appendChild(cardBodyDiv);
    return mainDiv;
  }

  static header(extraClasses, headerTagName, headerText) {
    const headerCardElement = CardDomCreator.#proto(headerTagName, headerText);
    if (typeof extraClasses === "string")
      for (let clName of extraClasses.split(" "))
        headerCardElement.classList.add(clName);
    return headerCardElement;
  }

  static info(headerText, headerSecPlacement, textArr, ImgSecObj) {
    const infoCardElement = CardDomCreator.header(null, "h3", headerText);
    const cardBodyWrapperDom = infoCardElement.querySelector(".wrapper");
    let CardtextBodyDomSec = document.createElement("div");
    CardtextBodyDomSec.classList.add("ml-3");

    for (let text of textArr) {
      const parah = document.createElement("p");
      parah.classList.add("card-text");
      parah.appendChild(document.createTextNode(text));
      CardtextBodyDomSec.appendChild(parah);
    }
    let ImgSecDom = null;
    if (ImgSecObj !==null && Object.entries(ImgSecObj).length !== 0) {
      console.log('called\n');
      ImgSecDom = document.createElement("div");

      ImgSecDom.classList.add("with-img");
      ImgSecDom.classList.add("flex");
      ImgSecDom.classList.add("space-bw");

      const ImgLabelDom = document.createElement("h3");
      ImgLabelDom.classList.add("sub_head_font");
      ImgLabelDom.appendChild(document.createTextNode(`$${ImgSecObj.cost}`));

      const ImgDom = document.createElement("img");
      ImgDom.classList.add("mt-3");
      ImgDom.setAttribute("width", "200");
      ImgDom.setAttribute("alt", ImgSecObj.imgName);
      ImgDom.setAttribute("src", ImgSecObj.imgSrc);
      ImgSecDom.appendChild(ImgLabelDom);
      ImgSecDom.appendChild(ImgDom);
    }

    if (headerSecPlacement === "bottom") {
      cardBodyWrapperDom.insertBefore(
        CardtextBodyDomSec,
        cardBodyWrapperDom.lastChild
      );
      if (ImgSecDom) {
        cardBodyWrapperDom.insertBefore(
          ImgSecDom,
          cardBodyWrapperDom.lastChild
        );
      }
    } else {
      cardBodyWrapperDom.appendChild(CardtextBodyDomSec);
      if (ImgSecDom) {
        cardBodyWrapperDom.appendChild(ImgSecDom);
      }
    }
    return infoCardElement;
  }
}
