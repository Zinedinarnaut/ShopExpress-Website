export default function Footer() {
  return (
    <footer className="w-full border-t border-teal-600/60 p-8 lg:px-32 gap-8 flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-8 justify-between h-auto">
        <h3 className="text-neutral-50 font-normal break-all">
          Copyright &copy; ShopExpress. All rights reserved.
        </h3>
        <div className="flex gap-4 text-neutral-100/80">
          <a href="https://github.com/Zinedinarnaut/ShopExpress" className="hover:text-neutral-100 duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-50 font-normal">App</h3>
          <ul className="list-none text-neutral-300/80 space-y-2">
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Lorem</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Ipsum</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Dolor</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Sit</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-50 font-normal">Product</h3>
          <ul className="list-none text-neutral-300/80 space-y-2">
            <li>
              <a href="https://github.com/Zinedinarnaut/ShopExpress" className="hover:text-neutral-100 duration-200 ease-in-out">ShopExpress</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-50 font-normalt">Community</h3>
          <ul className="list-none text-neutral-300/80 space-y-2">
            <li>
              <a href="https://discord.com" className="hover:text-neutral-100 duration-200 ease-in-out">Support Server</a>
            </li>
            <li>
              <a href="https://github.com/Zinedinarnaut/ShopExpress" className="hover:text-neutral-100 duration-200 ease-in-out">Repository</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
