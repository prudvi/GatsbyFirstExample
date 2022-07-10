import {
    TabStripSelectEventArguments
} from "@progress/kendo-react-layout";
import * as React from 'react';
import { useState } from 'react';
import LeftSection from "../components/custom/LeftSection";
import RightSection from "../components/custom/RightSection";
import { CarouselTemplate } from '../components/customTemplates/carousel';
import { pastDays } from "../utilityPack/dateUtility";

const TwoColumnLayout = (props: any) => {

    const { data, metaData } = props;
    const initialTabValue = 0;
    const initialSubFilterValue = 0;

    const [selected, setSelected] = useState<number>(initialTabValue);

    let defaultCategoryItem: any = data[initialTabValue];
    let filterCategory: any = defaultCategoryItem.filterName;
    const [selectedCategory, setSelectedCategory] = useState(filterCategory);
    let defaultCategoryItemValues: any = defaultCategoryItem.values;

    let subFilterItem: any = defaultCategoryItem.values[initialSubFilterValue];
    let subFilterItemValues: any = subFilterItem.values;

    const [subFilterList, setSubFilterList] = useState(subFilterItemValues);
    const [subFilterNames, setSubFilterNames] = useState(defaultCategoryItemValues);

    let subFilterCategory: any = subFilterItem.filterName;
    const [selectedSubCategory, setSelectedSubCategory] = useState(subFilterCategory);

    const categoryFilterClicked = (e: TabStripSelectEventArguments) => {
        let selectedCategoryList = data[e.selected];
        let selectedCategory = selectedCategoryList.filterName;
        setSelectedCategory(selectedCategory);
        setSelected(e.selected);
        setSubFilterNames(selectedCategoryList.values);
        let subCategory = selectedCategoryList.values[0];
        setSelectedSubCategory(subCategory.filterName);
        setSubFilterList(subCategory.values);
    };

    const addToWatchList = (item: any) => {

    };

    const subFilterClicked = (event: any) => {
        let selectedsubFilterText = event.target.innerHTML;
        let selectedsubFilter = selectedsubFilterText.split("(");
        let selectedCategoryList = data[selected];
        let subCategory = selectedCategoryList.values.find((val: any) => val.filterName === selectedsubFilter[0].trim());
        setSelectedSubCategory(subCategory.filterName);
        setSubFilterList(subCategory.values);
    }
    return (

        <>
        <CarouselTemplate pastDayIteration={pastDays}></CarouselTemplate>
            Welcome to Equities {metaData.count}
            <div className="gridCss">
                <LeftSection data={subFilterNames} subFilterClicked={subFilterClicked}
                    selectedSubCategory={selectedSubCategory} />
                <RightSection data={data} selected={selected}
                    selectedCategory={selectedCategory} subFilterList={subFilterList}
                    categoryFilterClicked={categoryFilterClicked} addToWatchList={addToWatchList} />
            </div>
        </>
    )
}
export default TwoColumnLayout