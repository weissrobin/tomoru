// ? Simulate getting data from api (database)
import { Menu } from "@/data/Menu";

export const getMenu = async (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (category == 'all') {
                resolve(Menu);
            } else {
                const lowerCategory = category.toLowerCase();
                resolve(Menu.filter(item => item.types.includes(lowerCategory)));
            }
        }, 2000);
    });
}