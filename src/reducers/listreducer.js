const initialData = {
  data: []
};

const listReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_LIST":
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

    default:
      return state;
  }
};

export default listReducer;
