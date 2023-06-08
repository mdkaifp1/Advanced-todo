const initialData = {
  data: []
};

const editReducer = (state = initialData, action) => {
  switch (action.type) {
    case "EDIT_LIST":
      const { id } = action.payload;

      return {
        data: {
          id: id
        }
      };

    default:
      return state;
  }
};

export default editReducer;
