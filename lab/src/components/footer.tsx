export function Footer() {
  return (
    <footer className="bg-primary-400 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex flex-wrap py-10 lg:justify-between">
          <div className="mb-6 inline-flex w-full flex-none justify-center lg:w-1/2 lg:justify-start">
            <span>
              <a href="https://github.com/burydmitri" className="border-b lg:text-gray-400 ">
                burydmitri
              </a>
            </span>
          </div>
          <div className="mb-6 inline-flex w-full flex-none justify-center lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end">
            <span>
              <a href="https://github.com/burydmitri" className="border-b lg:text-gray-400">
                gitHub
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )   
}