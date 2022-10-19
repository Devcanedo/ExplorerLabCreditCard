import "./css/index.css"

const rcBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const rcBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const rcLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
 const colors = {
  visa: ["#436D99", "#2D57F2"],
  mastercard: ["#DF6F29", "#C69347"],
  default: ["black", "gray"],
 }

 rcBgColor01.setAttribute("fill", colors[type] [0])
 rcBgColor02.setAttribute("fill", colors[type] [1])
 rcLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType