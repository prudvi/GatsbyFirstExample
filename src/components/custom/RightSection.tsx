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
    addToWatchList: (item: any) => void;
}

const RightSection = (props: RightSectionProps) => {
    const { categoryFilterClicked, addToWatchList,
        data, selected, subFilterList, selectedCategory } = props;

    const CustomList = (props: ListViewItemProps) => (
        <ItemRender
            {...props} subFilterCategory={selectedCategory}
            addToWatchList={addToWatchList}
        />
    );

    return (
        <TabStrip selected={selected} onSelect={categoryFilterClicked}>
            {data.map((cat: any, index: any) => (
                <TabStripTab title={cat.filterName + ' (' + cat.values[0].values.length + ') '}
                    key={`CATEGORY${index}`}>
                    <ListView
                        data={subFilterList}
                        item={CustomList}
                        style={{ width: "100%", height: 330 }}
                    />
                </TabStripTab>
            ))}
        </TabStrip>
    );
}

export default RightSection