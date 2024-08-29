import { ReactNode } from "react";
import { colorSet } from "@/set/color";
import { paddingX, paddingY } from "@/set/pixel";

type ColorSetType = keyof typeof colorSet;
type BgColorType = ColorSetType | (string & {});

type PaddingXType = keyof typeof paddingX;
type PadXType = PaddingXType | (string & {});

type PaddingYType = keyof typeof paddingY;
type PadYType = PaddingYType | (string & {});

interface Props {
  children: ReactNode;
  bgColor?: BgColorType;
  padX?: PadXType;
  padY?: PadYType;
}

const OldButton: React.FC<Props> = ({ children, bgColor, padX }) => {
  const getBgColor = (color: BgColorType) => {
    return color in colorSet ? colorSet[color as ColorSetType] : color;
  };
  const getPaddingX = (px: PadXType) => {
    return px in paddingX ? paddingX[px as PaddingXType] : px;
  };
  const getPaddingY = (px: PadYType) => {
    return px in paddingY ? paddingY[px as PaddingYType] : px;
  };
  return (
    <div
      className="text-3xl"
      style={{
        display: "inline-block",
        backgroundColor: bgColor ? getBgColor(bgColor) : undefined,
        paddingInline: padX ? getPaddingX(padX) : undefined,
        lineHeight: "0.76",
      }}
    >
      {children}
    </div>
  );
};

export default OldButton;
