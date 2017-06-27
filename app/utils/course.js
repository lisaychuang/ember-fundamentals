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
  _lang: {js: 'JavaScript'},
  languageName(abbre){
    return this._lang[abbre] || "Unknown";
  }
  });

export default Course;