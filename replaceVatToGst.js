console.log("calling app.js");

window.addEventListener("DOMContentLoaded", () => {
  console.log(tax_label);
  document.body.innerHTML = document.body.innerHTML.replace(/vat/g, "gst");
});

// const myCollection = document.getElementsByTagName("p");
// for (let i = 0; i < myCollection.length; i++) {
//   myCollection[i].style.color = "red";
// }
// window.addEventListener("DOMContentLoaded", () => {
//   let tax = document.getElementsByClassName("tax");
//   // var str = "";
//   for (let i = 0; i < tax.length; i++) {
//     // let changeStr = "hello";
//     // tax[i].innerHTML += "hello";
//     tax[i].innerHTML = tax[i].innerHTML.replace(/test/g, "testing");
//     // str = tax[i].innerHTML.replace(/test/g, "testing");
//     // console.log(str);
//     // console.log(tax[i].innerHTML);
//   }
//   tax.innerHTML += str;
// });
window.addEventListener("DOMContentLoaded", () => {
  let tax = document.getElementsByClassName("tax");
  for (let i = 0; i < tax.length; i++) {
    tax[i].innerHTML = tax[i].innerHTML.replace(/test/g, "testing");
  }
});
setTimeout(() => {
  console.log("setTimeout Running");
  document.body.innerHTML = document.body.innerHTML.replace(/vat/g, "GST");
}, 2000);
// const list = document.getElementsByClassName("example")[0];
// list.getElementsByClassName("child")[0].innerHTML = "Milk";
