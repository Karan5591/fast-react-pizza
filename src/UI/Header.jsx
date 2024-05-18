import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 
     uppercase border-b px-4 py-3
     border-stone-200 flex items-center justify-between sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
