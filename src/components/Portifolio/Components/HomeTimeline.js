import React from 'react';
import LineHeads4 from'../Components/LineHeads4';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


function HomeTimeline() {
    return (
        <Container>
            <LineHeads4/>
            <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Year</th>
                <th>Name</th>
                <th>Role</th>
                <th>Achievements</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2010-2016</td>
                <td>Perfect Digital Music and Film Industry</td>
                <td>Student</td>
                <td>Learnt Graphics Designing</td>
                <td>Oyo State, Nigeria</td>
              </tr>
              <tr>
                <td>2016- till date</td>
                <td>Perfect Digital Music and Film Industry</td>
                <td>Graphics Designer</td>
                <td></td>
                <td>Oyo State, Nigeria</td>
              </tr>
              <tr>
                <td>2017-2018</td>
                <td>Alison Online Courses</td>
                <td>Student</td>
                <td>Diploma in Graphics designing</td>
                <td>www.alison.com</td>
              </tr>

              <tr>
                <td>2017-2018</td>
                <td>Alison Online Courses</td>
                <td>Student</td>
                <td>Diploma in Photography</td>
                <td>www.alison.com</td>
              </tr>
              
              <tr>
                <td>2018- till date</td>
                <td>Corn Design</td>
                <td>Graphics Designer / C.E.O</td>
                <td></td>
                <td>University of Ibadan, Nigeria</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>Build Code Together</td>
                <td>Student</td>
                <td>Introduction to Web Development(HTML5, CSS, JavaScript & React Js)</td>
                <td>Ibadan, Nigeria</td>
              </tr>

              <tr>
                <td>2020- till date</td>
                <td>Alison Online Courses</td>
                <td>Student</td>
                <td>Diploma in E-Commerce Web Development</td>
                <td>www.alison.com</td>
              </tr>
            </tbody>
          </Table>

                    <br/><br/>


          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Awards</th>
                <th>Achievements</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              

              <tr>
                <td>April 2019</td>
                <td>Disability Hackathon Using Design Thinking</td>
                <td>Second Runner-up</td>
                <td>Ibadan, Nigeria</td>
              </tr>

              <tr>
                <td>November 2019</td>
                <td>IESA Thinkathon Challenge</td>
                <td>First Place</td>
                <td>University of Ibadan, Nigeria</td>
              </tr>
            </tbody>
          </Table>
        </Container>

       
    )
}

export default HomeTimeline
