import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/User/UserCard";
import styled from "styled-components";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ずめ-${val}`,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "1111@example.com",
    phone: "000-9999-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://www.google.com/"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
