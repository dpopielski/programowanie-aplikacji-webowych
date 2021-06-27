/**
 * @jest-environment puppeteer
 */
import 'regenerator-runtime/runtime';

describe('note app', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/');
  });

  it('should display "Notekeep" text on page', async () => {
    await expect(page).toMatch('Notekeep');
  });

  it('should add note', async () => {
    await page.type('#noteTitle', 'Title');
    await page.type('#noteText', 'Text');

    await page.click('#addBtn');

    const note = await page.$('.notes');

    const noteTitle = await (
      await note.$('h3')
    ).evaluate((node) => node.innerHTML);

    expect(noteTitle).toBe('Title');
  });
});
