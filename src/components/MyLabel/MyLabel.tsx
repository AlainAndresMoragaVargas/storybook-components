import './label.css';

export interface MyLabelProps {
  /**
   * Mensaje a mostrar en la etiqueta.
   */
  label: string;
  /**
   * Tamaño de la etiqueta.
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Mensaje en mayusculas o minusculas.
   */
  allCaps: boolean;
  /**
   * Color del texto del mensaje.
   */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
   * Color del texto del mensaje.
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'Por defecto',
  size = 'h1',
  color = 'primary',
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <div className={`label ${size} text-${color}`} style={{ color: fontColor }} >
      {allCaps ? label.toUpperCase() : label}
    </div>
  );
};

export default MyLabel;
