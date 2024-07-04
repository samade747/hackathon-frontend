import "./FeaturedInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <h1 className="featuredTitle">Mark Attendence</h1>
      </div>
      <div className="featuredItem">
        <h1 className="featuredTitle">View Attendence</h1>
      </div>
      {/* <div className="featuredItem">
        <h1 className="featuredTitle"></h1>
      </div>  */}
    </div>
  );
}
