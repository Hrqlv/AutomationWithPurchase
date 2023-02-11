const { expect } = require("@playwright/test");
const { Given, When, Then } = require("@cucumber/cucumber");


Given("estar na pagina", async function () {
  await page.goto("https://react-redux.realworld.io/#/login?_k=u802x2");
});

When("efetuar o login", async function () {
  await page.fill('input[type="email"]', "riq123@brabo.com");
  await page.press('input[type="email"]', "Tab");
  await page.fill('input[type="password"]', "123");
});

Then("clicar no botao pra finalizar o login", async function () {
  await page.click('button[type="submit"]');
});

Then("eu clico no perfil", async function () {
  await page.click('a[href="#@Rique"]');
});

Then("eu clico em editar meu perfil", async function () {
  await page.click('a[class="btn btn-sm btn-outline-secondary action-btn"]');
});

Then("eu edito minha biografia", async function () {
  await page.click('textarea[class="form-control form-control-lg"]');
});

Given("uma nova senha", async function () {
  await page.click('input[placeholder="New Password"]', "123");
});

Then("salvo as configuraçoes", async function () {
  await page.click('button[type="submit"]');
});
