import React from 'react';
import Info from './Info';


function ArticleList(props) {
    const examInfo = [
        {
            id:1,
            course_id: 'IT400',
            course_name: 'Project Management IT',
            date: '12-1-2023',
            time: '9:00AM - 11:00AM',
            room: 'Lab 9',
            major: 'IT',
            level: 'Senior',
            professor: 'Ms Ons Abdelkhalek'
        },
        {
            id:2,
            course_id: 'BA300',
            course_name: 'Desc Mak & Game Th',
            date: '13-1-2023',
            time: '9:00AM - 11:00AM',
            room: 'RR4',
            major: 'BA',
            level: 'Junior',
            professor: 'Ms Sonia Rebai'
        },
        {
            id:3,
            course_id: 'BCOR225',
            course_name: 'Managerial Accounting',
            date: '14-1-2023',
            time: '13:00AM - 15:00AM',
            room: 'A7',
            major: '',
            level: 'Sophomore',
            professor: 'Mr Karim Mhedhbi'
        },
        {
            id:4,
            course_id: 'NBC100',
            course_name: 'Intensive General English',
            date: '15-1-2023',
            time: '13:00AM - 15:00AM',
            room: 'A11',
            major: '',
            level: 'Freshman',
            professor: 'Ms Manel Gasmi'
        }
    ];
   
    const examList = examInfo.map(info => <Info key={info.id} info={info} />)

    const page_title = "Final Exams Schedule (Fall Term)"

    return (
        <React.Fragment>     
            <section id="sectionJobList" className="section section-job-list gradient-light--lean-left">
                <div className="container">

                    <div className="row row-grid justify-content-center">

                    <div className="col-md-8 col-lg-7 col-xl-6 text-center">
                        <h2 className="section__title my-5">{page_title}</h2>
                    </div>

                    <div className="col-md-12">

                        <form className="filter-form mb-5">
                            <div className="row">
                                <input className="form-control" onKeyUp="myFunction()" id="myInput" type="text" placeholder="Search.."/>
                            </div>
                        </form>

                    {examList}          
                        
                    </div>

                    </div>
                </div>
                </section>


                
       
        </React.Fragment>
    );
}


export default ArticleList;

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}