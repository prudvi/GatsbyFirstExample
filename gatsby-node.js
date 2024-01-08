const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: 'eval-source-map',
    })
}

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        external {
            pastDateItems(input: {value: "100"}) {
                label
                value
            }
            companies {
                _id
                companyId
                companyName
            }
        }
      }
    `)
    data.external.pastDateItems.forEach(item => {
        const value = item.value;
        const dateValueItem = value.split("-");
        actions.createPage({
            path: `/security/${value}`,
            component: path.resolve(`./src/templates/SecurityByFilter.tsx`),
            context: { dateValue: value },
        })
    })

    data.external.companies.forEach(item => {
        const value = item.companyName;
        actions.createPage({
            path: `/company/${value}`,
            component: path.resolve(`./src/templates/CompanyByFilter.tsx`),
            context: { companyName: item.companyId }
        })
    })
}