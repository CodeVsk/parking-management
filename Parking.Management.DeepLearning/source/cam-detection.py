import cv2

# Captura de vídeo 
vid = cv2.VideoCapture(0)

#Variável que detecta uma possível tecla
key = cv2.waitKey(1) & 0xFF

#Loop infinito para a câmera rodar
while(True):
	
	#Captura o frame de vídeo frame por frame
    ret, frame = vid.read()
        
    #Mostra o frame
    cv2.imshow('frame', frame)

    #Se a tecla 's' for pressionada, tira uma scrre    
    if key == ord('s'):
        cv2.imwrite('image.jpg', frame)	
    elif key == ord('q'):
        break

# After the loop release the cap object
vid.release()
# Destroy all the windows
cv2.destroyAllWindows()
