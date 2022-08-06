import { graphql } from 'gatsby';
import { useState } from 'react';
import CustomLayout from '../../components/layout';
import * as React from 'react';
import TableLayout from '../../templates/Table/GridTable';

const Company = ({ data }: any) => {
    const [securityData, setSecurity] = useState(data.external.companies);


    return (
        <CustomLayout pageTitle="Companies">
            {/* <TwoColumnLayout data={securityData} metaData={metaData}/> */}
            <TableLayout data={securityData}></TableLayout>
        </CustomLayout>
    );
}

export default Company
export const query = graphql`
  query {
    external {
        companies {
            _id
            companyId
            companyName
        }
    }
}
`