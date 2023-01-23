import React, { useState} from 'react';
import axios from 'axios';
import './HomePage.css'

function Homepage(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [stringValue, setStringValue] = useState('');

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };



  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    axios.post('/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(response=>{
      setImageUrl(response.data.imageUrl)
    });
  };


 /* useEffect(() => {
    fetch('http://localhost:5000/upload', { method: 'POST' })
    
  }, []);
*/
  /*useEffect(() => {
    if (selectedFile) {
      setImageUrl(URL.createObjectURL(selectedFile));
    }
  }, [selectedFile]);

 /* const Fileconvert = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    axios.post('http://127.0.0.1:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };*//*
  axios.get('http://127.0.0.1:5000/').then(response => {
    // The HTML for the template is contained in the response.data
    const templateHtml = response.data;
  });*/

  
    
  
    const GetText=() => {
      axios.get('/api/get-string-value')
        .then(response => {
          setStringValue(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };


  return (
    <div>
      <section class="cards">
        <article class="card card--1">
          <input type="file" onChange={onFileChange} />
          <button className="button-63" onClick={onFileUpload}>Upload</button>
        </article>

        <article class="card card--2">
          <button className="button-63" onClick={GetText}>text</button>
          <img src={imageUrl} alt="Uploaded image" height='60%' width='30%'/>
          <h5>{stringValue}</h5>
        </article>
      </section>
    </div>
  );
}

export default Homepage;
