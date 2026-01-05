import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Get the authentication token from cookies
  const authToken = request.cookies.get('auth-token')?.value;

  // 2. Define which routes are protected
  const protectedRoutes = ['/cart', '/checkout', '/account'];
  const { pathname } = request.nextUrl;

  // 3. Check if the user is trying to access a protected route
  if (protectedRoutes.some(path => pathname.startsWith(path))) {
    // 4. If there's no token, redirect to the homepage with a query param
    if (!authToken) {
      // Create a URL object for the homepage
      const loginUrl = new URL('/', request.url);
      // Add a query parameter to tell the frontend to open the modal
      loginUrl.searchParams.set('reason', 'login_required');
      
      console.log('Redirecting to:', loginUrl.toString());
      return NextResponse.redirect(loginUrl);
    }
  }

  // 5. If the route is not protected, or if the user is authenticated, continue
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
