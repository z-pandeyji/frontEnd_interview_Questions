// Question: Create a function model(state, element), to bind state.value to the HTMLInputElement element.

// Example: 
// const input = document.createElement('input')
// const state = { value: 'John' }
// model(state, input)

// console.log(input.value) // 'John'
// state.value = 'Doe'
// console.log(input.value) // 'Doe'
// input.value = 'John.Doe'
// input.dispatchEvent(new Event('change'))
// console.log(state.value) // 'John.Doe'

function model(state, element) {
    element.value = state.value
    Object.defineProperty(state, 'value', {
      get() {return element.value},
      set(new_value){element.value = new_value; return}
    });
    element.addEventListener('change', (e) => {
       state.value = e.target.value;
    })
     
  }