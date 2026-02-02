ifr = function (t, u, menu, c) {
  let id = windowmanager.createframe(t);

  let code = `
      <style>
        #res${id} {

            max-height: unset !important;
            overflow-y: auto;
            margin: 0 !important;
            max-height: unset !important; 
            padding: 5px;
            width: calc(100% - 10px);

        }
      </style>
      <iframe frameborder='0' style='width: calc(100%);height: 100%;height: calc(100% - 5px);' src='${u}'></iframe>
      `;

  document.getElementById("res" + id).innerHTML = code;

  if (typeof c != "undefined" && c != null && c != "") {
    document.getElementById("res" + id).style.backgroundColor = c;
  }

  if (
    typeof menu != "undefined" &&
    menu != null &&
    menu != "" &&
    (menu == true || menu == "true")
  ) {
    document.getElementById("res" + id).style.height =
      "calc(100% - 5rem + 2px)";
    document.getElementById("res" + id).style.padding = "5px !important";
    document.getElementById("res" + id).style.width =
      "calc(100% - 10px) !important";
  } else {
    let barramenu = id.replace(/t\_/, "m_f");
    document.getElementById(barramenu).style.display = "none";
    document.getElementById("res" + id).style.height =
      "calc(100% - 3rem + 8px)";
    document.getElementById("res" + id).classList.add("ifrnomenu");

    document.getElementById("res" + id).style.paddingLeft = "0 !important";
    document.getElementById("res" + id).style.paddingRight = "0 !important";
    document.getElementById("res" + id).style.paddingTop = "5px !important";
    document.getElementById("res" + id).style.paddingBottom = "5px !important";
    document.getElementById("res" + id).style.width = "100% !important";
  }

  setTimeout(function () {
    windowmanager.top(id);
  }, 200);
};

let ifr_removemenu = function (ifid) {
  let barramenu = ifid.replace(/t\_/, "m_f");
  document.getElementById(barramenu).style.display = "none";
  document.getElementById("res" + ifid).style.height =
    "calc(100% - 3rem + 8px) !important";
};
