const boutonEnvoi = document.querySelector(".bouton-envoi")
const motDePasseOublie = document.querySelector(".mot-de-passe-oublie")

boutonEnvoi.addEventListener("click", async function (event) {
    const email = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const user = {
      email: email,
      password: password,
    };
    // Appel à l'API pour uploader les données du formulaire
    fetch('http://localhost:5678/api/users/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response);

        if (response.status == 200){
          window.location.href='http://127.0.0.1:5500/FrontEnd/page-connectee.html'
          
        }
      
  
        if (response.status >200);{
        motDePasseOublie.style.visibility = 'visible';
  
        };
  
      const token = response.json;
      const value = token.token;
      console.log(token)});
  
        
        return response.json();
        
        
        
        });

        

      