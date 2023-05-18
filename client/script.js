var editor = CodeMirror.fromTextArea(document.getElementById("input-code"), {
	lineNumbers: true,
	mode: "javascript",
	theme: "dracula" 
  });

var outputEditor = CodeMirror.fromTextArea(document.getElementById("output-code"), {
	lineNumbers: true,
	mode: "python",
	theme: "dracula",
	readOnly: true,
	cursorBlinkRate: 0
});

var btnTranslate = document.getElementById("btn-translate");

const handleSubmit = async (e) => {
    e.preventDefault();

    const data = editor.getValue();

    const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: data
        })
    })

    if (response.ok) {
        const data = await response.json()
        const parsedData = data.bot.trim()

        outputEditor.value += parsedData;
        console.log(parsedData)

    } else {
        const err = await response.text()
        alert(err)
    }
}

btnTranslate.addEventListener('click', handleSubmit);