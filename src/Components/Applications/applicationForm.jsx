import { useState } from 'react';
import { ReactComponent as Vector } from '../assets/images/Vector.svg';
import PersInfo from './persInfo';
import SkillSet from './SkillSet';
import CovidSituation from './CovidStiuation';
import Insigts from './insigts';

export default function ApplicaitonForm(props) {
  const [open, setOpen] = useState(false);
  const { index, data } = props;
  const { first_name, last_name, email, phone, skills } = data;
  const { work_preference, had_covid, had_covid_at, vaccinated, vaccinated_at } = data;
  const { will_organize_devtalk, devtalk_topic, something_special } = data;

  return (
    <div className="applicationForm">
      <header onClick={() => setOpen(!open)}>
        <p>{index}</p>
        <span className={open ? 'toggleArrow' : ''}>
          <Vector />
        </span>
      </header>
      <section className={open ? 'openApplication' : ''}>
        <PersInfo first_name={first_name} last_name={last_name} email={email} phone={phone} />
        <SkillSet data={skills} />
        <CovidSituation
          work_preference={work_preference}
          had_covid={had_covid}
          had_covid_at={had_covid_at}
          vaccinated={vaccinated}
          vaccinated_at={vaccinated_at}
        />
        <Insigts
          will_organize_devtalk={will_organize_devtalk}
          devtalk_topic={devtalk_topic}
          something_special={something_special}
        />
      </section>
    </div>
  );
}
