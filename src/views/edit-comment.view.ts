import { AddCommentModel } from '@_src/models/comment.model';
import { Locator, Page } from '@playwright/test';

export class EditCommentView {
  bodyInput: Locator;
  upDateButton: Locator;

  constructor(private page: Page) {
    this.bodyInput = this.bodyInput = this.page.locator('#body');
    this.upDateButton = this.page.getByTestId('update-button');
  }

  async updateComment(commentData: AddCommentModel): Promise<void> {
    await this.bodyInput.fill(commentData.body);
    await this.upDateButton.click();
  }
}
