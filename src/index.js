import { legacy_createStore as createStore} from 'redux'

const redux = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state += 1;
  
    default:
      return state;
  }
}

const store = createStore(redux);

// Следит за изменениями store и выводит console каждый раз как store изменится 
store.subscribe(() => {
  console.log('✅', store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});