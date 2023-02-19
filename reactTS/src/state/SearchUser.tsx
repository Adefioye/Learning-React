import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Michael", age: 20 },
  { name: "Beast", age: 20 },
];

const SearchUser: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  const handleClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
    setName("");
  };

  return (
    <div>
      Search User
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Find User</button>
      <div>
        <h1>{user?.name}</h1>
        <p>{user?.age}</p>
      </div>
    </div>
  );
};

export default SearchUser;
