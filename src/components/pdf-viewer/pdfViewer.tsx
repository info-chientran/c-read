import React, { useState } from "react";
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";

import en_US from "./Languages/en_US.json";
import vi_VN from "./Languages/vi_VN.json";

import "@react-pdf-viewer/core/lib/styles/index.css";

interface Props {
  fileUrl: string;
  plugins: any[];
  className: string;
}

const PdfViewer: React.FC<Props> = ({ fileUrl, plugins, className }) => {
  const [language, setLanguage] = useState(en_US);

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
    >
      <div className={className}>
        <Viewer
          fileUrl={fileUrl}
          plugins={plugins}
          defaultScale={SpecialZoomLevel.PageFit}
          localization={language}
        />
      </div>
    </Worker>
  );
};

export default PdfViewer;
