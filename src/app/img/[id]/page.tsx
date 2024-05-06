import FullPageImageView from "@/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(photoId);
  if (Number.isNaN(idAsNum)) throw new Error("Invalid photo id");

  return <FullPageImageView id={idAsNum} />;
}
