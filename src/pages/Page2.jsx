import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
class PDFDownloader extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  nextPage = () => {
    this.setState((prevState) => ({
      pageNumber: Math.min(prevState.pageNumber + 1, prevState.numPages),
    }));
  };

  prevPage = () => {
    this.setState((prevState) => ({
      pageNumber: Math.max(prevState.pageNumber - 1, 1),
    }));
  };

  downloadPDF = async () => {
    try {
      const pdfBlob = await fetch('../../public/Vresume12.pdf').then((res) => res.blob());
      saveAs(pdfBlob, 'Vresume12.pdf');
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  render() {
    // render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div className="card text mx-auto mb-4" style={{ maxWidth: "800px" }}>

        {/* <Document file="../../public/VResume.pdf" onLoadSuccess={this.onDocumentLoadSuccess}><Page pageNumber={pageNumber} />
        </Document> */}
        <div className="row g-2 justify-content-center text-start p-4">
          <div className="col-md-8">
            <div className="card-body  ">
              <h5 className="card-title fw-bold text-start">Hello,</h5>
              <h6 className='card-subtitle mb-2 text-muted'>I'm Frontend Developer</h6>
              <p className="card-text">Aspiring IT professional with hands-on knowledge of HTML,
                CSS, JavaScript, React JS, seeking a challenging role in an IT
                company to contribute my skills and creativity to develop
                innovative solutions.</p>
              <hr />
              <div className='row '>
                <div className="col p-2 fw-medium fs-3 ">Vaibhav Kabira</div>
              </div>
              <div className='row'>
                <div className="col p-2 g-1 fw-medium text-muted"><a className='nav-link' href='mailto: vaibhavkabira12@example.com'>vaibhavkabira12@gmail.com</a>
                </div>
                <div className="col p-2 g-1 fw-medium text-muted">Ahmedabad,India</div>
              </div>
              <div className='row-1'>
                
                <button className='btn btn-primary col rounded-pill my-3' type='button' onClick={this.downloadPDF}>Download Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PDFDownloader