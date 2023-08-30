import cv2
from convert_text import ConvertText as ct
from convert_text import ReadQrCode as qr
from utils.sql_validation import Output, Validation
import threading

class StartApplication(threading.Thread):
    def __init__(self, camera_index, project_name):
        threading.Thread.__init__(self)
        self.camera_index = camera_index
        self.project_name = project_name
        self.video_capture = cv2.VideoCapture(self.camera_index, cv2.CAP_DSHOW)
        
    def run(self):
        if 'IA' in self.project_name:
            self.video_capture.set(3, 640) # largura da janela
            self.video_capture.set(4, 480) # altura da janela

            #Trained classifier object
            self.harcascade = "../model/haarcascade_russian_plate_number.xml" #modelo treinado

            self.min_area = 500 #area minima da placa

            #self.key_pressed = False
            #self.frames = []

            while True:
                _, image = self.video_capture.read()

                #load cascade model
                plate_cascade = cv2.CascadeClassifier(self.harcascade)
                img_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

                plates = plate_cascade.detectMultiScale(img_gray, 1.1, 4)

                for (x, y, w, h) in plates:
                    area = w * h

                    if area > self.min_area:
                        cv2.rectangle(image, (x, y), (x+w, y+h), (0,255,0), 2)
                        cv2.putText(image, "Placa carro", (x,y-5), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (255,0,255), 2)

                        image_roi = image[y: y+h, x:x+w]
                
                cv2.imshow(self.project_name, image)

                ia_path = "../image/actual_image.jpg"
                #Salvo somente o shape da placa em um .jpg
                if cv2.waitKey(1) & 0xFF == ord('t'):
                    cv2.imwrite(ia_path, image_roi)
                    possible_plate = ct.convert(ia_path)
                    Output.return_to_user(possible_plate)

                elif cv2.waitKey(1) & 0xFF == ord('q'):
                    break

            
            self.video_capture.release()
            cv2.destroyAllWindows()

        elif 'QrCode' in self.project_name:
            qr_code_path = "../image/qr_code.jpg"
            while True:
                _, image = self.video_capture.read()
                cv2.imshow(self.project_name, image)
                
                #if cv2.waitKey(1) & 0xFF == ord('t'):
                cv2.imwrite(qr_code_path, image)
                
                result = qr.read(qr_code_path)

                #Caso a função consiga ler um qrcode no frame atual, printa no terminal
                if result:
                    print(Validation.validate_user_x_plate(result))

                if cv2.waitKey(1) & 0xFF == ord('q'):
                    break
        
            self.video_capture.release()
            cv2.destroyAllWindows()


camera_thread0 = StartApplication(0, 'IA')
camera_thread1 = StartApplication(1, 'QrCode')

camera_thread0.start()
camera_thread1.start()

camera_thread0.join()
camera_thread1.join()