import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PaymentPage } from '../pages/payment.page';
import { PulpitPage } from '../pages/pulpit.page';

test.describe('Payment tests', () => {
  let paymentPage:PaymentPage;

  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(userId, userPassword);
    // await loginPage.loginInput.fill(userId);
    // await loginPage.passwordInput.fill(userPassword);
    // await loginPage.loginButton.click();

    const pulpitPage = new PulpitPage(page);
    await pulpitPage.sideMenuComponent.paymentLink.click();

    paymentPage = new PaymentPage(page);
  });

  test('simple payment', async ({ page }) => {
    //Arrange
    const transferReceiver = 'Jan Nowak';
    const transferAccount = '12 3344 5566 7788 8899 0097 65555';
    const transferAmount = '222';
    const expectedMessage = `Przelew wykonany! ${transferAmount},00PLN dla Jan Nowak`;

    //Act
    
    await paymentPage.transferReceiverInput.fill(transferReceiver);
    await paymentPage.transferToInput.fill(transferAccount);
    await paymentPage.transferAmountInput.fill(transferAmount);

    await paymentPage.transferButton.click();
    await paymentPage.actionCloseButton.click();
    // await page.getByTestId('transfer_receiver').fill(transferReceiver);
    // await page.getByTestId('form_account_to').click();
    // await page.getByTestId('form_account_to').fill(transferAccount);
    // await page.getByTestId('form_amount').fill(transferAmount);
    // await page.getByRole('button', { name: 'wykonaj przelew' }).click();
    // await page.getByTestId('close-button').click();

    //Assert
    await expect(paymentPage.messageText).toHaveText(expectedMessage);
  });
});
