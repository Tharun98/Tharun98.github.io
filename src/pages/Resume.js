import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// const Index = lazy(() => import('./pages/Index'));
// import Index from 'Index';
import { pdfjs, Document, Page } from 'react-pdf';
// import { Document, Page } from 'react-pdf';
import pdf from '../data/Sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';
// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

// const Document, Page, sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   'References',
// ];

// function onResumeClick() {
//   window.open(Pdf);
// }

// const Resume = () => (
//   <button type="button" onClick={window.open(pdf)}>
//     Resume
//   </button>

// );

// const Resume = () => (
//   <div className="App">
//     <pdf />
//   </div>
// );

// const divStyle = {
//   display: block,
//   margin-left: auto,
//   margin-right: auto,
// };

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={pdf} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} scale="2" />
        </Document>
        <p style={{ display: 'flex', justifyContent: 'center' }}> Page {pageNumber} of {numPages}</p>
      </div>

    );
  }
}

export default Resume;
