var DiamondModel = Backbone.Model.extend({
  defaults: {
    "carat": 1,
    "color": 2,
    "clarity": 3
  }
});

diamondModel = new DiamondModel;








var CharacteristicView = Backbone.View.extend({
  disable: function(buttonClass) {
    this.$el.find(buttonClass).prop('disabled', true);
  },
  enable: function(buttonClass) {
    this.$el.find(buttonClass).prop('disabled', false);
  },
  increment: function(e) {
    var charName = this.options.characteristic,
        newValue = this.model.get(charName) - 1;
    e.preventDefault();

    this.enable('.decrement-button');

    this.model.set(charName, newValue);

    if (newValue === 0) {
      this.disable('.increment-button');
    }
  },
  decrement: function(e) {
    var charName = this.options.characteristic,
        newValue = this.model.get(charName) + 1;
    e.preventDefault();

    this.enable('.increment-button');

    this.model.set(charName, newValue);

    if (newValue >= BOUNDS[charName]) {
      this.disable('.decrement-button');
    }
  },
  events: {
    'click .increment-button': 'increment',
    'click .decrement-button': 'decrement'
  },
  initialize: function(options) {
    //check for null char?
    this.options = options || {};

    var charName = options.characteristic;

    // bind view to an element
    this.setElement('#'+charName+'-view');

    // only listen to changes on this characteristic
    this.listenTo(this.model, "change:"+charName, this.render);

    this.render();
  },
  render: function(){

    var $el = this.$el,
        charName = this.options.characteristic,
        val = this.model.get(this.options.characteristic),
        prettyName = CONSTANTS[charName][val],
        description = DESCRIPTIONS[charName][prettyName];

    this.$el.find('.value').html(prettyName);
    this.$el.find('.description').html(description);

    this.$el.find('#' + charName + '-diagram').attr('class', charName + '-diagram-' + prettyName);
  }
});

colorView = new CharacteristicView({
  characteristic: 'color',
  model: diamondModel
});

clarityView = new CharacteristicView({
  characteristic: 'clarity',
  model: diamondModel
});










var CaratView = CharacteristicView.extend({
  increment: function(e) {
    var newValue = +(this.model.get('carat') + .01).toFixed(2);
    e.preventDefault();
    this.model.set('carat', newValue);
  },
  decrement: function(e) {
    var newValue = +(this.model.get('carat') - .01).toFixed(2);
    e.preventDefault();
    this.model.set('carat', newValue);
  },
  manualChange: function(){
    var newVal = this.$el.find('.value input').val();
    this.model.set('carat', +newVal);
  },
  events: {
    'click .increment-button': 'increment',
    'click .decrement-button': 'decrement',
    'change input': 'manualChange'
  },
  render: function() {
    this.$el.find('input').val(this.model.get('carat'));
  }
});

caratView = new CaratView({
  el: '#carat-view',
  characteristic: 'carat',
  model: diamondModel
});












function getTotalCost(model) {
  var ptIndex = getPriceTableIndex(model.carat),
      actualColor = CONSTANTS.color[model.color];
      multiplier = PRICE_TABLE[ptIndex][actualColor][model.clarity],

      totalCost = multiplier * 100 * model.carat,
      number = totalCost.toString(),
      dollars = number.split('.')[0],
      //cents = (number.split('.')[1] || '') +'00';
      formattedTotal = dollars.split('').reverse().join('')
          .replace(/(\d{3}(?!$))/g, '$1,')
          .split('').reverse().join('');

  return formattedTotal;
}

var PriceView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  },
  render: function() {
    var totalCost = getTotalCost(this.model.attributes);

    this.$el.find('.value').html(totalCost);
  }
});

priceView = new PriceView({
  model: diamondModel,
  el: '#price-view'
});