export function navigationCreator(objArr,Tag,buttonNeeded){const headerElement = document.createElement(Tag) ;
  console.log(Tag , 'in navigationCreator')
const navElement = document.createElement('nav');
const ulElement = document.createElement('ul');
for( const [navText,navLink] of Object.entries(objArr)) {
  const listElement = document.createElement('li') ;
  if(navLink){
  const anchorLink = document.createElement('a') ;
  anchorLink.href = navLink ;
  anchorLink.appendChild(document.createTextNode(navText)) ;
  if(buttonNeeded)
  {
    const button = document.createElement('button');
    button.appendChild(anchorLink) ;
    listElement.appendChild(button)
  }
  else
  listElement.appendChild(anchorLink);
  }
  else {
    listElement.appendChild(document.createTextNode(navText));
  } 
  ulElement.appendChild(listElement) ;
}
navElement.appendChild(ulElement) ;
headerElement.appendChild(navElement) ;
return headerElement ;
}