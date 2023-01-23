import { useState } from "react";
import {storage} from "./firebase-config"
import { ref,uploadBytes,getDownloadURL} from "firebase/storage";
import {createWorker} from 'tesseract.js';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import './Homepagefire.css';


function Homepagefire() {
    const[imageUpload,setImageUpload]=useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [stringValue, setStringValue] = useState(' ');
    
    var imageRef="";
    const uploadImage=()=>{
        if(imageUpload==null) 
            return; 
        imageRef=ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef,imageUpload).then((snapshot)=>{
            alert("Image uploaded Successfully");
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
                
                
              });
        });    
    };

    const imageToText=async()=>{
        setStringValue('');
        const worker = createWorker({
            logger: m => console.log(m),
          });

          
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(imageUrl);
            setStringValue(text);    
    }

    const onFileChange = (event) => {
        setImageUpload(event.target.files[0]);
      };

    return(
        <body>
    <section>
        
                <div className="message">
                    <input type="file" onChange={onFileChange} />
                    <FileUploadOutlinedIcon className="svg_home" onClick={uploadImage}/> 
                    {imageUrl&&<img src={imageUrl} alt="" height="50%" width="60%"/>}
                
                <br/>
                <button onClick={imageToText}>Generate text</button>
                </div>
                </section>
                <div className="textbox">
                {
                    stringValue==="" ? 
                        <div className="loader align-self-center" ></div>
                        :
                        <div classname="textbox">
                            <h2>{stringValue}</h2>
                        </div>
                }
            </div>              
            </body>
            
        
  
    )   
}

export default Homepagefire;