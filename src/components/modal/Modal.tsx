import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";

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
        <motion.div
          className="backdrop"
          onClick={() => onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: .2}}
        >
          <div className="container" onClick={(e) => e.stopPropagation()}>
            <div className="content">
              <h2>{title}</h2>
              {children}
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={() => onClose()}>
                Close
              </button>
            </div>
          </div>
        </motion.div>,
        document.getElementById("modal-root")!
      )}
    </>
  );
}
