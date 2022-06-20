import fs from 'fs';

class ImageToBase64{
    static convert(path){
        return "data:image/gif;base64," + fs.readFileSync(path, 'base64');
    }
}

export default ImageToBase64;

