import Link from "next/link";


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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
