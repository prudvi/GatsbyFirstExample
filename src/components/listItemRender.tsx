import * as React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from '@progress/kendo-react-layout';
import { Input, InputChangeEvent, NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { ListViewItemProps } from '@progress/kendo-react-listview';

interface MyItemRenderProps extends ListViewItemProps {
  saveItem: (item: any) => void;
  deleteItem: (item: any) => void;
}

const dropDownData = [
    { CategoryName: 'Beverages', CategoryID: 1 },
    { CategoryName: 'Condiments', CategoryID: 2 },
    { CategoryName: 'Confections', CategoryID: 3 },
    { CategoryName: 'Dairy Products', CategoryID: 4 },
    { CategoryName: 'Grains/Cereals', CategoryID: 5 },
    { CategoryName: 'Meat/Poultry', CategoryID: 6 },
    { CategoryName: 'Produce', CategoryID: 7 },
    { CategoryName: 'Seafood', CategoryID: 8 }
];

const MyItemRender = (props: MyItemRenderProps) => {
  const [item, setItem] = React.useState(props.dataItem);
  React.useEffect(()=>{
    if(item.ProductID !== props.dataItem.ProductID){
      setItem(props.dataItem);
    }
  },[props.dataItem, item.ProductID])

  const enterEdit = () => {
    setItem({ ...item, edit: true })
  }
  const cancelEdit = () => {
    setItem({ ...item, edit: false })
  }
  const handleChange = (e: any, field: any) => {
    let updatedItem = { ...item };
    updatedItem[field] = e.value;
    setItem(updatedItem);
  }
  const handleSave = () => {
    props.saveItem(item);
    setItem({ ...item, edit: false })
  }
  const handleDelete = () => {
      props.deleteItem(item);
  }

  return (
    <div key={props.dataItem.ProductID}>
      <Card orientation='horizontal' style={{borderWidth: '0px 0px 1px'}}>
        {item.edit ?
          <CardBody>
            <div className='k-hbox k-justify-content-between k-flex-wrap'>
              <div style={{ width: '40%', padding: '5 0' }}>
                <label style={{ display: 'block' }}>Name:</label>
                <Input value={item.ProductName} onChange={(e: InputChangeEvent) => handleChange(e, 'ProductName')} />
                <label style={{ display: 'block' }}>Category:</label>
                <DropDownList
                  data={dropDownData}
                  textField="CategoryName"
                  value={item.Category}
                  onChange={(e: DropDownListChangeEvent) => handleChange(e, 'Category')}
                              />
              </div>
              <div style={{ width: '35%', padding: '5 0' }}>
                <label style={{ display: 'block' }}>Price:</label>
                <NumericTextBox value={item.UnitPrice} format="c2" onChange={(e: NumericTextBoxChangeEvent) => handleChange(e, 'UnitPrice')} />
                <label style={{ display: 'block' }}>Available:</label>
                <NumericTextBox value={item.UnitsInStock} onChange={(e: NumericTextBoxChangeEvent) => handleChange(e, 'UnitsInStock')} />
              </div>
              <div style={{ width: '25%', padding: '5 0' }}>
                <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' style={{ marginRight: 5 }} onClick={handleSave}>Save</button>
                <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' onClick={cancelEdit}>Cancel</button>
              </div>
            </div>
          </CardBody>
                  : <CardBody>
                    <div className='k-hbox k-justify-content-between k-flex-wrap'>
                      <div style={{ width: '40%', padding: '5 0' }}>
                        <CardTitle style={{ fontSize: 16 }}>
                          {item.ProductName}
                        </CardTitle>
                        <CardSubtitle>
                          {item.Category.CategoryName}
                        </CardSubtitle>
                      </div>
                      <div style={{ width: '35%', padding: '5 0' }}>
                        <div>Price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.UnitPrice)}</div>
                        <div>Available units: {item.UnitsInStock}</div>
                      </div>
                      <div style={{ width: '25%', padding: '5 0' }}>
                        <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' style={{ marginRight: 5 }} onClick={enterEdit}>Edit</button>
                        <button className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' onClick={handleDelete}>Delete</button>
                      </div>
                    </div>
                  </CardBody>}
      </Card>
    </div>
  )
}

export default MyItemRender;