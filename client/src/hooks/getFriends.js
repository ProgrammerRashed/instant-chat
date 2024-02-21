import { toast } from "react-toastify";

const getFriends = async () => {
  try {
    const res = await fetch("http://localhost:4000/api/friends", {
      credentials: "include",
    });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    toast.error(error.message);
  } finally {
  }
};

export default getFriends;
