const readlineSync = require("readline-sync");
//_____________________________________________________________________________________________________________________
            
                        // MARION

// function askTvSerie(){
//     let name = readlineSync.question("Give me the name of your fav serie ");
//     let prodYear = readlineSync.question("Give me the year of production ");
//     let n = readlineSync.question("How many cast members? ")
//     let namesCastMembers = [];
//     for (let i = 0; i < n; i++) {
//     namesCastMembers.push(readlineSync.question("Give me the name of cast member "));
// }
//     let tvSerie = {
//         "name" : name,
//         "productionyear" : prodYear,
//         "castmembers" : namesCastMembers,
//         };
//     return tvSerie;
// }
// // let tvSerie = JSON.stringify(askTvSerie(),null,4);

// tvSerie = askTvSerie()
// console.log(tvSerie);

// ///

// function shuffle(array) {

//     // loop all elements
//     for (let i = array.length - 1; i > 0; i--) {

//         // pickup a random element
//         const j = Math.floor(Math.random() * i);
//         const temp = array[i];

//         // swap it with the current element
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// };

// function randomizeCast(x){
//     console.log(shuffle(x));
// }
// randomizeCast(tvSerie.castmembers)

//_______________________________________________________________________________________________________

                                // SEBASTIEN

// function askTvSerie(){
//     let tvSerie = {
//         name: readlineSync.question("What is the name of your favourite TV serie? "),
//         productionYear: readlineSync.question("What's the year of production of this serie? "),
//         names_cast_members : ask_cast_members()
//     };
//     return tvSerie;
// }

// function ask_cast_members(){
//     let cast_members_array = [];
//     let cast_member = "";
//     while ((cast_member!=="") || (cast_members_array[0]==null)){
//         cast_member = readlineSync.question("Give me a cast member : ");
//         if(cast_member!==""){
//             cast_members_array.push(cast_member);
//         }
//         if (cast_members_array[0]==null){
//             console.log("I need at least one cast member but once it's done, if you want to stop, you can just type nothing and enter.");
//         }
//     }
//     return cast_members_array;
// }

// let tvSerie = askTvSerie();

// function randomizeCast(tvSerie){
//     let i=0;
//     let temp;
//     let other_cast_index;
//     for (let i=0; i<tvSerie.names_cast_members.length;i++){
//         other_cast_index=Math.floor(Math.random()*tvSerie.names_cast_members.length-1); 
//         temp=tvSerie.names_cast_members[i];
//         tvSerie.names_cast_members[i] =tvSerie.names_cast_members[other_cast_index];
//         tvSerie.names_cast_members[other_cast_index] = temp;
//     }
//     return tvSerie;
// }

// console.log(randomizeCast(tvSerie));

//_____________________________________________________________________________________________________________________

                            // CHRISTINA

/**
 * Function that will ask the user several data about its favorite TV 
 * @return {object} tv_object - the object that gathers all the data
 */
// function askTvSerie() {
// 	let name = readlineSync.question('Give me your name > ');
// 	let production_year = readlineSync.question('Give me a production year > ');

// 	let tv_object = {
// 		"serie_name": name,
// 		"production_year": production_year,
// 		"actors": getNames()
// 	}

// 	return tv_object;
// }

// function getNames() {
// 	let namesArray = [];
// 	let actor = "";

// 	do {
// 		actor = readlineSync.question('Give me an actor > ');

// 		if (actor != "") {
// 			let nameObject = {};
// 			nameObject.name = actor;
// 			namesArray.push(nameObject);
// 		}
// 	} while (actor != "");

// 	return namesArray;
// }

// function randomizeCast(tvSerie) {
// 	for(let i = tvSerie.actors.length-1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * i);
// 		const temp = tvSerie.actors[i];

// 		tvSerie.actors[i] = tvSerie.actors[j];
// 		tvSerie.actors[j] = temp;
// 	}

// 	return tvSerie;
// }

// console.log(randomizeCast(askTvSerie()));

//__________________________________________________________________________________________________________

                        // OLGA

// function that  store object with serial

// function askTvSerie() {

// // the main object
//   let objectSerial = {
//     name: " ",
//     productionYear: " ",
//     namesActors: []
//   }

//   let nameSerial = readlineSync.question("What your favorite serial? ");
//   objectSerial.name = nameSerial;

//   let yearSerial = readlineSync.question("What year did it come? ");
//   objectSerial.productionYear = yearSerial;

//   let numberOfActors = new Number(readlineSync.question("How much actors your remember on that serial? "));
//   // the nested object
//   for (let i = 1; i <= numberOfActors; i++) {
    
//     let actor = {
//       name: " ",
//       role: " "
//     }

//     let actorSerial = readlineSync.question("Name, please: ");
//     actor.name = actorSerial;

//     let roleActor = readlineSync.question("The role of him: ");
//     actor.role = roleActor;

//     objectSerial.namesActors.push(actor);
//   }

//   console.log(objectSerial);
//   return objectSerial;
// }


// // object = {
// //   name: 'Game of Throns',
// //   productionYear: '2000',
// //   namesActors: [
// //     { name: 'Kit Harington', role: 'Jone Snow' },
// //     { name: 'Emilia Klark', role: 'Khalisi' },
// //     { name: 'Peter Dinklage', role: 'Tyrion Lanister' }
// //   ]
// // };

// // call the function that create obj
// let object = askTvSerie()


// // function that random cast in main object
// function randomizeCast(obj) {
//   let array = obj.namesActors

//   let numberOfIndex = array.length;
  
//   while (numberOfIndex > 0) {
//     // Pick a random index for element of array
//     let index = Math.floor(Math.random() * numberOfIndex);
//     numberOfIndex--;

//     // Swap the last element of array with element with new index
//     let lastElement = array[numberOfIndex];
//     array[numberOfIndex] = array[index];
//     array[index] = lastElement;
//   }

//   return array;
// }

// // call the function that random cast
// let renederObj = randomizeCast(object)
// console.log(renederObj);