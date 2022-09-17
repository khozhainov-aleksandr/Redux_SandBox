import { legacy_createStore as createStore} from 'redux'
import { inc, dec, rnd } from './actions';
import { redux } from './reducer';

const store = createStore(redux);
const { dispatch } = store;

document
  .getElementById('inc')
  .addEventListener('click', () => {
    dispatch(dec());
  });

document
  .getElementById('dec')
  .addEventListener('click', () => {
    dispatch(inc());
  });

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 100);
    dispatch(rnd(payload));
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);