class LoadingError extends Error {
    constructor(error) {
        super(error);
        this.name = "Loading Error";
    }
}