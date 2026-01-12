play = function (p) {
  let id = windowmanager.createframe("", {
    Tudo: "",
    "Atari 2600": "Stella",
    "Atari 800": "Atari 800",
    "Apple II": "Apple II",
    Nintendo: "NES",
    MSX: "MSX",
    PC: "DOS",
    Arcade: "Arcade",
  });

  omnifilter = function (arr) {
    let code = `
    
      <style>
      .editores div {
        text-decoration: none;
        outline: 3px solid #00000033;
        display: block;
        cursor: pointer;
      }

      .editores div:hover {
        outline: 3px solid #000000ff;
      }

      </style>
    
      <div class="editores" style='display: grid; width: 100%; grid-template-columns: [init] 1fr 1fr 1fr 1fr [end]; gap: 20px 20px;'>`;
    for (let i = 0; i < arr.length; i++) {
      code += `<div onclick="ifr('${arr[i].Name.replace(
        /\'/g,
        "&apos;"
      )}', '${decodeURI(
        arr[i].Link
      )}');" style="width: 100%; aspect-ratio: 4/3; background-repeat: no-repeat; background-size: cover; background-position: center center; background-image: url(${
        arr[i].screenshots
      })"></div>`;
    }

    code += `</div>`;
    document.getElementById("res" + id).innerHTML = code;
  };

  let filtro = id.replace(/(t_)(\d{1,3})/, "$1f$2");

  omnifilterfetchcsvdata(
    GoogleSheetCsvURL(
      "https://docs.google.com/spreadsheets/d/1Yd1ipdV_nFu1witkBSPEXb4o9PI3Tb2rZZv3xLAVMZY/edit?gid=369862065#gid=369862065"
    ),
    filtro
  );
};
