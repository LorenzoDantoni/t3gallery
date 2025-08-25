import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mocksUrls = [
  "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j3i21glXBSONfg9C1YyGrcaLzVxnvT0suAXMoP",
  "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j3Lirj1CuUqdlHENJ86h70w2ts4xBrzua1We9o",
  "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j36Q5ZOUhXaIjgschtQV2MFdwYRT78KbfCr1eJ",
  "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j354GjlvQHoVNzKQ9pqh7mvPSdOwA2DuTgn1J3",
];

const mockImages = mocksUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post, index) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
