export const setUser = (id, role) => ({
  type: "SET_USER",
  payload: { id, role },
});

export const resetUser = () => ({
  type: "RESET_USER",
});
