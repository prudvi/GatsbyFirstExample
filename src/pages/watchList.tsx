import * as React from 'react'
import CustomLayout from '../components/layout'
import TableLayout from '../templates/Table/GridTable';
import { useState } from 'react';
import { graphql } from 'gatsby';

const WatchList = ({ data }: any) => {
  const [securityData, setSecurity] = useState(data.external.geWatchListCompanies);

  return (
    <CustomLayout pageTitle="My Portfolio">
      <TableLayout data={securityData} customRow={false}></TableLayout>
    </CustomLayout>
  )
}

export default WatchList;
export const query = graphql`
  query {
    external {
      geWatchListCompanies {
            _id
            companyId
            companyName
        }
    }
}
`