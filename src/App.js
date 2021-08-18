import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, StyleSheet, Text, TextInput, View } from "react";



import {
  S3Client,
  CreateBucketCommand,
  DeleteBucketCommand,
} from "@aws-sdk/client-s3";
import  CognitoIdentityClient  from "@aws-sdk/client-cognito-identity";
import  fromCognitoIdentityPool  from "@aws-sdk/credential-provider-cognito-identity";

const App = () => {
  const [bucketName, setBucketName] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Replace REGION with the appropriate AWS Region, such as 'us-east-1'.
  const region = "eu-west-1";
  const client = new S3Client({
    region,
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({ region }),
      // Replace IDENTITY_POOL_ID with an appropriate Amazon Cognito Identity Pool ID for, such as 'us-east-1:xxxxxx-xxx-4103-9936-b52exxxxfd6'.
      identityPoolId: "eu-west-1:92b669d5-3f6f-42e4-ac66-937802f7c608",
    }),
  });

  const createBucket = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await client.send(new CreateBucketCommand({ Bucket: bucketName }));
      setSuccessMsg(`Bucket "${bucketName}" created.`);
    } catch (e) {
      setErrorMsg(e);
    }
  };

  const deleteBucket = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await client.send(new DeleteBucketCommand({ Bucket: bucketName }));
      setSuccessMsg(`Bucket "${bucketName}" deleted.`);
    } catch (e) {
      setErrorMsg(e);
    }
  };

  return (
    <div className="App">
      <Text style={{ color: "green" }}>
        {successMsg ? `Success: ${successMsg}` : ``}
      </Text>
      <Text style={{ color: "red" }}>
        {errorMsg ? `Error: ${errorMsg}` : ``}
      </Text>
      <View>
        <TextInput
          
          onChangeText={(text) => setBucketName(text)}
          autoCapitalize={"none"}
          value={bucketName}
          placeholder={"Enter Bucket Name"}
        />
        <Button
          backroundColor="#68a0cf"
          title="Create Bucket"
          onPress={createBucket}
        />
        <Button
          backroundColor="#68a0cf"
          title="Delete Bucket"
          onPress={deleteBucket}
        />
      </View>
    </div>
  );
};



export default App;