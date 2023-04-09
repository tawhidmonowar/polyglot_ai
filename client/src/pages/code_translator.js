import React from 'react';

function code_translator() {

    return (
        <div>
            <a href="https://github.com/tawhidmonowar/polyglot_ai" class="github-icon">
                <img src="https://img.icons8.com/ios/50/000000/github.png" alt="GitHub"></img>
            </a>

            <div class="title">
                <h1><br></br>AI Code Translator</h1>
                <button class="btn-translate">Translate</button>

            </div>

            <div class="container">
                <div class="sub-container">
                    <div class="left-section">
                        <label id="input" for="input-language">Input</label>
                        <select id="input-language">
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                        </select>

                        <div style="position: relative;">
                            <textarea id="input-code" cols="50" placeholder="Enter your code here"></textarea>
                            <button class="btn-input-copy" style="position: absolute; top: 0; right: 0;">Copy</button>
                        </div>
                    </div>
                    <div class="right-section">
                        <label id="output" for="output-language">Output</label>
                        <select id="output-language">
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                        </select>

                        <div style="position: relative;">
                            <textarea id="output-code" placeholder="Output will be displayed here" readonly></textarea>
                            <button class="btn-output-copy" style="position: absolute; top: 0; right: 0;">Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default code_translator;