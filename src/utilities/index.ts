import { existsSync } from 'fs';

const fileExist = (img: string): boolean => {
    return existsSync(img);
};

export default fileExist;
