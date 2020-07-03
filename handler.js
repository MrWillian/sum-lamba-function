'use strict';

module.exports.sum = async event => {
  let result = 
      parseInt(event.queryStringParameters.a) + parseInt(event.queryStringParameters.b);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        resultado: result,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
