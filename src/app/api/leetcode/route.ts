import { NextResponse } from "next/server";

export const revalidate = 60; // Cache data for 60 seconds

export async function GET() {
  const username = "RAJATSRIV";

  try {
    // 1. Fetch directly from official LeetCode GraphQL API
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              userCalendar {
                streak
                submissionCalendar
              }
            }
          }
        `,
        variables: { username }
      }),
      next: { revalidate: 60 }
    });

    if (response.ok) {
      const data = await response.json();
      const matchedUser = data?.data?.matchedUser;

      if (matchedUser) {
        const stats = matchedUser.submitStatsGlobal?.acSubmissionNum || [];
        const allItem = stats.find((s: { difficulty: string }) => s.difficulty === "All");
        const easyItem = stats.find((s: { difficulty: string }) => s.difficulty === "Easy");
        const mediumItem = stats.find((s: { difficulty: string }) => s.difficulty === "Medium");
        const hardItem = stats.find((s: { difficulty: string }) => s.difficulty === "Hard");

        return NextResponse.json({
          total: allItem?.count ?? 431,
          easy: easyItem?.count ?? 99,
          medium: mediumItem?.count ?? 278,
          hard: hardItem?.count ?? 54,
          streak: matchedUser.userCalendar?.streak ?? 50,
          submissionCalendar: matchedUser.userCalendar?.submissionCalendar ?? "{}"
        });
      }
    }
  } catch (err) {
    console.error("Primary LeetCode GraphQL API error:", err);
  }

  // Fallback try: alfa-leetcode-api (if primary fails)
  try {
    const [solvedRes, calendarRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`, { next: { revalidate: 300 } }),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`, { next: { revalidate: 300 } })
    ]);

    if (solvedRes.ok) {
      const solvedData = await solvedRes.json();
      const calendarData = calendarRes.ok ? await calendarRes.json() : {};

      return NextResponse.json({
        total: solvedData.solvedProblem ?? 431,
        easy: solvedData.easySolved ?? 99,
        medium: solvedData.mediumSolved ?? 278,
        hard: solvedData.hardSolved ?? 54,
        streak: calendarData.streak ?? 50,
        submissionCalendar: calendarData.submissionCalendar ?? "{}"
      });
    }
  } catch (err) {
    console.error("Secondary LeetCode API fallback error:", err);
  }

  // Hardcoded current baseline fallback if all APIs are completely unreachable
  return NextResponse.json({
    total: 431,
    easy: 99,
    medium: 278,
    hard: 54,
    streak: 50,
    submissionCalendar: "{}"
  });
}
