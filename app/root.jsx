import { LiveReload, Outlet, Links } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Lovely Poems</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? (<LiveReload />) : null}
      </body>
    </html>
  )
}