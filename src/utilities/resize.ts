import sharp from 'sharp';
const resizeIMG = async (
      img: string,
      result: string,
      width: number,
      height: number
): Promise<any> => {
      await sharp(img).resize(Number(width), Number(height)).toFile(result);
};
export default resizeIMG;
