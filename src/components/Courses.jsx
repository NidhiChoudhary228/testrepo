export default function Courses(){

    function send(){
        let name=document.getElementsByClassName("name")[0].innerText;
        let price=document.getElementsByClassName("price")[0].innerText;
        let duration=document.getElementsByClassName("duration")[0].innerText;
        let desc=document.getElementsByClassName("desc")[0].innerText;

        var whatsapp_no ="6232955328";

        var text=
          "name : "+name+
          "%0Aprice : "+price+
          "%0Aduration : "+duration+
          "%0Adesc : "+desc;

        var url="http://wa.me/91"+whatsapp_no+"?text=" +text  ;

        window.open(url,"_blank");
    }

    let courses=[
        {
            name:"c/c++",
            dyration:"3 month",
            fees:"5,000",
            description:"It is object oriented programming language, easy to learn and understand"
        },
        {
            name:"python",
            dyration:"4 month",
            fees:"6,000",
            description:"It is versatile high level programming language, easy to learn and understand"
        },
        {
            name:"Data Analytics",
            dyration:"4 month",
            fees:"10,000",
            description:"it is the process of collecting cleaning , and analyzing row data to uncover hclassden patterns"
        },
        {
            name:"Web Development",
            dyration:"8 month",
            fees:"20,000",
            description:"it is the process of building programming , and maintaining web applications for the internet"
        },
        {
            name:"Data Science",
            dyration:"5 month",
            fees:"12,000",
            description:"it is field that combines mathematics , statistics , computer programming to extract meaningful insights from large amount of data"
        },
        {
            name:"Execl",
            dyration:"2 month",
            fees:"4,000",
            description:"Microsoft Excel is a digital spreadsheet program that organizes, calculates, and analyzes data using a grclassName of rows and columns"
        }
    ];

    let blank=[];


   return(
     <div className="main">
        <nav className="heading">
            <h1>Available Courses</h1>
        </nav>

        <div className="allbox">
            <div className="box">
                <h2 className="name">C/C++</h2>
                <p className="price">price : <b>5,000</b></p>
                <p className="duration">duration : <b>3 Month</b></p>
                <p className="desc">It is object oriented programming language, easy to learn and understand</p>
                <button className="button" onClick={send}>Enroll</button>
            </div>

              {/* <div className="box">
                <h2 className="name">Python</h2>
                <p className="price">price : <b>6,000</b></p>
                <p className="duration">duration : <b>3 Month</b></p>
                <p className="desc">It is versatile high level programming language, easy to learn and understand</p>
                <button className="button" onClick={send}>Enroll</button>
            </div>

             <div className="box">
                <h2 className="name">Data Analytics</h2>
                <p className="price">price : <b>10,000</b></p>
                <p className="duration">duration : <b>4 Month</b></p>
                <p className="desc">it is the process of collecting cleaning , and analyzing row data to uncover hclassden patterns</p>
                <button  className="button"onClick={send}>Enroll</button>
            </div>

             <div className="box">
                <h2 className="name">Web Development</h2>
                <p className="price">price : <b>20,000</b></p>
                <p className="duration">duration : <b>8 Month</b></p>
                <p className="desc">it is the process of building programming , and maintaining web applications for the internet</p>
                <button className="button" onClick={send}>Enroll</button>
            </div>

             <div className="box">
                <h2 className="name">Data Science</h2>
                <p className="price">price : <b>15,000</b></p>
                <p className="duration">duration : <b>5 Month</b></p>
                <p className="desc">it is field that combines mathematics , statistics , computer programming to extract meaningful insights from large amount of data</p>
                <button className="button" onClick={send}>Enroll</button>
            </div>

             <div className="box">
                <h2 className="name">Excel</h2>
                <p className="price">price : <b>3,000</b></p>
                <p className="duration">duration : <b>1.5 Month</b></p>
                <p className="desc">Microsoft Excel is a digital spreadsheet program that organizes, calculates, and analyzes data using a grclassName of rows and columns</p>
                <button className="button" onClick={send}>Enroll</button>
            </div> */}
        </div>

        <footer id="footer">
            <p>Name of the institute : Samyak coaching classes</p>
            <p>Loaction : At Vijay Nagar Sqaure,Indore</p>
            <p>contact : 1234567890</p>
        </footer>
    </div>
   );
}