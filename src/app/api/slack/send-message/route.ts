/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/slack/send-message/route.ts
import { NextRequest, NextResponse } from "next/server";
import { WebClient } from "@slack/web-api";

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function POST(req: NextRequest) {
  await executeSlackBot(req);
}

export async function GET(req: NextRequest){
  await executeSlackBot(req);
}

async function executeSlackBot(req: NextRequest){
  try {
    const body = await req.json().catch(() => ({}));
    const text: string = body.text ?? "Hello from Next.js 👋";

    const res = await slackClient.chat.postMessage({
      channel: "all-sagars-workspace",
      text, // fallback text
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text,
          },
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click me",
              },
              action_id: "simple_button_click",
              value: "clicked_from_nextjs",
            },
          ],
        },
      ],
    });

    return NextResponse.json({ ok: true, result: res });
  } catch (err: any) {
    console.log("Error posting to Slack:", err, err?.data);
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}
