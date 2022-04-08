import ReactDOM from "react-dom";
import { JsxElement } from "typescript";

import "./Modal.css";

export function Modal({
  isOpen,
  title,
  onClose,
  children,
}: {
  isOpen: boolean;
  title: string;
  onClose: Function;
  children?: JSX.Element;
}) {
  if (!isOpen) return <></>;

  return (
    <>
      {ReactDOM.createPortal(
        <div className="backdrop" onClick={() => onClose()}>
          <div className="container" onClick={(e) => e.stopPropagation()}>
            <div className="content">
              <h2>{title}</h2>
              {children}
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={() => onClose()}>Close</button>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root")!
      )}
    </>
  );
}
