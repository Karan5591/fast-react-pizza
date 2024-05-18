import { useSelector } from "react-redux";

function Username() {
 const username= useSelector(state=>state.user.username)
  return <div className=" hidden text-sm 
  md:block font-semibold">{username}</div>;
}

export default Username;
