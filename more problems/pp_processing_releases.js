/* eslint-disable quote-props */
/* pp_processing_releases.js

Practice Problem: Processing Releases

Write a Function named processReleaseData that processes the following movie
release data: */

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'id': 0,
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

/* The Function should generate an Array of Objects that contain only the id
and title key/value pairs. You may assume that id and title, when existing, is
an integer greater than 0 and non-empty string respectively. Here are the rules:

- Keep only releases that have both id and title property present.
- Keep only the id and title data for each release. */

function processReleaseData(data) {
  let validEntries = data.filter(obj => obj.id && obj.title);
  let result = validEntries.map(obj => {
    return { id: obj.id, title: obj.title};
  });

  return result;
}

console.log(processReleaseData(newReleases));
console.log(!!newReleases[2].id);
console.log(!!newReleases[3].id);

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

/* algorithm
  - step 1: filter to id/title present
    - declare (validEntries)
    - iterate through array
    - true if element has id AND title
  - step 2: build new array
    - declare (result) to []
    - iterate through (validEntries)
      - create new objs with just id, title
      - push into (result)
  - return (result)
*/

/* book solution

function processReleaseData(data) {
  return data.filter(release => release.id && release.title)
             .map(release => {
               return {
                 id: release.id,
                 title: release.title,
               };
             });
}

*/