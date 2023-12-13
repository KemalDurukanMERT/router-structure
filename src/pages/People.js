import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const People = () => {
  const [people, setPeople] = useState([]);

  const navigate = useNavigate();

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;

          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={id}
              // onClick={() => navigate(`/people/${id}`, { state: person })}   

              //! absolute path
              // onClick={() => navigate(`/people/${id}`)}
              
              //! relative path
              onClick={() => navigate(`${id}`)}
              
            >
              <img className="rounded" src={avatar} />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
