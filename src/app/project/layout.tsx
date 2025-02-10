import DrawerLayout from '@/components/layouts/DrawerLayout'

export default function ProjectLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DrawerLayout
        id={'project-layout'}
        menu={
          <>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Line</a>
              </li>
            </ul>
          </>
        }
      >
        {children}
      </DrawerLayout>
    </>
  )
}