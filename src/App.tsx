import React,{useRef, useEffect, useState} from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

function App() {
  
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',
      },viewerDiv.current as HTMLDivElement).then(instance =>{

      });
    },[]);

    
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    if (backendData) {
      const formData = new FormData();
      formData.append('pdfFile', "selectedFile");
  
      fetch('/https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        console.log('PDF file uploaded successfully!');
      })
      .catch(error => {
        console.error('Error uploading PDF file: ', error);
      });
    }
  }, [backendData]);
  
  return (
    <div className="App">
      <div className='webViewer' ref={viewerDiv}></div>
     
    </div>
  );
}

export default App;

