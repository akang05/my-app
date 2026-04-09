export { auth as proxy } from "@/auth-edge"

//Decide which routes to run proxy.js on
export const config = {
  matcher: ["/add-profile", "/profile/:path*/edit"],
};