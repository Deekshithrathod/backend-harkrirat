class InvalidCredentalsError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCredentalsError";
  }
}

module.exports = InvalidCredentalsError;
