import React from 'react';

const List = ({people}) => {
  return (
    <>
      {/* peopleをpersonに分解 */}
      {people.map((person)=>{
        // personの項目を抜き出す
        // {person.○○}と書くを簡略化
        const {id, name, age, image} = person;

        // personのリストを構築してApp.jsに返す
        return <article key={id} className="person">
          <img src={image} about={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
