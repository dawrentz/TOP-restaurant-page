import chickenPic from './images/Fried-Chicken-Leg.jpg';

export default function MenuPageLoad(contentContainer) {
    const homeImg = new Image(500);
    homeImg.src = chickenPic;
    homeImg.setAttribute("alt", "some chicken");
    contentContainer.appendChild(homeImg);

    const menuItem = document.createElement("h1");
    menuItem.textContent = "Chicken";
    contentContainer.appendChild(menuItem);
    
    const priceInfo = document.createElement("div");
    priceInfo.textContent = "50¢ a piece";
    contentContainer.appendChild(priceInfo);
    
    const specialsTitle = document.createElement("h1");
    specialsTitle.textContent = "Specials";
    contentContainer.appendChild(specialsTitle);
    
    const special1 = document.createElement("div");
    special1.textContent = "Half price on Tuesday";
    special1.style = "color: red";
    contentContainer.appendChild(special1);
}