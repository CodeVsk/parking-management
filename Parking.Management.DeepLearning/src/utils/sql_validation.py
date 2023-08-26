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
            return True
        else:
            return False

class Output:
    
    def return_to_user(plate):
        output_boolean = Validation.is_validated(plate)
        if output_boolean:
            print(f'O status da placa de número {plate} é '+ Fore.GREEN + Style.NORMAL + 'AUTHORIZED' + Style.RESET_ALL)
        else:
            print(f'O status da placa de número {plate} é '+ Fore.RED + Style.NORMAL + 'NOT AUTHORIZED' + Style.RESET_ALL)