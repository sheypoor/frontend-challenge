import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { SubmittedDataUserDetails } from "./introduction.type.ts";

import introductionSideImage from "../../assets/image/6884525.webp";
import "./introduction.style.scss";

export function Introduction() {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState<SubmittedDataUserDetails>({
        age: "",
        name: "",
    });

    const isSubmitBtnActive = userDetails.name.length && userDetails.age.length;

    const onFiledValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;

        // Only numbers allowed for age
        if (target.name === "age") {
            target.value = target.value.replace(/\D/g, "");
        }

        setUserDetails((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const onApplyUserDetails = () => {
        navigate("/subscription-details", { state: userDetails });
    };

    return (
        <div className="card introduction-card">
            <div className="card__container">
                <div className="card__side-image-holder">
                    <img
                        className="card__side-image"
                        alt="introduction-alt-image"
                        src={introductionSideImage}
                    />
                </div>
                <form className="introduction-form">
                    <div>
                        <h1 className="card__title">به پلتفرم خبررسانی شیپور خوش‌آمدید</h1>
                        <p className="card__text">
                            با پر کردن فرم زیر به بهتر عمل کردن خبرنامه کمک میکنید.
                        </p>
                        <div>
                            <div className="introduction-form__row">
                                <input
                                    placeholder="نام"
                                    className="introduction-form__field"
                                    name="name"
                                    value={userDetails.name}
                                    onChange={onFiledValueChange}
                                />
                            </div>
                            <div className="introduction-form__row">
                                <input
                                    placeholder="سن"
                                    className="introduction-form__field"
                                    name="age"
                                    value={userDetails.age}
                                    onChange={onFiledValueChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            className="introduction-form__btn primary"
                            disabled={!isSubmitBtnActive}
                            type="button"
                            onClick={onApplyUserDetails}
                        >
                            تایید
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
