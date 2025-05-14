import type { InfoItemProps } from '../../../../domain/shared.types'

export const InfoItem = ({ label, value, multiline = false }: InfoItemProps) => (
  <p style={{ textAlign: 'center' }}>
    <strong>{label}:</strong>
    {multiline ? <br /> : ' '} {value}
  </p>
)
