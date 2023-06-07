class EmptyCredentalsError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyCredentalsError";
  }
}

module.exports = EmptyCredentalsError;
