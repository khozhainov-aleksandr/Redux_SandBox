export const redux = (state = 32, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.payload;
  
    default:
      return state;
  }
}