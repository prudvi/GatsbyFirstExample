import * as React from 'react';
interface LeftSectionProps  {
    subFilterClicked: (item: any) => void;
    data: any;
    selectedSubCategory: string;
}

const LeftSection = (props: LeftSectionProps) => {
    const { subFilterClicked, data, selectedSubCategory } = props;
    return (
        <div className="grid-item">
            <ul className="filterList">
                {data.map((item: any, index: any) => (
                    <li
                        onClick={subFilterClicked}
                        className={`filteredItem 
                            ${selectedSubCategory === item.filterName ? 'activeFilter' : ''}`}>
                        {item.filterName} [ {item.values.length} ]</li>
                ))}
            </ul>
        </div>

    );
}

export default LeftSection