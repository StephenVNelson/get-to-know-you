export const domain =
  process.env.NODE_ENV === "production" ? "get-to-know-you.us-west-2.elasticbeanstalk.com" : "localhost:3001"
const protocol = process.env.NODE_ENV === "production" ? "https" : "http"
export const url = `${protocol}://${domain}`
