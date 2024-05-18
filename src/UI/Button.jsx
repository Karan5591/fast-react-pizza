import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

function Button({children, disabled, to, onClick, type}) {
    
   const style={
    round: 'bg-yellow-400 uppercase font-semibold rounded-full text-stone-800 inline-block hover:bg-yellow-200 ring-2 ring-yellow-400 mr-1 ml-1 md:px-1 md:py-1 ',
primary: "bg-yellow-400 ml-2 uppercase font-semibold tracking-wide rounded-full text-stone-800 py-2 px-3 inline-block hover:bg-yellow-200 ring-2 ring-yellow-400"
   
}
    if(to)
        return <Link to={to} className={style[type]}>{children}</Link>
    
    if (onClick)   return (<button onClick={onClick} disabled={disabled} className={style[type]}>{children}</button>);

    return (<button onClick={onClick} disabled={disabled} className={style[type]}>{children}</button>);
}

export default Button
