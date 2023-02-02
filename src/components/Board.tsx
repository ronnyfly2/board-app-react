import { useContext, useEffect } from 'react'
import styled from '@emotion/styled';

import { AppContext } from '../contexts/AppContext';

import Search from './Search';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 845px;
  overflow-x: auto;
  width: 90%;
`;

const Header = styled.header`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  max-width: 845px;
  width: 90%;
`;

const Title = styled.h1`
  color: white;
  margin: 10px 0;
  text-align: center;
`;

const Titles = ['To Do', 'In Progress', 'Done'];

export default () => {
  const appContext: any = useContext(AppContext);
  const {
    issues,
    filteredIssues,
    isSearching,
  } = appContext.state;

  const data = isSearching ? filteredIssues : issues;

  const handleOpen = () => {
    appContext.setCreating();
  };

  useEffect(() => {
    appContext.getIssues();
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Title>
            Kanban Board
          </Title>
        </Header>
        <Search />
      </Container>
    </>
  );
}
