"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    pathname: "/",
    name: "Heim",
  },
  {
    pathname: "/category/uppskriftir",
    name: "Uppskriftir",
  },
  {
    pathname: "/category/fyndid",
    name: "Fyndið",
  },
  {
    pathname: "/category/um",
    name: "Um",
  },
]

const Menu = () => {
  const path = usePathname();

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white py-4 border-b flex flex-row items-center justify-center gap-4">
      {menuItems.map((item, i) =>
        <Link
          className={`${path === item.pathname && "text-green-600 underline underline-offset-8 decoration-2"}`}
          key={i}
          href={item.pathname}
        >
          {item.name}
        </Link>
      )}
    </div>
  )
}

export default Menu