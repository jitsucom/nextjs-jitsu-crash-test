import {NextRequest, NextResponse} from "next/server";
import {jitsuAnalytics} from "@jitsu/js";
import {track} from "@/lib/track";

export const GET = async (req: NextRequest) => {
    track();
    return new NextResponse("ok", {status: 200});
}