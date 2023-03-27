import '../css/Form.css'
import React, { useState, useContext } from 'react'
import DataContext from '../contest/DataContest'

function Form() {
    const contest = useContext(DataContext);
    let { adddata } = contest;
    const [credentials, setCredentials] = useState({ sname: "", email: "", website: "", image: "" });
    let gender = "";
    let skills = "";

    let changing = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    let Submitted = (e) => {
        e.preventDefault();
        let ele = document.getElementsByName('gender');
        // console.log(ele);
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                gender = ele[i].value
            }
        }

        let ele2 = document.getElementsByName('skills');
        for (let i = 0; i < ele2.length; i++) {
            if (ele2[i].checked) {
                skills += ele2[i].value;
            }
        }

        adddata(credentials.sname, credentials.email, credentials.website, credentials.image, gender, skills);

        setCredentials({ sname: "", email: "", website: "", image: "" });
        gender = "";
        skills = "";

    }

    let Reseting = (e) => {
        e.preventDefault();
        setCredentials({ sname: "", email: "", website: "", image: "" });
        gender = "";
        skills = "";
    }

    let c = () => {

    }

    return (
        <div className='Form_body'>
            <form className='Form_box' onSubmit={Submitted} onReset={Reseting}>
                <div className="mb-3 Form_fill" >
                    <label htmlFor="sname">Name</label>
                    <input type="text" id="sname" name='sname' value={credentials.sname} onChange={changing} required />
                </div>
                <div className="mb-3 Form_fill" >
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={changing} required unique />
                </div>
                <div className="mb-3 Form_fill">
                    <label htmlFor="website">Website</label>
                    <input type="url" id="website" name='website' value={credentials.website} onChange={changing} required />
                </div>
                <div className="mb-3 Form_fill" >
                    <label htmlFor="image" className="form-label">Image Link</label>
                    <input type="url" id="image" name='image' value={credentials.image} onChange={changing} />
                </div>
                <div className="mb-3 Form_buttons">
                    <span>
                        <label htmlFor="gender" className="form-label">Gender</label>
                    </span>
                    <span>
                        <span>
                            <input type="radio" id="male" name="gender" value="male" checked onChange={c} />
                            <label htmlFor="male">Male</label>
                        </span>
                        <span>
                            <input type="radio" id="female" name="gender" value="female" />
                            <label htmlFor="female">Female</label>
                        </span>
                    </span>
                </div>
                <div className="mb-3 Form_buttons">
                    <span>
                        <label htmlFor="skills" className="form-label">Skills</label>
                    </span>
                    <span>
                        <span>
                            <input type="checkbox" id="html" name="skills" value={"1"} checked onChange={c} />
                            <label htmlFor="html">html</label>
                        </span>
                        <span>
                            <input type="checkbox" id="css" name="skills" value={"2"} />
                            <label htmlFor="css">Css</label>
                        </span>
                        <span>
                            <input type="checkbox" id="js" name="skills" value={"3"} />
                            <label htmlFor="js">Js</label>
                        </span>
                    </span>

                </div>
                <div className="d-flex justify-content-around">
                    <button type="submit" className="btn btn-primary">Enroll Student</button>
                    <button type="reset" className="btn btn-danger">Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Form
