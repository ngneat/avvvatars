export interface WrapperProps {
  size: number;
  color: string;

  $shadow?: boolean;

  $border?: boolean;
  $borderSize?: number;
  $borderColor?: string;
  $radius?: number;
}
export type Style = 'character' | 'shape';
export interface Params {
  displayValue?: string;
  // this should be unique to user, it can be email, user id, or full name
  value: string;
  size?: number;
  shadow?: boolean;
  style?: Style;

  // toggle border
  border?: boolean;
  borderSize?: number;
  borderColor?: string;
  radius?: number;
}
