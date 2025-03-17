export const customJsStr = `
window.addEventListener("load", () =>
  setTimeout(function () {
    const tags = document.querySelectorAll(".opblock-tag");
    
    tags.forEach((tag) => {
      tag.addEventListener("click", function () {
        setTimeout(function () {
          closeAllMethods();
        }, 150);
      });
    });

    function closeAllMethods() {
      const operationButtons = document.querySelectorAll(".opblock");

      operationButtons.forEach((button) => {
        button.addEventListener("click", function () {
          operationButtons.forEach((otherButton) => {
            if (otherButton !== button) {
              if (otherButton.querySelector(".no-margin")) {
                console.log("clicked");
                otherButton.querySelector(".opblock-summary-control").click();
              }
            }
          });
        });
      });
    }

    closeAllMethods();
  }, 200)
);


`;
