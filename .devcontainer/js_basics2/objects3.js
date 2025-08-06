const course = {
        coursename : "JS",
        price : "99",
        Instructor : "Hitesh"
             }

        const {Instructor} = course// same as const instructor = course.Instructor

        //{} destructurin is being done

        const{Instructor : anyname} = course//to give a specific name

        console.log(anyname);
        // ************JSON API *************
//object with no name is JSON api
//all the keys are accessed using string
    {
        name: "Eshan"
        education: "Engineering"
        fee: "20L"
    }

