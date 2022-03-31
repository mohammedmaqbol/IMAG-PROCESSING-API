import path from 'path';
import resizeIMG from '../utilities/resize';
describe('testing utilities', () => {
      const img = 'asdf';
      const width = 600;
      const height = 400;
      const result = path.resolve(
            `./assets/output/${img}_width${width}_height${height}.jpg`
      );
      it('imgResize must return the outputPath', async () => {
            return expect(
                  await resizeIMG(
                        'img1',
                        600 as unknown as string,
                        600 as unknown as number,
                        result as unknown as number
                  )
            ).toEqual(result);
      });
});
