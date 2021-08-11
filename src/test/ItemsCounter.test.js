import numberOfItems from "../ItemsCounter";
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
var dom = new JSDOM(`
<!DOCTYPE html>
<h1>Items</h1>
<ul class="listContainer">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>`);

test('There are 5 items in the DOM', () => {
  const title = dom.window.document.querySelector('h1');
  numberOfItems(dom.window.document);
  expect(title.textContent).toBe('Items(5)');
});



test('There are 2 items in the DOM', () => {
  dom = new JSDOM(`
  <!DOCTYPE html>
  <h1>Items</h1>
  <ul class="listContainer">
    <li></li>
    <li></li>
  </ul>`);
  const title = dom.window.document.querySelector('h1');
  numberOfItems(dom.window.document);
  expect(title.textContent).toBe('Items(2)');
});

test('There are 10 items in the DOM', () => {
  dom = new JSDOM(`
  <!DOCTYPE html>
  <h1>Items</h1>
  <ul class="listContainer">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>`);
  const title = dom.window.document.querySelector('h1');
  numberOfItems(dom.window.document);
  expect(title.textContent).toBe('Items(10)');
});

test('There are no items in the DOM', () => {
  dom = new JSDOM(`
  <!DOCTYPE html>
  <h1>Items</h1>
  <ul class="listContainer">
  </ul>`);
  const title = dom.window.document.querySelector('h1');
  numberOfItems(dom.window.document);
  expect(title.textContent).toBe('Items(0)');
});