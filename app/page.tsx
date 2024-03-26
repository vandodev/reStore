import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { RedirectType, redirect } from "next/navigation"

export default async function Home() {
  let loggedIn = false

  try {
    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    if(session) loggedIn = true
  } catch (error) {
    console.log("Home", error)
  }finally{
    if(loggedIn) redirect("app/user-app", RedirectType.replace)
  }

  return (
    <h1 className="text-lime-500 font-extrabold">Olá mundo</h1>
  );
}
