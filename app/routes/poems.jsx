import { Outlet, Link, useLoaderData } from "remix";
import stylesUrl from "../styles/poems.css"
import { db } from "../utils/db.server";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl
    }
  ];
};

export const loader = async () => {
  const data = {
    poemListItems: await db.poem.findMany({
      take: 4,
      select: { id: true, name: true },
      orderBy: { createdAt: "desc"}
    })
  };
  return data;
}

export default function PoemsRoute() {
  const data = useLoaderData();
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
              {data.poemListItems.map(poem => (
                <li key={poem.id}>
                  <Link to={poem.id}>{poem.name}</Link>
                </li>
              ))}
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