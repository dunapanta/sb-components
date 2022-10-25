import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Mensaje a mostrar en el label
   */
  label: string;
  /**
   * Este es el tamaño del label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Si es true, el texto se muestra en mayúsculas
   */
  allCaps?: boolean;
  /**
   * Color del texto
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color customizado
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "h1",
  allCaps = false,
  color = "primary",
  fontColor = "black",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
