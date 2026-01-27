ifr = function (t, u, c) {
  let id = windowmanager.createframe(t);

  let code = `
      <style>
        #res${id} {

            max-height: unset !important;
            overflow-y: auto;
            height: 100% 

            margin: 0 !important;

            width: calc(100% - 10px) !important;
            max-height: unset !important;
            height: 100%;
            height: calc(100% - 5rem + 2px) !important;;
            padding: 5px !important;
        
        }
      </style>
      <iframe frameborder='0' style='width: calc(100%);height: 100%;height: calc(100% - 5px);' src='${u}'></iframe>
      `;

  document.getElementById("res" + id).innerHTML = code;

  if (typeof c != "undefined" && c != null && c != "") {
    document.getElementById("res" + id).style.backgroundColor = c;
  }

  windowmanager.top(id);
};
