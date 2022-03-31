import { existsSync } from 'fs';

const fileExist = (img: string): any => {
      return existsSync(img);
};

export default fileExist;
