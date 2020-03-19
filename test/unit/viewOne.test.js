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

    // beforeEach(function () {
    //     var custID = "1234";
    // });
    
    afterEach(function(){
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('should have the displayDetails function defined', function () {
        expect(displayDetails).toBeDefined();
    });


    describe('should call the displayDetails function', function () {

        beforeAll(function () {
            var custID = "1234";
            // document.body.removeChild(document.getElementById('fixture'));
        });


        it('and this function should show no details if the data fetching failed', function () {
            displayDetails(custID);
            var result = document.getElementById('fixture');
            expect(result.innerHTML).toBe(null);
        });

        it('and this function should show incorrect details for client John Doe if the data fetching failed', function () {
            displayDetails(custID);
            expect(document.getElementById('fname')).toBe('Jane');
        });

        it('and this function should show all details for client John Doe if it was selected', function () {
            displayDetails(custID);
            expect(document.title.innerHTML).toBe('Client Details'); //The page's title should have changed

            expect(document.getElementById('fname').innerHTML).toBe("John");    //all the details for John Doe should be on the page
            expect(document.getElementById('lname').innerHTML).toBe("Doe");
            expect(document.getElementById('dob').innerHTML).toBe("1996-03-22");
            expect(document.getElementById('line1').innerHTML).toBe("12 Unit Road");
            expect(document.getElementById('line2').innerHTML).toBe("Karma Town");
            expect(document.getElementById('city').innerHTML).toBe("Kingston ");
            expect(document.getElementById('state').innerHTML).toBe("Kingston");
            expect(document.getElementById('zip').innerHTML).toBe("2134K5");
            expect(document.getElementById('country').innerHTML).toBe("Jamaica");
            expect(document.getElementById('telenum').innerHTML).toBe("1(876)455-5666");
            expect(document.getElementById('email').innerHTML).toBe("jdoe@mail.com");
        });

        it('and this function should show all details for client Jane Doe if it was selected', function () {
            displayDetails(custID);
            expect(document.title.innerHTML).toBe('Client Details'); //The page's title should have changed

            expect(document.getElementById('fname').innerHTML).toBe("Jane");    //all the details for Jane Doe should be on the page
            expect(document.getElementById('lname').innerHTML).toBe("Doe");
            expect(document.getElementById('dob').innerHTML).toBe("1996-03-21");
            expect(document.getElementById('line1').innerHTML).toBe("10 Unit Road");
            expect(document.getElementById('line2').innerHTML).toBe("Karma Town");
            expect(document.getElementById('city').innerHTML).toBe("Kingston ");
            expect(document.getElementById('state').innerHTML).toBe("Kingston");
            expect(document.getElementById('zip').innerHTML).toBe("2134K5");
            expect(document.getElementById('country').innerHTML).toBe("Jamaica");
            expect(document.getElementById('telenum').innerHTML).toBe("1(876)444-5666");
            expect(document.getElementById('email').innerHTML).toBe("janedoe@mail.com");
        });

    });


    beforeEach(function () {

        fixture.setBase("test/fixtures");
        fixture.load("testPage2.fix.html");
        // var fix = '<div id="fixture"><table>'
        //     + '<tr><th>Client</th><th>ID</th></tr>'
        //     + '<tr><td>John Doe</td><td id="custID1">1234</td></tr>'
        //     + '<tr><td>Jane Doe</td><td id="custID2">4321</td></tr>'
        //     + '</table></div>';

        // document.getElementById("fixture").insertAdjacentHTML(
        //     'afterbegin', fixture);

        var id;

    });

    afterEach(function () {
        // document.body.removeChild(document.getElementById('fixture'));
        fixture.cleanup();

    });


    it('it should call the  displayDetails funciton', function () {
        var stub = jasmine.createSpy('displayDetails');

        // id = document.getElementById("custID1").click();
        viewOne(id);
        expect(stub).toHaveBeenCalledWith(id); 
        // spyOn(scope, 'displayDetails').andReturn(null);
        
    });

    it('should redirect to a page with the details for client when it is clicked', function () {
        spyOn(scope, 'displayDetails').andReturn(null);
        id = fixture.getElementById("custID1").click();
        var result = viewOne(id);

        expect(document.title).toBe('Client Details');
        expect(document.getElementById('fname').innerHTML).toBe("John");   //expect the correct details to be displayed
        expect(document.getElementById('lname').innerHTML).toBe("Doe");
    });

    it('should redirect to a page with the details for client2 when it is clicked', function () {
        spyOn(scope, 'displayDetails').andReturn();
        id = fixture.getElementById("custID2").click();
        var result = viewOne(id);

        expect(document.title).toBe('Client Details');
        expect(document.getElementById('fname').innerHTML).toBe("Jane");    //expect the correct details to be displayed
        expect(document.getElementById('lname').innerHTML).toBe("Doe");
    });

    it('should display an error on the current page if fetching the data failed', function () {
        spyOn(scope, 'displayDetails').andReturn(null);
        id = fixture.getElementById("custID1").click();
        var result = viewOne(id);
        expect(result).toBe("Could not retrieve data.\n");
    });

    it('should display an error if the clientID does not exist', function () {
        spyOn('scope, displayDetails').andReturn();
        id = document.getElementById("custID1").click();
        var result = viewOne(id);
        expect(result).toBe("Could not connect to database.\n");

    });

});



