function navigation(bool = true) {
  const navigation = document.getElementById("navigation");
  if (bool) {
    header(false)
    main(false)
    footer(false)
    navigation.style.display = "flex";
  } else {
    header()
    main()
    footer()
    navigation.style.display = "none";
  }
}


function header(bool = true){
    const header = document.getElementById("header");
    if (bool) {
        header.style.display = "grid";
      } else {
        header.style.display = "none";
      }
}

function main(bool = true){
    const main = document.getElementById("main");
    if (bool) {
        main.style.display = "flex";
      } else {
        main.style.display = "none";
      }
}


function footer(bool = true){
    const footer = document.getElementById("footer");
    if (bool) {
        footer.style.display = "flex";
      } else {
        footer.style.display = "none";
      }
}


function moveSelection(idElement){
  navigation(false)
  location.hash = "#" + idElement;

}