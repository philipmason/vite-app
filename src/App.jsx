import "./App.css";
import { useState } from "react";
import {
  Tooltip,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { LicenseInfo } from "@mui/x-license";
import {
  Bloodtype,
  Medication,
  MedicationOutlined,
  MonitorHeart,
  Quiz,
  Scale,
  ScaleOutlined,
  ScatterPlot,
  Science,
  Speed,
  Straighten,
  Menu,
  Info,
} from "@mui/icons-material";
import logo from "./argenx_logo.png";
import data from "./data.json";
LicenseInfo.setLicenseKey(
  "7a11ce74f139ee1c823d8eaa2e42b6beTz0xMTU2MDYsRT0xNzg0NzY0ODAwMDAwLFM9cHJvLExNPXN1YnNjcmlwdGlvbixQVj1RMy0yMDI0LEtWPTI="
);

function App() {
  const { href } = window.location,
    [openInfo, setOpenInfo] = useState(false),
    [openInfo2, setOpenInfo2] = useState(false),
    iconInfo = data.iconInfo,
    icons = {
      a: (
        <Tooltip title={iconInfo.a.title} key="a">
          <ScatterPlot
            onClick={() => setOpenInfo("a")}
            sx={{ height: 18, color: iconInfo.a.color }}
          />
        </Tooltip>
      ),
      b: (
        <Tooltip title={iconInfo.b.title} key="b">
          <Quiz
            onClick={() => setOpenInfo("b")}
            sx={{ height: 18, color: iconInfo.b.color }}
          />
        </Tooltip>
      ),
      c: (
        <Tooltip title={iconInfo.c.title} key="c">
          <Medication
            onClick={() => setOpenInfo("c")}
            sx={{ height: 18, iconInfo: iconInfo.c.color }}
          />
        </Tooltip>
      ),
      d: (
        <Tooltip title={iconInfo.d.title} key="d">
          <Bloodtype
            onClick={() => setOpenInfo("d")}
            sx={{ height: 18, color: iconInfo.d.color }}
          />
        </Tooltip>
      ),
      e: (
        <Tooltip title={iconInfo.e.title} key="e">
          <Science
            onClick={() => setOpenInfo("e")}
            sx={{ height: 18, color: iconInfo.e.color }}
          />
        </Tooltip>
      ),
      f: (
        <Tooltip title={iconInfo.f.title} key="f">
          {/* Using MedicationOutlined for the 'f' icon */}
          <MedicationOutlined
            onClick={() => setOpenInfo("f")}
            sx={{ height: 18, color: iconInfo.f.color }}
          />
        </Tooltip>
      ),
      g: (
        <Tooltip title={iconInfo.g.title} key="g">
          <Speed
            onClick={() => setOpenInfo("g")}
            sx={{ height: 18, color: iconInfo.g.color }}
          />
        </Tooltip>
      ),
      h: (
        <Tooltip title={iconInfo.h.title} key="h">
          {/* Using Medication for the 'h' icon */}
          <Medication
            onClick={() => setOpenInfo("h")}
            sx={{ height: 18, color: iconInfo.h.color }}
          />
        </Tooltip>
      ),
      i: (
        <Tooltip title={iconInfo.i.title} key="i">
          {/* Using Scale for the 'i' icon */}
          <Scale
            onClick={() => setOpenInfo("i")}
            sx={{ height: 18, color: iconInfo.i.color }}
          />
        </Tooltip>
      ),
      j: (
        <Tooltip title={iconInfo.j.title} key="j">
          <Straighten
            onClick={() => setOpenInfo("j")}
            sx={{ height: 18, color: iconInfo.j.color }}
          />
        </Tooltip>
      ),
      k: (
        <Tooltip title={iconInfo.k.title} key="k">
          <MonitorHeart
            onClick={() => setOpenInfo("k")}
            sx={{ height: 18, color: iconInfo.k.color }}
          />
        </Tooltip>
      ),
      l: (
        <Tooltip title={iconInfo.l.title} key="l">
          <ScaleOutlined
            onClick={() => setOpenInfo("l")}
            sx={{ height: 18, color: iconInfo.l.color }}
          />
        </Tooltip>
      ),
    },
    rows = [
      {
        visit_number: "Visit 1 Baseline (Day 1)",
        appointment_date: "2025-07-03",
        what_to_expect: [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
        ],
      },
      {
        visit_number: "Visit 2 (Day 8)+2",
        appointment_date: "2025-07-13",
        what_to_expect: ["h", "i", "j", "k", "l"],
      },
      {
        visit_number: "Visit 3 (Day 15)+2",
        appointment_date: "2025-07-23",
        what_to_expect: ["a", "f", "g", "l"],
      },
      {
        visit_number: "Visit 4 (Day 15)+2",
        appointment_date: "2025-08-01",
        what_to_expect: ["a", "l"],
      },
      {
        visit_number: "Visit 5 (Day 15)+2",
        appointment_date: "2025-08-03",
        what_to_expect: ["d", "f", "g", "l"],
      },
      {
        visit_number: "Visit 6 (Day 15)+2",
        appointment_date: "2025-08-06",
        what_to_expect: ["c", "f", "g", "l"],
      },
    ],
    cols = [
      {
        field: "visit_number",
        headerName: "Visit Number and Timeframe",
        width: 200,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "appointment_date",
        headerName: "My Appointment Date(s)",
        width: 120,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "what_to_expect",
        headerName: "What to Expect",
        width: 400,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => {
          const val = params.value.map((item) => {
            return icons[item];
          });
          return val;
        },
      },
    ];

  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar variant="dense" sx={{ backgroundColor: "#f7f7f7" }}>
          <Tooltip title="Menu">
            <IconButton edge="start" color="info" sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
          </Tooltip>
          <img src={logo} style={{ height: 40 }} alt="logo" />
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box
            sx={{
              color: "green",
              fontWeight: "bold",
              fontSize: 14,
              height: 23,
            }}
          >
            &nbsp;Patient Visit Info&nbsp;
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Tooltip title="Information about this screen">
            <IconButton
              color="info"
              sx={{ ml: 2 }}
              onClick={() => {
                setOpenInfo2(true);
              }}
            >
              <Info />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ width: window.innerWidth - 50, height: window.innerHeight - 200 }}
      >
        <DataGridPro
          rows={rows}
          columns={cols}
          density="compact"
          // rowHeight={30}
          getRowId={() => Math.random()}
          sx={{
            // height: windowDimension.winHeight - topMargin,
            fontFamily: "system-ui;",
            fontWeight: "fontSize=5",
            fontSize: "0.7em",
            padding: 0.1,
            "& .MuiDataGrid-columnHeaderTitle": {
              whiteSpace: "normal",
              lineHeight: "normal",
            },
            "& .MuiDataGrid-columnHeader": {
              // Forced to use important since overriding inline styles
              height: "unset !important",
            },
            "& .MuiDataGrid-columnHeaders": {
              // Forced to use important since overriding inline styles
              maxHeight: "168px !important",
            },
            "& .MuiDataGrid-cell": {
              // Forced to use important since overriding inline styles
              whiteSpace: "unset !important",
            },
            "& .green": {
              backgroundColor: "green",
              color: "#000000",
            },
          }}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          // disableColumnFilter
          // disableColumnSelector
          // disableDensitySelector
          showToolbar={false}
          pageSizeOptions={[10, 25, 50, 100, 1000]}
          pagination
        />
      </Box>
      {/* Dialog with info about the selected icon */}
      <Dialog
        fullWidth
        maxWidth="xl"
        onClose={() => setOpenInfo(false)}
        open={!!openInfo}
        title={"Info about " + openInfo}
      >
        <DialogTitle>{openInfo ? iconInfo[openInfo]?.title : "?"}</DialogTitle>
        <DialogContent>
          {openInfo ? iconInfo[openInfo].info : null}
          <ul>
            <li>Some info about this ...</li>
            <li>
              Other things could go here like pictures, diagrams, links, lists,
              etc.
            </li>
          </ul>
          <Tooltip title={"Email argenx with a question"}>
            <Button
              sx={{
                color: "blue",
                border: 1,
                borderColor: "blue",
                borderRadius: 1,
                padding: 0.4,
                float: "right",
              }}
              onClick={() => {
                window.open(
                  "mailto:qs_tech_prog@argenx.com?subject=Question&body=This email was sent from: " +
                    encodeURIComponent(href) +
                    "%0D%0A%0D%0AMy question is:",
                  "_blank"
                );
              }}
            >
              Email
            </Button>
          </Tooltip>
        </DialogContent>
      </Dialog>
      {/* Dialog with General info about this screen */}
      <Dialog
        fullWidth
        maxWidth="xl"
        onClose={() => setOpenInfo2(false)}
        open={!!openInfo2}
        title={"Info about this screen"}
      >
        <DialogTitle>Info about this screen</DialogTitle>
        <DialogContent>
          We can put info here about this screen, like what it is for, how to
          use it, etc.
          <Tooltip title={"Email argenx with a question"}>
            <Button
              sx={{
                color: "blue",
                border: 1,
                borderColor: "blue",
                borderRadius: 1,
                padding: 0.4,
                float: "right",
              }}
              onClick={() => {
                window.open(
                  "mailto:qs_tech_prog@argenx.com?subject=Question&body=This email was sent from: " +
                    encodeURIComponent(href) +
                    "%0D%0A%0D%0AMy question is:",
                  "_blank"
                );
              }}
            >
              Email
            </Button>
          </Tooltip>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
