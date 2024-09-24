import "./App.css";
import { Table, Grid2 } from "@mui/material";
import { Chart } from "react-google-charts";

function App() {
  const data = [
      ["Country", "Count"],
      ["Austria", 1],
      ["Belgium", 27],
      ["France", 4],
      ["Germany", 2],
      ["Italy", 1],
      ["Netherlands", 5],
      ["Poland", 3],
      ["Republic of Ireland", 1],
      ["Spain", 2],
      ["Switzerland", 1],
      ["United Kingdom", 7],
      ["United States", 2],
    ],
    options = {
      region: ["GB", "155"],
      colorAxis: { colors: ["#e5f5f9", "99d8c9", "#2ca25f"] },
      backgroundColor: "#81d4fa",
      datalessRegionColor: "#999999",
      defaultColor: "#ff0000",
      magnifyingGlass: { enable: true, zoomFactor: 7.5 },
      explorer: {
        actions: ["dragToZoom", "rightClickToReset"],
        //axis: "horizontal",
        //keepInBounds: true
      },
    };
  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={6}>
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              },
            },
          ]}
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </Grid2>
      <Grid2 item xs={6}>
        <Table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map(([country, count]) => (
              <tr key={country}>
                <td>{country}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Grid2>
    </Grid2>
  );
}

export default App;
