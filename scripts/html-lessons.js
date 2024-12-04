function runTableHTML() {
    const code = document.getElementById("table-editor").value;
    const output = document.getElementById("table-output");
    output.innerHTML = code;
}

function runImageHTML() {
    const code = document.getElementById("image-editor").value;
    const output = document.getElementById("image-output");
    output.innerHTML = code;
}
