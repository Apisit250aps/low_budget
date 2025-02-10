import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
const secret = process.env.AUTH_SECRET
export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const token = await getToken({ req, secret })
  const isAuthenticated: boolean = !!token

  if (isAuthenticated && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
