import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Introduction = React.lazy(
    () => import("../components/introduction/introduction.component.tsx"),
);
const SubscriptionDetails = React.lazy(
    () => import("../components/subscribe-details/subscription-details.component.tsx"),
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense>
                <Introduction />
            </Suspense>
        ),
    },
    {
        path: "/subscription-details",
        element: (
            <Suspense>
                <SubscriptionDetails />
            </Suspense>
        ),
    },
]);
