import { SortDescriptor, filterBy, orderBy } from '@progress/kendo-data-query';
import {
    GridColumn as Column,
    Grid,
    GridCellProps,
    GridPageChangeEvent, GridSortChangeEvent
} from '@progress/kendo-react-grid';

import * as React from 'react';
import { useState } from 'react';
import { CommandCell, CommandLinkCell } from './CommandCell';
import './Table.scss';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };
const initialSort: Array<SortDescriptor> = [
    { field: "companyName", dir: "asc" },
];

interface TableProps {
    data: any;
    addOrRemoveTo?: any;
    ownedCompanies?: any;
    addOrRemoveToWatchList?: any;
    watchListedCompanies?: any;
    customRow: boolean;
}

const TableLayout = (props: TableProps) => {
    const { data, addOrRemoveTo = {}, ownedCompanies = [],
        addOrRemoveToWatchList = {}, watchListedCompanies = [],
        customRow = false } = props;
    const [tableData, setTableData] = useState(data);
    const [page, setPage] = React.useState<PageState>(initialDataState);

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    const [filter, setFilter] = React.useState();
    const filterChange = (event: any) => {
        setTableData(filterBy(data, event.filter));
        setFilter(event.filter);
    };

    const [sort, setSort] = React.useState(initialSort);

    const CellFormat = (props: GridCellProps) => {
        if (customRow) {
            let isUserOwnedCompany = ownedCompanies.filter((c: any) => props.dataItem.companyId === c.companyId);
            let isUserWatchlistCompany = watchListedCompanies.filter((c: any) => props.dataItem.companyId === c.companyId);
            return <CommandCell {...props} addOrRemoveTo={addOrRemoveTo}
                addOrRemoveToWatchList={addOrRemoveToWatchList}
                isOwned={isUserOwnedCompany.length ? true : false}
                isWatchListed={isUserWatchlistCompany.length ? true : false}
                isEditable={customRow} />
        }
        return <></>
    }

    const CompanyNameFormat = (props: GridCellProps) => {
        let isUserWatchlistCompany = watchListedCompanies.filter((c: any) => props.dataItem.companyId === c.companyId);
        return <CommandLinkCell {...props}
            addOrRemoveToWatchList={addOrRemoveToWatchList}
            isWatchListed={isUserWatchlistCompany.length ? true : false}
            isEditable={customRow} />
    }

    return (
        <Grid
            style={{ margin: '6px' }}
            data={orderBy(tableData.slice(page.skip, page.take + page.skip), sort)}
            skip={page.skip}
            take={page.take}
            total={tableData.length}
            pageable={true}
            onPageChange={pageChange}
            filterable={true}
            filter={filter}
            onFilterChange={filterChange}
            sortable={true}
            sort={sort}
            onSortChange={(e: GridSortChangeEvent) => {
                setSort(e.sort);
            }}>
            <Column field="companyId" title="ID" filterable={false} width="120px" />
            <Column field="companyName" title="Company Name" cell={CompanyNameFormat} />
            <Column cell={CellFormat} filterable={false} width="200px" />
            {/* <Column
            field="Category.CategoryName"
            title="Category Name"
            filterCell={CategoryFilterCell}
            /> */}

        </Grid>
    );

}

export default TableLayout