export const getActiveUser = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/user", {
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
