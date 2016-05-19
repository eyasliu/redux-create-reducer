# redux-create-reucer

[![Build Status](https://travis-ci.org/eyasliu/redux-create-reducer.svg?branch=master)](https://travis-ci.org/eyasliu/redux-create-reducer)

create reducer with fast, save, readability

# API

## createReducer(initState)(actions)

- initState [any]
  + default: {}
  + reducer init state
- actions [object]
  + default: {}
  + a plain obj with function for action
    - key is action type, val is action to change reducer
    - function: (state, action) => {}
      * state: the reducer state
      * action: the action
- @return reducer
  + reducer for redux

# usage

```js
import createReducer

// reducer
export default createReducer({isDemo: true})({
  TOGGLE: (state, action) => ({isDemo: !state.isDemo})
})

// action
function toggle(){
  return {
    type: 'TOGGLE'
  }
}
```
