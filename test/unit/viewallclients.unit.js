/*
 * Unit tests for Viewing All Clients
 */

require('jasmine-ajax');
var $ = require('jquery');

describe('View All Clients', function() {
  var responses = {
    data: {
      status: 200,
      contentType: "application/json",
      responseText: {
      	"id": "1234",
        "fname": "John",
        "lname": "Doe",
        "dob": "1996-03-22",
        "address": {
        	"line1": "12 Unit Road",
        	"line2": "Karma Town",
        	"city": "Kingston",
        	"state": "Kingston",
        	"zip": "2134K5",
        	"country": "Jamaica"
        },
        "telenum": "18764555666",
        "email": "jdoe@mail.com"
      }
    },

    nodata: {
      status: 200,
      contentType: "application/json",
      responseText: {}
    },

    failure: {
      status: 500,
      contentType: "text/plain",
      responseText: "An error occurred trying to access client records.",
    }
  };

  var fixture = `
     <div class="table-responsive" id="fixture">
       <table class="table" id="clientsTable">
         <thead>
           <th class="fname">fname</th>
           <th class="lname">lname</th>
           <th class="dob">Date of Birth</th>
           <th class="line1">Address 1</th>
           <th class="line2">Address 2</th>
           <th class="city">City</th>
           <th class="state">State</th>
           <th class="zip">Zip Code</th>
           <th class="country">Country</th>
           <th class="telenum">telenum Number</th>
           <th class="email">Email Address</th>
         </thead>
         <tbody>
         </tbody>
       </table>
     </div>
   `;

  describe('on success when there are records in the database', function () {
    var insertRecords = function() {
      $('<tr>').append(
        $('<td class="fname">').text(responses['data']['responseText']['fname']),
        $('<td class="lname">').text(responses['data']['responseText']['lname']),
        $('<td class="dob">').text(responses['data']['responseText']['dob']),
        $('<td class="line1">').text(responses['data']['responseText']['address']['line1']),
        $('<td class="line2">').text(responses['data']['responseText']['address']['line2']),
        $('<td class="city">').text(responses['data']['responseText']['address']['city']),
        $('<td class="state">').text(responses['data']['responseText']['address']['state']),
        $('<td class="zip">').text(responses['data']['responseText']['address']['zip']),
        $('<td class="country">').text(responses['data']['responseText']['address']['country']),
        $('<td class="telenum">').text(responses['data']['responseText']['telenum']),
        $('<td class="email">').text(responses['data']['responseText']['email'])
      ).appendTo($('#clientsTable tbody'));
    }

    it('should retrieve client records from the database', function() {
     var data = jasmine.createSpy('data');
     jasmine.Ajax.withMock(function() {
       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function(args) {
         if (this.readyState == this.DONE) {
           data(this.responseText);
         }
       };

       xhr.open("GET", "http://localhost/api/clients");
       xhr.send();

       expect(data).not.toHaveBeenCalled();

       jasmine.Ajax.requests.mostRecent().respondWith(responses.data);

       expect(data).toHaveBeenCalledWith(responses.data);
     });
   });

   // inject the HTML fixture for the tests
   beforeEach(function() {
     document.body.insertAdjacentHTML('afterbegin', fixture);
   });

   // remove the html fixture from the DOM
   afterEach(function() {
     document.body.removeChild(document.getElementById('fixture'));
   });

   it('should display a table', function() {
     expect($('#fixture')).toBeInDOM();
     expect($('#fixture')).toContainHtml('<table class="table" id="clientsTable"></table>');
     expect($('#clientsTable.table')).toContainHtml('<thead></thead>');
     expect($('#clientsTable.table')).toContainHtml('<tbody></tbody>');
     expect($('#clientsTable.table > thead > th')).toHaveLength(11);
   });

   it('should populate the table with the clients retrieved', function() {
     stub = jasmine.createSpy('insertRecords');
     expect(stub).toHaveBeenCalled();

     expect($('tbody > tr > td')).toHaveLength(11);
     expect($('tbody > tr > td.fname')).toContainText("John");
     expect($('tbody > tr > td.lname')).toContainText("Doe");
     expect($('tbody > tr > td.dob')).toContainText("12/03/96");
     expect($('tbody > tr > td.line1')).toContainText("12 Unit Road");
     expect($('tbody > tr > td.line2')).toContainText("Karma Town");
     expect($('tbody > tr > td.city')).toContainText("Kingston");
     expect($('tbody > tr > td.state')).toContainText("Kingston");
     expect($('tbody > tr > td.zip')).toContainText("2134K5");
     expect($('tbody > tr > td.country')).toContainText("Jamaica");
     expect($('tbody > tr > td.telenum')).toContainText("18764555666");
     expect($('tbody > tr > td.email')).toContainText("jdoe@mail.com");

    });
 });

  describe('on success when there are no records in the database', function () {
    var insertMessage = function() {
      $('<tr>').append(
        $('<td class="message" colspan="11">').text('No client records exist')
      ).appendTo($('#clientsTable tbody'));
    }

    it('should retrieve no client records from the database', function() {
     var nodata = jasmine.createSpy('nodata');
     jasmine.Ajax.withMock(function() {
       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function(args) {
         if (this.readyState == this.DONE) {
           nodata(this.responseText);
         }
       };

       xhr.open("GET", "http://localhost/api/clients");
       xhr.send();

       expect(nodata).not.toHaveBeenCalled();

       jasmine.Ajax.requests.mostRecent().respondWith(responses.nodata);

       expect(nodata).toHaveBeenCalledWith(responses.nodata);
     });
    });

   // inject the HTML fixture for the tests
   beforeEach(function() {
     document.body.insertAdjacentHTML('afterbegin', fixture);
   });

   // remove the html fixture from the DOM
   afterEach(function() {
     document.body.removeChild(document.getElementById('fixture'));
   });

   it('should display a table', function() {
     expect($('#fixture')).toBeInDOM();
     expect($('#fixture')).toContainHtml('<table class="table" id="clientsTable"></table>');
     expect($('#clientsTable.table')).toContainHtml('<thead></thead>');
     expect($('#clientsTable.table')).toContainHtml('<tbody></tbody>');
     expect($('#clientsTable.table > thead > th')).toHaveLength(11);
   });

   it('should display a message indicating that there are no clients', function() {
     stub = jasmine.createSpy('insertMessage');
     expect(stub).toHaveBeenCalled();
   });

  });

  describe('on failure', function () {
    it('should fail to retrieve client records', function() {
      var failure = jasmine.createSpy('failure');
      jasmine.Ajax.withMock(function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(args) {
         if (this.readyState == this.DONE) {
           failure(this.responseText);
         }
        };

        xhr.open("GET", "http://localhost/api/clients");
        xhr.send();

        expect(failure).not.toHaveBeenCalled();

        jasmine.Ajax.requests.mostRecent().respondWith(responses.failure);

        expect(failure).toHaveBeenCalledWith(responses.failure);
      });
    });

    it ('should display an alert', function() {
      spyOn(window, 'alert');
      expect(window.alert).toHaveBeenCalledWith(responses.failure.responseText);
    });
  });
});
