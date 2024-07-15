const initialState = {
  menuStatus: "opened",
};

export const reducers = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "SET_MENU_STATUS":
      return {
        ...state,
        menuStatus: payload,
      };

    default:
      return state;
  }
};
