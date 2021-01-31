import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// const Index = lazy(() => import('./pages/Index'));
// import Index from 'Index';
import { pdfjs, Document, Page } from 'react-pdf';
// import { Document, Page } from 'react-pdf';
import pdf from '../data/Sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// class Resume extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       numPages: null,
//       pageNumber: 1,
//     };
//   }

//   onDocumentLoad = ({ numPages }) => {
//     this.setState({ numPages });
//   }

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Document file={pdf} onLoadSuccess={this.onDocumentLoad}>
//           <Page pageNumber={pageNumber} scale="1" />
//         </Document>
//         <p> Page {pageNumber} of {numPages}</p>
//       </div>

//     );
//   }
// }

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
    };
  }

  // onDocumentLoad = ({ numPages }) => {
  //   this.setState({ numPages });
  // }

  render() {
    const { pageNumber } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={pdf}>
          <Page pageNumber={pageNumber} scale="1" />
        </Document>
        {/* <p> Page {pageNumber} of {numPages}</p> */}
      </div>

    );
  }
}

export default Resume;
