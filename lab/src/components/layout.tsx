import type { PropsWithChildren } from "react";

import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl">
      <Header />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">
        <section className="text-center lg:w-full lg:py-20 lg:text-left">
          <div className="hero mx-auto w-full max-w-6xl px-6">
            <div className="hero-inner w-full relative lg:flex">
              <div
                className="hero-copy w-full bg-white pt-10 pb-16 lg:pt-16 lg:pr-20"
                style={{ minWidth: "600px" }}
              >
                <div className="mx-auto w-full max-w-3xl">{children}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
