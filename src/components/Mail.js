import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import PrintIcon from "@material-ui/icons/Print";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";

function Mail() {
  const navigate = useNavigate();

  const selectedMail = useSelector(selectOpenMail)
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsleft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsright">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
