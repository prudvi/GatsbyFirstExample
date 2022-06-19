import {
    TabStrip,
    TabStripSelectEventArguments,
    TabStripTab
} from "@progress/kendo-react-layout";
import { ListView, ListViewItemProps } from "@progress/kendo-react-listview";
import { graphql } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import CustomLayout from '../components/layout';
import MyItemRender from '../components/listItemRender';
import { categories, filterSubList } from '../components/staticData/contentFilter';
import './stocks.scss';

const gridCss = {
    display: "grid",
    gridTemplateColumns: "22% 77%",
    gridTemplateRows: "1fr",
    columnGap: "20px"
};

const Stocks = ({ data }: any) => {
    const initialSubFilterValue = 0;
    const initialTabValue = 0;

    const [filterSelect, setFilterSelect] = useState(initialSubFilterValue);

    let filterCategory: any = filterSubList(categories[initialTabValue]);
    const [subFilter, setSubFilter] = useState(filterCategory);

    const [news, setNews] = useState(data.external.newsFeed);
    const [selected, setSelected] = React.useState<number>(initialTabValue);
    let initialFilter = news.filter((item: any) => item.CATEGORYNAME === categories[initialTabValue]);

    const [sdata, setSdata] = useState(initialFilter);

    const filterStockContent = (selectedCategory: string, selectedSubCategory: any) => {
        let filteredContent = [];
        if (selectedCategory == 'Corp Action') {
            filteredContent = news.filter((item: any) => item.CATEGORYNAME === 'Corp Action' ||
                item.CATEGORYNAME === 'Corp. Action' || item.CATEGORYNAME === ' Corp Action');
        } else {
            if (selectedCategory === "Annual Report") {
                filteredContent = news.filter((item: any) => item.NEWSSUB.indexOf(selectedCategory) >= 0);
            } else {
                filteredContent = news.filter((item: any) => item.CATEGORYNAME === selectedCategory);
            }
        }
        //This Filter will execute if subCategory is selected
        if (selectedSubCategory) {
            if (selectedSubCategory == 'All') {
                return filteredContent;
            }
            if (selectedSubCategory == 'Others') {
                filteredContent =
                    filteredContent.filter((item: any) => {
                        return subFilter.every((subName: string) => item.NEWSSUB.indexOf(subName) == -1);
                    });
            } else {
                //filter wih SubCateory with filtered Content
                filteredContent =
                    filteredContent.filter((item: any) => item.NEWSSUB.indexOf(selectedSubCategory) >= 0);
            }

        }
        return filteredContent;
    }

    const handleSelect = (e: TabStripSelectEventArguments) => {
        let selectedCategory = categories[e.selected];
        setSelected(e.selected);
        setSdata(filterStockContent(selectedCategory, null));
        setSubFilter(filterSubList(selectedCategory));
        setFilterSelect(0);
    };

    const addToWatchList = (item: any) => {

    };

    const subFilterClick = (event: any) => {
        let selectedFilter = event.target.innerHTML;
        // console.log(selectedFilter);
        let indexValue = subFilter.indexOf(selectedFilter.trim());
        // console.log(indexValue,subFilter );
        setSdata(filterStockContent(categories[selected], selectedFilter.trim()));
        setFilterSelect(indexValue);
    }

    const MyCustomItem = (props: ListViewItemProps) => (
        <MyItemRender
            {...props}
            addToWatchList={addToWatchList}
        />
    );


    return (
        <CustomLayout pageTitle="Stock Listing">
            <div style={gridCss}>
                <div className="grid-item">
                    <ul className="filterList">
                        {subFilter.map((filterName: any, index: any) => (
                            <li onClick={subFilterClick}
                                className={`filteredItem ${index === filterSelect ? 'activeFilter' : ''}`}> {filterName}</li>
                        ))}
                    </ul>
                </div>

                <TabStrip selected={selected} onSelect={handleSelect}>
                    {categories.map((cat: any, index: any) => (
                        <TabStripTab title={cat} key={`CATEGORY${index}`}>
                            <ListView
                                data={sdata}
                                item={MyCustomItem}
                                style={{ width: "100%", height: 330 }}
                            />
                        </TabStripTab>
                    ))}

                </TabStrip>

            </div>

        </CustomLayout>
    );
}

export default Stocks
export const query = graphql`
  query {
    external {
        newsFeed(input: {limit: 1000, value: "2022-06-04", property: "NEWS_DT"}) {
    HEADLINE
    NEWSSUB
    CATEGORYNAME
    SLONGNAME
    NSURL
    ATTACHMENTNAME
    PDFFLAG
    DT_TM
    CRITICALNEWS
  }

     
    }
}
`