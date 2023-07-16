
// Name : Muhammad Hamdi Ibrahim 
// Task 1 & 2 



const fs = require('fs');

// Q1: Create object person
const person = {
  fname: 'ahmed',
  lname: 'hossam',
  age: 20,
  city: 'alex'
};



// Q2: Convert object to JSON
const jsonPerson = JSON.stringify(person);



// Q3: Store JSON in a file
fs.writeFileSync('person.json', jsonPerson);



// Q 4: Read JSON from file
const fileData = fs.readFileSync('person.json', 'utf-8');



// Q 5: Convert JSON back to object
const personFile = JSON.parse(fileData);




// Q 6: Update data
personFile.fname = 'adel';
personFile.lname = 'ahmed';
personFile.age = 40;
personFile.city = 'cairo';



// Q 7: Convert object to JSON
const updatedJsonPerson = JSON.stringify(personFile);



// Q 8: Store updated JSON in a file
fs.writeFileSync('person.json', updatedJsonPerson);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
     



               /////// Task 2 ///////




// Q 1- to add 7 persons with ids from 1-7 
const allData = require("./allData")
  const addPerson = (fname , lname , city , age , id) => {
       const allData = loadData()

        allData.push ({
            id : id,
            fname : fname,
            lname : lname,
            city : city,
            age : age
        })
        saveAllData(allData)
  }

  /////////////////////////////////////////////////////////////////////
  //// Q: 2- to delete id 4 - 6 
 const deleteData = (x,y) => {
  const allData = loadData()

  const dataToKeep = allData.filter ((obj) => {
       return obj.id !== x||y 
  })
  // console.log(dataToKeep)
  saveAllData(dataToKeep)
}

//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
/// Q:3

const listData = () => {
  const allData = loadData()

  allData.forEach ((obj) => {
      console.log(obj.fname , obj.lname ,city)
  })
}

module.exports = {
  addPerson,
  deleteData, 
  listData
}