import "../css/addtochecklist.css";

const body = document.querySelector(".main");

//toggling to hide and display the card
const addToCheckListBtn = document.querySelector(".checklist-add-btn");
// addToCheckListBtn.addEventListener('click', (event) => {
//         card.classList.toggle('.checkhide');
//     });

const addCheckList = () => {
    const checkListTitle = document.createElement("input");
    checkListTitle.type = "text";
    checkListTitle.id = "checkListTitleId";
    checkListTitle.placeholder ="Checklist name";

    const dueDateLabel = document.createElement("input");
    dueDateLabel.type = "date";
    dueDateLabel.id = "checkListDuedate";
    dueDateLabel.placeholder = "Due date";
    
    const addCheckBtn = document.createElement("button");
    addCheckBtn.id = "addCheckList";
    addCheckBtn.innerHTML = "Add to checklist";
    addCheckBtn.addEventListener('click', (event) =>{
        // const projObj = createProjectObjFunc(title.value, description.value, dueDateLabel.value);
        // if (typeof projObj === 'object' ){
        //     addProjectToStorage(projObj);
        //     console.log (projObj);
        // }else {
        //     console.log("fucked up");
        // };

        checkListTitle.value = "";
        dueDateLabel.value = "";
       
    }); 

    const cardCheck = document.createElement("div");
    cardCheck.className = "create-check-list";
    

    cardCheck.appendChild(checkListTitle);
    cardCheck.appendChild(dueDateLabel);
    cardCheck.appendChild(addCheckBtn);

    body.appendChild(cardCheck);
}

export default addCheckList;