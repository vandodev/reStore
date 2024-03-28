import { UserNav } from "@/components/common/user-nav"
import UserAppHeader from "@/components/user-app/user-app-header"
import { Sidebar } from "@/components/user-app/user-app-sidebar"
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { RedirectType, redirect } from "next/navigation"

export default async function UserApp(){
    let loggedIn = false

    try {
      const supabase = createServerComponentClient({cookies})
      const {data: {session}} = await supabase.auth.getSession()
  
      if(session) loggedIn = true
    } catch (error) {
      console.log("Home", error)
    }finally{
      if(!loggedIn) redirect("/", RedirectType.replace)
    }

      return (
        <>
          
          <div className=" md:block">
            <UserAppHeader />
            <div className="border-t">
              <div className="bg-background">
                <div className="grid lg:grid-cols-5">
                  <Sidebar className="hidden lg:block" />
                  <div className="col-span-3 lg:col-span-4 lg:border-l">
                    <div className="h-full px-4 py-6 lg:px-8">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}