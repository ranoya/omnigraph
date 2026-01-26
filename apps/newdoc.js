newdoc = function (u, c) {
  let id = windowmanager.createdoc();

  let code = `
      <style>
        #res${id} {

            max-height: unset !important;
            overflow-y: auto;
            width: calc(100%) !important;
            max-height: unset !important;
            height: calc(100%) !important;
        
        }
      </style>
      <iframe frameborder='0' style='width: calc(100%);height: 100%;height: calc(100% - 5px);' src='${u}'></iframe>
      `;

  document.getElementById("res" + id).innerHTML = code;

  if (typeof c != "undefined" && c != null && c != "") {
    document.getElementById("res" + id).style.backgroundColor = c;
  }
};
