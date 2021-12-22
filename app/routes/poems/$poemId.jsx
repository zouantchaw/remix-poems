import { Link, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export const loader = async ({ params }) => {
  const poem = await db.poem.findUnique({
    where: { id: params.poemId }
  });
  if (!poem) throw new Error("Poem not found");
  const data = { poem };
  return data
}


export default function PoemRoute() {
  const data = useLoaderData()

  return (
    <div>
      <p>Here's your thoughtful poem:</p>
      <p>{data.poem.content}</p>
      <Link to=".">{data.poem.name}</Link>
    </div>
  );
}
