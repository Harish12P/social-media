const ErrorMessage = ({ items }) => {
  return (
    <>
      {/*here we use ternary opertor kyu ki agar humhe name chahiye like health food uske baad chahiye ki wo hungry hai ki nhi agar saaman hai apne paas */}
      {foodItem.length === 0 && <h3>I am still hungry.</h3>}
    </>
  );
};
export default ErrorMessage;
