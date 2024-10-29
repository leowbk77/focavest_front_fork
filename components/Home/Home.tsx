import { DailyActivities } from './components/DailyActivities/DailyActivities';
import { NextExams } from './components/NextExams/NextExams';
import { Updates } from './components/Updates/Updates';

export function Home() {
  return (
    <>
    <DailyActivities />
    <NextExams />
    <Updates />
    </>
  );
}
