import axios from 'axios';


const instansing = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "271b2f57-2290-4eec-867d-2e33dbdb5e1f"
  }
})

export const GetUsers = (currentPage, pageSize) => {
  return instansing.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(Response => Response.data) // Возвращаем из респонса только data так как компоненте не нужен весь респонс   
}

export const Unfollowings = (id) => {
  return instansing.delete(`follow/${id}`) 
  .then(Response => Response.data)
}

export const Followings = (id) => {
  return instansing.post(`follow/${id}`) 
  .then(Response => Response.data)
}

export const Headers = () => {
  return instansing("auth/me")
  .then(Response => Response.data)
} 

export const ProfileApi = (userId) => {
  return instansing("profile/"+ userId)
  .then(Response => Response.data)
}