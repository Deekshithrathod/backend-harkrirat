class NotAdminError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotAdminError";
  }
}

module.exports = NotAdminError;
