from PIL import Image    
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r'/usr/local/Cellar/tesseract/4.0.0_1/bin/tesseract'

print(pytesseract.image_to_string(Image.open('bangla.png'), lang='Bengali'))

bangla = pytesseract.image_to_string(Image.open('bangla.png'), lang='Bengali')

f = open("text.txt", "w")
f.write(str(bangla))
f.close()