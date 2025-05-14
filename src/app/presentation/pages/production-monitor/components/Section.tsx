import type { SectionProps } from '../../../../domain/shared.types'

const Section = ({ children, isFlex = false, className = '' }: SectionProps) => (
  <div className={`section ${isFlex ? 'flex' : ''} ${className}`.trim()}>{children}</div>
)
export default Section
