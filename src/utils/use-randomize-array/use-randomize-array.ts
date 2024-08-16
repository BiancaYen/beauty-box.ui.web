export const useRandomizeArray = <T>(array: T[]) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray;
};
