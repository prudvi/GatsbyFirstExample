import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartLegend
} from '@progress/kendo-react-charts';
import { categories } from '../../components/staticData/contentFilter';
import 'hammerjs';

export const ChartContainer = (props: any) => (
  <Chart>
    <ChartTitle text="Total Today 56" />
    <ChartTooltip format="{0}" />
      <ChartLegend position="bottom" 
      orientation="vertical" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem title={{ text: 'Category' }} categories={categories} />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="line" data={[123, 276, 310, 212, 240, 156, 98, 60]} />
    </ChartSeries>
  </Chart>
);