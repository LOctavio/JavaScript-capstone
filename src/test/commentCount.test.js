import commentCount from '../commentCount.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
let dom = new JSDOM(`
<!DOCTYPE html>
<h3 id="item1_count">Comments</h3>
<div id="item1_comments">
  <p></p>
  <p></p>
  <p></p>
</div>`);

test('There are 3 comments of item1', () => {
  const title = dom.window.document.getElementById('item1_count');
  commentCount(dom.window.document, 'item1');
  expect(title.textContent).toBe('Comments(3)');
});

test('There are 7 comments of item3', () => {
  dom = new JSDOM(`
  <!DOCTYPE html>
  <h3 id="item3_count">Comments</h3>
  <div id="item3_comments">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>`);
  const title = dom.window.document.getElementById('item3_count');
  commentCount(dom.window.document, 'item3');
  expect(title.textContent).toBe('Comments(7)');
});

test('There are 7 comments of item5', () => {
  dom = new JSDOM(`
  <!DOCTYPE html>
  <h3 id="item5_count">Comments</h3>
  <div id="item5_comments">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>`);
  const title = dom.window.document.getElementById('item5_count');
  commentCount(dom.window.document, 'item5');
  expect(title.textContent).toBe('Comments(10)');
});

test('There are no comments of item2', () => {
  dom = new JSDOM(`
  <!DOCTYPE html>
  <h3 id="item2_count">Comments</h3>
  <div id="item2_comments">
  </div>`);
  const title = dom.window.document.getElementById('item2_count');
  commentCount(dom.window.document, 'item2');
  expect(title.textContent).toBe('Comments(0)');
});