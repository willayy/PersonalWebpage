
function initEventListners() {

    const mainPageBodyDiv = document.getElementById("mainPageBody")

    const whoamiDiv = document.getElementById("whoami");
    const careermeritsDiv = document.getElementById("careermerits");
    const projectsDiv = document.getElementById("projects");

    const whoamiButton = document.getElementById("whoamiBtn");
    const careermeritsButton = document.getElementById("careermeritsBtn");
    const projectsButton = document.getElementById("projectsBtn");

    whoamiButton.addEventListener("click", () => {
        if (whoamiDiv.style.height) {
            mainPageBodyDiv.style.height = "800px"
            whoamiButton.style.borderRadius = "10px";
            whoamiDiv.style.borderStyle = "none";
            whoamiDiv.style.height = null; // Toggle back to 0 height
        } else { 
            whoamiDiv.style.height = "100px";
            mainPageBodyDiv.style.height = "900px";
            whoamiButton.style.borderRadius = "10px 10px 0 0";
            whoamiDiv.style.borderStyle = "outset";
        }
    });

    careermeritsButton.addEventListener("click", () => {
        if (careermeritsDiv.style.height) {
            careermeritsButton.style.borderRadius = "10px"
            careermeritsDiv.style.borderStyle = "none"
            careermeritsDiv.style.height = null; // Toggle back to 0 height
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
            projectsDiv.style.height = null; // Toggle back to 0 height
        } else { 
            projectsDiv.style.height = 15+"%";
            projectsButton.style.borderRadius = "10px 10px 0 0"
            projectsDiv.style.borderStyle = "outset"
        }
    });
}
