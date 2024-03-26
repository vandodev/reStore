import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { RedirectType, redirect } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <Tabs defaultValue="create-account" className="w-[400px] border rounded-md pb-4 shadow-2xl">
        <TabsList className="flex justify-around items-center rounded-b-none h-14">
         
          <TabsTrigger
            value="create-account"
            className="transition-all dalay-150">
              Account
          </TabsTrigger>

          <TabsTrigger
            value="login"
            className="transition-all dalay-150">                      
            Login
          </TabsTrigger>

        </TabsList>
        <TabsContent value="create-account">
          <Card>
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
