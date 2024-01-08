import {
    TabStrip, TabStripTab
} from "@progress/kendo-react-layout";
import * as React from 'react';
import { ListView, ListViewItemProps } from "@progress/kendo-react-listview";
import ItemRender from './Item';

interface RightSectionProps {
    categoryFilterClicked: (item: any) => void;
    data: any;
    selected: any;
    subFilterList: any;
    selectedCategory: string;
}

const RightSection = (props: RightSectionProps) => {
    const { categoryFilterClicked,
        data, selected, subFilterList, selectedCategory } = props;

    const CustomList = (props: ListViewItemProps) => (
        <ItemRender
            {...props} subFilterCategory={selectedCategory}
        />
    );

    return (
        <>
            <TabStrip selected={selected} onSelect={categoryFilterClicked} id="scrollIntoView">
                {data.map((cat: any, index: any) => (
                    <TabStripTab title={cat.filterName + ' (' + cat.values[0].values.length + ') '}
                        key={`CATEGORY${index}`}>
                        <ListView
                            data={subFilterList}
                            item={CustomList}
                            style={{ width: "100%", maxHeight: 500 }}
                        />
                    </TabStripTab>
                ))}
            </TabStrip></>
    );
}

export default RightSection