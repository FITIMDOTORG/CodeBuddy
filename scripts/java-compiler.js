function runJava() {
    const code = document.getElementById("java-editor").value;
    const output = document.getElementById("java-output");

    // Simple simulation of Java output
    if (code.includes('System.out.println("Hello, World!");')) {
        output.textContent = "Hello, World!";
    } else {
        output.textContent = "Error: Please write a valid Java program.";
    }
}
