// JavaScript source code
/*
 * Unit tests for lib/viewOne.js
 */

//INPUTS
//-the clientID

//OUTPUT
//-a page showing the details of the selected client

//FUNCTIONS
//-displayDetails- displays the detils for a specific client in table

'use strict';

describe('The viewOne function test case', function () {

    var john = {
        id: "1234",
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

    var jane = {
        id: "1235",
        fname: "Jane",
        lname: "Doe",
        dob: "1996-03-21",
        address: {
            line1: "10 Unit Road",
            line2: "Karma Town",
            city: "Kingston",
            state: "Kingston",
            zip: "2134K5",
            country: "Jamaica"
        },
        telenum: "1(876)444-5666",
        email: "janedoe@mail.com"
    };

    var win;

    beforeEach(function () {
        fixture.setBase("test/fixtures");
        fixture.load("viewOne.fix.html");
        var id;
        win = window;
    });

    afterEach(function () {
        fixture.cleanup();
    });

    it('should have the viewOne function defined', function () {
        expect(viewOne).toBeDefined();
    });

    it('should have the displayDetails function defined', function () {
        expect(displayDetails).toBeDefined();
    });

    it('should have the fetchData function defined', function () {
        expect(fetchData).toBeDefined();
    });

    it('should redirect to client detail when it is clicked', function () {
        spyOn(win, 'fetchData').and.returnValue(john);
        spyOn(win, 'displayDetails').and.stub();
        spyOn(win, 'viewOne');

        var custrec = document.getElementById("custID1");
        spyOnEvent(custrec, 'click');
        custrec.click();
        expect('click').toHaveBeenTriggeredOn(custrec);

        expect(viewOne).toHaveBeenCalled();
        expect(document.title).toBe('Client Details');
        // var result = viewOne(id); 
    });

    describe('when viewOne() is called', function () { 

        it('it should call the fetchData function', function () {
            spyOn(win, 'fetchData').and.returnValue(john);
            spyOn(win, 'displayDetails').and.stub();
            spyOn(win, 'viewOne').and.callThrough();
            
            viewOne(john.id);
            expect(fetchData).toHaveBeenCalled();
        });
        
        it('it should call the displayDetails function', function () {
            spyOn(win, 'fetchData').and.returnValue(john);
            spyOn(win, 'displayDetails').and.stub();
            spyOn(win, 'viewOne').and.callThrough();
            
            viewOne(john.id);
            expect(displayDetails).toHaveBeenCalled();
        });

        it('a button for view should exist', function() {
            expect(document.getElementById('view')).toBeInDOM();
        });

        it('a button for edit should exist', function() {
            expect(document.getElementById('edit')).toBeInDOM();
        });
    });

    describe('when fetchData() is called', function() {
        it('should return an empty object when client does not exist', function () {
            var client  = fetchData("0");   // fetch data with non-existent ID
            expect(client).toBe({});
        });
    
        it('should display an error if the clientID does not exist', function () {
            // spyOn('scope, displayDetails').andReturn();
            // id = document.getElementById("custID1").click();
            // var result = viewOne(id);
            // expect(result).toBe("Could not connect to database.\n");
            displayDetails({});
            expect(document.getElementById("fixture").innerText).toBe("Client does not exist.\n");
    
        });

        it('should return details for client John Doe when id "1234" is passed', function () {
            var client = fetchData(john.id);
            expect(client).toBe(john);
        });

        it('should return details for client Jane Doe when id "1235" is passed', function () {
            var client = fetchData(jane.id);
            expect(client).toBe(jane);
        });
    });

    describe('when dislayDetails() is called', function() {

        it('should show no details if the data fetching failed', function () {
            spyOn(win, 'fetchData').and.returnValue({});
            var result = fetchData(id);
            displayDetails(result);
            var fixture = document.getElementById('fixture');
            expect(fixture.innerText).toBe(null);
        });

        it('should display an error on the current page if fetching the data failed', function () {
            spyOn(win, 'fetchData').and.throwError("Error");
            fetchData(john.id);
            expect(document.getElementById("fixture").innerText).toBe("Could not retrieve data.\n");
        });

        it('should retrieve details for John Doe("1234") if it was selected', function() {
            document.getElementById("custID1").click();
            expect(viewOne).toHaveBeenCalledWith("1234");
        });

        it('should show all details for client with id "1234" on the screen when related client data is retrieved', function () {
            displayDetails(john);
            expect(document.title.innerText).toBe('Client Details'); //The page's title should have changed

            // expect(document.getElementById('id').innerText).toBe("1234");
            expect(document.getElementById('fname').innerText).toBe("John");    //all the details for John Doe should be on the page
            expect(document.getElementById('lname').innerText).toBe("Doe");
            expect(document.getElementById('dob').innerText).toBe("1996-03-22");
            expect(document.getElementById('line1').innerText).toBe("12 Unit Road");
            expect(document.getElementById('line2').innerText).toBe("Karma Town");
            expect(document.getElementById('city').innerText).toBe("Kingston ");
            expect(document.getElementById('state').innerText).toBe("Kingston");
            expect(document.getElementById('zip').innerText).toBe("2134K5");
            expect(document.getElementById('country').innerText).toBe("Jamaica");
            expect(document.getElementById('telenum').innerText).toBe("1(876)455-5666");
            expect(document.getElementById('email').innerText).toBe("jdoe@mail.com");
        });

        it('should show all details for client with id "1235" on the screen when related client data is retrieved', function () {
            displayDetails(jane);
            expect(document.title.innerText).toBe('Client Details'); //The page's title should have changed

            // expect(document.getElementById('id').innerText).toBe("1235");
            expect(document.getElementById('fname').innerText).toBe("Jane");    //all the details for Jane Doe should be on the page
            expect(document.getElementById('lname').innerText).toBe("Doe");
            expect(document.getElementById('dob').innerText).toBe("1996-03-21");
            expect(document.getElementById('line1').innerText).toBe("10 Unit Road");
            expect(document.getElementById('line2').innerText).toBe("Karma Town");
            expect(document.getElementById('city').innerText).toBe("Kingston");
            expect(document.getElementById('state').innerText).toBe("Kingston");
            expect(document.getElementById('zip').innerText).toBe("2134K5");
            expect(document.getElementById('country').innerText).toBe("Jamaica");
            expect(document.getElementById('telenum').innerText).toBe("1(876)444-5666");
            expect(document.getElementById('email').innerText).toBe("janedoe@mail.com");
        });
    });
});



