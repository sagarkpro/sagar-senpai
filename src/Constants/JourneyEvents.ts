import TimelineEvent from "@/models/TimelineEvent";

export function getJourneyEventsTimelineEvent(): TimelineEvent[] {
  return [
    {
      status: "Electrical & Electronics Engineering (B.Tech)",
      organization: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
      date: "2019 - 2023",
      image: "/rgpv.jpg",
      contents:
        [
          "Spawned in hard mode: Tier-3 city, Tier-3 college, outdated branch, no placements, and absolutely ZERO competition.",
          "I was naive enough to pursue EEC Engineering, even though my heart was always in technology.",
          "But everything happens for a reason. For me, it was the chance to leave my tier-3 hometown and aim for something bigger. It pushed me to break free from mediocrity.",
          "Looking back, it’s that challenging experience that motivated me to prepare rigorously and crack the entrance exam for higher studies and securing AIR 400 in CCAT exam!"
        ],
    },
    {
      status: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
      organization: "Sunbeam Institute of Information Technology, Pune",
      date: "2023 - 2024",
      image: "/sunbeam.jpg",
      contents:
        [
          "Game Tutorials ends here, I spawned into the #1 College in India for PG-DAC.",
          "The competition is insane. Everyone’s here to reach the sky, grinding day and night. Finally, I meet people who aren’t NPCs or bots. This is the real deal.",
          "This is going to be a 6-month quest where I have to leave my old lifestyle behind and dedicate myself entirely to studying.",
          "To complete this quest, I must face epic boss fights: React, Java, Spring Boot, SQL, and DevOps.",
          "The amount of learning and hands-on experience I gained in these 6 months surpassed my entire 4-year engineering degree and I finally got placed at ZentrumHub."
        ],
    },
    {
      status: "Associate Software Developer",
      organization: "ZentrumHub Solutions, Pune",
      date: "April 2024 - April 2025",
      image: "/zentrumhub_mini.jpg",
      contents:
        [
          "New quest unlocked: ZentrumHub, a year-long grind begins!",
          "The boss fights just got nastier: Payment Gateways (Nimbbl, EaseBuzz, Stripe), TypeScript, real-life software architecture (no messy code here), AWS, DynamoDB, Logging… and the list goes on.",
          "Each fight leveled me up HARD, Aura +9999 unlocked 💥✨",
          "Forever grateful to be grinding at ZentrumHub and farming that sweet, sweet aura."
        ]
      ,
    },
    {
      status: "Associate Software Developer",
      organization: "Nexus1.ai, Pune",
      date: "April 2025 - July 2025",
      image: "/nexus1_ai.jpg",
      contents:
        [
          "Quest Accepted: Nexus1.ai, enter the AI realm 🌌🤖",
          "Boss fights just got next level: LLMs, data training pipelines, Next.js 15, Java frameworks, and crafting real-world AI products from scratch.",
          "Every fight powered me up insanely! +500 Aura unlocked 🚀",
          "Leveling up here at Nexus1.ai has been legendary, and I’m out here farming skills like a true main character and Looking for my next aura farming quest!"
        ],
    },
  ];
}