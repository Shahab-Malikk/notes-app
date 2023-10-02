import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { Amplify, Auth } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

import { API, Storage, DataStore } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

import { Note, Person, Users } from "./models";
import HotelC from "./components/Hotel";
import NgoC from "./components/Ngo";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);
  const [person, setPerson] = useState([]);
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);

  function incrementTwice() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    console.log(count); // Outputs 2
  }

  useEffect(() => {
    getPerson();
    getUser();

    // getNotes();

    console.log();
  }, []);

  async function getNotes(notesFromAPI) {
    try {
      const notes = notesFromAPI;
      console.log(notes);
      // Use Promise.all to fetch image URLs for all notes with images
      const updatedNotes = await Promise.all(
        notes.map(async (note) => {
          if (note.image) {
            const url = await Storage.get(note.name);
            // Create a new object with the updated 'image' property
            const updatedNote = { ...note, image: url };
            return updatedNote;
          }
          return note;
        })
      );

      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  async function createNotes(event) {
    try {
      event.preventDefault();
      const currentUser = await Auth.currentUserInfo();
      console.log(currentUser);
      const userId = currentUser.id;
      console.log(userId);
      const form = new FormData(event.target);
      const image = form.get("image");
      const data = {
        name: form.get("name"),
        description: form.get("description"),
        image: image.name,
        pId: String(userId),
      };
      if (!!data.image) await Storage.put(data.name, image);
      await DataStore.save(new Note(data));

      // getNotes();
      getPerson();
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function getPerson() {
    try {
      const currentUser = await Auth.currentUserInfo();
      console.log(currentUser);
      const userId = currentUser.id;
      console.log(userId);
      const person = await DataStore.query(Person, userId);

      setPerson(person);
      console.log(person);
      console.log(person.name);
      console.log(person.email);
      console.log(person.phone);
      console.log(person.id);
      console.log(await person.notes.values);
      const notes = await person.notes.values;
      console.log(notes);
      getNotes(notes);
      console.log(notes);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    const toDelete = await DataStore.query(Note, id);
    DataStore.delete(toDelete);
  }

  async function createPerson() {
    const currentUser = await Auth.currentUserInfo();
    console.log(currentUser);
    const userId = currentUser.id;
    const user = {
      id: userId,
      name: "Shahab Malik",
      email: currentUser.attributes.email,
      phone: "7847599859",
    };
    await DataStore.save(new Person(user));
    getPerson();
  }
  const getUser = async () => {
    const currentUser = await Auth.currentUserInfo();
    console.log(currentUser);
    const userId = currentUser.id;
    const user = await DataStore.query(Users, userId);
    console.log("G2G USER ");
    console.log(user);
    setUser(user);
  };
  const createG2GUser = async () => {
    const currentUser = await Auth.currentUserInfo();
    console.log(currentUser);
    const userId = currentUser.id;
    const user = {
      id: userId,
      userRole: "ngo",
      email: currentUser.attributes.email,
    };
    await DataStore.save(new Users(user));
    getUser();
  };

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <Button variation="primary" onClick={createPerson}>
        Create Person
      </Button>
      <Button variation="primary" onClick={createG2GUser}>
        Create G2G User
      </Button>

      <Button
        variation="secondary"
        onClick={() => {
          incrementTwice();
        }}
      >
        Incremet
      </Button>
      <h2>Count: {count}</h2>
      <Heading level={2}>{person.name}</Heading>

      <View as="form" margin="3rem 0" onSubmit={createNotes}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${notes.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      {user.userRole === "hotel" && <HotelC />}
      {user.userRole === "ngo" && <NgoC />}
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
