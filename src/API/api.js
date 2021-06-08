import { url } from "./env"

export function createUser(name, birthday) {
  return fetch(`${url}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: { name, birthday } }),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("userName", data.name)
      localStorage.setItem("userBirthday", data.birthday)
      return data
    })
}
