import Link from "next/link";

export function Header({ title }: { title?: string }) {
  return (
    <header className="relative py-6 lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl leading-none">
            <Link href="/" className="flex items-center">
              Front Laboratory
            </Link>
          </h1>
        </div>
      </div>
    </header>
  );
}
