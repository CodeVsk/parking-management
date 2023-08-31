import cv2
from convert_text import ConvertText as ct
from convert_text import ReadQrCode as qr
from utils.sql_validation import Output, Validation
import threading

class IA():
    def run_ia(camera_index, need_to_break):
        camera_index = camera_index
        need_to_break = need_to_break
        video_capture = cv2.VideoCapture(camera_index, cv2.CAP_DSHOW)
        video_capture.set(3, 640) # largura da janela
        video_capture.set(4, 480) # altura da janela

        #Trained classifier object
        harcascade = "../model/haarcascade_russian_plate_number.xml" #modelo treinado

        min_area = 500 #area minima da placa

        #self.key_pressed = False
        #self.frames = []

        image_roi = []
        frame_interval = 0

        while True:
            _, image = video_capture.read()

            #load cascade model
            plate_cascade = cv2.CascadeClassifier(harcascade)
            img_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

            plates = plate_cascade.detectMultiScale(img_gray, 1.1, 4)

            for (x, y, w, h) in plates:
                area = w * h

                if area > min_area:
                    cv2.rectangle(image, (x, y), (x+w, y+h), (0,255,0), 2)
                    cv2.putText(image, "Placa carro", (x,y-5), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (255,0,255), 2)

                    image_roi = image[y: y+h, x:x+w]
                    frame_interval+=1
            
            cv2.imshow("IA", image)
            cv2.moveWindow("IA",600,200)

            ia_path = "../image/actual_image.jpg"

            #Salvo somente o shape da placa em um .jpg                
            if len(image_roi) > 0 and frame_interval == 60:
                cv2.imwrite(ia_path, image_roi)
                possible_plate = ct.convert(ia_path)
            
                if possible_plate:
                    placa_lida = Output.plate_in_authorized_plates(possible_plate)

                    if need_to_break:
                        return possible_plate
                    else:
                        print(placa_lida)
                        frame_interval = 0

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

class QrCode():
    def run_qrcode(camera_index):
        camera_index = camera_index
        video_capture = cv2.VideoCapture(camera_index, cv2.CAP_DSHOW)

        qr_code_path = "../image/qr_code.jpg"
        while True:
            _, image = video_capture.read()
            cv2.imshow("QrCode", image)
            cv2.moveWindow("QrCode",600,200)
        
            cv2.imwrite(qr_code_path, image)
            
            result = qr.read(qr_code_path)

            #Caso a função consiga ler um qrcode no frame atual, printa no terminal
            if result:
                userxplaca = Validation.validate_user_x_plate(result)

                ia_plate = IA.run_ia(0, True)
                final = Output.match_plates(userxplaca, ia_plate)

                print(final)

                break

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    
        video_capture.release()
        cv2.destroyAllWindows()