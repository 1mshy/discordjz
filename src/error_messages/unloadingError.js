class UnloadingError extends Error {
    constructor(error) {
        super(error);
        this.name = "Unloading Error";
    }
}