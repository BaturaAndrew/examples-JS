let elem = document.querySelector("[data-widget-name]");
const ElemAttrValue = elem.getAttribute("data-widget-name");
console.log(ElemAttrValue);

let elemArr = document.querySelectorAll('ul>li>a');


elemArr.forEach(element => {
  let hrefAttr = element.getAttribute("href");
  if (hrefAttr.includes("://") &&
    !(hrefAttr.includes("http://internal.com"))
  ) {
    element.style = 'color:orange';
  }
});