import cv2
import easyocr

class ConvertText:
    def convert(path):
        reader = easyocr.Reader(['pt', 'en'])
        output = reader.readtext(path)

        get_text = []
        for tupla in output:
            for _tupla in tupla:
                if isinstance(_tupla, str):
                    get_text.append(_tupla)

        return get_text[-1]