import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav () {
  return (
    <nav className="p-4 font-semibold flex items-center justify-between w-fulltext-xl border-b">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}