import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
