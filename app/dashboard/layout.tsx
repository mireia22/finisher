import Link from "next/link";
import { User, Home } from "@geist-ui/icons";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-900 h-10 flex px-4 py-1 text-white justify-between items-center">
        <Link href={"/"}>
          <Home color="white" />
        </Link>
        <Link href={"/profile"}>
          <User />
        </Link>
      </header>

      <main className="flex-grow bg-white">
        {children}
      </main>
    </div>
  );
}
