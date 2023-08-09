import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

import { NewsletterPeriodTypes, SubscriptionData } from "./subscription-details.type.ts";
import { SubmittedDataUserDetails } from "../introduction/introduction.type.ts";

// @ts-ignore
import { createUser } from "sdk";

import subscriptionImage from "../../assets/image/Wavy_Bus-38_Single-01.webp";
import "./subscription-details.style.scss";

const NewsLetterTypes: Record<NewsletterPeriodTypes, string> = {
    daily: "روزانه",
    weekly: "هفته‌ای",
    monthly: "ماهانه",
};

const enum requestStatusTypes {
    idle = "idle",
    pending = "pending",
    success = "success",
    failed = "failed",
}

function SubscriptionDetails() {
    const location = useLocation();

    const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
        email: "",
        newsletterPeriod: "daily",
    });
    const [requestStatus, setRequestStatus] = useState(requestStatusTypes.idle);

    const state = location.state as SubmittedDataUserDetails;

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setSubscriptionData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const onNewsLetterPeriodChange = (value: NewsletterPeriodTypes) => {
        setSubscriptionData((prev) => ({ ...prev, newsletterPeriod: value }));
    };

    const submitToNewsLetter = () => {
        setRequestStatus(requestStatusTypes.pending);

        const userData = { ...state, ...subscriptionData };
        createUser(userData)
            .then(() => {
                setRequestStatus(requestStatusTypes.success);
            })
            .catch(() => {
                setRequestStatus(requestStatusTypes.failed);
            });
    };

    return (
        <div className="card subscription-card">
            <div className="subscription-card__center-img-holder">
                <img
                    className="subscription-card__center-img"
                    alt="subscription-immage"
                    src={subscriptionImage}
                />
            </div>
            <h1 className="subscription-card__title">عضویت در خبرنامه</h1>
            <div className="subscription-card__content-holder">
                <input
                    type="email"
                    name="email"
                    placeholder="ایمیل"
                    className="subscription-card__email-field"
                    value={subscriptionData.email}
                    onChange={onEmailChange}
                />
                <ul className="btn-group">
                    {Object.keys(NewsLetterTypes).map((newsLetterKey) => {
                        const letterKey = newsLetterKey as NewsletterPeriodTypes;

                        return (
                            <li key={newsLetterKey}>
                                <button
                                    className={`btn-group__btn ${
                                        subscriptionData.newsletterPeriod === letterKey
                                            ? "active"
                                            : ""
                                    }`}
                                    type="button"
                                    onClick={() => onNewsLetterPeriodChange(letterKey)}
                                >
                                    {NewsLetterTypes[letterKey]}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="subscription-card__submit-btn primary"
                    disabled={
                        !subscriptionData.email.length ||
                        requestStatus === requestStatusTypes.pending
                    }
                    type="button"
                    onClick={submitToNewsLetter}
                >
                    تایید
                </button>
            </div>
            <div className={`toast ${requestStatus}`}>
                <h3 className="toast__text">
                    {requestStatus === requestStatusTypes.success
                        ? "درخواست شما با موفقیت ثبت شد"
                        : "سرویس در دسترس نیست. دوباره تلاش کنید"}
                </h3>
            </div>
        </div>
    );
}

export default SubscriptionDetails;
