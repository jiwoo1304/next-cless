import axios from "axios";

const logoutHandle = async () => {
  const token = localStorage.getItem("token");
  try {
    await axios.post(
      "http://192.168.0.2:8000/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem("token");
    window.location.reload();
  } catch (error) {
    console.error("Error logging out", error);
  }
};

export default logoutHandle;
