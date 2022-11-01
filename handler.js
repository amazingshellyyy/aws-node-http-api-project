"use strict";
import { getPDF } from './compiledIndex.js'
const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

const createPDF = async (event) => {
  const file = await getPDF(event)
  return {
    statusCode: 200,
    headers: {
      'Content-type': 'application/pdf',//you can change any content type
      'content-disposition': 'attachment; filename=test.pdf' // key of success
    },
    body: buffer.toString(file),
    isBase64Encoded : true,
  };
}

module.exports = {
  hello,
  createPDF
}
