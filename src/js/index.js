import "../css/main.css";
import addproject from './addproject';
import home from './home';


const buttons = Array.from(document.querySelector("#button").querySelectorAll("button"));
let activeButton = null; // Keep track of the currently active button

buttons.forEach(button => {
    const id = button.id;

    button.addEventListener("click", () => {
       
        if (activeButton) {
            activeButton.classList.remove("active");
        }

        // Add active class to the currently clicked button
        button.classList.add("active");

        // Update the activeButton variable
        activeButton = button;


        switch (id) {
            case "projects":
                home();
                break;

            case "work":
                //menu();
                break;

            case "personal":
                //about();
                break;
        }
    });
});

//addproject();
//home();