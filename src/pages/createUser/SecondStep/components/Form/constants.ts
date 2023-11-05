import { ISelectOptions } from "src/components/kit/Select/types";
import { NEWS_LETTER } from "../../../context/enums";

export const newsLetterOptions: ISelectOptions[] = [
    {
        label: NEWS_LETTER.DAILY,
        value: NEWS_LETTER.DAILY
    },
    {
        label: NEWS_LETTER.WEEKLY,
        value: NEWS_LETTER.WEEKLY
    },
    {
        label: NEWS_LETTER.MONTHLY,
        value: NEWS_LETTER.MONTHLY
    },
]