import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // data.jsの情報を変数peopleへ代入
  const [people, setPeople] = useState(data)

  return (
  <main>
    <section className='container'>
      <h3>本日の誕生日は{people.length}人</h3>
      {/* peopleをList.jsへ渡す */}
      <List people={people} />
      {/* ボタンを押したらpeopleを空にする */}
      <button onClick={()=> setPeople([])}>
        Clear
      </button>
    </section>
  </main>
  );
}

export default App;