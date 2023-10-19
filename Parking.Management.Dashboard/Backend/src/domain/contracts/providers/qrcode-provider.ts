export interface IQRCodeProvider {
  generateQRCode(
    data: string,
    callback: (err: Error | null, url?: string) => void
  ): any;
}
