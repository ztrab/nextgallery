import Link from "next/link";
import { db } from "@/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

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

async function Images () {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id) 
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48 flex flex-col">
          <img src={image.url} alt={image.name} />
          <div className="">
            {image.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
