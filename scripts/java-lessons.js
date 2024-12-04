function runJavaVars() {
    const code = document.getElementById("java-vars-editor").value;
    const output = document.getElementById("java-vars-output");

    if (
        code.includes('String name') &&
        code.includes('int age') &&
        code.includes('double height')
    ) {
        output.textContent = "Great job! You've declared variables correctly.";
    } else {
        output.textContent = "Error: Please declare variables as instructed.";
    }
}
