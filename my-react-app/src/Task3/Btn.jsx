function Btn({ toggleText, show }) {
  return (
    <button className="btn" onClick={toggleText}>
      {show ? "Hide" : "Show"}
    </button>
  );
}

export default Btn;
