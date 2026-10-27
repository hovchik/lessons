import { MobileNav } from "./mobile-nav";
import { getReviewSummaryCached } from "@/server/review";
import { getCurrentUser } from "@/server/user-auth";

/** Server wrapper: gives the phone tab bar the number of review questions ready. */
export async function SiteMobileNav() {
  const user = await getCurrentUser();
  const review = user ? await getReviewSummaryCached(user.id) : null;
  return <MobileNav reviewReady={review?.ready ?? 0} />;
}
