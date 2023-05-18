var inputSelect = document.getElementById('input-language');
var outputSelect = document.getElementById('output-language');

var inputEditor = CodeMirror.fromTextArea(document.getElementById("input-code"), {
	lineNumbers: true,
	theme: "dracula" 
  });

var outputEditor = CodeMirror.fromTextArea(document.getElementById("output-code"), {
	lineNumbers: true,
	theme: "dracula"
});

var btnTranslate = document.getElementById("btn-translate");

const handleSubmit = async (e) => {
    e.preventDefault();

    var inputlanguage = inputSelect.value;
    var outputlanguage = outputSelect.value;
    var inputCode = inputEditor.getValue();
    var final_prompt = "##### Translate this code from "+ inputlanguage + " into " + outputlanguage + "\n### "+ inputlanguage +"\n    \n    " + inputCode + "\n    \n### " + outputlanguage;
    console.log(final_prompt);

    outputEditor.setValue(final_prompt);

}

btnTranslate.addEventListener('click', handleSubmit);