import { getImage } from "@/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(photoId);
  if (Number.isNaN(idAsNum)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNum);
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
