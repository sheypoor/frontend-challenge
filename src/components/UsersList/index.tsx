import { UserResponse } from "sdk";

interface UsersListProps {
  data: UserResponse[];
}

export default function UsersList({ data }: UsersListProps) {
  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>NewsLetters</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ user }, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td className="uppercase">{user.newsletter}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
