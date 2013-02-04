$M = {
  initialize: function() {

  },
  save: function(r) {
    $('#text').val(r)
    $('img#captured').src = r
    $('img#captured').show()
  }
}
