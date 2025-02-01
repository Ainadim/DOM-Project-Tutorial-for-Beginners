const allData = JSON.parse(data).data
console.log(allData);

function loadMilestoneData() {
  const data = document.querySelector(".milestones")
  data.innerHTML = `${allData.map(function (singleData) {
    return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div>
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
loadMilestoneData()