import { useState } from "react";

import "./index.css";

function Modal(props) {
  const modalTitle = props.title;
  const modalBody = props.body;
  const [show, setShow] = useState(props.show);

  console.log(show);

  return (
    <>
      {show ? (
        <div className="modal-blur-background">
          <div className="modal" id="modal">
            <div className="modal-header">
              <span className="modal-title">{modalTitle}</span>
              <span
                className="modal-close-button"
                onClick={() => setShow(false)}
              >
                X
              </span>
            </div>
            <div className="modal-body">{modalBody}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
