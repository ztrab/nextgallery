import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "@/server/queries";
import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";

async function Images () {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48 flex flex-col">
          <Link href={`/img/${image.id}`}>
            <Image 
              src={image.url} 
              style={{objectFit: "contain"}} 
              alt={image.name} 
              width={192}
              height={192}
            />
          </Link>
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
