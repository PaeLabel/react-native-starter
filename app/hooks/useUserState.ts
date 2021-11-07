import { useSelector } from "react-redux"
import { RootState } from "../redux/Store"

export const getUser = () => {
  const user = useSelector((state: RootState) => state.UserState.user.data)
  return user
}

const UserHook = {
  getUser
}

export default UserHook