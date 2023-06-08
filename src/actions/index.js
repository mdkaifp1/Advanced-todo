export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    }
  };
};

export const addList = (data) => {
  return {
    type: "ADD_LIST",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    }
  };
};

export const editList = (data) => {
  return {
    type: "EDIT_LIST",
    payload: {
      id: data
    }
  };
};

export const updateTodo = (data) => {
  return {
    type: "UPDATE_TODO",
    payload: {
      id: data.id,
      data: data
    }
  };
};
