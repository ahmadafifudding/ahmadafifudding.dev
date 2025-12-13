"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { useRef } from "react"
import { Tooltip } from "react-tooltip"
import { dockApps } from "@/constants"

export function Dock() {
  const dockRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const dock = dockRef.current
    if (!dock) {
      return
    }

    const icons = dock.querySelectorAll(".dock-icon")

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect()

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect()
        const center = iconLeft - left + width / 2
        const distance = Math.abs(mouseX - center)

        const intensity = Math.exp(-(distance ** 2.5) / 2000)

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        })
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect()

      animateIcons(e.clientX - left)
    }

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      })
    }
    dock.addEventListener("mousemove", handleMouseMove)
    dock.addEventListener("mouseleave", resetIcons)

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove)
      dock.removeEventListener("mouseleave", resetIcons)
    }
  }, [])

  const toggleApp = (app: { id: string; canOpen: boolean }) => {}

  return (
    <section className="-translate-x-1/2 absolute bottom-5 left-1/2 z-50 select-none max-sm:hidden">
      <div
        ref={dockRef}
        className="flex items-end justify-between gap-1.5 rounded-2xl bg-white/20 p-1.5 backdrop-blur-md"
      >
        {dockApps.map(({ id, icon, name, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon 3xl:size-20 size-14 cursor-pointer"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-content={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={icon}
                alt={name}
                height={60}
                width={60}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip
          id="dock-tooltip"
          place="top"
          style={{
            width: "fit-content",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--color-purple-200)",
            paddingInline: "calc(var(--spacing) * 3)",
            paddingBlock: "calc(var(--spacing) * 1)",
            color: "var(--color-purple-800)",
          }}
          className="text-xs! shadow-2xl!"
        ></Tooltip>
      </div>
    </section>
  )
}
