describe('проверка на позитивный кейс авторизации', function () {

    it('Правильный логин и правильный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru') // ввел верный логин
         cy.get('#pass').type('iLoveqastudio1') // ввел верный пароль
         cy.get('#loginButton').click(); // нажал кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверил, что текст правильный
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестик видна пользователю
    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажал на кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // ввел eMail
        cy.get('#restoreEmailButton').click(); // нажал кнопку Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверил, что текст правильный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестик видна пользователю
   })

   it('Проверка на негативный кейс авторизации, неверный Пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('german@dolnikov.ru') // ввел верный логин
    cy.get('#pass').type('iLoveqastudio32') // ввел НЕверный пароль
    cy.get('#loginButton').click(); // нажал кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил, что текст правильный
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестик видна пользователю
})

it('Проверка на негативный кейс авторизации, неверный логин', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('germaan@dolnikov.ru') // ввел НЕверный логин
    cy.get('#pass').type('iLoveqastudio1') // ввел верный пароль
    cy.get('#loginButton').click(); // нажал кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил, что текст правильный
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестик видна пользователю
})

it('Проверка на негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('germaandolnikov.ru') // ввел логин без @
    cy.get('#pass').type('iLoveqastudio1') // ввел верный пароль
    cy.get('#loginButton').click(); // нажал кнопку войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверил, что текст правильный
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестик видна пользователю
})

it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru') // ввел верный логин строчными буквами
    cy.get('#pass').type('iLoveqastudio1') // ввел верный пароль
    cy.get('#loginButton').click(); // нажал кнопку войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверил, что текст правильный
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестик видна пользователю
})
 })