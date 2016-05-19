/**
 * 创建高效率，安全，可读性好的redux reducer
 * @param  {obj} initState  初始state
 * @param  {obj} actions    操作
 * @return {reducer}        redux可使用的reducer
 */
export function createReducerCurry(initState = {}){
  return (actions = {}) => (state = initState, action) => actions.hasOwnProperty(action.type) ? 
    actions[action.type].apply(undefined, [state, action]) : state
}