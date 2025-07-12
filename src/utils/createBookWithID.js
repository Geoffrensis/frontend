const createBookWithID = (book) => {
    return {
        ...book,
        id: crypto.randomUUID(),
        isFavorite: false,
    };
};

export default createBookWithID;
