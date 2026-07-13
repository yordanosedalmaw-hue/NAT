
    // load pages
   function loadpag(path) {
    window.location.href = path;
     }
     function headmenu(lan){
        fetch("json/home.json")
    .then(response => response.json())
    .then(menu => {
    const menubar=document.querySelector(".menubare");
    const login=document.getElementById("login");
    const language=document.getElementById("lachooser"); 
   const menus=document.getElementById("menus");
    menus.textContent=menu[0].head.specialmenu[lan];
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
     headmenu("en");
    // DISPLAY ALL MENU
      // DISPLAY ALL MENU
   fetch("json/special _menu.json")
    .then(response => response.json())
    .then(menu => {

        const container = document.querySelector(".allspecialmenus");

        menu.forEach(item => {

            const card = document.createElement("div");
            card.className = "specialmenus";

            card.innerHTML = `
               
                <img src="${item.image}" alt="${item.name["en"]}">
                <div class="textdisplay">
                <h2>${item.name["en"]}</h2>
                <p style="width: 300px;">${item.title["en"]}</p>
                <p>${item.detail["en"]}</p>
                <span class="price">$${item.price}</span>
                <button>ORDER NOW</button>
                <br>
                <br>
                <hr>
            `;

            container.appendChild(card);
        });

    })
    .catch(error => console.error(error)); 
    function special_menu_load(languge){
         fetch("json/special _menu.json")
    .then(response => response.json())
    .then(menu => {

        const container = document.querySelector(".allspecialmenus");
        container.innerHTML="";

        menu.forEach(item => {

            const card = document.createElement("div");
            card.className = "specialmenus";

            card.innerHTML = `
               
                <img src="${item.image}" alt="${item.name[languge]}">
                <div class="textdisplay">
                <h2>${item.name[languge]}</h2>
                <p style="width: 300px;">${item.title[languge]}</p>
                <p>${item.detail[languge]}</p>
                <span class="price">$${item.price}</span>
                <button>ORDER NOW</button>
                <br>
                <br>
                <hr>
            `;

            container.appendChild(card);
        });

    })
    .catch(error => console.error(error)); 
    }
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
        special_menu_load("am");
        headmenu("am")
        languges.style.display="none";
    });
     English.addEventListener("click",()=>{
        special_menu_load("en");
        headmenu("en")
        languges.style.display="none";
    });
     Oromic.addEventListener("click",()=>{
        special_menu_load("om");
        headmenu("om")
        languges.style.display="none";
    });
     Tigrinya.addEventListener("click",()=>{
        special_menu_load("ti");
        headmenu("ti")
        languges.style.display="none";
    })