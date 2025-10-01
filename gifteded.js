define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){

  var API = new APIConstructor();
  return stiatExtension({
    category : { 
      name : 'Gifted Education', // Will appear in the data.
      title : {
        media : {word : 'Gifted Education'}, // Name of the category presented in the task.
        css : {color:'#31b404','font-size':'2em'},
        height : 7
      }, 
      // Use word stimuli instead of images
      media : [
        {word : 'Gifted'},
        {word : 'Talented'},
        {word : 'High Ability'},
        {word : 'Advanced'},
        {word : 'Exceptional'},
        {word : 'Bright'}
      ],
      css : {color:'#31b404','font-size':'3em'}
    },

    attribute1 : {
      name : 'Negative',
      title : {
        media : {word : 'Negative'},
        css : {color:'#31b404','font-size':'2em'},
        height : 7
      }, 
      media : [
        {word: 'Unimportant'},
        {word: 'Unnecessary'},
        {word: 'Wasteful'},
        {word: 'Unfair'},
        {word: 'Excessive'}
      ],
      css : {color:'#31b404','font-size':'3em'}
    },

    attribute2 : {
      name : 'Positive',
      title : {
        media : {word : 'Positive'},
        css : {color:'#31b404','font-size':'2em'},
        height : 7
      }, 
      media : [
        {word: 'Important'},
        {word: 'Necessary'},
        {word: 'Worthwhile'},
        {word: 'Beneficial'},
        {word: 'Needed'}
      ],
      css : {color:'#31b404','font-size':'3em'}
    }

    // No base_url needed since there are no images
  });
});
