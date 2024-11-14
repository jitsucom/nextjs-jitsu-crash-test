import type {NextApiRequest, NextApiResponse} from 'next'
import {track} from "@/lib/track";
type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    track();
    res.status(200).json({ message: 'Hello from Next.js!' })
}