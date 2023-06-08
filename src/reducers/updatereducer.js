const initialData = {
  data: []
};
const updateReducer = (state = initialData, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      const { id, data } = action.payload;
      const updatedData = state.data.map((todo) =>
        todo.id === id ? { ...todo, data: data } : todo
      );
      return { ...state, data: updatedData };

    default:
      return state;
  }
};

export default updateReducer;
