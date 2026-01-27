code = function (p) {
  let id = windowmanager.createframe("P1");

  let code = `
    
        <textarea style="width: 100%; height: 100%;" id="codearea_${id}"></textarea>


    `;
  document.getElementById("res" + id).innerHTML = code;
};
