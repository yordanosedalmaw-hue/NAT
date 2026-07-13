   
    // load pages
   function loadpag(path) {
    window.location.href = path;
     }
     //lisen
     function headmenu(lan){
        fetch("json/home.json")
    .then(response => response.json())
    .then(menu => {
    const menubar=document.querySelector(".menubare");
    const login=document.getElementById("login");
    const language=document.getElementById("lachooser"); 
    const menus=document.getElementById("menus");
    menus.textContent=menu[0].head.menu[lan];
    language.textContent=menu[0].button.languge[lan];
    menubar.innerHTML= `
    <a href="#"class="myLink" id="home">${menu[0].head.home[lan]}</a>
    <a href="#"class="myLink" id="special_menu">${menu[0].head.specialmenu[lan]}</a>
    <a href="#"class="myLink" id="menu">${menu[0].head.menu[lan]}</a>
 `;
 login.textContent=menu[0].button.login[lan];
  document.getElementById("home").addEventListener("click", () => {
    loadpag("index.html")
    });
     document.getElementById("special_menu").addEventListener("click", () => {
    loadpag("Specialmenu.html")
});
      document.getElementById("menu").addEventListener("click", () => {
    loadpag("menu.html")
});
    })
     }
    
    // DISPLAY ALL MENU
    let languge="en";
    let Filtered=null;
let menuData = [];
   fetch("json/menu.json")
    .then(response => response.json())
    .then(menu => {
        menuData=menu;
        displayMenu(menuData);
    })
    .catch(error => console.error(error));  
function displayMenu(items) {
    const container = document.querySelector(".cards");
    container.innerHTML = ""; // Clear old cards

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name[languge]}">
            <h2>${item.name[languge]}</h2>
            <p>${item.title[languge]}</p>
            <span class="price">$${item.price}</span>
        `;
         
        container.appendChild(card);
    });
}function changeLanguage(lang) {
    document.querySelectorAll(".lang-text").forEach(text => {
        text.textContent = text.dataset[lang];
    });
}

    const buttons=document.querySelectorAll(".menucatagory button");
    buttons.forEach(
        button=>{
            button.addEventListener("click",()=>{
                const category = button.dataset.category;
                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                if(category === "ALL"){
                     Filtered = null;
                    displayMenu(menuData);
                }else{
                    const filtered = menuData.filter(item => item.category.en === category);
                    Filtered=filtered;
                    displayMenu(filtered)
                }
            })
        }
    )
    const lachooser=document.getElementById("lachooser");
    lachooser.addEventListener("click",()=>{
        const languges=document.getElementById("languges");
        languges.style.display="flex";
    })
    const Amharic=document.getElementById("Amharic");
    const English=document.getElementById("English");
    const Oromic=document.getElementById("Oromic");
    const Tigrinya=document.getElementById("Tigrinya");
    const languges=document.getElementById("languges");
    Amharic.addEventListener("click",()=>{
        languge="am";
        changeLanguage("am");
        headmenu("am");
        if(Filtered===null){
            displayMenu(menuData);
        }else{
            displayMenu(Filtered);
        }
        languges.style.display="none";
    });
     English.addEventListener("click",()=>{
        languge="en";
        changeLanguage("en");
        headmenu("en");
        if(Filtered===null){
            displayMenu(menuData);
        }else{
            displayMenu(Filtered);
        }
        languges.style.display="none";
    });
     Oromic.addEventListener("click",()=>{
        languge="om";
        changeLanguage("om");
        headmenu("om");
        if(Filtered===null){
            displayMenu(menuData);
        }else{
            displayMenu(Filtered);
        }
        languges.style.display="none";
    });
     Tigrinya.addEventListener("click",()=>{
        languge="ti";
        changeLanguage("ti");
        headmenu("ti");
        if(Filtered===null){
            displayMenu(menuData);
        }else{
            displayMenu(Filtered);
        }
        languges.style.display="none";
    })
    headmenu("en");