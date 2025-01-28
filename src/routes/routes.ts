import {
    type RouteConfig,
    route,
    index,
} from "@react-router";

export default [
    index("./Home/Home.tsx"),
    route("store", "./Store/Store.tsx"),
] satisfies RouteConfig;

