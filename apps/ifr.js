ifr = function (t, u) {
  let id = windowmanager.createframe(t);

  let code = `
      <style>
        #res${id} {

            width: calc(100%) !important;
            max-height: unset !important;
            overflow-y: auto;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        
        }
      </style>
      <iframe frameborder='0' style='width: calc(100%);height: 100%;height: calc(100% - 5rem + 13px);' src='${u}'></iframe>
      `;

  document.getElementById("res" + id).innerHTML = code;
};
