
    let mainPageBodyDivHeight = 800

    const whoamiDivHeight = 300
    const careermeritsDivHeight = 300
    const projectsDivHeight = 300

    function initEventListners() {

        const mainPageBodyDiv = document.getElementById("bodyMiddleBox")
        
        const whoamiButton = document.getElementById("whoamiBtn");
        whoamiButton.addEventListener("click", () => {
            
            const whoamiDiv = document.getElementById("whoami");
            
            if (whoamiDiv.style.height) {
                whoamiButton.style.borderRadius = null; // Reset to original css class
                whoamiDiv.style.borderStyle = null;
                whoamiDiv.style.height = null;

                mainPageBodyDivHeight -= whoamiDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            } else { 
                whoamiDiv.style.height = whoamiDivHeight+"px"; // Override css class to create dynamic elements
                whoamiButton.style.borderRadius = "10px 10px 0 0";
                whoamiDiv.style.borderStyle = "outset";

                mainPageBodyDivHeight += whoamiDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            }
        });

        const careermeritsButton = document.getElementById("careermeritsBtn");
        careermeritsButton.addEventListener("click", () => {

            const careermeritsDiv = document.getElementById("careermerits");
            

            if (careermeritsDiv.style.height) {
                careermeritsButton.style.borderRadius = null;
                careermeritsDiv.style.borderStyle = null;
                careermeritsDiv.style.height = null;

                mainPageBodyDivHeight -= careermeritsDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            } else { 
                careermeritsDiv.style.height = careermeritsDivHeight+"px";
                careermeritsButton.style.borderRadius = "10px 10px 0 0"
                careermeritsDiv.style.borderStyle = "outset"

                mainPageBodyDivHeight += careermeritsDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            }
        });

        const projectsButton = document.getElementById("projectsBtn");
        projectsButton.addEventListener("click", () => {

            const projectsDiv = document.getElementById("projects");

            if (projectsDiv.style.height) {
                projectsButton.style.borderRadius = null;
                projectsDiv.style.borderStyle = null;
                projectsDiv.style.height = null;

                mainPageBodyDivHeight -= projectsDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            } else { 
                projectsDiv.style.height = projectsDivHeight+"px";
                projectsButton.style.borderRadius = "10px 10px 0 0"
                projectsDiv.style.borderStyle = "outset"

                mainPageBodyDivHeight += projectsDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            }
        });
    }


