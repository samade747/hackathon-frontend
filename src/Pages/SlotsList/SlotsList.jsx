import "./SlotsList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { slotsRow } from "../../dummyData.js"; // Ensure this path is correct
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SlotsList() {
  const [data, setData] = useState(slotsRow);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "sno", headerName: "S.NO", width: 100 },
    {
      field: "batch",
      headerName: "Batch",
      width: 150,
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
    },
    {
      field: "days",
      headerName: "Days",
      width: 250,
    },
    {
      field: "teacher",
      headerName: "Teacher",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/slots/" + params.row.id}>
              <button className="slotListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="slotListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="slotList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
