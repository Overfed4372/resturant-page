function setTabsContent () {
    const content = document.querySelector("#content");
    const homePage = function () {
        const homeDiv = document.createElement("div");
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        content.innerHTML = "";
        h1.textContent = "This is my resturant!";
        h2.textContent = "It's the best resturant ever you could order food at!";
        homeDiv.classList.add("home-page");
        homeDiv.append(h1,h2);
        content.append(homeDiv);
    }
    const menuPage = function () {
        const menuDiv = document.createElement("div");
        const Title = document.createElement('p');
        const description = document.createElement('p');
        content.innerHTML = "";
        Title.textContent = "Hot Khar";
        description.textContent = "This is the creepiest food you can ever eat in your lifetime!"; 
        menuDiv.classList.add("menu-page");
        menuDiv.append(Title,description);
        content.append(menuDiv);
    }
    const contactPage = function () {
        const contactDiv = document.createElement("div");
        const about = document.createElement('p');
        content.innerHTML = "";
        about.textContent = "We are the most powerful resturant in baking Khar's meat for you!";
        contactDiv.classList.add("contact-page");
        contactDiv.append(about);
        content.append(contactDiv);
    }
    return {homePage, menuPage, contactPage};
}
export default setTabsContent;