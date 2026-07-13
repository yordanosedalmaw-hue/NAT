  const languges=document.getElementById("languges");
  function homepage(lan){

     fetch("json/home.json")
    .then(response => response.json())
    .then(menu => {
     const login=document.getElementById("login");
     const menubar=document.querySelector(".menubare");
     const language=document.getElementById("lachooser");  
     const follow=document.getElementById("Follow");  
     const copyrigh=document.getElementById("copyrigh"); 
     
     menubar.innerHTML= `
    <a href="#"class="myLink" id="home">${menu[0].head.home[lan]}</a>
    <a href="#"class="myLink" id="special_menu">${menu[0].head.specialmenu[lan]}</a>
    <a href="#"class="myLink" id="menu">${menu[0].head.menu[lan]}</a>
 `;
 follow.textContent=menu[0].Follow[lan];
 login.textContent=menu[0].button.login[lan];
 language.textContent=menu[0].button.languge[lan];
 language.addEventListener("click", (event) => {
    event.stopPropagation();
    languges.style.display = "block";
    languges.style.textAlign="center";
});


languges.addEventListener("click", (event) => {
    event.stopPropagation(); 
});


document.addEventListener("click", () => {
    languges.style.display = "none";
});
 
 
 document.getElementById("home").addEventListener("click", () => {
    loadpag("index.html")
    });
     document.getElementById("special_menu").addEventListener("click", () => {
    loadpag("Specialmenu.html")
});
      document.getElementById("menu").addEventListener("click", () => {
    loadpag("menu.html")
});
const display2= document.querySelector(".display");
            display2.innerHTML = `
           <div class="txtdisplay">
           <div class="onestop">
            <h2>${menu[0].display.firstTxt[lan]}</h2>
           </div>
           <h1>${menu[0].display.secondTxt[lan]}</h1>
           <h2>${menu[0].display.thredTxt[lan]}</h2>
           <p >${menu[0].display.forthTxt[lan]}</p>
           <button>${menu[0].button.order[lan]}</button>
           </div>
           <div class="imag">
            <img src="${menu[0].display.image}" alt="">
           </div>
            `;
    const contact=document.querySelector(".usefullinks");
    const Company=document.querySelector(".Company");
    const Legal=document.querySelector(".Legal");
    const contact_us=document.querySelector(".contact_us");
    contact.innerHTML=`
       <h2>${menu[0].Title.footer_h2[lan]}</h2>
            <a href="#">${menu[0].head.home[lan]}</a>
            <a href="Specialmenu.html">${menu[0].head.specialmenu[lan]}</a>
            <a href="menu.html">${menu[0].head.menu[lan]}</a>
    `
    Company.innerHTML=`
    
              <h2>${menu[0].Title.Company[lan]}</h2>
            <a href="#">${menu[0].Company.OurTeam[lan]}</a>
            <a href="Specialmenu.html">${menu[0].Company.Careers[lan]}</a>
            <a href="menu.html">${menu[0].Company.Blog[lan]}</a>
            <a href="#">${menu[0].Company.AbountUs[lan]}</a>
            <a href="#">${menu[0].Company.News[lan]}</a>`;
    Legal.innerHTML=`
     <h2>${menu[0].Title.Legal[lan]}</h2>
            <a href="#">${menu[0].Legal.TermsConditions[lan]}</a>
            <a href="Specialmenu.html">${menu[0].Legal.PrivacyPolicy[lan]}</a>
            <a href="menu.html">${menu[0].Legal.CookiePolicy[lan]}</a>
            <a href="#">${menu[0].Legal.Disclaimer[lan]}</a>
            `; 
    contact_us.innerHTML=`
     <h2>${menu[0].Title.ContactUs[lan]}</h2>
            <h3>${menu[0].ContactUs.phone[lan]}</h3>
            <h3>${menu[0].ContactUs.email[lan]}</h3>
            <h3>${menu[0].ContactUs.address[lan]}</h3>
    `;
    copyrigh.textContent=menu[0].copyright[lan];

    }).catch(error => console.error(error));
    ouremenu("en");
  }
 
homepage("en");  
    // load pages
   function loadpag(path) {
    window.location.href = path;
     }
     //lisen
   function ouremenu(lan){
    fetch("json/ouer.json")
    .then(response => response.json())
    .then(menu => {
        const con=document.querySelector(".ourmenu");
        con.innerHTML="";
        menu.forEach(item => {
          const menus=document.createElement("div");
          menus.className="menus";
          menus.innerHTML=`
          <img src="${item.img}" alt="">
            <h2>${item.name[lan]}</h2>
            <P>${item.ditail[lan]}</P>
            <span>$${item.pric}</span>
            <BUtton id="">${menu[0].button[lan]}</BUtton>
            `;
            con.appendChild(menus);
        })
    })
   }
    const Amharic=document.getElementById("Amharic");
    const English=document.getElementById("English");
    const Oromic=document.getElementById("Oromic");
    const Tigrinya=document.getElementById("Tigrinya");
    Amharic.addEventListener("click",()=>{
      homepage("am");
      ouremenu("am");
      languges.style.display = "none";
    });
    English.addEventListener("click",()=>{
        homepage("en");
        ouremenu("en");
        languges.style.display = "none";
    });
    Oromic.addEventListener("click",()=>{
        homepage("om");
        ouremenu("om");
        languges.style.display = "none";
    });
    Tigrinya.addEventListener("click",()=>{
        homepage("ti");
        ouremenu("ti");
        languges.style.display = "none";
    })