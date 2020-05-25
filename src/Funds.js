import React, {useEffect, useState} from "react";
import TablePagination from "@material-ui/core/TablePagination";
import MaterialTable from "material-table";
import axios from "axios";
import {useHistory} from 'react-router-dom';

function Funds() {
  const [isLoading, changeLoading] = useState(false);
  const [fundsData, changeFundsData] = useState([]);
  const [funds, changeFunds] = useState([]);
  const history = useHistory();

  const [fundCatLookup, changeFundCatLookup] = useState({});
  const [fundTypeLookup, changeFundTypeLookup] = useState({});
  const [fundPlanLookup, changeFundPlanLookup] = useState({});

  useEffect(() => {
    changeLoading(true);
    const getFunds = async () => {
      const res = await axios.get('https://api.kuvera.in/api/v3/funds.json');
      changeFunds(res.data);
      changeLoading(false);
    };
    getFunds()
  }, []);

  useEffect(() => {
    const data = [];
    funds.forEach(fund => {
      data.push({
        name: fund.name,
        category: fund.fund_category,
        type: fund.fund_type,
        plan: fund.plan,
        year_1_return: fund.returns.year_1,
        year_3_return: fund.returns.year_3,
        code: fund.code,
      })
    });
    changeFundsData(data);

    let fund_cat = [];
    let fund_type = [];
    let fund_plan = [];
    for (let fund of funds){
      if (!fund_cat.includes(fund.fund_category)) fund_cat.push(fund.fund_category);
      if (!fund_type.includes(fund.fund_type)) fund_type.push(fund.fund_type);
      if (!fund_plan.includes(fund.plan)) fund_plan.push(fund.plan);
    }

    let fund_type_obj = {};
    for (let type of fund_type) {
      if (type) fund_type_obj[type] = type;
    }

    let fund_cat_obj = {};
    for (let cat of fund_cat) {
      if (cat) fund_cat_obj[cat] = cat;
    }

    let fund_plan_obj = {};
    for (let plan of fund_plan) {
      if (plan) fund_plan_obj[plan] = plan;
    }

    changeFundCatLookup(fund_cat_obj);
    changeFundPlanLookup(fund_plan_obj);
    changeFundTypeLookup(fund_type_obj);
  }, [funds]);



  return (
    <MaterialTable
      isLoading={isLoading}
      title="Kuvara stocks dashboard"
      columns={[
        { title: 'Name', field: 'name' },
        {
          title: 'Category',
          field: 'category',
          lookup: fundCatLookup

        },
        {
          title: 'Type',
          field: 'type',
          lookup: fundTypeLookup,
        },
        {
          title: 'Plan',
          field: 'plan',
          lookup: fundPlanLookup
        },
        { title: 'Year 1 return', field: 'year_1_return', customSort: (a, b) => parseFloat(a.year_1_return) - parseFloat(b.year_3_return), filtering: false},
        { title: 'Year 3 return', field: 'year_3_return', customSort: (a, b) => parseFloat(a.year_3_return) - parseFloat(b.year_3_return), filtering: false},
      ]}
      data={fundsData}
      options={{
        sorting: true,
        pageSize: 100,
        pageSizeOptions: [50, 100, 200, 1000],
        headerStyle: { position: 'sticky', top: 0 },
        maxBodyHeight: '85vh',
        filtering: true
      }}
      components={{
        Pagination: props => (
          <TablePagination
            {...props}
            className='table_footer'
          />
        ),
      }}
      onRowClick={
        (event, rowData) => {
          history.push(`/explore/${rowData.code}`)
        }
      }
    />
  )
}

export default Funds;
