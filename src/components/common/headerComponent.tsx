import * as React from 'react';
import MenuNavContainer from './../MenuContainer';
import './header.scss';
const HeaderComponent = (props: any) => {
    return (
        <div className={"siteHeader"}>
            <header className={"siteTitle"}>{props.title}</header>
            <MenuNavContainer />
        </div>
    )
}

export default HeaderComponent