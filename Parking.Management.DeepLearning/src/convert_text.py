import cv2
import easyocr

class ConvertText:
    def convert(path):
        
        #Leio a imagem com base nos respectivos alfabetos
        reader = easyocr.Reader(['pt', 'en'])
        output = reader.readtext(path)

        get_text = []

        # O retorno me traz multiplas informações que não utilizarei.
        # Somente percorro cada tupla na lista de tuplas, extraindo o que preciso (Número da placa).
        for tupla in output:
            for _tupla in tupla:
                if isinstance(_tupla, str):
                    get_text.append(_tupla)
        
        plate = get_text[-1]

        #Lista necessária para o tratamento da string final.
        processing_list = [
            "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
            "+", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'",
            "<", ">", ",", ".", "/", "?", "`", "~", "¨", " "
]       
        
        #Percorro cada caracter especial na lista e procuro ele na minha string
        #Caso esteja contindo na string, eu removo.
        for schar in processing_list:
            if schar in plate:
                plate = plate.replace(schar, "")
        
        #Retorno o valor final
        return plate 
    
class ReadQrCode:
    def read(qr_code_path):
        qr_code = cv2.imread(qr_code_path)
        read = cv2.QRCodeDetector()
        qrcode_value, points, straight_qrcode = read.detectAndDecode(qr_code)
        
        return qrcode_value 