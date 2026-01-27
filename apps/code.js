if (
  typeof carregaace == "undefined" ||
  carregaace == null ||
  carregaace != "" ||
  carregaace == true
) {
  var carregaace = true;
  let loader = document.createElement("script");
  loader.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ace.js";
  document.head.appendChild(loader);
  let loader2 = document.createElement("script");
  loader2.src =
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ext-language_tools.min.js";
  document.head.appendChild(loader2);

  // Create a new ResizeObserver instance
  let codeObserver = new ResizeObserver((entries) => {
    ace.edit("editor_" + entries.id).resize();
  });
}

let code = function (p) {
  let id = windowmanager.createframe("P1", {
    Tudo: "",
    Básico: "Básico",
    Online: "Online",
    Desktop: "Desktop",
    Notebook: "Literate",
    Livecode: "Livecode",
    CLI: "CLI",
  });

  let code = `
    
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

        #editor_${id} {
            width: calc(100% - 4px);
                         height: calc(100% - 14px);
                         border: 0;
                         outline: 0 !important;
                         background-color: #fffef5;
                         font-size: 14px;
                         line-height: 20px;
                         margin-top: 0 !important;"
        }
        </style>

        <!-- 
        let enviacomando_${id} = function (instr) {
            let aceed = ace.edit("editor_${id}");
            aceed.setKeyboardHandler("ace/keyboard/vscode");
            aceed.setOptions(instr);
        };

        let lingua_${id} = function (qual) {
            let aceed = ace.edit("editor_${id}");
            aceed.setKeyboardHandler("ace/keyboard/vscode");
            aceed.setOptions({ mode: "ace/mode/" + qual });
        };
        -->

        <pre
        class="editor codefull"
        data-name="editor_${id}"
        id="editor_${id}"
        data-linguagem="html"
        ></pre>

    `;

  document.getElementById("res" + id).innerHTML = code;

  document.getElementById("res" + id).style.height = "calc(100% - 5rem + 13px)";
  document.getElementById("res" + id).style.maxHeight =
    "calc(100% - 5rem + 13px)";

  document.getElementById("res" + id).style.paddingRight = 0;
  document.getElementById("res" + id).style.paddingTop = 0;

  document.getElementById(id).addEventListener("resize", function () {
    ace.edit("editor_" + id).resize();
  });

  let thisace = ace.edit("editor_" + id);
  thisace.setTheme("ace/theme/solarized_light");
  thisace.setKeyboardHandler("ace/keyboard/vscode");
  thisace.session.setMode("ace/mode/html");
  let acegeneralconfig = {
    theme: "ace/theme/solarized_light",
    mode: "ace/mode/html",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    showPrintMargin: false,
    highlightSelectedWord: true,
    selectionStyle: "text",
    highlightActiveLine: false,
    cursorStyle: "wide",
    wrapBehavioursEnabled: true,
    wrap: true,
    fontSize: "14px",
    fontFamily: "Fira Code",
    fadeFoldWidgets: true,
  };

  thisace.setOptions(acegeneralconfig);

  codeObserver.observe(document.getElementById(id));
};
