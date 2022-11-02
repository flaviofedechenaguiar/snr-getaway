# Snr-Getaway 

Snr-Getaway e uma api gateway que possibilita o login na plataforma snr. Utilizando somente o usuário e senha, através de webscraping e obtido o token de acesso da plataforma.

## API Routes

- Authentication

### Request

`POST /senior/login`

### Body    
      {
        "user": "any_user",
        "password": "any_password"
      }

### Response

    {
      "token":"eyJhbGciOiJIUzI1NiIsI4fwpMeJf"
    }




