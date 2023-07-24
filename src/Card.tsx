import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

export interface CardProps extends MuiCardProps {
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: string;
}

export const Card: React.FC<CardProps> = ({
  borderWidth,
  borderColor,
  borderStyle,
  ...rest
}) => {
  return (
    <MuiCard
      sx={{
        ...(borderWidth ? { borderWidth } : {}),
        ...(borderColor ? { borderColor } : {}),
        ...(borderStyle ? { borderStyle } : {}),
      }}
      {...rest}
    />
  );
};
