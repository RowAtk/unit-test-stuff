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

        fixture.setBase('test/fixtures');
        fixture.load("details.fix.html");
    });

    beforeEach(function() {

        fixture.setBase('test/fixtures');
        fixture.load("details.fix.html");
        document.getElementById("delete-btn").click();

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
        console.log("DID IT");
        console.log(this.telenum);
    });

    afterEach(function() {
        // fixture.cleanup();
    });

    afterAll(function(){
        console.log("End delete test");
    });

    it('presents delete confirmation dialogue', function () {
        var deleteBtn = document.getElementById("delete-btn");
        deleteBtn.click();
        var dialogue = window.confirm("Are you sure you want to delete this client?")
        expect(dialogue.typeof).toBe('function');
        // expect(document.getElementById("header").value).toBe("Delete Client");
        
    });  
    it('deletes a client', function (){
        var dialogue = window.confirm("Are you sure you want to delete this client?")
        if (dialogue) {
            this.client = {};
        }
        else {
            dialogue.close();
        }
        expect(this.client).toBe(undefined);
    });
    it('does not delete a client', function (){
        var x = this.client;
        var dialogue = window.confirm("Are you sure you want to delete this client?")
        if (dialogue) {
            this.client = {};
        }
        else {
            dialogue.close();
        }
        expect(x).toBe(this.client);
    });
    it('displays success message', function (){
        var dialogue = window.confirm("Are you sure you want to delete this client?")
        if (dialogue) {
            this.client = {};
            var success = alert("Client has been deleted!");
            console.log(success);
        }
        else {
            dialogue.close();
        }
        expect(success).toBe('function');

    });
    it('redirects to clients page', function (){
        var dialogue = window.confirm("Are you sure you want to delete this client?")
        if (dialogue) {
            this.client = {};
            var success = alert("Client has been deleted!");
            console.log(success);
            window.location.href('Clients.html');
        }
        else {
            dialogue.close();
        }
        expect(document.title).toBe('Clients');

    }); 

});
