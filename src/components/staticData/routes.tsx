import { createDateFormat } from './../../utilityPack/dateUtility';
let value  = createDateFormat(0).value;
export const routeList: any = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'First Page',
        link: '/firstPage'
    },
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: 'About',
        link: '/about'
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