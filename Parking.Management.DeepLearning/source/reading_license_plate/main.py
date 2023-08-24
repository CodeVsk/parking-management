from os import walk
import cv2
from utils.utils import ApplyFilters
from utils.sql_validation import Validation, Output

def main():

    images = [
        '../../data/placa1.jpg',
        '../../data/placa2.jpg',
        '../../data/placa3.jpg',
        '../../data/placa4.jpg',
        '../../data/placa5.jpg',
        '../../data/placa6.jpg',
    ]

    plates = []
    plates_filter_applied = []
    plates_numbers = []
    data = []

    filenames = []
    for root, dirs, files in walk('../../data/'):
        filenames.extend(files)

    # Append the files name to list data
    for i in range(len(filenames)):
        data.append([])
        data[i].append(filenames[i])

    # Make an append to list plates
    for i in images:
        plates.append(cv2.imread(i))

    # Calls the function apply_filter() passing the plate image
    for i in range(len(plates)):
        plates_filter_applied.append(ApplyFilters.apply_filter(plates[i]))

    # Calls the function scan_plate() passing the plate image with filter applied
    for i in range(len(plates_filter_applied)):
        plates_numbers.append(ApplyFilters.scan_plate(plates_filter_applied[i]))
        data[i].append(plates_numbers[i])

    # Calls the function validate_plate() passing the plate number
    for i in range(len(plates_numbers)):
        data[i].append(Validation.is_validated(plates_numbers[i]))

    Output.format_output(data)


main()
