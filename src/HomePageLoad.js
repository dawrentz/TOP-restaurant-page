export default function HomePageLoad() {
    const contentContainer = document.querySelector("#content");

    const homeImg = document.createElement("img");
    homeImg.setAttribute("src", "./images/Fried-Chicken-Leg.jpg");
    homeImg.setAttribute("alt", "some chicken");
    homeImg.style = "height: 500x; width: 500px;";

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Chicken";
    
    const homeInfo = document.createElement("div");
    homeInfo.textContent = "We got it";
    
    const homePhone = document.createElement("div");
    homePhone.textContent = "482-784-5566";

    
    contentContainer.appendChild(homeImg);
    contentContainer.appendChild(homeTitle);
    contentContainer.appendChild(homeInfo);
    contentContainer.appendChild(homePhone);
}

//place stlye in css 