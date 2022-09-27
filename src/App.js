import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resStatusCode, setResStatusCode] = useState("");
  const [resData, setResData] = useState("");
  const [status, setStatus] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    let options = {
      method: "GET",
    };
    fetch("https://gorest.co.in/public-api/users", options)
      .then(function (response) {
        setResStatusCode(response.status);
        return response.text();
      })
      .then(function (Data) {
        console.log(Data);
        setResData(Data);
      });
  }, [status]);

  const onClickButton = () => {
    setStatus(!status);
    setShowData(!showData);
  };

  const reqUrl = " https://gorest.co.in/public-api/users";

  return (
    <div className="p-3 bg-container">
      <h1 className="heading mb-4">Get method practice</h1>
      <div className="request-url-text">
        REQUEST URL :
      </div>
      <input type="text" className="form-control" value={reqUrl} placeholder="Enter URL" />
      <button
        id="sendGetRequestBtn"
        className="mt-3 p-2 button"
        onClick={onClickButton}
      >
        Send Get Request
      </button>
      <hr />
      <div className="p-2 mt-2">
        <p className="para1">Request Status</p>
        <p id="requestStatus" className="request-status">
          {showData && resStatusCode}
        </p>
      </div>
      <hr />
      <div className="p-2 mt-2">
        <p className="para1">Response Body</p>
        <p id="httpResponse" className="http-response">
          {showData && resData}
        </p>
      </div>
    </div>
  );
}

export default App;
