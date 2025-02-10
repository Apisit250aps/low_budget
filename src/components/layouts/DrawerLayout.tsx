import { MainLayout } from '@/app/layout'
import { ReactNode } from 'react'

interface DrawerLayoutComponent extends MainLayout {
  id: string
  menu: ReactNode
}

export default function DrawerLayout({
  id,
  children,
  menu
}: DrawerLayoutComponent) {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id={id} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor={id}
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {menu}
        </div>
      </div>
    </>
  )
}
