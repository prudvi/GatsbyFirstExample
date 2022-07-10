import { Link } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import './menu.scss';
import { routeList } from './../components/staticData/routes';

const MenuNavContainer = (props: any) => {
  const [routes, setRoutes] = useState(routeList);
  return (
    <nav className="navMenu">
      <ul className="navLinks">
        {routes.map((rte: any, index: any) => (
          <li className={"navLinkItem"} key={rte.title + index + "MMM"}>
            <Link to={rte.link} className={"navLinkText"} key={index + "MMM"}>
              {rte.title}
            </Link>
          </li>
        ))
        }
      </ul>
    </nav>
  );
}


export default MenuNavContainer;