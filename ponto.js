const puppeteer = require('puppeteer');

(async () => {
  //Faz com que apareça o navegador ou não
  const browser = await puppeteer.launch({ headless: false });

  //abre uma nova página no chromium
  const page = await browser.newPage();
  //direciona pra url indicada
  await page.goto('https://app.feedz.com.br/');
  //digita o loguin
  await page.type('.press-login', 'aqui você coloca seu email de acesso');
  //digita a senha
  await page.type('#passInput', 'aqui você coloca sua senha ');
  //aperta em logar
  await page.click('#enter-login');
  //escolhe o humor do dia
  await page.select('.label.radio-inline');
  //clica em confirmar
  await page.click('.confirm.mood')
  //bate um screenshot da página
  await page.screenshot({ path: 'example.png' });
  //retorna "sucesso" caso não ocorra nenhum erro
  console.log('sucesso');
  //fecha o navegador
  await browser.close();


})();