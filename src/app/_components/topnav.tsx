"use client";

import { UploadButton } from "@/utils/uploadthing";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function TopNav () {
  const router = useRouter();


  return (
    <nav className="p-4 font-semibold flex items-center justify-between w-fulltext-xl border-b">
      <div>Gallery</div>

      <div className="flex flex-row">
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UploadButton 
            endpoint="imageUploader" 
            onClientUploadComplete={() => {
              router.refresh()
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}