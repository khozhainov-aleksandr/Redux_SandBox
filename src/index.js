const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state += 1;
  
    default:
      return state;
  }
}

let state = reducer(undefined, {});
console.log('✅', state); // 0

state = reducer(state, {type: 'INC'});
console.log('✅', state); // 1

state = reducer(state, {type: 'INC'});
console.log('✅', state); // 2

state = reducer(state, {type: 'INC'});
console.log('✅', state); // 3

state = reducer(state, {type: 'INC'});
console.log('✅', state); // 4

state = reducer(state, {type: 'INC'});
console.log('✅', state); // 5

state = reducer(state, {type: 'INC'});
console.log('✅', state); // 6