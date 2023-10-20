export interface IQRCodeProvider {
  generateQRCode(data: string): Promise<string>;
}
