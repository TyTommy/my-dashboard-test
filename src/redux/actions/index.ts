export const set_menu_status = (status: string) => {
  return {
    type: "SET_MENU_STATUS",
    payload: status,
  };
};
