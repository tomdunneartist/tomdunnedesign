var themeToggle = document.getElementById("theme-toggle");

var emailCopy = document.getElementById("email-copy");
var emailLink = document.getElementById("email-link");

var link1 = document.getElementById("link-1");
var link2 = document.getElementById("link-2");
var link3 = document.getElementById("link-3");

//local storage for storing colour
/*var storedTheme = localStorage.getItem('theme') || (
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            );

            if (storedTheme) {
                if (storedTheme == "dark") {
                    document
                        .documentElement
                        .setAttribute('data-theme', "6");
                    //themeToggle.innerHTML = "[·····*·]";
                } else if (storedTheme == "light") {
                    document
                        .documentElement
                        .setAttribute('data-theme', "2");
                    //themeToggle.innerHTML = "[·*······]";
                } else {
                    document
                        .documentElement
                        .setAttribute('data-theme', storedTheme);
                }
            }*/

themeToggle.onclick = function () {

    console.log('Theme Toggle...');

    var currentTheme = document
        .documentElement
        .getAttribute("data-theme");

    var targetTheme = "6";

    if (currentTheme === "1") {
        targetTheme = "2";
    } else if (currentTheme === "2") {
        targetTheme = "3";
    } else if (currentTheme === "3") {
        targetTheme = "4";
    } else if (currentTheme === "4") {
        targetTheme = "5";
    } else if (currentTheme === "5") {
        targetTheme = "6";
    } else if (currentTheme === "6") {
        targetTheme = "7";
    } else {
        targetTheme = "1";
    };

    document
        .documentElement
        .setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);

}

emailCopy.onmouseenter = function () {
    const root = document.querySelector(":root");
    root
        .style
        .setProperty("--copy-text", `"📪"`);
}
emailCopy.onfocus = function () {
    const root = document.querySelector(":root");
    root
        .style
        .setProperty("--copy-text", `"📪"`);
}
emailCopy.onclick = function () {
    navigator
        .clipboard
        .writeText('hello@tomdunne.design');
    const root = document.querySelector(":root");
    root
        .style
        .setProperty("--copy-text", `"📬 Copied"`);
}

emailLink.onclick = function () {
    window.location.href = "mailto:hello@tomdunne.design";
}

link1.onclick = function () {
    window.open("https://www.linkedin.com/in/tomdunnedesign", '_blank');
}
link2.onclick = function () {
    window.open("https://www.tomdunne.dev", '_blank');
}
link3.onclick = function () {
    window.open("https://bsky.app/profile/tomdunnedev.bsky.social", '_blank');
}



/*const name = document.querySelector(".aes"),
  country = document.querySelector(".func"),
  personImg = document.querySelector(".aes-image"),
  countryImg = document.querySelector(".func-image");

window.addEventListener("mousemove", (e) => {
  let x = e.offsetX,
    y = e.offsetY;

  if (e.target.classList.contains("aes")) {
    personImg.style.left = `${x}px`;
    personImg.style.top = `${y}px`;
  }
  if (e.target.classList.contains("func")) {
    countryImg.style.left = `${x}px`;
    countryImg.style.top = `${y}px`;
  }
});

aes.addEventListener("mouseover", () => {
  personImg.style.display = "block";
});

aes.addEventListener("mouseleave", () => {
  personImg.style.display = "";
});

func.addEventListener("mouseover", () => {
  countryImg.style.display = "block";
});

func.addEventListener("mouseleave", () => {
  countryImg.style.display = "";
});*/


