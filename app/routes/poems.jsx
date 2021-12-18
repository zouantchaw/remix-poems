import { Outlet, Link } from "remix";
import stylesUrl from "../styles/poems.css"

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl
    }
  ];
};

export default function PoemsRoute() {
  return (
    <div className="poems-layout">
      <header className="poems-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="Remix Poems"
              aria-label="Remix Poems"
            >
              <span className="logo">😇</span>
              <span className="logo-medium">P😇ems</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="poems-main">
        <div className="container">
          <div className="poems-list">
            <Link to=".">Get a random poem</Link>
            <p>Here are some poems to check out:</p>
            <ul>
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="poems-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}