import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  answerCount: Ember.computed('question.answers', function() {
    return this.get('question.answers.length');
  }),
  actions: {
    addToFavorites(item) {
      this.get('favoriteQuestions').add(item);
    },
  },
});
