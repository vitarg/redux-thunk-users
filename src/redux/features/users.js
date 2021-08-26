const initialState = {
  users: [],
  loading: false,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case "users/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/load/fulfilled":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "users/delete/pending":
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.payload) {
            return {
              ...e,
              deleting: true,
            };
          }
          return e;
        }),
      };

    case "users/delete/fulfilled":
      return {
        ...state,
        users: state.users.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};

export const loadUsers = () => (dispatch) => {
  dispatch({ type: "users/load/pending" });
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "users/load/fulfilled", payload: data });
    });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: "users/delete/pending", payload: id });
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "users/delete/fulfilled", payload: id });
    });
};
