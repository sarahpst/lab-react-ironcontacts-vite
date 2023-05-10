import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

  console.log(firstFive);

  const addContact = () => {
    let randomContactIndex = Math.floor(
      Math.random() * (contacts.length - 5) + 5
    );
    const newContact = contacts[randomContactIndex];
    setFirstFive([...firstFive, newContact]);
  };

  const sortByName = () => {
    const orderedByName = [...firstFive].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setFirstFive(orderedByName);
  };

  const sortByPopularity = () => {
    const orderedByPopularity = [...firstFive].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setFirstFive(orderedByPopularity);
  };

  const deleteContact = (contactId) => {
    const filteredContact = firstFive.filter((contact) => {
      return contact.id !== contactId;
    });

    setFirstFive(filteredContact);
  };

  return (
    <div className="App">
      <h1>Iron contacts</h1>``
      <button onClick={() => addContact()}>add a new contact</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy </th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {firstFive.map((contact) => (
            <tr>
              <th>
                <img
                  style={{ width: 100 }}
                  src={contact.pictureUrl}
                  alt="profilepic"
                />
              </th>
              <th>{contact.name}</th>
              <th>{contact.popularity}</th>
              <th>{contact.wonOscar && "🏆"}</th>
              <th>{contact.wonEmmy && "🏆"}</th>
              <th>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
