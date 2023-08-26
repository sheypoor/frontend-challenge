import { ReactNode } from "react";

export interface RouteModel {
    name: string
    path: string
    needAuth: boolean
    cmp: () => ReactNode
}

export default RouteModel