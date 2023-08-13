import React from 'react';
import "../TicketForm/TicketStyle.css"

function TicketForm() {
  return (
    <div className="card ticket" id="ticket01" style={{ display: "block" }}>
  <div className="card-header">
    <h4 className="m-0">Ticket details</h4>
    <a href="#" className="close" style={{}}>
      <i className="far fa-times-circle" />
    </a>
  </div>
  <div className="card-body">
    <ul>
      <li>
        <label>
          <i className="fa fa-file-alt" /> Number of ticket :
        </label>
        <span id="NumTicket">82</span>
      </li>
      <li>
        <label>
          <i className="fa fa-file-alt" /> Status of local ticket :
        </label>
        <span id="StatusTicket">approved</span>
      </li>
      <li>
        <label style={{ whiteSpace: "nowrap" }}>
          <i className="fa fa-file-alt" /> Status of automax ticket :
        </label>
        <span id="StatusAutoMaxTicket" className="text-right">
          Sent
        </span>
      </li>
      <li>
        <label>
          <i className="fa fa-calendar" /> Date / Time :
        </label>
        <span id="DateTime" className="">
          2022-08-22 07:52:15
        </span>
      </li>
      <li>
        <label>
          <i className="fa fa-map-pin" /> Latitude :
        </label>
        <span id="Lat">24.5032</span>
      </li>
      <li className="">
        <label>
          <i className="fa fa-map-pin" /> Longitude :
        </label>
        <span id="Long">39.5688</span>
      </li>
      <li>
        <label>
          <i className="fa fa-tag" /> Class name :
        </label>
        <span id="Class">Garbage</span>
      </li>
      <li className="">
        <label>
          <i className="fa fa-tag" /> Count of objects :
        </label>
        <span id="Count">1</span>
      </li>
      <li>
        <label>
          <i className="fa fa-tag" /> Confidence :
        </label>
        <span id="Confidence">46.12%</span>
      </li>
      <li>
        <label>
          <i className="fa fa-download" /> Prediction output Type :
        </label>
        <span id="json_link">
          <a href="http://pocf.letsvers.com/fetch/marker/82" target="_blank">
            JSON
          </a>
        </span>
      </li>
      <li>
        <label>
          <i className="fa fa-paperclip" /> Prediction output File :
        </label>
        <span id="outputfile">
          <a
            href="http://pocf.letsvers.com/raster/63d525ce69854.JPEG"
            target="_blank"
          >
            Proccessed image
          </a>
        </span>
      </li>
    </ul>
    <div className="mx-auto text-center mt-1" id="actions">
      <a
        href="#"
        onclick="updateStatus(1,82)"
        className="btn btn-success text-white mr-3 disabled"
      >
        Approve
      </a>
      <a
        href="#"
        onclick="updateStatus(0,82)"
        className="btn btn-danger text-white disabled"
      >
        Reject{" "}
      </a>
      <a
        onclick="getAutoMaxStatus(0,82)"
        id="sendTicket"
        className="btn btn-info btn-block text-white mt-2"
        target="_blank"
      >
        <i className="fa fa-cloud" /> Update ticket status
      </a>
    </div>
  </div>
</div>

  );
}

export default TicketForm;
