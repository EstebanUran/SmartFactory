import type { WorkUnit } from '../../../../domain/shared.types'
import { ChartSection } from './ChartSection'
import { InfoItem } from './InfoItem'
import Section from './Section'

export const WorkunitCard = ({ unit }: { unit: WorkUnit }) => (
  <div className="workunit-card">
    <div className="workunit-card__header">
      <h2>{unit.wkuname}</h2>
      <span
        className="status"
        style={{ backgroundColor: unit.sitcolor || '#4a90e2', color: '#fff' }}
      >
        {unit.sitname}
      </span>
    </div>

    <Section className="unit-info">
      <div className="unit-info">
        <InfoItem label="Type" value={unit.wkutype} />
        <InfoItem label="Serie" value={unit.serie} />
      </div>
      <p className="unit-speed">
        <strong>Speed:</strong> {unit.speed}
      </p>
    </Section>

    <hr />

    <Section>
      <InfoItem label="Product Name" value={unit.matname} />
    </Section>

    <Section isFlex>
      <InfoItem label="WO Number" value={unit.wohnumber} multiline />
      <InfoItem label="WO Code" value={unit.woocode} multiline />
    </Section>

    <Section isFlex>
      <InfoItem label="Required" value={unit.quantityrequired} />
      <InfoItem label="Produced" value={unit.quantityproduced} />
    </Section>

    <hr />

    <Section className="box">
      <InfoItem label="OEE" value={`${unit.ioee} / ${unit.ioeeteo}`} />
      <InfoItem label="Performance" value={unit.iperformance} />
      <InfoItem label="Quality" value={unit.iquality} />
      <InfoItem label="Availability" value={unit.iavailability} />
    </Section>

    <hr />

    <ChartSection unit={unit} />
  </div>
)
