const id = 1;
const country_of_education = 'India';
const highest_level_of_education = 'default';
const grade = 'default';
const grading_scheme = 'default sheme';
const grade_scale = 'default scale';
const grade_average = 'default average';
const user_id = 1;

const educationalHistory = {
  id,
  country_of_education,
  highest_level_of_education,
  grade,
  grading_scheme,
  grade_scale,
  grade_average,
  user_id,
};

const index = 1;
const item = educationalHistory;
const countryList: any = [];
const higherEducationList: any = [];
const subLevelEduList: any = [];
const gradingSchemeList: any = [];
const gradeScaleList: any = [];
const updateGradeAverage = jest.fn();
const onCountrySelected = jest.fn();
const onHigherEduSelected = jest.fn();
const onGradeSelected = jest.fn();
const onGradeSchemeSelected = jest.fn();
const onGradeScaleSelected = jest.fn();
const editEducarionHistory = true;
const countryData = 'default data';
const highestEducationData = 'default education';
const grading_schemeData = 'default scheme';
const greadData = 'default greadData';
const greadScaleData = 'default greadScaleData';
const greadAverage = 'default greadAverage';

const Edu_FormProps = {
  index,
  item,
  countryList,
  higherEducationList,
  subLevelEduList,
  gradingSchemeList,
  gradeScaleList,
  updateGradeAverage,
  onCountrySelected,
  onHigherEduSelected,
  onGradeSelected,
  onGradeSchemeSelected,
  onGradeScaleSelected,
  editEducarionHistory,
  countryData,
  highestEducationData,
  grading_schemeData,
  greadData,
  greadScaleData,
  greadAverage,
};

export default Edu_FormProps;
