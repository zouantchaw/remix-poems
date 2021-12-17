import { Outlet } from "remix";

export default function PoemsRoute() {
  return (
    <div>
      <h1>P😇ems</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}