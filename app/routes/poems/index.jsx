import { useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const count = await db.poem.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomPoem] = await db.poem.findMany({
    take: 1,
    skip: randomRowNumber
  })
  console.log("randomPoem", randomPoem)
  const data = { randomPoem }
  return data
}

export default function PoemsIndexRoute() {
  const data = useLoaderData();

  return (
    <div>
      <p>Here's a random peom:</p>
      <p>{data.randomPoem.content}</p>
      <Link to={data.randomPoem.id}>
        -"{data.randomPoem.name}"
      </Link>
    </div>
  );
}
