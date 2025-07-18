import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>
        Website:{" "}
        <a
          href={`https://${website}`}
          target="_blank"
          className="text-blue-500 underline"
        >
          {website}
        </a>
      </p>

      <div className="mt-2 text-sm text-gray-700">
        <p>
          <strong>Address:</strong> {address.suite}, {address.street},{" "}
          {address.city} - {address.zipcode}
        </p>
        <p>
          <strong>Company:</strong> {company.name}
        </p>
        <p>
          <em>"{company.catchPhrase}"</em>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
