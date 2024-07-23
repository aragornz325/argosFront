import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const isLogged = request.cookies.get('isLogged');
    const token = request.cookies.get('token');

    if (isLogged?.value === 'true') {
        return NextResponse.next()
    }else{
        return NextResponse.redirect(new URL('/login', request.url))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [ 
        '/',
        '/contact/:path*', 
        '/about/:path*',
        '/dashboardAdmin/:path*',
    ],
    
}