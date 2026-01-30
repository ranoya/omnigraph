if (
  typeof carregaace == "undefined" ||
  carregaace == null ||
  carregaace != "" ||
  carregaace == true
) {
  var carregaace = true;
  var codex = [];
  var namecodex = [];

  let loader = document.createElement("script");
  loader.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ace.js";
  document.head.appendChild(loader);
  let loader2 = document.createElement("script");
  loader2.src =
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ext-language_tools.min.js";
  document.head.appendChild(loader2);
}

let lingua = function (ed, qual) {
  ace.edit("editor_t_" + ed).setOptions({ mode: "ace/mode/" + qual });
};

let code = function (p) {
  let id = windowmanager.createframe("", {
    HTML: "HTML",
    Javascript: "Javascript",
    Typescript: "Typescript",
  });

  let code = `
    
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

        #editor_${id} {
                         width: calc(100% - 0px);
                         height: calc(100% - 14px);
                         border: 0;
                         outline: 0 !important;
                         background-color: #fffef5;
                         font-size: 14px;
                         line-height: 20px;
                         margin-top: 0 !important;
                         overflow-x: hidden;"
        }

        .ace_gutter-layer {
           background-color: #fffef5;
        }

        .ace_tooltip {
          display: none !important;
        }
        </style>

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
  document.getElementById("res" + id).style.width = "calc(100% - 1rem + 0px)";

  document.getElementById("res" + id).style.paddingRight = 0;
  document.getElementById("res" + id).style.paddingTop = 0;

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

  // Create a new ResizeObserver instance
  let codeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      console.log("rodou o observer..." + entry.target.id);
      ace.edit("editor_" + entry.target.id).resize();
    }
  });

  codeObserver.observe(document.getElementById(id));

  thisace.getSession().on("change", function () {
    codex[id] = thisace.getSession().getValue();
  });

  let nditor = id.match(/(t_)(\d{1,3})/)[2];

  document
    .getElementById("t_f" + nditor)
    .addEventListener("input", function (e) {
      namecodex["t_" + nditor] = document.getElementById("t_f" + nditor).value;
    });

  document.getElementById("m_f" + nditor).innerHTML = `
  
    <a onclick="lingua(${nditor}, 'html');">HTML</a><a onclick="lingua(${nditor}, 'javascript');">Javascript</a><a onclick="lingua(${nditor}, 'typescript');">Typescript</a>
  `;
};
