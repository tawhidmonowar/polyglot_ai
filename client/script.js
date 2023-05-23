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

  loader(outputEditor);

  var inputlanguage = inputSelect.value;
  var outputlanguage = outputSelect.value;
  var inputCode = inputEditor.getValue();
  var final_prompt = "##### Translate this code from " + inputlanguage + " into " + outputlanguage + "\n### " + inputlanguage + "\n    \n    " + inputCode + "\n    \n### " + outputlanguage;
  //console.log(final_prompt);

  const response = await fetch('http://localhost:5000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: final_prompt
    })
  })

  if (response.ok) {

    const data = await response.json();
    const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
    clearInterval(loadInterval);
    outputEditor.setValue("");
    typeCode(outputEditor, parsedData);

  } else {
    const err = await response.text();
    clearInterval(loadInterval);
    outputEditor.setValue("");
    typeCode(outputEditor, "Something went wrong. ");
    console.log(err);
  }



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
      const cursorPos = editor.getCursor();
      editor.scrollIntoView(cursorPos, 100);
    } else {
      clearInterval(interval);
    }
  }, 20);
}

let loadInterval
function loader(editor) {
  let loadingText = '';
  loadInterval = setInterval(() => {
    loadingText += '.';
    if (loadingText === '....') {
      loadingText = '';
    }
    editor.setValue(loadingText);
  }, 300);
}
