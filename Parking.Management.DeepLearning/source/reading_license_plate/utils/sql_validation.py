import psycopg2
import colorama
from colorama import Fore, Style

colorama.init()

connection_string = {
    "dbname": "parking_management",
    "host": "localhost",
    "user": "parking_management_user",
    "password": "parking1234",
    "port": "5432",
}

class Validation:
    def get_validated_plates():
        try:
            with psycopg2.connect(**connection_string) as connection:
                with connection.cursor() as cursor:
                    query = "SELECT plate FROM parking;"
                    cursor.execute(query)
                    
                    # armazenando o resultado da query em uma lista
                    dict_result = [row[0] for row in cursor.fetchall()]
                    return dict_result
        except Exception as e:
            print(e)
    
    def is_validated(plate):
        valids_plates = Validation.get_validated_plates()

        if plate in valids_plates:
            return 'AUTHORIZED'
        else:
            return 'NOT AUTHORIZED'

class Output:
    
    def fixed_length(text, length):
        if len(text) > length:
            text = text[:length]
        elif len(text) < length:
            text = (text + " " * length)[:length]
        return text


    def format_output(data):

        header = ['Image', 'Plate', 'Status']
        
        print("━" * 70)
        print("┃", end=" ")
        for column in header:
            print(Output.fixed_length(column, 20), end=" ┃ ")
        print()
        print("━" * 70)

        for row in data:
            print("┃", end=" ")
            for column in row:
                if column == 'AUTHORIZED':
                    print(Fore.GREEN + Output.fixed_length(column, 20) + Style.RESET_ALL, end=" ┃ ")
                elif column == 'NOT AUTHORIZED':
                    print(Fore.RED + Output.fixed_length(column, 20) + Style.RESET_ALL, end=" ┃ ")
                else:
                    print(Output.fixed_length(column, 20), end=" ┃ ")
            print()
        print("━" * 70)
