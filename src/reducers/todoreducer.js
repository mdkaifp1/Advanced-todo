const initialData = {
  data: []
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            id: id,
            data: data
          }
        ]
      };
    case "UPDATE_TODO":
      const updatedData = state.data.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, data: action.payload.data }
          : todo
      );
      return { ...state, data: updatedData };
    default:
      return state;
  }
};

export default todoReducer;
