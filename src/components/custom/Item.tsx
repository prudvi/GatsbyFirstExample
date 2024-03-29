import { Card, CardBody, CardSubtitle, CardTitle } from '@progress/kendo-react-layout';
import { ListViewItemProps } from '@progress/kendo-react-listview';
import * as React from 'react';
import { parseDate } from './../../utilityPack/dateUtility';
import { redirectURL } from './../staticData/CommonConstants';
import { Color } from '@progress/kendo-drawing';
interface ItemRenderProps extends ListViewItemProps {
    subFilterCategory: string;
}

const ItemRender = (props: ItemRenderProps) => {
    const [item, setItem] = React.useState(props.dataItem);
    const subCategory = props.subFilterCategory;
    return (
        <div key={props.dataItem.CATEGORYNAME}>
            <Card orientation='horizontal' style={{ borderWidth: '0px 0px 1px' }}>

                <CardBody>
                    <div className='k-hbox k-justify-content-between k-flex-wrap'>
                        <div style={{ width: '70%', padding: '5 0' }}>
                            <CardTitle style={{ fontSize: 16 }}>
                                {item.NEWSSUB}
                                {item.ATTACHMENTNAME ? <a className="hrfLink"
                                    href={redirectURL + item.ATTACHMENTNAME}
                                    rel="noreferrer" target={"_blank"}>
                                    Details
                                </a> : null}
                            </CardTitle>
                            <CardSubtitle>
                                <div dangerouslySetInnerHTML={{ __html: item.HEADLINE }}></div>
                                {/* {item.HEADLINE} */}
                            </CardSubtitle>
                        </div>
                        <div style={{ width: '25%', padding: '5 0', margin: '2px' }}>

                            <div>{subCategory} &nbsp;</div>
                            <div style={{ marginTop: '2rem' }}>{parseDate(item.DT_TM)}</div>

                        </div>
                        <div style={{ width: '4%', padding: '5 0' }}>
                            <span style={{color:"green"}}> OWNED</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemRender;