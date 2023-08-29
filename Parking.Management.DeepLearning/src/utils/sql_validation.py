import psycopg2
import colorama
from colorama import Fore, Style
from convert_text import ReadQrCode

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
    
    def validate_user_x_plate(user):
        try:
            with psycopg2.connect(**connection_string) as connection:
                with connection.cursor() as cursor:
                    query = f"SELECT plate FROM public.parking WHERE userr = '{user}';"
                    cursor.execute(query)
                    
                    # armazenando o resultado da query em uma lista
                    result = cursor.fetchone()
                    final = result[0]
                    return final
                
        except Exception as e:
            print(e)
class Output:
    def is_validated(plate):
        valids_plates = Validation.get_validated_plates()

        if plate in valids_plates:
            return True
        else:
            return False
    
    def return_to_user(plate):
        output_boolean = Validation.is_validated(plate)
        if output_boolean:
            print(f'O status da placa de número {plate} é '+ Fore.GREEN + Style.NORMAL + 'AUTHORIZED' + Style.RESET_ALL)
        else:
            print(f'O status da placa de número {plate} é '+ Fore.RED + Style.NORMAL + 'NOT AUTHORIZED' + Style.RESET_ALL)