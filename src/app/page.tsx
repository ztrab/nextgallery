import Link from "next/link";
import { db } from "@/server/db";

export const dynamic = "force-dynamic";

// const mockUrls = [
//   "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
//   "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
//   "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
//   "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
// ];

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url: url
// }));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id) 
  });

  console.log(images)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 flex flex-col">
            <img src={image.url} alt={image.name} />
            <div className="">
              {image.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
