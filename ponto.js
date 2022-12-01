const puppeteer = require('puppeteer');

(async () => {
  //Faz com que apareça o navegador ou não
  const browser = await puppeteer.launch({ headless: false });

  //abre uma nova página no chromium
  const page = await browser.newPage();
  //direciona pra url indicada
  await page.goto('https://app.feedz.com.br/');
  //digita o loguin
  await page.type('.press-login', 'matheus.fantini@captei.com.br');
  //digita a senha
  await page.type('#passInput', 'Mft291095');
  //aperta em logar
  await page.click('#enter-login');
  //escolhe o humor do dia
  await page.click('.label.radio-inline');

  

  //bate um screenshot da página
  await page.screenshot({ path: 'example.png' });
  //retorna "sucesso" caso não ocorra nenhum erro
  console.log('sucesso');
  //fecha o navegador
  //await browser.close();


})();