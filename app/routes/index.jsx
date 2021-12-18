import stylesUrl from "../styles/index.css"

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function IndexRoute() {
  return <div>Hello index route</div>
}