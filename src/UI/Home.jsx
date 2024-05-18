import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { Link } from "react-router-dom";

function Home() {
  const username= useSelector(state=> state.user.username)
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-3xl 
      font-semibold text-yellow-600 md:text-3xl">
        The best pizza.
        <br />
        <span>
          Straight out of the oven, straight to you.
        </span>
      </h1>

     {username==='' ? <CreateUser /> : <Link to='/menu'><button className="bg-yellow-400 p-3 rounded-full text-xl font-semibold hover:bg-yellow-300" >Continue Ordering</button></Link>}
    </div>
  );
}

export default Home;
