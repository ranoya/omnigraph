editores = function (p) {
  let id = windowmanager.createframe("", {
    Tudo: "",
    Básico: "Básico",
    Online: "Online",
    Desktop: "Desktop",
    Notebook: "Literate",
    Livecode: "Livecode",
    CLI: "CLI",
  });

  omnifilter = function (arr) {
    let code = `
    
      <style>
      .editores div a {
        text-decoration: none;
        color: black;
        padding: 4px;
        margin: -2px;
        transition: color 1.2s ease-out, background-color 1.2s ease-out;
        background-color: #fffef5;
        display: block;
        cursor: pointer;
      }

      .editores div:hover a {
        background-color: #61605a;
        transition: color 0.2s ease-in, background-color 0.2s ease-in;
        color: white;
      }

      </style>
    
      <div class="editores" style='display: grid; width: 100%; grid-template-columns: [init] 1fr 1fr 1fr 1fr [end]; gap: 0.25rem 1rem;'>`;
    for (let i = 0; i < arr.length; i++) {
      code += `<div><a onclick="window.open('${arr[i].Link}', '_blank');">${arr[i].Name}</a></div>`;
    }

    code += `</div>`;
    document.getElementById("res" + id).innerHTML = code;
  };

  let filtro = id.replace(/(t_)(\d{1,3})/, "$1f$2");

  omnifilterfetchcsvdata(
    GoogleSheetCsvURL(
      "https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=0"
    ),
    filtro
  );
};
