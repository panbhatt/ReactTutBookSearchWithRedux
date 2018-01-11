import React from 'React';
import DeepFreeze from 'deep-freeze';

// This script will run before the Test Case execution. 

global.React = React; 
global.testData = {
    "id" : 0,
    "title" : "Harry Potter",
    "category" : "FICTION"
  };
