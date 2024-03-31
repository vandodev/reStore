import { NextResponse, NextRequest } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface NextRequestWithImage extends NextRequest {
  imageUrl: string;
}

export async function POST(req: NextRequestWithImage, res: NextResponse) {
  // console.log("POST reseived")
  const { imageUrl } = await req.json();
  // console.log(imageUrl)

  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (!session || error) new NextResponse("Login in order to restore image");

  return NextResponse.json({messge: "Teste"},{
    status:200
  } );
}