import Link from "next/link";

const NAV_LINKS = [
  { name: "1. UseState vs useReducer ⚓", to: "/usestate-vs-usereducer" },
  {
    name: "2. Text animations + random joke API usage 🤡",
    to: "/random-joke-api",
  },
];

export function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <Link href={link.to} className="lg:text-gray-400">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
