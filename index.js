import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './compiled.js';

export const getPDF = async ({title}) => {
  const path = `${__dirname}/example.pdf`
  ReactPDF.render(<MyDocument title={title}/>, path);
  console.log('in here')
  const result = await fileToBase64("test.pdf", path)
  return result
}

export const fileToBase64 = (filename, filepath) => {
  return new Promise(resolve => {
    var date = new Date(Date.now());
    console.log('date', date)
    var file = new File([filename], filepath);
    var reader = new FileReader();
    // Read file content on file loaded event
    reader.onload = function(event) {
      resolve(event.target.result);
    };
    
    // Convert data to base64 
    reader.readAsDataURL(file);
  });
};