code = function (p) {
  let id = windowmanager.createframe("P1");

  let code = `
    
      <style>
      
      @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

      #editor_${id} {
        width: 100%;
        height: 100%;
      }

      </style>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ace.js"
      type="text/javascript"></script>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ext-language_tools.min.js"
      type="text/javascript"></script>

      <script>
    
      let acegeneralconfig_e${id} = {
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
    
      let enviacomando_e${id} = function (instr) {
        let aceed = ace.edit("editor_${id}");
        aceed.setKeyboardHandler("ace/keyboard/vscode");
        aceed.setOptions(instr);
      };

      let lingua_e${id} = function (qual) {
        let aceed = ace.edit("editor_e${id}");
        aceed.setKeyboardHandler("ace/keyboard/vscode");
        aceed.setOptions({ mode: "ace/mode/" + qual });
      }


      </script>

      <pre
      class="editor codefull"
      data-name="editor_${id}}"
      id="editor_${id}"
      data-linguagem="html"></pre>

      <script>

      let aceed_e${id} = ace.edit("editor_e${id}");
      aceed_e${id}.setTheme("ace/theme/monokai");
      aceed_e${id}.session.setMode("ace/mode/html");
      aceed_e${id}.setOptions(acegeneralconfig_e${id});
      
      </script>

    `;
  document.getElementById("res" + id).innerHTML = code;
};
