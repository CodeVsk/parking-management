import cv2
import threading

class CameraThread(threading.Thread):
    def __init__(self, camera_index, window_name):
        threading.Thread.__init__(self)
        self.camera_index = camera_index
        self.window_name = window_name
        self.video_capture = cv2.VideoCapture(self.camera_index, cv2.CAP_DSHOW)
        
    def run(self):
        while True:
            ret, frame = self.video_capture.read()
            if not ret:
                break

            cv2.imshow(self.window_name, frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        
        self.video_capture.release()
        cv2.destroyAllWindows()

camera_thread0 = CameraThread(0, 'Cam 0')
camera_thread1 = CameraThread(1, 'Cam 1')

camera_thread0.start()
camera_thread1.start()

camera_thread0.join()
camera_thread1.join()
