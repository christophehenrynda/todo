const createCheckObj = (input1, input2) => {
      if (input1 != "" && input2 != "") {
            
        return {
            checktitle:input1,  
            checkdate:input2
        };

    } else {
        return false;
    }
}

const addCheckToStorage = (obj) => {

}