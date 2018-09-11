const exampleReducer = (state = [], action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return [...state, action.name]
    default:
      return state
  }
}

export default exampleReducer
