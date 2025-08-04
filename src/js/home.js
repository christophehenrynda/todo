import "../css/home.css";
import addproject from "./addproject";
import addCheckList from "./addtochecklist";
const home = () => {

    const body = document.querySelector(".main");
    const container = document.createElement("div");
    container.id = "container";

    const projectSection = document.createElement("div");
    projectSection.className = "projsec";
    projectSection.innerHTML = `<h3>Your Projects</h3>`;

    const ChecklistSection = document.createElement("div");
    ChecklistSection.className = "checklistsec";
    ChecklistSection.innerHTML = `<h3>Your Project's Checklist</h3>`;

    const projArray = addproject();
    const project = () => {
        if (projArray === null){
            return null;
        } else{
            projArray.forEach(element => {
                //choose random color
                const colorsArr = ["#8FBF77", "#E26C90", "#9B7292", "#2BB8D4", "#E45010", "#6F7485", "#89AAB3", "#B3D9F0", "#B9DBBB", "#D4C9C0", "#FFE0CB", "#E3F5EC", "#C5C5FF", "#A3CFCB", "#F6EFE1"];
                const randomIndex = Math.floor(Math.random() * colorsArr.length);

                const projDiv = document.createElement("div");
                projDiv.className = "proj-div";
                projDiv.style.borderLeft = "3px solid " + colorsArr[randomIndex];
                const title = document.createElement("p");
                title.className = "proj-title";
                title.innerHTML = element.title;

                const date = document.createElement("p");
                date.className = "proj-date";
                date.innerHTML = element.date;

                projDiv.appendChild(title);
                projDiv.appendChild(date);
                projectSection.appendChild(projDiv);

                projDiv.addEventListener('click', (event) => {
                    //check if button exists in checklist section
                    const existBtn = document.querySelector(".checklist-add-btn")
                    const existCard = document.querySelector(".create-check-list")
                    if (ChecklistSection.contains(existBtn) || body.contains(existCard)){
                       existBtn.remove();
                       existCard.remove();
                    }
                    
                    // add new button
                    const addToChecklistBtn = document.createElement("button");
                    addToChecklistBtn.className = "checklist-add-btn";
                    addToChecklistBtn.innerHTML = "Add To Checklist";
                    addToChecklistBtn.style.background = colorsArr[randomIndex];
                    addToChecklistBtn.addEventListener("click", addCheckList());
                    ChecklistSection.appendChild(addToChecklistBtn);

                })
            });
        }
    }
    project();
    container.appendChild(projectSection);
    container.appendChild(ChecklistSection);

    body.appendChild(container);
 
};

export default home;