import { deleteImage, getImage } from "~/server/queries";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  if (!image) {
    throw new Error(`Image with id ${props.id} not found`);
  }

  const clerk = await clerkClient();
  const uploaderInfo = await clerk.users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="flex h-full w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(props.id
              );
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
