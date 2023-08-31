const getAll = async () => {
  try {
    const response = await fetch(`${BASE_URL}/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, role }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { success: false, message: "Erro ao validar token" };
  }
};
