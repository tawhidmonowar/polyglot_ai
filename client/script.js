var inputSelect = document.getElementById('input-language');
var outputSelect = document.getElementById('output-language');
var btnTranslate = document.getElementById("btn-translate");
var inputCopy = document.getElementById('btn-input-copy');
var outputCopy = document.getElementById('btn-output-copy');

var inputEditor = CodeMirror.fromTextArea(document.getElementById("input-code"), {
	lineNumbers: true,
	theme: "dracula" 
  });

var outputEditor = CodeMirror.fromTextArea(document.getElementById("output-code"), {
	lineNumbers: true,
	theme: "dracula"
});


const handleSubmit = async (e) => {
    e.preventDefault();

    var inputlanguage = inputSelect.value;
    var outputlanguage = outputSelect.value;
    var inputCode = inputEditor.getValue();
    var final_prompt = "##### Translate this code from "+ inputlanguage + " into " + outputlanguage + "\n### "+ inputlanguage +"\n    \n    " + inputCode + "\n    \n### " + outputlanguage;
    console.log(final_prompt);


    typeCode(outputEditor,final_prompt);
}

btnTranslate.addEventListener('click', handleSubmit);

inputCopy.addEventListener('click', copyInputCode);
inputCopy.addEventListener('mouseout', outFunc);

outputCopy.addEventListener('click', copyOutputCode);
outputCopy.addEventListener('mouseout', outFunc);


function copyInputCode() {
  var inputCode = inputEditor.getValue();
  navigator.clipboard.writeText(inputCode);
  var tooltip = document.getElementById("input-tooltip");
  tooltip.innerHTML = "Copied";
}

function copyOutputCode() {
  var outputCode = outputEditor.getValue();
  navigator.clipboard.writeText(outputCode);
  var tooltip = document.getElementById("output-tooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("output-tooltip");
  tooltip.innerHTML = "Copy to clipboard";
  var tooltip = document.getElementById("input-tooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


function typeCode(editor, text) {
  editor.setValue("");
  let index = 0;
  let interval = setInterval(() => {
    editor.focus();
    if (index < text.length) {
      editor.replaceRange(text.charAt(index), editor.getCursor());
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}