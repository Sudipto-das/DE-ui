export const CalculateBudget = (type: string, conf: string, size: number) => {
    let estBudget: number | undefined;

    if (type === 'interior') {
        estBudget = 21 * size;
    }

    if (type === 'architecture') {
        const baseRate = 12.99;

        if (conf === 'G') {
            estBudget = size * baseRate;  // Only ground level
        } else if (conf === 'G+1') {
            estBudget = size * baseRate * 2;  // Ground + 1 floor
        } else if (conf === 'G+2') {
            estBudget = size * baseRate * 3;  // Ground + 2 floors
        }
    }

    return estBudget;
};
