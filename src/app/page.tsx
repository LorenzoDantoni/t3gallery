import { SignedIn, SignedOut } from "@clerk/nextjs";
import {getMyImages} from "~/server/queries";

export const dynamic = "force-dynamic";

// const mocksUrls = [
//   "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j3i21glXBSONfg9C1YyGrcaLzVxnvT0suAXMoP",
//   "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j3Lirj1CuUqdlHENJ86h70w2ts4xBrzua1We9o",
//   "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j36Q5ZOUhXaIjgschtQV2MFdwYRT78KbfCr1eJ",
//   "https://ftluvimrni.ufs.sh/f/3zIc3cRVu8j36Q5ZOUhXaIjgschtQV2MFdwYRT78KbfCr1eJ",
// ];

// const mockImages = mocksUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }));

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
