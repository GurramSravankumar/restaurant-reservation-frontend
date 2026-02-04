function Display({ text }) {
  return (
    <p>
      {text === "" ? "Nothing typed yet" : text}
    </p>
  );
}

export default Display;
