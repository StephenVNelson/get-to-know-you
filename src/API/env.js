export const domain =
  process.env.NODE_ENV === "production" ? "get-to-know-you.us-west-2.elasticbeanstalk.com" : "localhost:3001"

export const url = `http://${domain}`
