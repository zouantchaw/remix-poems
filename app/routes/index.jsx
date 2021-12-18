import stylesUrl from "../styles/index.css"
import { Link } from "remix";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Poems!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="poems">Read Poems</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}