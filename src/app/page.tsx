import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
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
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
