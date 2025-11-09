export interface FeaturedPost {
  title: string;
  url: string;
  date: string;
  heroImage: string;
  summary: string;
}

export const featuredPosts: FeaturedPost[] = [
  {
    title: "The Technology That's About to Change How Your Family Stays Organized (And Why We're Building FamilyCast for It)",
    url: "https://blog.familycast.app/posts/introducing-familycast-copy/",
    date: "October 8, 2025",
    heroImage: "https://blog.familycast.app/_astro/beaver-family-laptop.BZQQu8E3_1ls9qF.webp",
    summary: "Tired of manually updating your family calendar, chore chart, and meal plan? Here's why AI-powered family displays are about to change everything—and we're building for it.",
  },
  {
    title: "We Built Something Cool: AI Assistants Can Now Talk to Your Cozi Lists",
    url: "https://blog.familycast.app/posts/2025-10-07-cozi-mcp-server-ai-family-organization/",
    date: "October 7, 2025",
    heroImage: "https://blog.familycast.app/_astro/beaver-breakfast.LNvkuAY__Z29N6Bv.webp",
    summary: "Introducing our open-source MCP server for Cozi—bringing AI assistants like Claude into your family's daily organization.",
  },
  {
    title: "Introducing FamilyCast: A Central Place for Family Life",
    url: "https://blog.familycast.app/posts/introducing-familycast/",
    date: "October 2, 2025",
    heroImage: "https://blog.familycast.app/_astro/beaver-stressed.D5G27cSO_13PQ55.webp",
    summary: "A simple solution to a universal family challenge: keeping everyone on the same page without constant phone checking.",
  },
];
