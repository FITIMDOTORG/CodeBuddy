function runListHTML() {
    const code = document.getElementById("list-editor").value;
    const output = document.getElementById("list-output");
    output.innerHTML = code;
}

function runLinkHTML() {
    const code = document.getElementById("link-editor").value;
    const output = document.getElementById("link-output");
    output.innerHTML = code;
}
