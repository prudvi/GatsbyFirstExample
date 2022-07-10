import { filterBy } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridCellProps,
    GridPageChangeEvent, GridSortChangeEvent } from '@progress/kendo-react-grid';
import * as React from 'react';
import { useState } from 'react';
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";
import { CommandCell, CommandLinkCell}  from './CommandCell';
import './Table.scss';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };
const initialSort: Array<SortDescriptor> = [
    { field: "companyName", dir: "asc" },
];



const TableLayout = (props: any) => {

    const { data } = props;
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

    const CellFormat = (props: GridCellProps) => (
        <CommandCell  {...props}/>
    );

    return (
        <Grid
            style={{
                margin: '6px',
              }}
           // data={tableData.slice(page.skip, page.take + page.skip)}
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
            }}
        >
            <Column field="companyId" title="ID" filterable={false} width="120px" />
            <Column field="companyName" title="Company Name" cell={CommandLinkCell}/>
            <Column cell={CellFormat}  filterable={false} width="200px" />
            {/* <Column
      field="Category.CategoryName"
      title="Category Name"
      filterCell={CategoryFilterCell}
    /> */}

        </Grid>
    );

}

export default TableLayout