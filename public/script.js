function enviar() {
  const nome = document.getElementById("nome").value;
  fetch("/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("status").innerText =
      "Mensagem enviada com sucesso!";
  });
}
