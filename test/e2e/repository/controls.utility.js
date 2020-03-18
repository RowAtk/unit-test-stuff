var controls =  {
    // first name
    get fname(){
        return document.getElementById("fname");
    },
    set fname(val) {
        document.getElementById("fname").value = val;
    },

    // last name
    get lname(){
        return document.getElementById("lname");
    },
    set lname(val) {
        document.getElementById("lname").value = val;
    },

    //  date of birth
    get dob(){
        return document.getElementById("dob");
    },
    set dob(val) {
        document.getElementById("dob").value = val;
    },

    // address
    get address(){
        return {
            // line 1
            get line1(){
                return document.getElementById("line1");
            },
            set line1(val) {
                document.getElementById("line1").value = val;
            },

            // line 2
            get line2(){
                return document.getElementById("line2");
            },
            set line2(val) {
                document.getElementById("line2").value = val;
            },

            // city
            get city(){
                return document.getElementById("city");
            },
            set city(val) {
                document.getElementById("city").value = val;
            },
            
            // state
            get state(){
                return document.getElementById("state");
            },
            set state(val) {
                document.getElementById("state").value = val;
            },

            // zip code
            get zip(){
                return document.getElementById("zip");
            },
            set zip(val) {
                document.getElementById("zip").value = val;
            },

            // country
            get country(){
                return document.getElementById("country");
            },
            set country(val) {
                document.getElementById("country").value = val;
            },
        }
    },

    // telephone number
    get telenum() {
        return document.getElementById("telenum");
    },
    set telenum(val) {
        document.getElementById("telenum").value = val;
    },

    // email
    get email(){
        return document.getElementById("email");
    },
    set email(val) {
        document.getElementById("email").value = val;
    },

    // actions
    click(id) {
        document.getElementById(id).click();
    }
};