// import controls from './controls.utility';
// const control = require("./controls.utility");
'use strict';

describe('Delete', function() {

    beforeAll(function() {
        // fixture.setBase('test/fixtures');
        this.client = {
            fname: "John",
            lname: "Doe",
            dob: "1996-03-22",
            address: {
                line1: "12 Unit Road",
                line2: "Karma Town",
                city: "Kingston",
                state: "Kingston",
                zip: "2134K5",
                country: "Jamaica"
            },
            telenum: "1(876)455-5666",
            email: "jdoe@mail.com"
        };
    });

    beforeEach(function() {

        fixture.setBase('test/fixtures');
        fixture.load("details.fix.html");
        // document.getElementById("delete-btn").click();

        this.fname = controls.fname;
        this.lname = controls.lname;
        this.dob = controls.dob;
        this.address = controls.address;
        this.line1 = this.address.line1;
        this.line2 = this.address.line2;
        this.city = this.address.city;
        this.state = this.address.state;
        this.zip = this.address.zip;
        this.country = this.address.country;
        this.telenum = controls.telenum;
        this.email = controls.email;
        // console.log("DID IT");
        // console.log(this.telenum);
    });

    afterEach(function() {
        // fixture.cleanup();
    });

    afterAll(function(){
        // console.log("End delete test");
    });

    var foo;

	beforeEach(function() {
    	foo = {
      		redirect: function(url) {
				location.href = url
			}
    	};
    });
    
    describe('successfully deleting a client', function() {
        it('presents delete confirmation dialogue', function () { 
            var deleteBtn = document.getElementById("delete-btn");
            spyOnEvent(deleteBtn, 'click');
            deleteBtn.click();
            expect('click').toHaveBeenTriggeredOn(deleteBtn);
            spyOn(window, 'confirm');
            expect(window.confirm).toHaveBeenCalledWith("Are you sure you want to delete this client?");
            
        });  
        
        it('deletes a client', function () {
            spyOn(window, 'confirm').and.returnValue(true);
            this.client = {};
            expect(this.client).toBe("undefined");
        });

        it('displays success message', function (){
            spyOn(window, 'alert'); 
            var message = "Client has been deleted!";
            expect(window.alert).toHaveBeenCalledWith(message);
        });

        it('redirects to clients page', function (){
            spyOn(foo, 'redirect');
            expect(foo.redirect).toHaveBeenCalledWith('/Clients');
            expect(document.title).toBe('Clients');
    
        }); 
    });

    describe('unsuccessfully delete a client', function() {
        it('does not delete a client', function (){
            spyOn(window, 'confirm').and.returnValue(false);
            //var x = this.client;
            //expect(x).toBe(this.client);
            expect(this.client).not.toBeTruthy();
        });
    
        it('displays an error message', function (){
            spyOn(window, 'alert'); 
            var message = "Error occurred trying to delete client record.";
            // expect(window.alert).toHaveBeenCalled();
            expect(window.alert).toHaveBeenCalledWith(message);
        });
    
    
        it('does not redirect to clients page', function (){
            expect(document.title).toBe('Client');
        }); 
    });
});
