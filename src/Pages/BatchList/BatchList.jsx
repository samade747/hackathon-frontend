import "./BatchList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { batchRows } from "../../dummyData.js";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BatchList() {
  // Initialize data with batchRows or an empty array
  const [data, setData] = useState(batchRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "sno", headerName: "S.NO", width: 100 },
    {
      field: "coursesName",
      headerName: "Course Name",
      width: 250,
    },
    {
      field: "totalNumber",
      headerName: "Total Batches",
      width: 200,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/batch/" + params.row.id}>
              <button className="batchListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="batchListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="batchList">
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
