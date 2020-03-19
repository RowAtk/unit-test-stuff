// import controls from './controls.utility';
// const control = require("./controls.utility");
'use strict';

describe('Update', function() {

    var win;

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

        // fixture.setBase('test/fixtures');
        // fixture.load("details.fix.html");
    });

    beforeEach(function() {

        fixture.setBase('test/fixtures');
        fixture.load("details.fix.html");
        document.getElementById("edit-btn").click();

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
    });

    afterEach(function() {
        fixture.cleanup();
    });

    it('changes to edit page', function () {
        var editBtn = document.getElementById("edit-btn");
        spyOnEvent(editBtn, 'click');
        editBtn.click();
        expect('click').toHaveBeenTriggeredOn(editBtn);
        expect(document.title).toBe("Edit Client");
        // expect(document.getElementById("header").value).toBe("Edit Client");
    });  

    describe('presented form', function(){

        beforeEach(function(){
            // fixture.load('update.fix.html');
            controls.click('edit-btn');
        });

        it('name and dob fields exist', function() {
            // expect(this.fname).toBeDefined();
            expect(this.fname.tagName).toBe("INPUT");
            // expect(this.lname).toBeDefined();
            expect(this.lname.tagName).toBe("INPUT");
            // expect(this.dob).toBeDefined();
            expect(this.dob.tagName).toBe("INPUT");
        });
    
        it('address fields exist', function() {    
            // expect(this.line1).toBeDefined();
            expect(this.line1.tagName).toBe("INPUT");
            // expect(this.line2).toBeDefined();
            expect(this.line2.tagName).toBe("INPUT");
            // expect(this.city).toBeDefined();
            expect(this.city.tagName).toBe("INPUT");
            // expect(this.state).toBeDefined();
            expect(this.state.tagName).toBe("INPUT");
            // expect(this.zip).toBeDefined();
            expect(this.zip.tagName).toBe("INPUT");
            // expect(this.country).toBeDefined();
            expect(this.country.tagName).toBe("INPUT");
        });
    
        it('email and telephone fields exist', function(){
            // expect(this.telenum).toBeDefined();
            expect(this.telenum.tagName).toBe("INPUT");
            // expect(this.email).toBeDefined();
            expect(this.email.tagName).toBe("INPUT");
        });
    });

    describe('prefilled form', function(){

        describe('should show correct values in', function(){
            it('name and date of birth fields', function(){
                expect(this.fname.value).toBe(this.client.fname);
                expect(this.lname.value).toBe(this.client.lname);
                expect(this.dob.value).toBe(this.client.dob);
            });
    
            it('address fields', function(){
                var a = this.client.address;
                expect(this.line1.value).toBe(a.line1);
                expect(this.line2.value).toBe(a.line2);
                expect(this.city.value).toBe(a.city);
                expect(this.state.value).toBe(a.state);
                expect(this.zip.value).toBe(a.zip);
                expect(this.country.value).toBe(a.country);
            });
    
            it('telephone and email fields', function(){
                expect(this.telenum.value).toBe(this.client.telenum);
                expect(this.email.value).toBe(this.client.email);
            });
        });        
    });

    describe('record modification', function(){

        beforeEach(function(){
            fixture.setBase('test/fixtures');
            fixture.load("update.fix.html");
            win = window;

            // assume input is always good
            spyOn(win, 'validateInput').and.returnValue(true);

            // change values
            controls.fname = "Jane";
            controls.address.line1 = "21 Unit Road";
            controls.address.zip = "213K45";
        });

        afterEach(function(){
            fixture.cleanup();
        });

        it('validates user input', function(){
            // click 'submit
            var submitBtn = document.getElementById('submit');
            // spyOn(win, 'val')
            spyOnEvent(submitBtn, 'click');
            submitBtn.click();
            expect('click').toHaveBeenTriggeredOn(submitBtn);
            expect(validateInput).toHaveBeenCalled();
        });

        it('modifies client record', function() {

            // click 'submit'
            var submitBtn = document.getElementById('submit');
            spyOnEvent(submitBtn, 'click');
            submitBtn.click();
            expect('click').toHaveBeenTriggeredOn(submitBtn);

            // test
            expect(controls.fname.value).toBe(this.fname.value);
            expect(controls.address.line1.value).toBe(this.address.line1);
            expect(controls.address.zip.value).toBe(this.address.zip);
        });
    }); 

});