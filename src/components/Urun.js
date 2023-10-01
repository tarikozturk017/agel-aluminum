import React from "react";
import { pdfjs } from "react-pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Urun = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div id="urunler" className=" text-center mt-4  w-screen m-0">
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div className="flex">
        <div className=" mx-auto text-4xl font-bold space-x-8 my-5">
          <button
            className=" hover:text-red-700"
            onClick={() => {
              if (pageNumber !== 1) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            {"<"}
          </button>
          <button
            className=" hover:text-red-700"
            onClick={() => {
              if (pageNumber !== numPages) {
                setPageNumber(pageNumber + 1);
              }
            }}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-screen">
        <div>
          <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Urun;
