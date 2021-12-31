import React from 'react';

const Grid = ({ config, data }) =>
  <table>
    <thead>
      <tr>
        {config.map((configItem) => {
          return <th key={configItem.title}>{configItem.title}</th>
        })}
      </tr>
    </thead>
    <tbody>
      {data.map((dataItem) => {
        return (
          <tr key={dataItem[config[0].field]}>
            {
              config.map((configItem, index) => {
                return (
                  <th key={index}>
                    {configItem.component ? <configItem.component data={dataItem[configItem.field]} /> : dataItem[configItem.field]}
                  </th>
                )
              })
            }
          </tr>
        )
      })}
    </tbody>
  </table>;

export default Grid;