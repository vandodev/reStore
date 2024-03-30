import { NextResponse, NextRequest } from "next/server";

interface NextRequestWithImage extends NextRequest {
  imageUrl: string;
}

export async function POST(req: NextRequestWithImage, res: NextResponse) {
  console.log("POST reseived")
  const { imageUrl } = await req.json();
  console.log(imageUrl)
  return NextResponse.json({messge: "Teste"},{
    status:200
  } );
}