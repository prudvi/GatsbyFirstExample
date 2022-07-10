import { Card, CardBody, CardSubtitle, CardTitle } from '@progress/kendo-react-layout';
import { ListViewItemProps } from '@progress/kendo-react-listview';
import * as React from 'react';
import { parseDate } from './../../utilityPack/dateUtility';

interface ItemRenderProps extends ListViewItemProps {
    addToWatchList: (item: any) => void;
    subFilterCategory: string;
}

const ItemRender = (props: ItemRenderProps) => {
    const [item, setItem] = React.useState(props.dataItem);
    const subCategory = props.subFilterCategory;
    return  (
        <div key={props.dataItem.CATEGORYNAME}>
            <Card orientation='horizontal' style={{ borderWidth: '0px 0px 1px' }}>

                <CardBody>
                    <div className='k-hbox k-justify-content-between k-flex-wrap'>
                        <div style={{ width: '70%', padding: '5 0' }}>
                            <CardTitle style={{ fontSize: 16 }}>
                                {item.NEWSSUB}
                                <a className="hrfLink" href={`https://www.bseindia.com/xml-data/corpfiling/AttachLive/` + item.ATTACHMENTNAME}
                                    rel="noreferrer" target={"_blank"}>
                                    Details
                                </a>
                            </CardTitle>
                            <CardSubtitle>
                                <div dangerouslySetInnerHTML={{ __html: item.HEADLINE }}></div>
                                {/* {item.HEADLINE} */}
                            </CardSubtitle>
                        </div>
                        <div style={{ width: '25%', padding: '5 0' , margin: '2px' }}>

                            <div>{subCategory} &nbsp;</div>
                            <div style={{ marginTop: '2rem' }}>{parseDate(item.DT_TM)}</div>
                          
                        </div>
                        <div style={{ width: '4%', padding: '5 0' }}>
                            {/* <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' style={{ marginRight: 5 }} onClick={enterEdit}>Edit</button> */}
                            <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
                               >Watch</button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemRender;