const current = new Date();
const maxDate = `${current.getFullYear() - 18}-${
  current.getMonth() >= 10
    ? current.getMonth() + 1
    : "0" + (current.getMonth() + 1)
}-${current.getDate() >= 10 ? current.getDate() : "0" + current.getDate()}`;


const contactInformation = [
  {
    id: 1,
    title: "Your last name",
    type: "text",
    placeholder: "For Example Doe",
    register: "lastName",
    required: true,
    select: false,
    invalid: "Enter your last name",
  },
  {
    id: 2,
    title: "Your first name",
    type: "text",
    placeholder: "For Example Jhon",
    register: "firstName",
    required: true,
    select: false,
    invalid: "Enter your first name",
  },
  {
    id: 3,
    title: "Your patronymic",
    type: "text",
    placeholder: "For Example Victorovich",
    register: "patronymic",
    required: false,
    select: false,
    invalid: "",
  },
  {
    id: 4,
    title: "Select term",
    register: "term",
    required: true,
    select: true,
    maplist: [
      { titel: "6 month", value: 6 },
      { titel: "12 month", value: 12 },
      { titel: "18 month", value: 18 },
      { titel: "24 month", value: 24 },
    ],
    invalid: "",
  },
  {
    id: 5,
    title: "Your email",
    type: "email",
    placeholder: "test@gmail.com",
    register: "email",
    required: true,
    select: false,
    invalid: "Incorrect email address",
    pattern : /\S+@\S+\.\S+/,
  },
  {
    id: 6,
    title: "Your date of birth",
    type: "date",
    placeholder: "Select Date and Time",
    register: "birthdate",
    required: true,
    select: false,
    invalid: "Incorrect date of birth",
    max: maxDate,
  },
  {
    id: 7,
    title: "Your passport seriesh",
    type: "number",
    placeholder: "0000",
    register: "passportSeries",
    required: true,
    select: false,
    invalid: "The series must be 4 digits",
    max: "9999",
    min: "0000",
    minLength: 4,
    maxLength: 4,
  },
  {
    id: 8,
    title: "Your passport number",
    type: "number",
    placeholder: "000000",
    register: "passportNumber",
    required: true,
    select: false,
    invalid: "The series must be 6 digits",
    max: "999999",
    min: "000000",
    minLength: 6,
    maxLength: 6,
  },
];

export { contactInformation };


