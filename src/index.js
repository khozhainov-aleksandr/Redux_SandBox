import { legacy_createStore as createStore} from 'redux'
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { redux } from './reducer';

const store = createStore(redux);
const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd,
// }, dispatch);

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 100);
    rnd(payload);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);