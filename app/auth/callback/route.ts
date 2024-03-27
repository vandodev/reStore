import { NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

export async function Get(request: NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    try {
        if(code){
            const supabase = createRouteHandlerClient({cookies})
            await supabase.auth.exchangeCodeForSession(code)
        }   
        
        return NextResponse.redirect(requestUrl.origin)
    } catch (error) {
        console.log("Auth_callback", error)
    }

}