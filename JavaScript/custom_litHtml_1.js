// https://www.youtube.com/watch?v=ruql541T7gc -> This Video explains it pretty well about how it works.
// import {html, render} from 'lit-html'
// const helloTemplate = (name) => html`<div>Hello ${name}!</div>`
// // This renders <div>Hello Steve!</div> to the document body
// render(helloTemplate('Steve'), document.body)

// // This updates to <div>Hello Kevin!</div>, but only updates the ${name} part
// render(helloTemplate('Kevin'), document.body);

// Question: implement html() and render() to make above example work, without considering the rerender,
// so html() could just return the raw HTML string.

function html(string, ...val) {
  let result = '';
  string.forEach((str, i) => {
    result += str + (val[i] ?? '');
  });
  return result;
}

function render(result, container) {
  container.innerHTML = result;
}

// Test case
const name = 'John Doe';
const age = 30;
const greeting = html`<div>Hello ${name}, you are ${age} years old!</div>`;
console.log(greeting);
