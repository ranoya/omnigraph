code = function (p) {
  let id = windowmanager.createframe("P1");

  let code = `
    
        <textarea style="width: 607px;
                         resize: none;
                         width: calc(100% - 4px);
                         height: calc(100% - 9px);
                         border: 0;"
                         outline: 0 !important;
                         background-color: #fffef5;
                         font-size: 14px;
                         line-height: 20px;
                  id="codearea_${id}"></textarea>


    `;
  document.getElementById("res" + id).style.height = "calc(100% - 7rem + 13px)";
  document.getElementById("res" + id).innerHTML = code;
};
