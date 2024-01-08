import { Link } from 'gatsby';
import * as React from 'react';

export const CommandCell = (props: any) => {
    const { dataItem, isOwned,
        addOrRemoveTo } = props;

    const addCompany = async () => {
        await addOrRemoveTo(dataItem.companyId, 'ADD');
    }

    const removeCompany = async () => {
        await addOrRemoveTo(dataItem.companyId, 'REMOVE');
    }

    return (
        <td className="k-command-cell">
            {isOwned ? <button onClick={removeCompany}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base 
                k-grid-remove-command" style={{ backgroundColor: "red" }}>
                Remove From Buy
            </button> :
                <button onClick={addCompany}
                    className="k-button k-button-md k-rounded-md 
                            k-button-solid k-button-solid-primary k-grid-edit-command"
                    style={{ backgroundColor: "green" }}>
                    Add to Buy
                </button>}
        </td>
    )

};

export const CommandLinkCell = (props: any) => {
    const { dataItem, isWatchListed,
        addOrRemoveToWatchList, isEditable = false } = props;

    const addWatchList = async () => {
        await addOrRemoveToWatchList(dataItem.companyId, 'ADD');
    }

    const removeWatchList = async () => {
        await addOrRemoveToWatchList(dataItem.companyId, 'REMOVE');
    }
    return (
        isEditable ?
            <td className="k-command-cell">
                {isWatchListed ? <span onClick={removeWatchList}
                    style={{ margin: "3px", cursor: "pointer", color: "red" }}
                    className="k-icon k-font-icon k-i-minus-outline k-icon-lg"></span> :
                    <span onClick={addWatchList}
                        style={{ margin: "3px", cursor: "pointer", color: "green" }}
                        className="k-icon k-font-icon k-i-plus-circle k-icon-lg"></span>}
                <Link to={`/company/${dataItem.companyName}`} className="linkStyle">
                    {dataItem.companyName}
                </Link>
            </td> :
            <td className="k-command-cell"> <Link to={`/company/${dataItem.companyName}`} 
                className="linkStyle">
                {dataItem.companyName}
            </Link></td>

    );

};