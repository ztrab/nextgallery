import { deleteImage, getImage } from "@/server/queries";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded by: </span>
          <span> {uploaderInfo.fullName} </span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created on: </span>
          <span> {new Date(image.createdAt).toLocaleDateString()} </span>
        </div>

        <div className="flex flex-col p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(idAsNumber);
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
