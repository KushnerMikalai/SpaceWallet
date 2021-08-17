import { SmtpClient } from "../deps.ts";
import { config } from "./../config/config.ts";

const client = new SmtpClient();

await client.connectTLS({
  hostname: config.SMTP_HOSTNAME,
  port: +config.SMTP_PORT,
  username: config.SMTP_USERNAME,
  password: config.SMTP_PASSWORD,
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
