import React from "react";

function Userscard(props) {
  const { usersData = [] } = props;

  return (
    <div className="cards-container users-card">
      {usersData?.length > 0 &&
        usersData?.map((user, index) => {
          return (
            <article className="card" key={index}>
              <figure>
                <img
                  className="img"
                  src={user?.avatar}
                  alt="user"
                  width="100%"
                  height="100%"
                />
              </figure>
              <p>
                <span className="span">Name:</span>{" "}
                {user?.first_name + user?.last_name}
              </p>
              <address>
                <span className="span">Email:</span> {user?.email}
              </address>
            </article>
          );
        })}
    </div>
  );
}

export default Userscard;
