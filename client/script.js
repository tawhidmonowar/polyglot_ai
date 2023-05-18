var inputSelect = document.getElementById('input-language');

var inputEditor = CodeMirror.fromTextArea(document.getElementById("input-code"), {
	lineNumbers: true,
	mode: "text/x-java",
	theme: "dracula" 
  });

var outputEditor = CodeMirror.fromTextArea(document.getElementById("output-code"), {
	lineNumbers: true,
	mode: "javascript",
	theme: "dracula"
});

inputSelect.addEventListener('change', function() {
    var selectedLanguage = inputSelect.value;
    inputEditor.setOption('mode', 'text/x-'+selectedLanguage);
    console.log("Input Language xx: " + selectedLanguage + "\n");
});






var btnTranslate = document.getElementById("btn-translate");


const handleSubmit = async (e) => {
    e.preventDefault();
    
    var inputSelect = document.getElementById('input-language');
    var inputlanguage = inputSelect.options[inputSelect.selectedIndex].value;
    console.log("Input Language: " + inputlanguage + "\n");

    var outputSelect = document.getElementById('output-language');
    var outputlanguage = outputSelect.options[outputSelect.selectedIndex].value;
    console.log("Output Language: " + outputlanguage);

}

btnTranslate.addEventListener('click', handleSubmit);