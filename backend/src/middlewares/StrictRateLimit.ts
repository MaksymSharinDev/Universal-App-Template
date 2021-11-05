import * as RateLimit from 'express-rate-limit'
const strictRateLimit = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 min in ms
    max: 200,
    message: 'This endpoint has a stricter rate limiting of a maximum of 200 requests per 15 minutes window, please lower your request rate'
})
export default strictRateLimit