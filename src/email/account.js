const postmark = require("postmark");

// Send an email:
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

client.sendEmail({
  "From": "MP00735391@techmahindra.com",
  "To": "MP00735391@techmahindra.com",
  "Subject": "Hello from ketan",
  "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
  "TextBody": "Hello from Postmark!",
  "MessageStream": "outbound"
});

const welcomeEmail = (email, name) => {
    client.sendEmail({
        "From": "MP00735391@techmahindra.com",
        "To": email,
        "Subject": "Hello from ketan",
        "TextBody": "Hello from Ketan!",
        "MessageStream": "outbound"
      });
}

module.exports = {
    welcomeEmail
}