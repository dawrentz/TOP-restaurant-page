import chickenPic from './images/Fried-Chicken-Leg.jpg';

export default function HomePageLoad(contentContainer) {
    const homeImg = new Image(500);
    homeImg.src = chickenPic;
    homeImg.setAttribute("alt", "some chicken");
    contentContainer.appendChild(homeImg);

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Chicken";
    contentContainer.appendChild(homeTitle);
    
    const homeInfo = document.createElement("div");
    homeInfo.textContent = "We got it";
    contentContainer.appendChild(homeInfo);
}