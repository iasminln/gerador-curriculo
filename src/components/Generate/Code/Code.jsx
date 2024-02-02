const getInfo = (item) => {
  // get info local storage
  return localStorage.getItem(item)
}

export const htmlText = `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${getInfo('form-complete-name')} - Currículo" />
      <title>${getInfo('form-complete-name')} - Currículo</title>
    
      <style>
        main {
          background: ${getInfo('form-color-background')};
          color: ${getInfo('form-color-text')};
          font-size: 20px;
          height: 100vh;
        }
      </style>
    
    </head>

    <body>
      <main>
        <p>Nome: ${getInfo('form-complete-name')}</p>
        <p>Telefone: ${getInfo('form-contact-phone')}</p>
        <p>E-mail: ${getInfo('form-contact-email')}</p>
      </main>
    </body>
  </html>
`
