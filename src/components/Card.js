import React from "react";

function Card() {
  return (
    <div>
      <section className="cards">
        <div className="container-fluid bg-warning-subtle">
          <div className="row justify-content-center py-5 ">
            <div className="col-md-10">
              <h1 className="text-center mb-5 display-5">
                The Different Perspectives We Focus On 
              </h1>
            </div>
            <div className="col-md-3  ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/campusfeed/1130409_1649852350nwt9VZ.jpg"
                  className="card-img-top img-fluid"
                  alt="Teacher teaching to students"
                />
                <div className="card-body">
                  <h5 className="card-title">Teacher Training</h5>
                  <p className="card-text">
                    We equip teachers with the skills, knowledge, and
                    sensitivity needed to make a difference in the lives of
                    students with disabilities.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.english.com/blog/wp-content/uploads/2020/10/Diversity-blog.jpg"
                  className="card-img-top img-fluid"
                  alt="Children Studying"
                />
                <div className="card-body">
                  <h5 className="card-title">Curriculum Design</h5>
                  <p className="card-text">
                    Our curriculum adapts to the individual requirements of each
                    student, promoting their optimum growth.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://image1.masterfile.com/getImage/NjMwLTAxNzA4NTQ4ZW4uMDAwMDAwMDA=AMtK6U/630-01708548en_Masterfile.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Inclusive Education</h5>
                  <p className="card-text">
                    We foster an inclusive culture in schools and communities by
                    promoting awareness of developmental disabilities.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
