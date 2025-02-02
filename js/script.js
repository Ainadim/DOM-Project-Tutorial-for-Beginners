const allData =  JSON.parse(data).data;
console.log(allData);

function ShowAllMilestoneName() {
    const milestones = document.querySelector(".milestones");
    milestones.innerHTML = `${allData.map(function (singleData) {
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
              ${singleData.modules.map(function(singleModule){
              return `
              <div class="module border-b">
                <p>${singleModule.name}</p>
              </div>`;
              }).join("")
              }
            </div>
        </div>`
    }).join('')}`
}

function openMileStone(mileStoneElement,id){
    const currentElement = mileStoneElement.parentNode.nextElementSibling;
    const allShow = document.querySelector(".show")
    if (allShow && !currentElement.classList.contains("show")) {
        allShow.classList.remove("show");
    }
    currentElement.classList.toggle("show");

    const allActive = document.querySelector(".active")
    if (allActive && !mileStoneElement.classList.contains("active")) {
        allActive.classList.remove("active");
    }    
    mileStoneElement.classList.toggle("active");

    mileStoneDetails(id)
}

function mileStoneDetails(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const title = document.querySelector(".title");
    const details = document.querySelector(".details");

    milestoneImage.src = allData[id].image;
    title.innerText = allData[id].name;
    details.innerText = allData[id].description;
}


ShowAllMilestoneName()