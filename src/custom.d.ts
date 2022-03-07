/* eslint-disable  @typescript-eslint/no-explicit-any */

declare module "*.module.css";
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
  const svg: string;
  export default svg;
}