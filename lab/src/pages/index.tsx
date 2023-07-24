import { NavLinks } from '@/components/nav-links'

export default function Home() {
  return (
    <section className="text-center lg:w-full lg:py-20 lg:text-left">
        <div className="hero mx-auto w-full max-w-6xl px-6">
          <div className="hero-inner w-full relative lg:flex">
            <div
              className="hero-copy w-full bg-white pt-10 pb-16 lg:pt-16 lg:pr-20"
              style={{ minWidth: '600px' }}
            >
              <div className="mx-auto w-full max-w-3xl">
                <h1
                  className="mt-0 mb-4 text-4xl font-bold md:text-5xl "
                >
                  Home page
                </h1>
                
                <p
                  className="prose prose-xl px-16 text-gray-500 md:px-0"
                >
                  Here I will study and test some functions, cases, libraries
                </p>
                <br />
                <br />
                <NavLinks className = "prose-xl"/>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
