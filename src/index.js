import setTabsContent from "./initial-page-load";
import _ from 'lodash';
import './style.css';
( () => {
    const homeButton = document.querySelector("header > nav > button.home");
    const menuButton = document.querySelector("header > nav > button.menu");
    const aboutButton = document.querySelector("header > nav > button.about");
    const tabs = setTabsContent();
    homeButton.addEventListener("click" , tabs.homePage);
    menuButton.addEventListener("click" , tabs.menuPage);
    aboutButton.addEventListener("click" , tabs.contactPage);
})();