import {jitsuAnalytics} from "@jitsu/js";
import {Analytics} from "@segment/analytics-node";

const analyticsHost = process.env.ANALYTICS_HOST || "http://localhost:3298/error";

const jitsu = jitsuAnalytics({
    host: analyticsHost,
    writeKey: "key:secret",
})
const segment = new Analytics({
    writeKey: "key",
    host: analyticsHost,
})


export function track() {
    jitsu.track('jitsu-event1')
    jitsu.track('jitsu-event2').catch((e: any) => {
        console.error(`Error sending event to Jitsu: ${e.message}`, e)
    })
    segment.track({
        event: 'segment-event1',
        userId: 'test-user',
    });

}