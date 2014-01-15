QUnit.test("Show me 'i++;'", function(assert) {
    i = 0;
    $("<div>i++;</div>")
      .appendTo("#qunit-fixture")
      .showme()
      .next() /* get activator*/
      .click(); /* simulate click */
    equal(i,1, "i was increased");
});