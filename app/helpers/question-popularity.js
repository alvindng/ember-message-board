import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<h6> <span class="glyphicon glyphicon-fire"></span> Popular Question!</h6>');
  }
}

export default Ember.Helper.helper(questionPopularity);
