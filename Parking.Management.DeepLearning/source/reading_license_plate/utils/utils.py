#Importação das dependências que serão utilizadas nas classes
import cv2
import pytesseract
import numpy as np

#Configuração da localização do tesseract OCR
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract'

class Processing:    
    def set_grayscale(image):
        return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    def set_remove_noise(image):
        return cv2.medianBlur(image, 5)
    
    def set_thresh_holding(image):
        return cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
    
    def set_dilate(image):
        kernel = np.ones((5, 5), np.uint8)
        return cv2.dilate(image, kernel, iterations=1)
    
    def set_erode(image):
        kernel = np.ones((5, 5), np.uint8)
        return cv2.erode(image, kernel, iterations=1)
    
    def set_opening(image):
        kernel = np.ones((5, 5), np.uint8)
        return cv2.morphologyEx(image, cv2.MORPH_OPEN, kernel)
    
    def set_canny(image):
        return cv2.Canny(image, 100, 200)

class ApplyFilters:

    def apply_filter(plate):
        gray = Processing.set_grayscale(plate)
        thresh = Processing.set_thresh_holding(gray)
        return thresh
    
    #pode
    def scan_plate(image):
        custom_config = r'-c tessedit_char_blacklist=abcdefghijklmnopqrstuvwxyz/ --psm 6'
        plate_number = (pytesseract.image_to_string(image, config=custom_config))
        return plate_number[:-1]