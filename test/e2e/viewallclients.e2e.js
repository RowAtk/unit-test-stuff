/*
 * End-to-End tests for Viewing All Clients
 */

var $ = require('jquery-browserify');

describe('View All Clients', function() {
	var foo;

	beforeEach(function() {
    	foo = {
      		redirect: function(url) {
				location.href = url
			}
    	};
	});

	describe('on the Dashboard of a Customer Service Agent', function () {
		it('should be displayed a Client button', function() {
			expect($('#clientButton')).toBeInDOM();
		})
	
		it('should click the Clients button', function() {
			spyOnEvent('#clientButton', 'click')
			$('#clientButton').click();
			expect('click').toHaveBeenTriggeredOn('#clientButton')
		})
	
		it('redirects to Clients page', function () {
			spyOn(foo, 'redirect');
			expect(foo.redirect).toHaveBeenCalledWith('/Clients');
   		});
  	});
  
	describe('on failure to retrieve clients from the database', function () {
    	it('redirects to the Dashboard', function () {
        	spyOn(foo, 'redirect');
			expect(foo.redirect).toHaveBeenCalledWith('/Dashboard');
   		});
  	});
 });
