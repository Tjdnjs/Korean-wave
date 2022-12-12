const selectBoxElements = document.querySelectorAll(".select");

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".theme");
  selectedElement.textContent = optionElement.textContent;
}

// 배경색에 hover 처리하는 함수
function backHover(target, color1, color2){
  target.forEach(el =>{
    el.addEventListener("mouseover", e => {
      el.style.background = color1;
    });
    el.addEventListener("mouseout", e => {
      el.style.background = color2;
    })
  })
}

// 글자색을 hover 처리하는 함수
function colorHover(target, color1, color2){
  target.forEach(el =>{
    el.addEventListener("mouseover", e => {
      el.style.color = color1;
    });
    el.addEventListener("mouseout", e => {
      el.style.color = color2;
    })
  })
}

selectBoxElements.forEach(selectBoxElement => {
  selectBoxElement.addEventListener("click", e => {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");

    if (isOptionElement) {
      selectOption(targetElement);
    }

    const theme = targetElement.innerHTML;
    const body = document.querySelector("body");
    const svg = document.querySelector(".custom-shape-divider-top-1668397205 .shape-fill")
    let text = Array.prototype.slice.call(document.querySelectorAll("section, nav, nav a"));
    const nav = document.querySelectorAll("nav a");
    const text1 = Array.prototype.slice.call(document.querySelectorAll(".theme, .option"));
    const options = document.querySelectorAll('.option');

    //? 테마가 Plain으로 설정 되었을 때
    if (theme == "Plain") {
      body.style.background = '#EBEBEB';
      svg.style.fill = 'black';
      text.forEach(e => {e.style.color = 'black';});
      text1.forEach(e => {e.style.color = '#818181';})

      // option과 nav 대한 hover 처리
      backHover(options,'rgb(255, 255, 255)','rgba(255, 255, 255, .4)');
      colorHover(nav, 'gray', 'black');

      document.querySelector(".theme").style.border='1px solid #7a7a7a';
    }

    //? 테마가 Dark로 설정 되었을 때
    else if (theme == "Dark") {
        text = text.concat(text1); 
        console.log("text: " + text);
        body.style.background = 'black';
        text.forEach(e => {e.style.color = 'white';});

        // option과 nav 대한 hover 처리
        backHover(options, 'gray', 'rgba(255, 255, 255, .4)');
        colorHover(nav, 'rgba(255, 255, 255, .8)', 'rgb(255, 255, 255)');

        svg.style.fill = '#FDFDFD';
    }

    //? 테마가 Korea로 설정 되었을 때
    else if (theme == "Korea") {
        console.log("korea");
        body.style.background = 'linear-gradient(142deg, #FFB5B5, #9CA0FF)';
        svg.style.fill = '#FDFDFD';
        text.forEach(e => {e.style.color = 'rgba(255, 255, 255,.8)';});
        text1.forEach(e => {e.style.color = '#818181';})

        // option과 nav 대한 hover 처리
        backHover(options,'rgb(255, 255, 255)','rgba(255, 255, 255, .4)');
        colorHover(nav, 'rgb(255, 255, 255)', 'rgba(255, 255, 255, .8)');

        document.querySelector(".theme").style.border='none';
    }
    //? 테마가 설정되지 않았을 때 (처음 화면이 켜진 상태)
    else {
      body.style.background = 'linear-gradient(142deg, rgba(255,181,181,1) 0%, rgba(156,160,255,1) 88%);';
      svg.style.fill = '#FDFDFD';
    }
    
    toggleSelectBox(selectBoxElement);
  });
});

//* 빈 배경을 클릭했을 때 드롭다운 되어있던 select 메뉴들이 접히게 함 
document.addEventListener("click", e => {
  const targetElement = e.target;
  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

  if (isSelect) return;

  const allSelectBoxElements = document.querySelectorAll(".select");

  allSelectBoxElements.forEach(boxElement => {
    boxElement.classList.remove("active");
  });
});