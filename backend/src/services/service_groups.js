import { grupos } from '../database/memory.js';

export const allGroups = () => {
    const result = [...grupos];

    result.sort(
        (a, b) => a.name.localeCompare(b.name)
    );
    return result
};  