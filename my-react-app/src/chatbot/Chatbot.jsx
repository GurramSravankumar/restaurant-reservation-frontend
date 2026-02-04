function Chatbot(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I help you?";
  }

  if (text.includes("date")) {
    return new Date().toDateString();
  }

  if (text.includes("coin")) {
    return Math.random() < 0.5 ? "Heads" : "Tails";
  }

  if (text.includes("dice")) {
    return `You rolled ${Math.floor(Math.random() * 6) + 1}`;
  }

  return "Sorry, I don't understand.";
}

export default Chatbot;
