import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://645639fe5f9a4f23613e11e5.mockapi.io/users";

export async function getUsersFollow(page, following) {
  try {
    const res = await axios({
      method: "get",
      url: `${BASE_URL}/?following=${following}`,
      params: {
        page: page,
        limit: 3,
      },
    });
    return res.data;
  } catch (error) {
    toast.error("Server not response");
  }
}

export async function getAllUsers(page) {
  try {
    const res = await axios({
      method: "get",
      url: BASE_URL,
      params: {
        page: page,
        limit: 3,
      },
    });
    return res.data;
  } catch (error) {
    toast.error("Server not response");
  }
}
export async function getArrayLangth(following) {
  try {
    const res = await axios({
      method: "get",
      url: `${BASE_URL}/?following=${following}`,
    });
    return res.data;
  } catch (error) {
    toast.error("Server not response");
  }
}

export async function changeUsers(id, followers, following) {
  try {
    const res = await axios({
      method: "put",
      url: `${BASE_URL}/${id}`,
      data: {
        followers: followers,
        following: following,
      },
    });
    return res.data;
  } catch (error) {
    toast.error("Server not response");
  }
}
