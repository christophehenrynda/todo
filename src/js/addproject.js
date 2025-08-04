import "../css/addproject.css";
import {createProjectObjFunc, addProjectToStorage} from "./addprojectfunc";

const addproject = () => {
    const addProjectBtn = document.querySelector(".add-project");
    const body = document.querySelector(".main");
    addProjectBtn.addEventListener('click', (event) => {
        card.classList.toggle('projhide');
    });

    const title = document.createElement("input");
    title.type = "text";
    title.id = "projTitleId";
    title.placeholder ="Project title";

    const description = document.createElement("input");
    description.type = "text";
    description.id = "projDescriptionId";
    description.placeholder ="Description";

    const dueDateLabel = document.createElement("input");
    dueDateLabel.type = "date";
    dueDateLabel.id = "projDuedate";
    dueDateLabel.placeholder = "Due date";

    const addProjBtn = document.createElement("button");
    addProjBtn.id = "addProj";
    addProjBtn.innerHTML = "Add";
    addProjBtn.addEventListener('click', (event) =>{
        const projObj = createProjectObjFunc(title.value, description.value, dueDateLabel.value);
        if (typeof projObj === 'object' ){
            addProjectToStorage(projObj);
            console.log (projObj);
        }else {
            console.log("fucked up");
        };

        title.value = "";
        dueDateLabel.value = "";
        description.value = "";
    }); 

    const card = document.createElement("div");
    card.className = "createProject";
    

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDateLabel);
    card.appendChild(addProjBtn);

    body.appendChild(card);

    return JSON.parse(localStorage.getItem("Projects")) || [];   
};

export default addproject;