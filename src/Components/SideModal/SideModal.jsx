import "./SideModal.css";
import CloseIcon from "@mui/icons-material/Close";

const SideModal = ( { setShowModal , message}) => {
  return (
    <div className="sideModal">
      <div className="sideModalContent">
        <div className="sideModalClose">
          <CloseIcon className="closeIcon" onClick={() => setShowModal(false)} />
        </div>
        <div>
          <h1 className="sideModalTitle">{message}</h1>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
