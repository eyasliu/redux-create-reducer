export function toggle(){
  return {
    type: 'TOGGLE'
  }
}

export function change(number){
  return {
    type: 'CHANGE',
    number
  }
}