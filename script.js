document.getElementById("submit").addEventListener("click", async function() {
    const question = document.getElementById("question").value;
    if (!question) {
        alert("Por favor, escribe una pregunta.");
        return;
    }

    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Pensando...";

    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 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`
        },
        body: JSON.stringify({
            model: "text-davinci-003",  // Modelo general que puede ser ajustado
            prompt: `Responde esta pregunta de manera filosófica y ética, según los principios de Kant, sin entrar en matemáticas: ${question}`,
            max_tokens: 150,
            temperature: 0.7
        })
    });

    const data = await response.json();
    const answer = data.choices[0].text.trim();
    responseDiv.innerHTML = `<strong>Respuesta:</strong> <p>${answer}</p>`;
});

