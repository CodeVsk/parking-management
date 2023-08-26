import cv2
from convert_text import ConvertText as ct
from utils.sql_validation import Output

harcascade = "../model/haarcascade_russian_plate_number.xml"

video_capture = cv2.VideoCapture(0)

video_capture.set(3, 640) # largura
video_capture.set(4, 480) # altura

min_area = 500

while True:
    success, image = video_capture.read()

    #load cascade moidel
    plate_cascade = cv2.CascadeClassifier(harcascade)
    img_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    plates = plate_cascade.detectMultiScale(img_gray, 1.1, 4)

    for (x, y, w, h) in plates:
        area = w * h

        if area > min_area:
             cv2.rectangle(image, (x, y), (x+w, y+h), (0,255,0), 2)
             cv2.putText(image, "Placa carro", (x,y-5), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (255,0,255), 2)

             image_roi = image[y: y+h, x:x+w]
    
    cv2.imshow("Result", image)

    path = "../image/actual_image.jpg"
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    elif cv2.waitKey(1) & 0xFF == ord('t'):
        cv2.imwrite(path, image_roi)
        possible_plate = ct.convert(path)
        Output.return_to_user(possible_plate)