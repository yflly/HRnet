import "./Modal.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const Modal = ({
  isOpen = {
    showModal: false,
    activeModal: "",
  },
  close,
  children,
  addCloseEscape,
  addCloseOverlay,
  addCloseIcon,
  customClassName,
  addFooterButton,
  spinner,
}) => {
  useEffect(() => {
    return window.addEventListener("keyup", (e) => {
      if (addCloseEscape) {
        closeModalEvent(e);
      }
    });
  });

  const closeModal = () => {
    if (isOpen) {
      close();
    }
  };

  const closeModalEvent = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div
          className={`modalOverlay ${
            customClassName ? "modalOverlay-" + customClassName : ""
          }`}
          onClick={addCloseOverlay ? closeModal : null}
        >
          <aside
            className={`modalWrapper ${
              customClassName ? "modalWrapper-" + customClassName : ""
            }`}
          >
            <section
              className={`modal ${
                customClassName ? "modal-" + customClassName : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <header
                className={`modalHeader ${
                  customClassName ? "modalHeader-" + customClassName : ""
                }`}
              >
                {addCloseIcon && (
                  <button
                    aria-label="Close"
                    className={`modalCloseButton ${
                      customClassName
                        ? "modalCloseButton-" + customClassName
                        : ""
                    }`}
                    data-dismiss="modal"
                    onClick={close}
                    type="button"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </header>
              <section
                className={`modalSection ${
                  customClassName ? "modalSection-" + customClassName : ""
                }`}
              >
                {children}
              </section>
              <footer
                className={`modalFooter ${
                  customClassName ? "modalFooter-" + customClassName : ""
                }`}
              >
                {addFooterButton && (
                  <button
                    className={`modalButton ${
                      customClassName ? "modalButton-" + customClassName : ""
                    }`}
                    onClick={close}
                  >
                    Close Modal
                  </button>
                )}
              </footer>
            </section>
          </aside>
        </div>,
        document.body
      )
    : null;
};

Modal.defaultProps = {
  addCloseEscape: false,
  addCloseOverlay: false,
  addCloseIcon: true,
  addFooterButton: false,
  spinner: false,
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  addCloseEscape: PropTypes.bool,
  addCloseOverlay: PropTypes.bool,
  addCloseIcon: PropTypes.bool,
  customClassName: PropTypes.string,
  addFooterButton: PropTypes.bool,
  spinner: PropTypes.bool,
};
export default Modal;
