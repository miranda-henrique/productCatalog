export const GetStorageItem = (itemName: string): String => {
    if (typeof window !== 'undefined') {
        return String(localStorage.getItem(itemName));
    }

    return '';
};