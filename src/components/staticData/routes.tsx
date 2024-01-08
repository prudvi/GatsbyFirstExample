import { createDateFormat } from './../../utilityPack/dateUtility';
let value  = createDateFormat(0).value;
export const routeList: any = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Portfolio List',
        link: '/portfolio'
    },
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: 'My Watch List',
        link: '/watchList'
    },
    {
        title: 'Users',
        link: '/users'
    },
    {
        title: 'Companies',
        link: '/companies'
    },
    {
        title: 'Securities ',
        link: `/security/${value}`
    }
];