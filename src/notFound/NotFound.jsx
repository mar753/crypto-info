import "./NotFound.css";

function NotFound() {
  return (
    <>
      <div className="error-text">
        404 Error. This URL does not exist.        
      </div>
      <br />
      <div className="link">
        <a href="/main">Go back to the main page</a>
      </div>
    </>
  );
}

export default NotFound;
