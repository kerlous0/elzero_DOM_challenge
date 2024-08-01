// main style
let style = document.createElement("style");
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`;
document.head.append(style);
document.body.style.fontFamily = "sans-serif";

// HEADER
let header = document.createElement("header"),
  logo = document.createElement("div"),
  menu = document.createElement("ul"),
  li1 = document.createElement("li"),
  li2 = document.createElement("li"),
  li3 = document.createElement("li"),
  li4 = document.createElement("li");

logo.textContent = "KERO";
li1.textContent = "Home";
li2.textContent = "About";
li3.textContent = "Service";
li4.textContent = "Contact";

menu.append(li1, li2, li3, li4);
header.append(logo, menu);

// header style
header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; padding: 15px";
logo.style.cssText = "color: #23a96e; font-weight: bold";
menu.style.cssText = "list-style: none; display: flex";
menu.querySelectorAll("li").forEach((el) => {
  el.style.cssText = "margin: 0 5px; padding: 10px; color: #787c81";
});

// CONTENT
let content = document.createElement("div"),
  product,
  span;
for (let i = 1; i <= 15; i++) {
  (product = document.createElement("div")),
    (span = document.createElement("span"));

  span.textContent = i;
  product.append(span, "Product");
  content.append(product);
  // content style
  content.style.cssText =
    "padding: 15px; background-color: #ececec; display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); grid-gap: 15px;";
  product.style.cssText =
    "background-color: #ffffff; height: 100px;display: flex; justify-content: center; align-items: center; flex-direction: column; border-radius: 5px; color: #787c81";
  span.style.cssText =
    "font-weight: bold; font-size: 25px; margin-bottom: 10px; color: black;";
}

// FOOTER
let footer = document.createElement("footer");
footer.textContent = "Copyright 2024";

// footer style
footer.style.cssText =
  "background-color: #23a96e; font-size: 18px; color: #ffffff; padding: 25px 10px; text-align: center;";

document.body.prepend(header, content, footer);
