function buscarUsuario() {
  const username = document.getElementById("username").value;
  const url = https //api.github.com/users/${username};

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("resultado").innerHTML = `
        <img src="${data.avatar_url}" width="100" />
        <h2>${data.name || "Sem nome"}</h2>
        <p><strong>Login:</strong> ${data.login}</p>
        <p><strong>Repositórios Públicos:</strong> ${data.public_repos}</p>
        <p><strong>Seguidores:</strong> ${data.followers}</p>
        <a href="${data.html_url}" target="_blank">Ver Perfil</a>
      `;
    })
    .catch(error => {
      document.getElementById("resultado").innerHTML = <p style="color:red">${error.message}</p>;
    });
}