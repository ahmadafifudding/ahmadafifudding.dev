export const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "/images/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "/images/safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Photos",
    icon: "/images/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/images/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "/images/terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "/images/trash.png",
    canOpen: false,
  },
]

export const INITIAL_Z_INDEX = 1000

export const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  textFile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgFile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
}
