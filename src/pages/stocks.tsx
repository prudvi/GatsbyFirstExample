import * as React from 'react'
import { graphql } from 'gatsby';
import CustomLayout from '../components/layout';
import MyItemRender from '../components/listItemRender';
// ES2015 module syntax
import { productList } from '../mock/productListMock';
import { ListView, ListViewHeader, ListViewItemProps } from "@progress/kendo-react-listview";
import { useState } from 'react';

const Stocks = () => {
    const [products, setProducts] = useState(productList)

    const saveData = (editItem: any) => {
        let newP = products.map((e: any) =>
            e.ProductID === editItem.ProductID ? { ...editItem, edit: false } : e
        );
        setProducts(newP);
    };

    const deleteItem = (editItem: any) => {
        let newP = products.filter((e: any) => e.ProductID !== editItem.ProductID);
        setProducts(newP);
    };

    const MyCustomItem = (props: ListViewItemProps) => (
        <MyItemRender
            {...props}
            saveItem={saveData}
            deleteItem={deleteItem}
        />
    );


    return (
        <CustomLayout pageTitle="Stock Listing">
            <ListView
                data={products}
                item={MyCustomItem}
                style={{ width: "100%", height: 500 }}
                header={MyHeader}
            />
        </CustomLayout>
    );
}

const MyHeader = () => {
    return (
        <ListViewHeader
            style={{ color: "rgb(160, 160, 160)", fontSize: 14 }}
            className="pl-3 pb-2 pt-2"
        >
            Product list
        </ListViewHeader>
    );
};

export default Stocks
export const query = graphql`
  query {
    external {
        users {
        firstname
        lastname
        }

     
    }
}
`