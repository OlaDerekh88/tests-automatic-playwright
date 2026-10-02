import { randomUserData } from '../src/factories/user.factory';
import { LoginPage } from '../src/pages/login.page';
import { RegisterPage } from '../src/pages/register.page';
import { WelcomePage } from '../src/pages/welcome.page';
import { expect, test } from '@playwright/test';

test.describe('Verify register and login', () => {
  test(
    'register with correct data and login',
    { tag: ['@GAD-R03-01', '@GAD-R03-02', '@GAD-R03-03'] },
    async ({ page }) => {
      // Arrange
      const expectedAlertPopupText = 'User created';

      const registerUserData = randomUserData();
      const registerPage = new RegisterPage(page);
      // Act
      await registerPage.goto();
      await registerPage.register(registerUserData);

      //Assert
      await expect(registerPage.alertPopup).toHaveText(expectedAlertPopupText);

      const loginPage = new LoginPage(page);
      await loginPage.waitForPageToLoadUrl();
      const titleLogin = await loginPage.title();
      expect.soft(titleLogin).toContain('Login');

      //Assert
      await loginPage.login({
        userEmail: registerUserData.userEmail,
        userPassword: registerUserData.userPassword,
      });

      const welcomePage = new WelcomePage(page);
      const titleWelcome = await welcomePage.title();
      expect(titleWelcome).toContain('Welcome');
    },
  );

  test(
    'not register with incorrect data - non valid email',
    { tag: ['@GAD-R03-04'] },
    async ({ page }) => {
      // Arrange
      const registerUserData = randomUserData();
      registerUserData.userEmail = '456#e';

      const expectedAlertText = 'Please provide a valid email address';
      const registerPage = new RegisterPage(page);
      // Act
      await registerPage.goto();
      await registerPage.register(registerUserData);

      // //Assert
      await expect(registerPage.emailErrorText).toHaveText(expectedAlertText);
    },
  );

  test(
    'not register with incorrect data - email not provided',
    { tag: ['@GAD-R03-04'] },
    async ({ page }) => {
      // Arrange

      const expectedAlertText = 'This field is required';
      const registerUserData = randomUserData();
      const registerPage = new RegisterPage(page);

      // Act
      await registerPage.goto();
      await registerPage.userFirstNameInput.fill(
        registerUserData.userFirstName,
      );
      await registerPage.userLastNameInput.fill(registerUserData.userLastName);
      await registerPage.userPasswordInput.fill(registerUserData.userPassword);
      await registerPage.registerButton.click();

      // //Assert
      await expect(registerPage.emailErrorText).toHaveText(expectedAlertText);
    },
  );
});
