const createProjectObjFunc = (input1, input2, input3) => {
    
    if (input1 != "" && input2 != "" && input3 != "") {
            
        return {
            title:input1, 
            description:input2, 
            date:input3,
            checklist: []
        };

    } else {
        return false;
    }
   
}

const addProjectToStorage = (obj) => {
    let projArray = [];
    if (typeof obj === 'object' ){
        
        if (localStorage.getItem("Projects")){
            projArray = JSON.parse(localStorage.getItem("Projects")) || [];
            console.log(projArray)
        }
        projArray.push(obj);
        localStorage.setItem("Projects", JSON.stringify(projArray));
       
        console.log (projArray);
    }else {
        console.log("fucked up and up");
    };


}

export  {createProjectObjFunc, addProjectToStorage};