import dayjs from "dayjs"
import Image from "next/image"

const navLinks = [
  { id: "portfolio", name: "Portfolio" },
  { id: "contact", name: "Contact" },
  { id: "project", name: "Projects" },
]

const navIcons = [
  { id: "wifi", imageUrl: "/icons/wifi.svg" },
  { id: "search", imageUrl: "/icons/search.svg" },
  { id: "user", imageUrl: "/icons/user.svg" },
  { id: "mode", imageUrl: "/icons/mode.svg" },
]

export function Navbar() {
  return (
    <nav className="flex select-none items-center justify-between bg-white/50 p-2 px-5 backdrop-blur-3xl">
      <div className="flex items-center gap-5 max-sm:w-full max-sm:justify-center last:max-sm:hidden">
        <Image src="/images/logo.svg" alt="" height={20} width={20} className="size-4" />
        <p className="font-bold text-sm">Afifuddin's Portfolio</p>
        <ul className="flex items-center gap-5 max-sm:hidden">
          {navLinks.map(({ id, name }) => (
            <li key={id} className="cursor-pointer text-sm transition-all hover:underline">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5 max-sm:w-full max-sm:justify-center last:max-sm:hidden">
        <ul className="flex items-center gap-5 max-sm:hidden">
          {navIcons.map(({ id, imageUrl }) => (
            <li key={id} className="rounded p-1 hover:cursor-pointer hover:bg-neutral-100/50">
              <Image
                src={imageUrl}
                alt={`${id}'s icon`}
                height={20}
                width={20}
                className="size-4"
              />
            </li>
          ))}
        </ul>

        <time className="font-bold text-neutral-800 text-sm">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  )
}
