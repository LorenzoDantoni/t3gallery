import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "~/app/_components/simple-upload-button";
import Link from "next/link";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">Gallery</Link>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/*<UploadButton*/}
          {/*  endpoint="imageUploader"*/}
          {/*  onClientUploadComplete={() => {*/}
          {/*    router.refresh();*/}
          {/*  }}*/}
          {/*/>*/}
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
