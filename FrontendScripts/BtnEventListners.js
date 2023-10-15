
function initEventListners() {

    const mainPageBodyDiv = document.getElementById("mainPageBody")

    const whoamiDiv = document.getElementById("whoami");
    const careermeritsDiv = document.getElementById("careermerits");
    const projectsDiv = document.getElementById("projects");

    const whoamiButton = document.getElementById("whoamiBtn");
    const careermeritsButton = document.getElementById("careermeritsBtn");
    const projectsButton = document.getElementById("projectsBtn");

    whoamiButton.addEventListener("click", () => {

        let mainPageBodyDivHeight = 800
        
        if (whoamiDiv.style.height) {
            whoamiButton.style.borderRadius = null; // Reset to original css class
            whoamiDiv.style.borderStyle = null;
            whoamiDiv.style.height = null; 
            mainPageBodyDiv.style.height = null;
        } else { 
            whoamiDiv.style.height = "100px"; // Override css class to create dynamic elements
            mainPageBodyDiv.style.height = (mainPageBodyDivHeight + 100) + "px"
            whoamiButton.style.borderRadius = "10px 10px 0 0";
            whoamiDiv.style.borderStyle = "outset";
        }
    });

    careermeritsButton.addEventListener("click", () => {
        if (careermeritsDiv.style.height) {
            careermeritsButton.style.borderRadius = "10px"
            careermeritsDiv.style.borderStyle = "none"
            careermeritsDiv.style.height = null;
        } else { 
            careermeritsDiv.style.height = 15+"%";
            careermeritsButton.style.borderRadius = "10px 10px 0 0"
            careermeritsDiv.style.borderStyle = "outset"
        }
    });

    projectsButton.addEventListener("click", () => {
        if (projectsDiv.style.height) {
            projectsButton.style.borderRadius = "10px"
            projectsDiv.style.borderStyle = "none"
            projectsDiv.style.height = null;
        } else { 
            projectsDiv.style.height = 15+"%";
            projectsButton.style.borderRadius = "10px 10px 0 0"
            projectsDiv.style.borderStyle = "outset"
        }
    });
}
