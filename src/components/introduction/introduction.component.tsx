import introductionSideImage from "../../assets/image/6884525.webp";

import "./introduction.style.scss";

export const Introcution = () => {
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
                <div className="card__title">
                    <h1 className="fw-900 f-48">به پلتفرم خبررسانی شیپور خوش‌آمدید</h1>
                </div>
            </div>
        </div>
    );
};
