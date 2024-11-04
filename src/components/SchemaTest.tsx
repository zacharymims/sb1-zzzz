import SoftwareSchema from './schemas/SoftwareSchema';
import TestSchema from './schemas/TestSchema';
import CourseListSchema from './schemas/CourseListSchema';

export default function SchemaTest() {
  return (
    <>
      <SoftwareSchema />
      <TestSchema />
      <CourseListSchema />
    </>
  );
}