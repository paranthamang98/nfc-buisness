import React  from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Top 5 countries with Global Oil Reserves",
    subcaption: "MMbbl= One Million barrels",
    enablesmartlabels: "1",
    showlabels: "1",
    numbersuffix: " MMbbl",
    usedataplotcolorforlabels: "1",
    plottooltext: "$label, <b>$value</b> MMbbl",
    theme: "fusion"
  },
  data: [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    }
  ]
};

export class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="doughnut3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
