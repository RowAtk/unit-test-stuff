/*
 *  Unit tests for the Add Client User Story
 *  of the Repository Epic
 */


//TESTING
describe('Add Client Test Case', function(){

  it('should have clientData defined', function(){
    expect(clientData).toBeDefined();
  });

  it('should have saveData defined', function(){
    expect(saveData).toBeDefined();
  });

  it('should have validateClient defined', function(){
    expect(validateClient).toBeDefined();
  });

  it('should have validateName defined', function(){
    expect(validateName).toBeDefined();
  });

  it('should have validateAddress defined', function(){
    expect(validateAddress).toBeDefined();
  });

  it('should have validateZipCode defined', function(){
    expect(validateZipCode).toBeDefined();
  });

  it('should have validateEmail defined', function(){
    expect(validateEmail).toBeDefined();
  });

  it('should have validateTelephone defined', function(){
    expect(validateTelephone).toBeDefined();
  });

  it('should have formatDOB defined', function(){
    expect(formatDOB).toBeDefined();
  });

  it('should have generateID define', function(){
    expect(generateID).toBeDefined();
  });

  it('should have updateDataObject define', function(){
    expect(updateDataObject).toBeDefined();
  });

  describe('should call the "clientData" function', function(){
    var data;
    var win;
    var noData;
    beforeEach(function() {
      data = {
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
      noData = {
        fname: "",
        lname: "",
        dob: "",
        address: {
          line1: "",
          line2: "",
          city: "",
          state: "",
          zip: "",
          country: ""
        },
        telenum: "",
        email: ""
      };
      win = window;
    });


    it('and this function should call the validateClient function', function(){
      spyOn(win, 'clientData').and.callThrough();
      spyOn(win,'validateClient');
      win.clientData(data);
      expect(win.validateClvalidateCient).toHaveBeenCalled();
    });

    it('and this function should call the formatDOB function', function(){
      spyOn(win, 'clientData').and.callThrough();
      spyOn(win, 'formatDOB');
      win.clientData(data);
      expect(win.formatDOB).toHaveBeenCalled();
    });

    it('and this function should return a success', function(){
      spyOn(win, 'clientData').and.callThrough();
      spyOn(win, 'validateClient').and.returnValue(true);
      spyOn(win, 'formatDOB').and.returnValue(true);
      var result = clientData(data);
      expect(result).toBeTruthy();
    });

    it('and this function should return false when the data object is empty', function(){
      var result = clientData(noData);
      expect(result).toBeFalsy();
    })

    it('and this function should return false when validateClient function fails', function(){
      spyOn(win, 'clientData').and.callThrough();
      spyOn(win, 'validateClient').and.returnValue(false);
      spyOn(win, 'formatDOB').and.returnValue(true);
      var result = clientData(data);
      expect(result).toBeFalsy();
    });

    it('and this function should return false when formatDOB function fails', function(){
      spyOn(win, 'clientData').and.callThrough();
      spyOn(win, 'validateClient').and.returnValue(true);
      spyOn(win, 'formatDOB').and.returnValue(false);
      var result = clientData(data);
      expect(result).toBeFalsy();
    });
  });

  describe('should call the "validateClient" function', function(){
    var data;
    var win;
    beforeEach(function() {
      data = {
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
      win = window;
    });

    it('and this function should call the "validateName" function', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateName');
      win.validateClient(data);
      expect(win.validateName).toHaveBeenCalled();
    });

    it('and this function should call the "validateAddress" function', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateAddress');
      win.validateClient(data);
      expect(win.validateAddress).toHaveBeenCalled();
    });

    it('and this function should call the "validateEmail" function', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateEmail');
      win.validateClient(data);
      expect(win.validateEmail).toHaveBeenCalled();
    });

    it('and this function should call the "validateTelephone" function', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateTelephone');
      win.validateClient(data);
      expect(win.validateTelephone).toHaveBeenCalled();
    });

    it('and this function should return a success', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateName').and.returnValue(true);
      spyOn(win, 'validateAddress').and.returnValue(true);
      spyOn(win, 'validateEmail').and.returnValue(true);
      spyOn(win, 'validateTelephone').and.returnValue(true);
      var result = validateClient(data);
      expect(result).toBeTruthy();
    });

    it('and this function should return false when validateName function fails', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateName').and.returnValue(false);
      spyOn(win, 'validateEmail').and.returnValue(true);
      spyOn(win, 'validateTelephone').and.returnValue(true);
      var result = validateClient(data);
      expect(result).toBeFalsy();
    });

    it('and this function should return false when validateAddress function fails', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateName').and.returnValue(true);
      spyOn(win, 'validateAddress').and.returnValue(false);
      spyOn(win, 'validateEmail').and.returnValue(true);
      spyOn(win, 'validateTelephone').and.returnValue(true);
      var result = validateClient(data);
      expect(result).toBeFalsy();
    });

    it('and this function should return false when validateEmail function fails', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateName').and.returnValue(true);
      spyOn(win, 'validateAddress').and.returnValue(true);
      spyOn(win, 'validateEmail').and.returnValue(false);
      spyOn(win, 'validateTelephone').and.returnValue(true);
      var result = validateClient(data);
      expect(result).toBeFalsy();
    });

    it('and this function should return false when validateTelephone function fails', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateName').and.returnValue(true);
      spyOn(win, 'validateAddress').and.returnValue(true);
      spyOn(win, 'validateEmail').and.returnValue(true);
      spyOn(win, 'validateTelephone').and.returnValue(false);
      var result = validateClient(data);
      expect(result).toBeFalsy();
    });

    it('and this function should return false when all validation functions fail', function(){
      spyOn(win, 'validateClient').and.callThrough();
      spyOn(win, 'validateName').and.returnValue(false);
      spyOn(win, 'validateAddress').and.returnValue(false);
      spyOn(win, 'validateEmail').and.returnValue(false);
      spyOn(win, 'validateTelephone').and.returnValue(false);
      var result = validateClient(data);
      expect(result).toBeFalsy();
    });
  });

  describe('should call the "validateName" function', function(){
    it('and this function should return true with a valid name', function(){
      var result = validateName('John');
      expect(result).toBeTruthy();
    });

    it('and this function should return false with invalid name', function(){
      var result = validateName('Doe11');
      expect(result).toBeFalsy();
    });

    it('and this function should return false when name field is empty', function(){
      var result = validateName('');
      expect(result).toBeFalsy();
    });
  });

  describe('should call the "validateAddress" function', function(){
    it('and this function should return false when address object is empty', function(){
      var result = validateAddress({});
      expect(result).toBeFalsy();
    });

    describe('should call the "validateZipCode" function', function(){
      it('and this function should return false when the zip code field is empty', function(){
        var result = validateZipCode('');
        expect(result).toBeFalsy();
      });

      it('and this function should return true when the length is 6', function(){
        var result = validateZipCode('2134K5');
        expect(result).toBeTruthy();
      });

      it('and this function should return false when the length is less than 6', function(){
        var result = validateZipCode('24K5');
        expect(result).toBeFalsy();
      });

      it('and this function should return false when the length is greater than 6', function(){
        var result = validateZipCode('21034K99');
        expect(result).toBeFalsy();
      });

    });
  });

  describe('should call the "validateEmail" function', function(){
    it('and this function should return true with valid email', function(){
      var result = validateEmail('jdoe@mail.com');
      expect(result).toBeTruthy();
    });

    it('and this function should return false with invalid email', function(){
      var result = validateEmail('j.com');
      expect(result).toBeFalsy();
    });

    it('and this function should return false when email field is empty', function(){
      var result = validateEmail('');
      expect(result).toBeFalsy();
    });
  });

  describe('should call the "validateTelephone" function', function(){
    it('and this function should return true with valid telephone', function(){
      var result = validateTelephone('1(876)455-5666');
      expect(result).toBeTruthy();
    });

    it('and this function should return false with invalid telephone', function(){
      var result = validateTelephone('1(876)4jk-5666');
      expect(result).toBeFalsy();
    });

    it('and this function should return false with invalid telephone format', function(){
      var result = validateTelephone('455-5666');
      expect(result).toBeFalsy();
    });

    it('and this function should return false when telephone field is empty', function(){
      var result = validateTelephone('');
      expect(result).toBeFalsy();
    });
  });

  describe('should call the "formatDOB" function', function(){
    it('and this function should return true with valid date format', function(){
      var result = formatDOB('1996-03-22');
      expect(result).toBeTruthy();
    });

    it('and this function should return false with invalid date format', function(){
      var result = formatDOB('03-22-1996');
      expect(result).toBeFalsy();
    });
  });

  describe('should call the "generateID" function', function(){
    it('and this function return a valid id number', function(){
      var result = generateID();
      expect(result).not.toBeNaN();
    });
  });

  describe('should call the "saveData" function', function(){
    var data;
    var new_data;
    var success;
    var error;
    var win;
    var invalid;
    beforeEach(function() {
      data = {
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
      new_data = {
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
      success = {
        status: 200,
        contentType: 'text/plain',
        message: "Client successfully added to repository"
      };
      error = {
        status: 400,
        contentType: 'text/plain',
        message: "Client unsuccessfully added to repository"
      };
      invalid = "Invalid data entry";
      win = window;
    });
  
    it('and this function should call the "clientData" function', function(){
      spyOn(win, 'saveData').and.callThrough();
      spyOn(win, 'clientData');
      win.saveData(data);
      expect(win.clientData).toHaveBeenCalled();
    });

    it('and this function should call the "generateID" function', function(){
      spyOn(win, 'saveData').and.callThrough();
      spyOn(win, 'generateID');
      win.saveData(data);
      expect(win.generateID).toHaveBeenCalled();
    });

    it('and this function should call the "updateDataObject" function', function(){
      spyOn(win, 'saveData').and.callThrough();
      spyOn(win, 'updateDataObject');
      win.saveData(data);
      expect(win.updateDataObject).toHaveBeenCalled();
    });

    it('and this function should update the data object with the generatedID', function(){
      spyOn(win, 'saveData').and.callThrough();
      var result = updateDataObject('1234', data);
      expect(result).toBe(new_data);
    })

    it('and this function should post data to the database when clientData returns true', function(){
      spyOn(win, 'saveData').and.callThrough();
      spyOn(win, 'clientData').and.returnValue(true);
      win.saveData(data);
      
      //do post request with ajax
      // var xhr = new XMLHttpRequest();
      // xhr.onreadystatechange = function(args) {
      //   if (this.readyState == this.DONE) {
      //     testObj.successFunction(this.responseText);
      //   }
      // };

    });

    it('and this function should return an error message data when clientData returns false', function(){
      spyOn(win, 'saveData').and.callThrough();
      spyOn(win, 'clientData').and.returnValue(false);
      var result = saveData(new_data);
      expect(result).toBe(invalid);
    });

    it('and this function should return a json object with status:200 and confirmation message\
    when client is successfully added to the database', function(){
      var result = saveData(new_data);
      expect(result).toBe(success);
    });

    it('and this function should return a json object with status:400 and error message\
    when client could not be added to the database', function(){
      var result = saveData(new_data);
      expect(result).toBe(error);
    });
  
  });

});