import { graphql } from 'gatsby';
import { useState } from 'react';
import CustomLayout from '../components/layout';
import * as React from 'react';
import TableLayout from '../templates/Table/GridTable';

const PortFolio = ({ data }: any) => {
  const [securityData, setSecurity] = useState(data.external.getUserCompanies);

  return (
    <CustomLayout pageTitle="My Portfolio">
      <TableLayout data={securityData} customRow={false}></TableLayout>
    </CustomLayout>
  )
}

export default PortFolio;
export const query = graphql`
  query {
    external {
        getUserCompanies {
            _id
            companyId
            companyName
        }
    }
}
`