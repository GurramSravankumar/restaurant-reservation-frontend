function Input({ text, setText }) {
  return (
    <input
      type="text"
      placeholder="Type something..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Input;
