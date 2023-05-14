var editor = CodeMirror.fromTextArea(document.getElementById("input-code"), {
	lineNumbers: true,
	mode: "javascript",
	theme: "dracula" 
  });

var outputEditor = CodeMirror.fromTextArea(document.getElementById("output-code"), {
	lineNumbers: true,
	mode: "htmlmixed",
	theme: "dracula",
	readOnly: true,
	cursorBlinkRate: 0
});

const input = document.querySelector();