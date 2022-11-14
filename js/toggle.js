const selectBoxElements = document.querySelectorAll(".select");

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".theme");
  selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach(selectBoxElement => {
  selectBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");
    const theme = targetElement.innerHTML;
    const body = document.querySelector("body");
    const svg = document.querySelector(".custom-shape-divider-top-1668397205 .shape-fill")
    const text = document.querySelectorAll("section, nav, nav a");
    console.log(text);

    if (isOptionElement) {
      selectOption(targetElement);
    }
    if (theme == "Plain") {
      body.style.background = '#EBEBEB';
      svg.style.fill = 'black';
      text.forEach(function(e){
        e.style.color = 'black';
      });
      document.querySelector(".theme").style.border='1px solid #7a7a7a';
    }

    else if (theme == "Dark") {
        body.style.background = 'black';
        text.forEach(function(e){
          e.style.color = 'white';
        });
        svg.style.fill = '#FDFDFD';
    }

    else if (theme == "Korea") {
        console.log("korea");
        body.style.background = 'linear-gradient(142deg, #FFB5B5, #9CA0FF)';
        svg.style.fill = '#FDFDFD';
        text.forEach(function(e){
          e.style.color = 'white';
        });
        document.querySelector(".theme").style.border='none';
    }

    else {
      body.style.background = 'linear-gradient(142deg, rgba(255,181,181,1) 0%, rgba(156,160,255,1) 88%);';
      svg.style.fill = '#FDFDFD';
    }
    toggleSelectBox(selectBoxElement);
  });
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelectorAll(".select");

  allSelectBoxElements.forEach(boxElement => {
    boxElement.classList.remove("active");
  });
});