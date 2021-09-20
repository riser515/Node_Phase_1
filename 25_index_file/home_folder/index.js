// module.exports = {
//     a: require('./first'),
//     b: require('./second')
// }

/* Run the above code and change the name of this file from 'index' to 'i'.
After imitating this, change the routine_file require path as ('./home_folder/i').
This change should work as good as the initial methodology. */

/* Observation:-
Changing the path in the file routine_file to ('./home_folder') will result in an error of 'Module Not Found'.
This suggests that it is very necessary to have an index file, as servers can easily recognise and interpret it.
*/

// After successful implementation of above test case, comment the export lines and uncomment the lines given below:
// Also, uncomment the commented lines of Case 2, given in routine_files.js.

module.exports = {
    ...require('./first'),
    ...require('./second')
}