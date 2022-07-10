import * as React from "react";
import { Link, graphql } from 'gatsby'
export const CommandCell = (props: any) => {
    const { dataItem } = props;

    return (
    <td className="k-command-cell">
        <button
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-grid-edit-command"
            //onClick={() => props.edit(dataItem)}
        >
            Watch
        </button>
        <button
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-remove-command"
            // onClick={() =>
            //     confirm("Confirm deleting: " + dataItem.ProductName) &&
            //     props.remove(dataItem)
            // }
        >
            Remove
        </button>
    </td>
    )

};
export const CommandLinkCell = (props: any) => {
    const { dataItem } = props;
    return (
        <td className="k-command-cell"> 
        <Link to={`/company/${dataItem.companyName}`} className="linkStyle">
{dataItem.companyName}
              </Link>
        </td>
    );

};