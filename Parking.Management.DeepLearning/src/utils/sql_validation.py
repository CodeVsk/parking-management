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
                    query = "SELECT plate FROM public.parking;"
                    cursor.execute(query)
                    
                    # armazenando o resultado da query em uma lista
                    list_result = [row[0] for row in cursor.fetchall()]

                    return list_result
                
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
    
    def plate_in_authorized_plates(plate):
        output_boolean = Output.is_validated(plate)
        if output_boolean:
            return f'O status da placa de número {plate} é '+ Fore.MAGENTA + Style.NORMAL + 'AUTHORIZED' + Style.RESET_ALL
        else:
            return f'O status da placa de número {plate} é '+ Fore.RED + Style.NORMAL + 'NOT AUTHORIZED' + Style.RESET_ALL
    
    def match_plates(plate_from_ia, plate_from_database):
        if plate_from_database == plate_from_ia:
            return f'Saída da placa {plate_from_database} '+ Fore.MAGENTA + Style.NORMAL + 'AUTHORIZED' + Style.RESET_ALL
        else:
            return f'Saída da placa {plate_from_database} '+ Fore.RED + Style.NORMAL + 'NOT AUTHORIZED' + Style.RESET_ALL