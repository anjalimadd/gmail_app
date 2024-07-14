import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { selectedMail } from "../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch =useDispatch(selectedMail);
const openMail =()=>{
  dispatch(
    selectedMail({
    id, 
    title, 
    subject, 
    description, 
    time 
  })
  )
  navigate("/mail");
}
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{moment(time).format("MMM DD, YYYY h:mm A")}</p>
    </div>
  );
}

export default EmailRow;
