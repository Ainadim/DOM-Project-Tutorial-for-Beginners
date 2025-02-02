const allData = JSON.parse(data).data
console.log(allData);

function loadMilestoneData() {
  const data = document.querySelector(".milestones")
  data.innerHTML = `${allData.map(function (singleData) {
    return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onClick="openMileStone(this, ${singleData._id})">
                <p>
                  ${singleData.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${singleData.modules.map(function(module){
                return `
                <div class="module border-b">
                  <p>${module.name}</p>
                </div>
                `
              }).join("")}
            </div>
          </div>`
  }).join('')}`
}

function openMileStone(milestonElement, id) {
  const currentNode =  milestonElement.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  const active = document.querySelector(".active");

  if (active && !milestonElement.classList.contains("active")) {
    active.classList.remove("active");
  }

  milestonElement.classList.toggle("active");

  if (!currentNode.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  };
  
  currentNode.classList.toggle("show");

  showMileStone(id)
};

function showMileStone(id) {
const showImage = document.querySelector(".milestoneImage")
const title = document.querySelector(".title")
const details = document.querySelector(".details")

showImage.style.opacity = "0";
showImage.src = allData[id].image
title.innerText = allData[id].name
details.innerText = allData[id].description

};
const showImage = document.querySelector(".milestoneImage")
showImage.onload = function () {
  this.style.opacity = "1"
}


loadMilestoneData()