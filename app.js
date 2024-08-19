// this is where you code will go for the New Vision Foundation: 
// Full Stack Coding Bootcamp Technical Assessment

//This is the matrial length of the dress. Since the variable inches wont change it will be declared with the const type
const inches = 876;

//Converted the matrial length of the dress to centimeter by multiplying 2.54 with the inches variable
//then saved it in a centimeter variable with the var type that allows you to change its value
var centimeter = inches * 2.54

//Rounded down the centimeter measurement with the built in Math object that rounds the variable that you plug into it,
//and then saved this rounded number into the centimeter variable
centimeter = Math.floor(centimeter)

// Converted the centimeter to meter by dividing the centimeter variable with 100 and then saved it in a variable called meter
var meter = centimeter/ 100

// To output the variable into the console, I did console.log. Then concatenated the given string with the
// centimeter variable so it shows as one string in the console
console.log('The measurement is '+ centimeter +' in CENTIMETERS')

//To output the variable into the console, I did console.log. Then concatenated the given string with the
// meter variable so it shows as one string in the console
console.log('The measurement is ' + meter + ' in METERS')


// To output the variable into the console, I did console.log. Then concatenated the given string with the
// inches, centimeter, and meter variables so it shows as one string in the console
console.log(inches +  'in converts to ' + centimeter + 'cm which converts to ' + meter+'m.')