import { Card, CardBody, CardSubtitle, CardTitle } from '@progress/kendo-react-layout';
import { ListViewItemProps } from '@progress/kendo-react-listview';
import * as React from 'react';
import { parseDate } from './../utilityPack/dateUtility';

interface MyItemRenderProps extends ListViewItemProps {
    addToWatchList: (item: any) => void;
}

const MyItemRender = (props: MyItemRenderProps) => {
    const [item, setItem] = React.useState(props.dataItem);
    const handleWatch = () => {
        props.addToWatchList(item);
    }

    return (
        <div key={props.dataItem.ProductID}>
            <Card orientation='horizontal' style={{ borderWidth: '0px 0px 1px' }}>

                <CardBody>
                    <div className='k-hbox k-justify-content-between k-flex-wrap'>
                        <div style={{ width: '70%', padding: '5 0' }}>
                            <CardTitle style={{ fontSize: 16 }}>
                                {item.NEWSSUB}
                            </CardTitle>
                            <CardSubtitle>
                                {item.HEADLINE}
                            </CardSubtitle>
                        </div>
                        <div style={{ width: '25%', padding: '5 0' }}>

                            <div>{item.CATEGORYNAME} &nbsp;</div>
                            <div style={{marginTop: '2rem'}}>{parseDate(item.DT_TM)}</div>
                        </div>
                        <div style={{ width: '5%', padding: '5 0' }}>
                            {/* <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' style={{ marginRight: 5 }} onClick={enterEdit}>Edit</button> */}
                            <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
                                onClick={handleWatch}>Watch</button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default MyItemRender;