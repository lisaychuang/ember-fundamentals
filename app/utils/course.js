import Ember from 'ember';

const Course = Ember.Object.extend({
  title: "No Title",
  description: "",

  init: function(){
    this._super();
    this.set('tags',[]);
    this.set('languages',[])
  }
});


Course.reopenClass({
  languageName(name){
    return this.languages[name] || "Unknown";
  }
  });

export default Course;