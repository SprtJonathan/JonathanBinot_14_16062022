import "./index.css";

/* This component is a customizable modal component that displays a block on top of the page when triggered by a state */
function Modal(props) {
  const modalTitle = props.title; // The title / header of the modal
  const modalBody = props.body; // The body of the modal
  const showModal = props.showModal; // The state that displays the modal
  const titleColor = props.titleColor; // The color of the modal title
  const headerBackgroundColor = props.headerBackgroundColor; // The color of the modal header background
  const bodyColor = props.bodyColor; // The color of the modal title
  const bodyBackgroundColor = props.bodyBackgroundColor; // The color of the modal header background
  const modalBackgroundColor = props.modalBackgroundColor; // The color of the modal header background

  console.log(headerBackgroundColor);

  return (
    <div className="modal-blur-background">
      <div
        className="modal"
        id="modal"
        style={{
          color: `${modalBackgroundColor}`,
        }}
      >
        <div
          className="modal-header"
          style={{
            backgroundColor: `${headerBackgroundColor}`,
          }}
        >
          <span
            className="modal-title"
            style={{
              color: `${titleColor}`,
            }}
          >
            {modalTitle}
          </span>
          {/* This element is a button used to close the modal */}
          <span className="modal-close-button" onClick={() => showModal(false)}>
            X
          </span>
        </div>
        {modalBody && (
          <div
            className="modal-body"
            style={{
              backgroundColor: `${bodyBackgroundColor}`,
            }}
          >
            <hr className="modal-separation-line" />
            <div
              className="modal-body-text"
              style={{
                color: `${bodyColor}`,
              }}
            >
              {modalBody}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
