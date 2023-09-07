import application
import os

class StartApplication():
    def main():
        os.system("cls")
        print("=============================================")
        print("========Gerenciamento Estacionamento=========")
        print("=============================================")

        print('1- Entrada, 2- saída')
        entrada = input("Digite a opção que deseja abrir: ")

        if entrada == '1':
            application.IA.run_ia(0, False)
        elif entrada == '2':
            application.QrCode.run_qrcode(1)
        else:
            print("Opção inválida")
            StartApplication.main()

if __name__ == "__main__":
    StartApplication.main()
        
