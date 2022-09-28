const id = 1;
const country_of_institution = 'default country_of_institution';
const name_of_institution = 'default name_of_institution';
const level_of_education = 'default level_of_education';
const primary_language_of_instruction =
  'default primary_language_of_instruction';
const from_date = 'default from_date';
const to_date = 'default to_date';
const degree_name = 'default degree_name';
const graduated_from_this_institution =
  'default graduated_from_this_institution';
const graduation_date = 'default graduation_date';
const having_physical_certificate = 'default having_physical_certificate';
const address = 'default address';
const city_town = 'default city_town';
const state = 'default state';
const zipcode = 'default zipcode';
const user_id = 1;

const institutionalHistory = {
  id,
  country_of_institution,
  name_of_institution,
  level_of_education,
  primary_language_of_instruction,
  from_date,
  to_date,
  degree_name,
  graduated_from_this_institution,
  graduation_date,
  having_physical_certificate,
  address,
  city_town,
  state,
  zipcode,
  user_id,
};

const index = 1;
const item = institutionalHistory;
const countryList: any = [];
const stateList: any = [];
const cityList: any = [];
const higherEducationList: any = [];
const gradeScaleList: any = [];
const updateTextValue = jest.fn();
const onCountrySelected = jest.fn();
const onStateSelected = jest.fn();
const onCitySelected = jest.fn();
const onEduLevelSelected = jest.fn();
const handleDateConfirm = jest.fn();
const editEducarionHistory = false;
const countryOfInstitutionData = 'default countrydata';
const nameOfInstitutionData = 'default instituteName';
const levelOfEducationData = 'default eduLevel';
const primaryLangData = 'default primaryLang';
const formDataData = 'default formData';
const toDateData = 'default toDate';
const degreeNameData = 'default degreeName';
const graduatedInstitutionData = 'default graduatedInstitutionData';
const graduation_dateData = 'default graduation_dateData';
const physicalCertificateData = 'default physicalCertificateData';
const addressData = 'default addressData';
const cityData = 'default cityData';
const stateData = 'default stateData';
const postalCodeData = 'default postalCodeData';

const InstitutionProps = {
  index,
  item,
  countryList,
  stateList,
  cityList,
  higherEducationList,
  gradeScaleList,
  updateTextValue,
  onCountrySelected,
  onStateSelected,
  onCitySelected,
  onEduLevelSelected,
  handleDateConfirm,
  editEducarionHistory,
  countryOfInstitutionData,
  nameOfInstitutionData,
  levelOfEducationData,
  primaryLangData,
  formDataData,
  toDateData,
  degreeNameData,
  graduatedInstitutionData,
  graduation_dateData,
  physicalCertificateData,
  addressData,
  cityData,
  stateData,
  postalCodeData,
};

export default InstitutionProps;
