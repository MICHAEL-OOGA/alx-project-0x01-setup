import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [newUser, setNewUser] = useState<UserData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setNewUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setNewUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value,
          },
        },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setNewUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else {
      setNewUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <input
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={newUser.phone}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="website"
          placeholder="Website"
          value={newUser.website}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        {/* You can add more fields as needed */}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
