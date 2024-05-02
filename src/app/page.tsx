import Link from "next/link";
import { db } from "@/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
  "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
  "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
  "https://utfs.io/f/83680858-56d4-43b5-a762-20da3caf3caa-w2vz43.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((img, index) => (
          <div key={img.id + "-" + index} className="w-48">
            <img src={img.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
