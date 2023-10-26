
    let mainPageBodyDivHeight = 900

    const whoamiDivHeight = 450
    const whoamiDivPaddingB = 50
    const careermeritsDivHeight = 450
    const careermeritsPaddingB = 50
    const projectsDivHeight = 450
    const projectsPaddingB = 50

    function initEventListners() {

        const mainPageBodyDiv = document.getElementById("bodyMiddleBox")
        
        const whoamiButton = document.getElementById("whoamiBtn");
        whoamiButton.addEventListener("click", () => {
            
            const whoamiDiv = document.getElementById("whoami");
            
            if (whoamiDiv.style.height) {
                whoamiButton.style.borderRadius = null; // Reset to original css class
                whoamiDiv.style.borderStyle = null;
                whoamiDiv.style.height = null;
                whoamiDiv.style.paddingBottom = null;

                mainPageBodyDivHeight -= whoamiDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            } else { 
                whoamiDiv.style.height = whoamiDivHeight+"px"; // Override css class to create dynamic elements
                whoamiButton.style.borderRadius = "10px 10px 0 0";
                whoamiDiv.style.borderStyle = "outset";
                whoamiDiv.style.paddingBottom = whoamiDivPaddingB+"px"

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
                careermeritsDiv.style.paddingBottom = null;

                mainPageBodyDivHeight -= careermeritsDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            } else { 
                careermeritsDiv.style.height = careermeritsDivHeight+"px";
                careermeritsButton.style.borderRadius = "10px 10px 0 0"
                careermeritsDiv.style.borderStyle = "outset"
                careermeritsDiv.style.paddingBottom = careermeritsPaddingB+"px"

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
                projectsDiv.style.paddingBottom = null;

                mainPageBodyDivHeight -= projectsDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            } else { 
                projectsDiv.style.height = projectsDivHeight+"px";
                projectsButton.style.borderRadius = "10px 10px 0 0"
                projectsDiv.style.borderStyle = "outset"
                projectsDiv.style.paddingBottom = projectsPaddingB+"px"

                mainPageBodyDivHeight += projectsDivHeight;
                mainPageBodyDiv.style.height = (mainPageBodyDivHeight) + "px"
            }
        });
    }


