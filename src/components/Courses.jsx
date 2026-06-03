export default function Courses(){

    function send(course){
        

        var whatsapp_no ="6232955328";

        var text=
          "name : "+ course. name+
          "%0Aprice : "+ course. price+
          "%0Aduration : "+ course. duration+
          "%0Adesc : "+ course. description;

        var url="http://wa.me/91"+whatsapp_no+"?text=" +text  ;

        window.open(url,"_blank");
    }

    let courses=[
        {
            name:"c/c++",
            duration:"3 month",
            fees:"5,000",
            description:"C and C++ are highly efficient, compiled computer programming languages used to build operating systems, game engines, and low-level system software"
        },
        {
            name:"python",
            duration:"4 month",
            fees:"6,000",
            description:"Python is a popular, high-level programming language ,  it is used for a wide range of applications, including website development, task automation, data analysis"
        },
        {
            name:"Data Analytics",
            duration:"4 month",
            fees:"10,000",
            description:"Data analytics is the process of collecting, cleansing, and examining raw data to uncover hidden patterns, draw meaningful conclusions, and make informed decisions"
        },
        {
            name:"Web Development",
            duration:"8 month",
            fees:"20,000",
            description:"Web development is the process of building, creating, and maintaining websites and web applications that run on the internet or an intranet"
        },
        {
            name:"Data Science",
            duration:"5 month",
            fees:"12,000",
            description:"it is field that combines mathematics , statistics , computer programming to extract meaningful insights from large amount of data"
        },
        {
            name:"Excel",
            duration:"2 month",
            fees:"4,000",
            description:"Microsoft Excel is a digital spreadsheet program that organizes, calculates, and analyzes data using a grclassName of rows and columns"
        }
    ];



   return(
     <div className="main">
        <nav className="heading">
            <h1>Available Courses</h1>
        </nav>

        <div className="allbox">
           {courses.map((item,index)=>{

            return(
                <div key={index} className="box">
                <h1>{item.name}</h1>
                <p>Duration : <b>{item.duration}</b></p>
                <p>Fees : <b>{item.fees}</b></p>
                <p>{item.description}</p>
                <button className="button" onClick={()=> send(item)}>Enroll</button>
            </div>
            );
           })}

              
        </div>

        <footer id="footer">
            <p>Name of the institute : Samyak coaching classes</p>
            <p>Loaction : At Vijay Nagar Sqaure,Indore</p>
            <p>contact : 1234567890</p>
        </footer>
    </div>
   );
}
