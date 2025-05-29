declare module "qrcode" {
  interface ToStringOptions {
    type?: string;
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  }

  export function toString(text: string, options?: ToStringOptions): Promise<string>;
}
