import {NextResponse} from "next/server";

const handler = async () => {
    return new NextResponse("error", {status: 503});
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;