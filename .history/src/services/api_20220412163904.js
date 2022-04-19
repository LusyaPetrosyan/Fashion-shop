import { apiURL } from "../config";

export async function getProducts() {
  try {
  const response = await fetch(`${apiURL}product`);
  const data = await response.json();
  return data;
}catch (error) {
  console.log("wrong", error);
}
}

export async function getOrders(user_id, token) {
  try {
    const response = await fetch(`${apiURL}order/user-order`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        user_id: user_id,
      },
    });
    return await response.json();
  } catch (error) {
    console.log("sxal", error);
  }
}

export async function imgUpdate(productId, file, token, userId) {
  console.log("imgUpdatefile", file);
const formData = new FormData();
  formData.append("image", file
  // { type: "multipart/form-data" }
  );

for (var key of formData.entries()) {
  console.log(key[0] + ", " + key[1]);
}


try {
  const response = await fetch(`${apiURL}image/add/${productId}`, {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
      userId: userId,
    },

    body: formData,
  });
  return response.json();
} catch (error) {
  console.log("sxalPost", error);
}
}
© 2022 GitHub, Inc.
Terms
Privacy
Securi