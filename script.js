/* ==========================================================
   INSIDE A GAMING PC
   script.js
   JavaScript for animations, navigation, theme and effects
========================================================== */

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

// ==========================================
// Reveal Animation
// ==========================================

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealItems.forEach(item=>{
    revealObserver.observe(item);
});

// ==========================================
// Theme Switch
// ==========================================

const themeButton = document.getElementById("themeButton");

let lightTheme = false;

themeButton.addEventListener("click",()=>{

    lightTheme = !lightTheme;

    document.body.classList.toggle("light-theme");

    if(lightTheme){

        themeButton.textContent = "☀️";

    }else{

        themeButton.textContent = "🌙";

    }

});

// ==========================================
// Back To Top Button
// ==========================================

const topButton = document.getElementById("topButton");

topButton.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ==========================================
// Navbar Background on Scroll
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        navbar.classList.add("navbar-scroll");

    }else{

        navbar.classList.remove("navbar-scroll");

    }

});

// ==========================================
// Hero Glow Animation
// ==========================================

const heroGlow = document.querySelector(".hero-glow");

let angle = 0;

function rotateGlow(){

    angle += 0.5;

    heroGlow.style.transform =
        `translate(-50%, -50%) rotate(${angle}deg)`;

    requestAnimationFrame(rotateGlow);

}

if(heroGlow){

    rotateGlow();

}

// ==========================================
// Floating Ability Cards
// ==========================================

const cards = document.querySelectorAll(".ability-card");

cards.forEach((card,index)=>{

    card.style.animationDelay = `${index*0.08}s`;

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ==========================================
// Info Card Glow Effect
// ==========================================

const infoCards = document.querySelectorAll(".info-card");

infoCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouseX",`${x}px`);
        card.style.setProperty("--mouseY",`${y}px`);

    });

});

// ==========================================
// Number Counter Animation
// ==========================================

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.count);

        let value = 0;

        const speed = target/80;

        const update = ()=>{

            value += speed;

            if(value >= target){

                counter.textContent = target;

            }else{

                counter.textContent = Math.floor(value);

                requestAnimationFrame(update);

            }

        }

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(c=>{
    counterObserver.observe(c);
});

// ==========================================
// Flow Box Hover
// ==========================================

const flowBoxes = document.querySelectorAll(".flow-box");

flowBoxes.forEach(box=>{

    box.addEventListener("mouseenter",()=>{

        box.style.transform = "scale(1.08)";
        box.style.boxShadow = "0 0 25px rgba(0,255,255,.4)";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.transform = "scale(1)";
        box.style.boxShadow = "0 0 15px rgba(0,255,255,.15)";

    });

});

// ==========================================
// Small RGB Pulse
// ==========================================

const rgbCards = document.querySelectorAll(".component-section");

setInterval(()=>{

    rgbCards.forEach(card=>{

        const glow = Math.random()*25+10;

        card.style.boxShadow =
            `0 0 ${glow}px rgba(0,255,255,.08)`;

    });

},1200);

// ==========================================
// Footer Current Year
// ==========================================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
        `Built with HTML • CSS • JavaScript • ${new Date().getFullYear()}`;

}

// ==========================================
// Console Welcome Message
// ==========================================

console.log("%cInside a Gaming PC Website",
"color:#00e5ff;font-size:20px;font-weight:bold");

console.log("%cCreated in VS Code using HTML CSS JavaScript",
"color:#7c5cff;font-size:14px");

// ==========================================
// Keyboard Shortcut
// Press G = Go to Top
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="g"){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

});

// ==========================================
// Simple Loading Animation
// ==========================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// ==========================================
// End of script.js
// ==========================================