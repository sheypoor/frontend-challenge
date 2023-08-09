export type NewsletterPeriodTypes = "daily" | "weekly" | "monthly";

export interface SubscriptionData {
    email: string;
    newsletterPeriod: NewsletterPeriodTypes;
}
