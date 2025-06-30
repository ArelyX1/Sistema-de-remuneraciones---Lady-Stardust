import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Este componente abre una nueva ventana y renderiza children ahí
export default function FacturaWindowPortal({ children, onClose }) {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  useEffect(() => {
    const div = document.createElement("div");
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "",
        "",
        "width=800,height=900,left=200,top=100"
      );
      newWindow.current.document.body.appendChild(container);

      // Opcional: cerrar la ventana si el componente se desmonta
      const curWindow = newWindow.current;
      curWindow.onbeforeunload = () => {
        if (onClose) onClose();
      };
      return () => curWindow.close();
    }
  }, [container, onClose]);

  return container && createPortal(children, container);
}
