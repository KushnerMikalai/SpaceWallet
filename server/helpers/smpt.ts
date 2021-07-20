import { SmtpClient } from "../deps.ts";
import { config } from "./../config/config.ts";

const client = new SmtpClient();

await client.connectTLS({
  hostname: "smtp.gmail.com",
  port: 465,
  username: config.GMAIL_USERNAME,
  password: config.GMAIL_PASSWORD,
});

let mailerObj = async (data: any) => {
  await client.send({
    from: "Mail from Deno",
    to: data.to,
    subject: "Deno is Great",
    content: data.body,
  });
  await client.close();
};

export { mailerObj };
