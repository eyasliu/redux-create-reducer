import createReducer from '../index';
import * as actions from './helper/actions';
import expect from 'expect';
import {createStore, bindActionCreators} from 'redux';

describe('createReducer', () => {
  let initState;
  beforeEach(() => {
    initState = {
      isDemo: true
    }
  })
  it('default behavior', () => {
    const reducer = createReducer(initState)({
      TOGGLE: (state, action) => ({isDemo: !state.isDemo})
    })
    const store = createStore(reducer);
    const boundActs = bindActionCreators(actions, store.dispatch);
    boundActs.toggle();
    expect(store.getState()).toEqual({
      isDemo: false
    })
  })

  it('init state and actions is not defined', () => {
    const reducer = createReducer()()
    const store = createStore(reducer);
    expect(store.getState()).toEqual({})
  })

  it('init state is not obj', () => {
    const reducer = createReducer(10)({
      CHANGE: (state, action) => action.number
    })
    const store = createStore(reducer);
    const boundActs = bindActionCreators(actions, store.dispatch);
    boundActs.change(59);
    expect(store.getState()).toEqual(59)
  })
})