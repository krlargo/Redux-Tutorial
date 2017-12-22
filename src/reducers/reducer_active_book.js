// All reducers get two arguments: currentState & action
// - state is not applilcation state, only state this reducer is responsible for
// - must always return non-undefined variable (hence default state = null)
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload; // State should never be mutated here
  }
  return state;
}
