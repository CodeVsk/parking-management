export const setUser = (id, role, expireIn) => ({
  type: "SET_USER",
  payload: { id, role, expireIn },
});

export const resetUser = () => ({
  type: "RESET_USER",
});
