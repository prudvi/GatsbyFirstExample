import * as React from 'react';
const FooterComponent = (props: any) => {
    return (
        <div className='siteFooter'>
           {props.children}
        </div>
    )
}

export default FooterComponent