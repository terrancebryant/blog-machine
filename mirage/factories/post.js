import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },
  desc() {
    return faker.lorem.paragraphs();
  },
});
