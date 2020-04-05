import * as containers from '../containers';
const config = [
    {
        path: "/main",
        component: containers.MainPage,
    },
    {
        path: "/",
        component: containers.MainPage,
    },
    // {
    //     path: "*",
    //     component: containers.PageNotFound,
    // }
];

export default config;