const allData = JSON.parse(data).data

function loadMilestoneData() {
  const data = document.querySelector(".milestones")
  data.innerHTML = `${allData.map(function (singleData) {
    return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onClick="openMileStone(this)">
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

function openMileStone(milestonElement) {
  const currentNode =  milestonElement.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  const active = document.querySelector(".active");

  if (active && !milestonElement.classList.contains("active")) {
    active.classList.remove("active");
  }

  milestonElement.classList.toggle("active");

  if (!currentNode.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  
  currentNode.classList.toggle("show");
}
loadMilestoneData()