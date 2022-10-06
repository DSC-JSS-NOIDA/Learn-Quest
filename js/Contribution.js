let darkmode = "false";
let flag = 0;
$("#darkSwitch3").addClass("invisible");

// Dark Mode Is Functional On The Resources Page

function dark_mode() {
  if (flag == 0) {
    $("#darkSwitch2").addClass("invisible");
    $("#darkSwitch3").removeClass("invisible");
    $("#darkSwitch3").addClass("visible");
    $(".link-dark").addClass("btn-style-dark");
    $(".link-dark").removeClass("btn-style");
    
    flag = 1;
  } else if (flag == 1) {
    $("#darkSwitch3").addClass("invisible");
    $("#darkSwitch2").removeClass("invisible");
    $("#darkSwitch2").addClass("visible");
    $(".link-dark").removeClass("btn-style-dark");
    $(".link-dark").addClass("btn-style");
    flag = 0;
  }
  if (darkmode === "false") {
    document.body.style.backgroundImage = "url('./assets/images/darkmode.png')";
    document.body.style.color = "white";

    darkmode = "true";
  } else if (darkmode === "true") {
    document.body.style.backgroundImage = "url('./assets/images/qlgb.png')";
    document.body.style.color = "black";

    darkmode = "false";
  }
}

const toTop = document.querySelector(".to-top");
const topBtn = document.querySelector(".btn-top");

document.body.addEventListener("scroll", scrollTop);
function scrollTop() {
  if (document.body.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
});
