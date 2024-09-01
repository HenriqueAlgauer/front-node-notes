import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { api } from "../../services/api";

import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);

  function handleTagSelected(tagName) {
    const alredySelected = tagSelected.includes(tagName);

    if (alredySelected) {
      const filteredTags = tagSelected.filter((tag) => tag !== tagName);
      setTagSelected(filteredTags);
    } else {
      setTagSelected((prevState) => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
      console.log(response);
    }
    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Henrique Algauer</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={tagSelected.length === 0}
            onClick={() => handleTagSelected("all")}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagSelected.includes(tag.name)}
                title={tag.name}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "react" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
