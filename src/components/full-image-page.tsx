import { getImage } from "@/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="min-w-0a flex h-full w-full">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
